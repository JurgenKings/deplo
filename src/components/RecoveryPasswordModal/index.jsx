import { useState, useEffect } from "react"
import Loading from "../loading"
import "../../components/LoginModal/LoginModal.css"
import { validateEmail } from "../../utils/ValidationSchema"
import { CheckIcon } from "../CustomIcons"

function RecoveryPasswordModal ({ isOpen, onClose }) {
  const [loading, setLoading] = useState(false)
  const [userEmail, setUserEmail] = useState("")
  const [isEmailSend, setIsEmailSend] = useState(false)
  const [error, setError] = useState("")

  useEffect(() => {
    if (loading) {
      const timer = setTimeout(() => {
        setLoading(false)
        setIsEmailSend(true)
      }, 4000)

      return () => clearTimeout(timer)
    }
  }, [loading])

  if (!isOpen) return null

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")

    if (!validateEmail(userEmail)) {
      setError("Por favor, introduce un email válido.")
      return
    }

    setLoading(true)

    try {
      // const response = await api.sendPasswordResetLink(userEmail) 
      // Simulación de llamada a la API
      await new Promise(resolve => setTimeout(resolve, 4000))
      setIsEmailSend(true)
    } catch (error) {
      setError("Hubo un error al enviar el enlace. Por favor, inténtalo de nuevo.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className={`modal-overlay ${isOpen ? "open" : ""}`}>
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>&times;</button>
        {loading ? (
          <Loading />
        ) : isEmailSend ? (
          <div className="hidden-section ">
            <CheckIcon />
            <span className="text-green-700">
              Se ha enviado el correo de recuperación de su cuenta a su correo electrónico. El enlace expirará en 24 horas.
            </span>
          </div>
        ) : (
          <div className="hidden-section">
            <div className="account-action">
              <i className="material-icons-outlined">person</i>
              ¿Olvidaste tu contraseña?
            </div>
            <div className="content">
              <form className="content-element-2" onSubmit={handleSubmit}>
                <div className="content-element-2">
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="input-box">
                        <label>
                          Ingresa tu correo electrónico <span>*</span>
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="Correo electrónico"
                          value={userEmail}
                          onChange={(e) => setUserEmail(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                {error && <p className="error-message">{error}</p>}
                <div className="btn-set align-items-center">
                  <button type="submit" className="btn btn-big">Enviar</button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default RecoveryPasswordModal 