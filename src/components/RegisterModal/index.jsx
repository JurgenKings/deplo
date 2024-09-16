import { useState } from "react"
import Loading from "../loading"
import { validateAge, validateEmail, validateFullName, validatePassword } from "../../utils/ValidationSchema"
import "./RegisterModal.css"

function RegisterModal({ isOpen, onClose }) {
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [birthDate, setBirthDate] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [termsAccepted, setTermsAccepted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [successMessage, setSuccessMessage] = useState("")

  if (!isOpen) return null

  const resetState = () => {
    setFullName("")
    setEmail("")
    setPassword("")
    setConfirmPassword("")
    setBirthDate("")
    setTermsAccepted(false)
    setLoading(false)
    setError("")
    setSuccessMessage("")
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")
    setSuccessMessage("")

    // Validaciones
    if (!validateFullName(fullName)) {
      setError("El nombre completo debe tener máximo 50 caracteres.")
      return
    }
    if (!validateEmail(email)) {
      setError("Por favor, ingrese un correo electrónico válido (máximo 100 caracteres).")
      return
    }
    if (!validatePassword(password)) {
      setError("La contraseña debe tener entre 8 y 20 caracteres, e incluir al menos un número, una letra mayúscula, una minúscula y un carácter especial.")
      return
    }
    if (password !== confirmPassword) {
      setError("Las contraseñas no coinciden.")
      return
    }
    if (phoneNumber === "") {
      setError("Debe proporcionar un numero telefonico al registrarse")
      return
    }

    if (!validateAge(birthDate)) {
      setError("Debe ser mayor de 18 años para registrarse.")
      return
    }
    if (!termsAccepted) {
      setError("Debe aceptar los términos y condiciones.")
      return
    }

    setLoading(true)

    try {
      // Simulación de llamada a API
      const response = await new Promise((resolve) =>
        setTimeout(() => resolve({ success: true }), 2000)
      )

      if (response.success) {
        setSuccessMessage("Registro exitoso. Por favor, verifique su correo electrónico para confirmar su cuenta.")
      } else {
        setError("Error en el registro. Por favor, intente nuevamente.")
      }
    } catch (error) {
      setError("Error en el servidor. Por favor, intente más tarde.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className={`modal-overlay ${isOpen ? "open" : ""}`}>
      <div className="modal-content ">
        <button className="modal-close" onClick={onClose}>&times;</button>
        <div className="hidden-section jorge-modal-container">
          <div className="account-action">
            <i className="material-icons-outlined">person</i>
            Registro de usuario
          </div>
          <div className="content">
            {loading ? (
              <Loading />
            ) : successMessage ? (
              <div className="success-message">{successMessage}</div>
            ) : (
              <form className="content-element-2" onSubmit={handleSubmit}>
                <div className="content-element-2">
                  <div className="row">
                    <div className="col-sm-12">
                      <div className="input-box">
                        <label>
                          Nombre Completo <span>*</span>
                        </label>
                        <input
                          type="text"
                          required
                          maxLength={50}
                          placeholder="Nombre Completo"
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-sm-12">
                      <div className="input-box">
                        <label>
                          Correo Electrónico <span>*</span>
                        </label>
                        <input
                          type="email"
                          required
                          maxLength={100}
                          placeholder="Correo Electrónico"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-sm-12">
                      <div className="input-box">
                        <label>
                          Número de Teléfono <span>*</span>
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="Número de Teléfono"
                          maxLength={15}
                          value={phoneNumber}
                          onChange={(e) => setPhoneNumber(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-sm-6">
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
                    <div className="col-sm-6">
                      <div className="input-box">
                        <label>
                          Confirma tu contraseña <span>*</span>
                        </label>
                        <input
                          type="password"
                          required
                          placeholder="Confirma tu contraseña"
                          value={confirmPassword}
                          onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-sm-12">
                      <div className="input-box">
                        <label>
                          Fecha de nacimiento <span>*</span>
                        </label>
                        <input
                          type="date"
                          required
                          value={birthDate}
                          onChange={(e) => setBirthDate(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-element-2">
                  <div style={{ display: "block" }} className="mad-toggled-fields">
                    <input
                      type="checkbox"
                      id="terms"
                      checked={termsAccepted}
                      onChange={(e) => setTermsAccepted(e.target.checked)}
                    />
                    <label htmlFor="terms" className="mad-label-checkbox">
                      Acepto los términos y condiciones
                    </label>
                  </div>
                </div>
                {error && <div className="error-message">{error}</div>}
                <div className="btn-set align-items-center jorge-container-button">
                  <button type="submit" className="btn btn-big" disabled={loading}>
                    {loading ? "Registrando..." : "Registrarse"}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default RegisterModal 
