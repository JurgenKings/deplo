import { useState, useEffect } from "react"
import Loading from "../Loading"
import "./CreatePaymentMethodModal.css"

function CreatePaymentMethodModal({ isOpen, onClose, addMethod }) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [isMethodAdded, setIsMethodAdded] = useState(false)
  const [paymentType, setPaymentType] = useState("creditCard")
  const [cardNumber, setCardNumber] = useState("")
  const [expirationDate, setExpirationDate] = useState("")
  const [cardHolder, setCardHolder] = useState("")
  const [cedula, setCedula] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [bank, setBank] = useState("")
  const [email, setEmail] = useState("")

  useEffect(() => {
    if (loading) {
      const timer = setTimeout(() => {
        setLoading(false)
        setIsMethodAdded(true)
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

      let newMethod = {
        id: Date.now(),
        type: paymentType,
        isDefault: false
      }

      switch (paymentType) {
        case "creditCard":
        case "debitCard":
          newMethod.name = `Tarjeta terminada en ${cardNumber.slice(-4)}`
          newMethod.details = {
            cardNumber: `**** **** **** ${cardNumber.slice(-4)}`,
            expirationDate,
            cardHolder
          }
          break
        case "pagoMovil":
          newMethod.name = `Pago Móvil ${bank}`
          newMethod.details = {
            cedula,
            phoneNumber,
            bank,
            accountHolder: cardHolder
          }
          break
        case "zelle":
          newMethod.name = "Zelle"
          newMethod.details = { email }
          break
      }

      addMethod(newMethod)
      setIsMethodAdded(true)
    } catch (error) {
      setError("Hubo un error al agregar el método de pago. Por favor, inténtalo de nuevo.")
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
        ) : isMethodAdded ? (
          <div className="hidden-section">
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
              Has agregado exitosamente un nuevo método de pago a tu cuenta
            </span>
          </div>
        ) : (
          <div className="hidden-section jorge-modal-container">
            <div className="account-action">
              <i className="material-icons-outlined">payment</i>
              Agregar Método de Pago
            </div>
            <div className="content">
              <form className="content-element-2" onSubmit={handleSubmit}>
                <div className="content-element-2">
                  <div className="row">
                    <div className="col-sm-12">
                      <div className="input-box">
                        <label>
                          Tipo de Pago<span>*</span>
                        </label>
                        <select
                          required
                          value={paymentType}
                          onChange={(e) => setPaymentType(e.target.value)}
                        >
                          <option value="creditCard">Tarjeta de Crédito</option>
                          <option value="debitCard">Tarjeta de Débito</option>
                          <option value="pagoMovil">Pago Móvil</option>
                          <option value="zelle">Zelle</option>
                        </select>
                      </div>
                    </div>

                    {(paymentType === "creditCard" || paymentType === "debitCard") && (
                      <>
                        <div className="col-sm-12">
                          <div className="input-box">
                            <label>
                              Número de Tarjeta<span>*</span>
                            </label>
                            <input
                              type="text"
                              required
                              placeholder="1234 5678 9012 3456"
                              value={cardNumber}
                              onChange={(e) => setCardNumber(e.target.value)}
                            />
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="input-box">
                            <label>
                              Fecha de Expiración<span>*</span>
                            </label>
                            <input
                              type="text"
                              required
                              placeholder="MM/YY"
                              value={expirationDate}
                              onChange={(e) => setExpirationDate(e.target.value)}
                            />
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="input-box">
                            <label>
                              Titular de la Tarjeta<span>*</span>
                            </label>
                            <input
                              type="text"
                              required
                              placeholder="Nombre del titular"
                              value={cardHolder}
                              onChange={(e) => setCardHolder(e.target.value)}
                            />
                          </div>
                        </div>
                      </>
                    )}

                    {paymentType === "pagoMovil" && (
                      <>
                        <div className="col-sm-6">
                          <div className="input-box">
                            <label>
                              Cédula<span>*</span>
                            </label>
                            <input
                              type="text"
                              required
                              placeholder="V-12345678"
                              value={cedula}
                              onChange={(e) => setCedula(e.target.value)}
                            />
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="input-box">
                            <label>
                              Número de Teléfono<span>*</span>
                            </label>
                            <input
                              type="text"
                              required
                              placeholder="0414-1234567"
                              value={phoneNumber}
                              onChange={(e) => setPhoneNumber(e.target.value)}
                            />
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="input-box">
                            <label>
                              Banco<span>*</span>
                            </label>
                            <input
                              type="text"
                              required
                              placeholder="Nombre del banco"
                              value={bank}
                              onChange={(e) => setBank(e.target.value)}
                            />
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="input-box">
                            <label>
                              Titular de la Cuenta<span>*</span>
                            </label>
                            <input
                              type="text"
                              required
                              placeholder="Nombre del titular"
                              value={cardHolder}
                              onChange={(e) => setCardHolder(e.target.value)}
                            />
                          </div>
                        </div>
                      </>
                    )}

                    {paymentType === "zelle" && (
                      <div className="col-sm-12">
                        <div className="input-box">
                          <label>
                            Correo Electrónico<span>*</span>
                          </label>
                          <input
                            type="email"
                            required
                            placeholder="ejemplo@email.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </div>
                      </div>
                    )}
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

export default CreatePaymentMethodModal