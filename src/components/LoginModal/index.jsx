import { useEffect, useState } from "react"
import Loading from "../loading"
import "../../components/LoginModal/LoginModal.css"
import { validateEmail, validatePassword } from "../../utils/ValidationSchema"
import { CheckIcon } from "../CustomIcons"

function LoginModal({ isOpen, onClose, goRegisterFromLogin, goRecoverPasswordFromLogin }) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [rememberMe, setRememberMe] = useState(false)
  const [loading, setLoading] = useState(false)
  const [isUserLoggedSuccessfully, setIsUserLoggedSuccessfully] = useState(false)
  const [error, setError] = useState("")

  const handleWhatsAppSupport = () => {
    const phoneNumber = "+584121968978"
    const message = encodeURIComponent("Hola, tengo problemas para iniciar sesión en mi cuenta de Megafarma. ¿Podrían ayudarme?")
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`
    window.open(whatsappUrl, "_blank")
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")

    if (!validateEmail(email)) {
      setError("Por favor, introduce un email válido.")
      return
    }

    if (!validatePassword(password)) {
      setError("La contraseña no cumple con los requisitos de seguridad. Debe tener entre 8 y 20 caracteres, incluyendo mayúsculas, minúsculas, números y caracteres especiales.")
      return
    }

    setLoading(true)

    try {
      // Simular llamada a API
      const response = await new Promise((resolve) =>
        setTimeout(() => resolve({ success: true }), 2000)
      )
      if (response.success) {
        setIsUserLoggedSuccessfully(true)
      } else {
        setError("Credenciales incorrectas. Por favor, inténtalo de nuevo.")
      }
    } catch (error) {
      setError("Hubo un error al iniciar sesión. Por favor, inténtalo de nuevo.")
    } finally {
      setLoading(false)
    }
  }

  if (!isOpen) return null

  return (
    <div className={`modal-overlay ${isOpen ? "open" : ""}`}>
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>&times;</button>
        <div className="">
          {loading ? (
            <Loading />
          ) : isUserLoggedSuccessfully ? (
            <div className="hidden-section">
              <CheckIcon />
              <span className="text-green-700">
                El usuario ha iniciado sesión correctamente
              </span>
            </div>
          ) : (
            <div className="hidden-section jorge-modal-container">
              <div className="account-action">
                <i className="material-icons-outlined">person</i>
                Inicia sesión
              </div>
              <div className="content">
                <form className="content-element-2" onSubmit={handleSubmit}>
                  <div className="content-element-2">
                    <div className="row">
                      <div className="col-sm-12">
                        <div className="input-box">
                          <label>
                            Email <span>*</span>
                          </label>
                          <input
                            type="email"
                            required
                            placeholder="Correo electrónico"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="col-sm-12">
                        <div className="input-box">
                          <label>
                            Contraseña <span>*</span>
                          </label>
                          <input
                            type="password"
                            required
                            placeholder="Contraseña"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="content-element-2">
                    <div style={{ display: "block" }} className="mad-toggled-fields">
                      <input
                        type="checkbox"
                        id="remember-me"
                        checked={rememberMe}
                        onChange={(e) => setRememberMe(e.target.checked)}
                      />
                      <label htmlFor="remember-me" className="mad-label-checkbox">
                        Recordarme
                      </label>
                    </div>
                  </div>
                  {error && <div className="error-message">{error}</div>}
                  <div className="btn-set align-items-center jorge-container-button">
                    <button type="submit" className="btn btn-big">
                      Iniciar sesión
                    </button>
                  </div>
                </form>
                <div className="btn-set align-items-center">
                  <a href="#" className="mad-link-color" onClick={goRecoverPasswordFromLogin}>
                    ¿Olvidaste tu contraseña?
                  </a>
                  <span className="jorge-barrita-separadora">
                    |
                  </span>
                  <div className="">
                    ¿No tienes una cuenta?
                  </div>
                  <a href="#" className="mad-link-color" onClick={goRegisterFromLogin}>
                    Regístrate aquí
                  </a>
                </div>
                <div className="btn-set align-items-center">
                  <div className="">
                    ¿No puedes iniciar sesion?
                  </div>
                  <a href="#" onClick={handleWhatsAppSupport} className="whatsapp-support">
                    Contacta al soporte
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default LoginModal 