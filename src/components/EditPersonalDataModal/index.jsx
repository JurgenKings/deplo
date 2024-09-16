import { useState } from "react"
import Loading from "../loading"
import { Eye, EyeOff } from "../CustomIcons"
import { validateAge, validateEmail, validateFullName, validatePassword } from "../../utils/ValidationSchema"
import "../../components/RegisterModal/RegisterModal.css"

function EditPersonalDataModal({ isOpen, onClose }) {
  const [fullName, setFullName] = useState("Daniel passantino")
  const [email, setEmail] = useState("passantinodev@gmail.com")
  const [password, setPassword] = useState("Danielp11$")
  const [confirmPassword, setConfirmPassword] = useState("Danielp11$")
  const [birthDate, setBirthDate] = useState("2001/11/10")
  const [phoneNumber, setPhoneNumber] = useState("04121968978")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [successMessage, setSuccessMessage] = useState("")

  // Manejo de contraseña:
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword)
  }
  // Fin de Manejo de contraseña

  if (!isOpen) return null

  const resetState = () => {
    setFullName("")
    setEmail("")
    setPassword("")
    setConfirmPassword("")
    setBirthDate("")
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
      setError("El nombre es demasiado largo. Por favor, use máximo 50 caracteres.")
      return
    }
    if (!validateEmail(email)) {
      setError("El correo electrónico no es válido. Verifique el formato e intente de nuevo.")
      return
    }
    if (!validatePassword(password)) {
      setError("La nueva contraseña no cumple con los requisitos de seguridad. Debe tener entre 8 y 20 caracteres, incluyendo mayúsculas, minúsculas, números y caracteres especiales.")
      return
    }
    if (password !== confirmPassword) {
      setError("Las contraseñas no coinciden. Por favor, verifique.")
      return
    }
    if (!validateAge(birthDate)) {
      setError("La fecha de nacimiento indica que eres menor de 18 años. Verifica la fecha ingresada.")
      return
    }

    setLoading(true)

    try {
      // Simulación de llamada a API
      const response = await new Promise((resolve) =>
        setTimeout(() => resolve({ success: true }), 2000)
      )

      if (response.success) {
        setSuccessMessage("Se ha editado correctamente su informacion personal")
      } else {
        setError("Error al editar la informacion del usario, Por favor, intente nuevamente.")
      }
    } catch (error) {
      setError("Error en el servidor. Por favor, intente más tarde.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className={`modal-overlay ${isOpen ? "open" : ""}`}>
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>&times;</button>
        <div className="hidden-section jorge-modal-container">
          <div className="account-action">
            <i className="material-icons-outlined">person</i>
            Editar Informacion Personal
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
                          maxLength={50}
                          placeholder={fullName}
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
                          maxLength={100}
                          placeholder={email}
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
                          maxLength={15}
                          placeholder={phoneNumber}
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
                        <div className="relative">
                          <input
                            className="w-full pr-10"
                            placeholder={password}
                            value={password}
                            type={showPassword ? "text" : "password"}
                            style={{ paddingRight: "35px" }}
                            onChange={(e) => setPassword(e.target.value)}
                          />
                          <button
                            type="button"
                            className="absolute inset-y-0 right-0 flex items-center px-3 focus:outline-none"
                            aria-label={showPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
                            style={{ top: "50%", transform: "translateY(-50%)" }}
                            onClick={togglePasswordVisibility}
                          >
                            {showPassword ? <EyeOff /> : <Eye />}
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="input-box">
                        <label>
                          Confirma tu contraseña <span>*</span>
                        </label>
                        <div className="relative">
                          <input
                            placeholder="Confirma tu contraseña"
                            className="w-full pr-10"
                            type={showConfirmPassword ? "text" : "password"}
                            style={{ paddingRight: "35px", width: "full" }}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                          />
                          <button
                            type="button"
                            aria-label={showConfirmPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
                            className="absolute inset-y-0 right-2 flex items-center px-3 focus:outline-none"
                            style={{ top: "50%", transform: "translateY(-50%)" }}
                            onClick={toggleConfirmPasswordVisibility}
                          >
                            {showConfirmPassword ? <EyeOff /> : <Eye />}
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12">
                      <div className="input-box">
                        <label>
                          Fecha de nacimiento <span>*</span>
                        </label>
                        <input
                          type="date"
                          placeholder={birthDate}
                          value={birthDate}
                          onChange={(e) => setBirthDate(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {error && <div className="error-message">{error}</div>}
                <div className="btn-set align-items-center jorge-container-button">
                  <button type="submit" className="btn btn-big" disabled={loading}>
                    {loading ? "Editando..." : "Editar"}
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

export default EditPersonalDataModal 
