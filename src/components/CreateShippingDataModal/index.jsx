import { useState, useEffect } from "react"
import Loading from "../loading"
import "./CreateShippingDataModal.css"

function CreateShippingDataModal({ isOpen, onClose }) {
  const [loading, setLoading] = useState(false)
  const [shippingAddres, setShippingAddres] = useState("")
  const [error, setError] = useState("")
  const [isEmailSend, setIsEmailSend] = useState(false)
  const [street, setStreet] = useState("Av.Bolivar")
  const [building, setBuilding] = useState("Edificio Arrecife")
  const [country, setCountry] = useState("Venezuela")

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
    setLoading(true)

    try {
      // Simulación de llamada a la API
      await new Promise(resolve => setTimeout(resolve, 4000))
      setIsEmailSend(true)
    } catch (error) {
      setError("Hubo un error al editar tu direccion de envio, Por favor, inténtalo de nuevo.")
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox=" 10 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mt-2"
            >
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
            <span className="text-green-700">
              Has asignado exitosamente una dirección de envío a tu cuenta
            </span>
          </div>
        ) : (
          <div className="hidden-section jorge-modal-container">
            <div className="account-action">
              <i className="material-icons-outlined">person</i>
              Agregar Dirección de Envío
            </div>
            <div className="content">
              <form className="content-element-2" onSubmit={handleSubmit}>
                <div className="content-element-2">
                  <div className="row">
                    <div className="col-sm-12">
                      <div className="input-box">
                        <label>
                          Calle<span>*</span>
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Calle"
                          onChange={(e) => setStreet(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="input-box">
                        <label>
                          Domicilio<span>*</span>
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Domicilio"
                          onChange={(e) => setBuilding(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="input-box">
                        <label>
                          País<span>*</span>
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="País"
                          onChange={(e) => setCountry(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                {error && <p className="error-message">{error}</p>}
                <div className="btn-set align-items-center jorge-container-button">
                  <button type="submit" className="btn btn-big">
                    Agregar
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default CreateShippingDataModal  