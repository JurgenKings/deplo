import { useState } from "react"
import Loading from "../loading"
import { validatePassword } from "../../utils/ValidationSchema"
import { CheckIcon } from "../CustomIcons"

function ChangePasswordModal() {
  const [currentPassword, setCurrentPassword] = useState("")
  // No va currentPassord, se aplicara email o token.
  const [newPassword, setNewPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")
    setSuccess(false)

    // Validaciones
    if (!currentPassword || !newPassword || !confirmPassword) {
      setError("Todos los campos son obligatorios.")
      return
    }

    if (!validatePassword(newPassword)) {
      setError("La contraseña no cumple con los requisitos de seguridad. Debe tener entre 8 y 20 caracteres, incluyendo mayúsculas, minúsculas, números y caracteres especiales.")
      return
    }

    if (newPassword !== confirmPassword) {
      setError("Las contraseñas nuevas no coinciden.")
      return
    }

    setLoading(true)
    try {
      // Simular llamada a API
      const response = await new Promise((resolve) =>
        setTimeout(() => resolve({ success: true }), 2000)
      )

      if (response.success) {
        setSuccess(true)
        setCurrentPassword("")
        setNewPassword("")
        setConfirmPassword("")

      } else {
        setError("Credenciales incorrectas. Por favor, inténtalo de nuevo.")
      }
    } catch (error) {
      setError("Hubo un error al cambiar la contraseña. Por favor, inténtalo de nuevo más tarde.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      {loading ? (
        <div>
          <Loading />
        </div>
      ) : success ? (
        <div style={{ width: "70%", margin: "4rem auto" }}>
          <div className="hidden-section ">
            <CheckIcon />
            <span className="text-green-700">
              Su contraseña ha sido cambiada exitosamente.
            </span>
          </div>
        </div>
      ) : (
        <div style={{ width: "70%", margin: "4rem auto" }}>
          <div className="hidden-section">
            <div className="account-action">
              <i className="material-icons-outlined">lock</i>
              Cambia tu contraseña
            </div>
            <div className="content">
              <form className="content-element-2" onSubmit={handleSubmit}>
                <div className="content-element-2">
                  <div className="row">
                    <div className="col-sm-12">
                      <div className="input-box">
                        <label>
                          Contraseña actual <span>*</span>
                        </label>
                        <input
                          type="password"
                          required
                          placeholder="Contraseña actual"
                          value={currentPassword}
                          onChange={(e) => setCurrentPassword(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-sm-12">
                      <div className="input-box">
                        <label>
                          Contraseña nueva <span>*</span>
                        </label>
                        <input
                          type="password"
                          required
                          placeholder="Nueva contraseña"
                          value={newPassword}
                          onChange={(e) => setNewPassword(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-sm-12">
                      <div className="input-box">
                        <label>
                          Confirma tu nueva contraseña <span>*</span>
                        </label>
                        <input
                          type="password"
                          required
                          placeholder="Confirma tu nueva contraseña"
                          value={confirmPassword}
                          onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                {error && <div className="error-message">{error}</div>}
                <div className="btn-set align-items-center">
                  <button type="submit" className="btn btn-big" disabled={loading}>
                    {loading ? "Cambiando..." : "Confirmar cambio"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default ChangePasswordModal 