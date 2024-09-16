import React, { useState } from "react"
import Loading from "../../components/Loading"
import Breadcrumb from "../../components/Breadcrumb"
import NewsLetter from "../../components/NewsLetter"

function OrderCheckout() {
  
  const [step, setStep] = useState(1)
  const [deliveryMethod, setDeliveryMethod] = useState("Retiro en sucursal")
  const [paymentMethod, setPaymentMethod] = useState("Pago Movil")
  const [cost, setCost] = useState(0)
  const [time, setTime] = useState(0)
  const [shouldAddress, setShouldAddress] = useState(false)
  const [selectedAddress, setSelectedAddress] = useState("")
  const [addresses] = useState(["Primera", "Segunda", "Tercera"])
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(true)

  const [products, setProducts] = useState([
    { id: 1, name: "Jack Phunkett SuperFade Face Cream 40ml", quantity: 1, price: 17.99 },
    { id: 2, name: "Minea For Men Extra Moisturising Shaving Gel 200ml", quantity: 1, price: 7.95 }
  ])
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    city: "",
    zipCode: "",
    phone: "",
    email: "",
    address: "",
  })

  setTimeout(() => {
    setLoading(false)
  }, 4000)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
    validateField(name, value)
  }

  const validateField = (name, value) => {
    let error = ""
    switch (name) {
      case "firstName":
      case "lastName":
        if (!value) error = "Por favor, ingrese su nombre completo."
        else if (value.length > 50) error = "El nombre no debe exceder 50 caracteres."
        break
      case "zipCode":
        if (!value) error = "Por favor, ingrese un código postal válido."
        else if (!/^\d+$/.test(value) || value.length > 10) error = "El código postal debe ser numérico y no exceder 10 caracteres."
        break
      case "city":
        if (!value) error = "Por favor, ingrese su ciudad."
        else if (value.length > 50) error = "La ciudad no debe exceder 50 caracteres."
        break
      case "phone":
        if (!value) error = "Por favor, ingrese un número de teléfono válido."
        else if (!/^\+\d{1,14}$/.test(value)) error = "El número de teléfono debe tener formato internacional (+código de país)."
        break
      case "email":
        if (value && !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(value)) error = "Debe ingresar un correo electrónico válido"
        break
      case "address":
        if (shouldAddress && !value) error = "Por favor, ingrese su dirección de envío."
        else if (value.length > 150) error = "La dirección no debe exceder 150 caracteres."
        break
      default:
        break
    }
    setErrors(prevErrors => ({
      ...prevErrors,
      [name]: error
    }))
  }

  const validateForm = () => {
    let isValid = true
    Object.keys(formData).forEach(key => {
      if ((key !== "email") && !formData[key] && (shouldAddress || key !== "address")) {
        setErrors(prev => ({ ...prev, [key]: "Este campo es requerido" }))
        isValid = false
      }
    })
    return isValid && Object.values(errors).every(x => x === "")
  }

  const handleProceed = () => {
    if (validateForm()) {
      setStep(2)
    }
  }

  const handleChangeAddress = (e) => {
    const address = e.target.value
    setSelectedAddress(address)

    if (address === "Primera") {
      setCost(20)
      setTime(15)
    } else if (address === "Segunda") {
      setCost(50)
      setTime(50)
    } else {
      setCost(30)
      setTime(20)
    }

    setFormData(prevState => ({
      ...prevState,
      ["address"]: address
    }))
    validateField("address", address)
  }

  const renderStep1 = () => (
    <div className="col-xl-8">
      <h3>Detalles de Facturación</h3>
      <form className="mad-contact-form item-col-1">
        <div className="mad-col">
          <div className="row">
            <div className="col-sm-6">
              <label>
                Nombre <span className="req">*</span>
              </label>
              <input
                type="text"
                name="firstName"
                placeholder="Nombre"
                maxLength={50}
                required
                value={formData.firstName}
                onChange={handleChange}
              />
              {errors.firstName && <span className="error-message">{errors.firstName}</span>}
            </div>
            <div className="col-sm-6">
              <label>
                Apellido<span className="req">*</span>
              </label>
              <input
                type="text"
                name="lastName"
                placeholder="Apellido"
                required
                maxLength={50}
                value={formData.lastName}
                onChange={handleChange}
              />
              {errors.lastName && <span className="error-message">{errors.lastName}</span>}
            </div>
          </div>
        </div>
        <div className="mad-col">
          <label>
            Ciudad<span className="req">*</span>
          </label>
          <input
            type="text"
            name="city"
            placeholder="Ciudad"
            required
            maxLength={50}
            value={formData.city}
            onChange={handleChange}
          />
          {errors.city && <span className="error-message">{errors.city}</span>}
        </div>
        <div className="mad-col">
          <label>
            Código Postal <span className="req">*</span>
          </label>
          <input
            type="text"
            name="zipCode"
            placeholder="Código Postal"
            required
            maxLength={10}
            value={formData.zipCode}
            onChange={handleChange}
          />
          {errors.zipCode && <span className="error-message">{errors.zipCode}</span>}
        </div>
        <div className="mad-col">
          <label>
            Número de teléfono<span className="req">*</span>
          </label>
          <input
            type="tel"
            name="phone"
            placeholder="Teléfono (+código de país)"
            required
            maxLength={15}
            value={formData.phone}
            onChange={handleChange}
          />
          {errors.phone && <span className="error-message">{errors.phone}</span>}
        </div>
        <div className="mad-col">
          <label>
            Correo Electrónico (opcional)
          </label>
          <input
            type="email"
            name="email"
            placeholder="Correo Electrónico"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span className="error-message">{errors.email}</span>}
        </div>
        {shouldAddress && (
          <>
            <div className="mad-col">
              <label>
                Dirección de Envío <span className="req">*</span>
              </label>
              <select
                // data-default-text="Seleccione la dirección del envío"
                name="address"
                value={selectedAddress}
                required={shouldAddress}
                style={{
                  height: "3.5rem",
                  width: "100%",
                  paddingTop: "0.3rem",
                  paddingRight: "1.375rem",
                  paddingBottom: "0.3rem",
                  paddingLeft: "1.375rem",
                  fontSize: "1rem",
                  lineHeight: "1.5rem",
                  color: "#8b9599",
                  background: "#fff",
                  borderRadius: "1rem",
                  border: "2px solid #dce3e6",
                }}
                onChange={(e) => {
                  handleChangeAddress(e)
                }}
              >
                {addresses.map((address, index) => (
                  <option key={index} value={address}>{address}</option>
                ))}
              </select>
              {
                selectedAddress === "" &&
                <span className="error-message">
                  Por favor, seleccione una dirección.
                </span>
              }
            </div>
            <div className="mad-col">
              <p>
                Tiempo Estimado de Entrega: {time} minutos
              </p>
            </div>
          </>
        )
        }
      </form >
      <button
        style={{ marginTop: "2rem", width: "100%" }}
        className="btn btn-style-3 btn-big"
        onClick={handleProceed}
      >
        Proceder al Checkout
      </button>
    </div >
  )

  const renderStep2 = () => {
    const subtotal = products.reduce((sum, product) => sum + product.price * product.quantity, 0)
    const total = subtotal

    return (
      <div className="col-xl-16">
        <h3>
          Resumen de la Orden
        </h3>
        <div className="mad-table-wrap">
          <table className="mad-table">
            <tbody>
              <table style={{ width: "200%" }} className="mad-table">
                <thead>
                  <tr>
                    <th>Productos</th>
                    <th>Cantidad</th>
                    <th>Precio</th>
                    <th>Subtotal</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map(product => (
                    <tr key={product.id}>
                      <td>{product.name}</td>
                      <td>{product.quantity}</td>
                      <td>${product.price.toFixed(2)}</td>
                      <td>${(product.price * product.quantity).toFixed(2)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <tr>
                <th>Nombre Completo:</th>
                <td>{`${formData.firstName} ${formData.lastName}`}</td>
              </tr>
              {
                shouldAddress && (
                  <tr>
                    <th>Dirección:</th>
                    <td>{formData.address}</td>
                  </tr>
                )
              }
              <tr>
                <th>Ciudad:</th>
                <td>{formData.city}</td>
              </tr>
              <tr>
                <th>Código Postal:</th>
                <td>{formData.zipCode}</td>
              </tr>
              <tr>
                <th>Teléfono:</th>
                <td>{formData.phone}</td>
              </tr>
              {formData.email && (
                <tr>
                  <th>Email:</th>
                  <td>{formData.email}</td>
                </tr>
              )}
              <tr>
                <th>Subtotal:</th>
                <td>${subtotal.toFixed(2)}</td>
              </tr>
              <tr>
                <th>Forma de retiro:</th>
                <td>{deliveryMethod}</td>
              </tr>
              <tr>
                <th>Método de pago:</th>
                <td>{paymentMethod}</td>
              </tr>
              <tr>
                <th>Total:</th>
                <td>${total.toFixed(2)}</td>
              </tr>
              {
                shouldAddress && (
                  <tr>
                    <th>Tiempo Estimado de Entrega: </th>
                    <td>{time} minutos</td>
                  </tr>
                )
              }
            </tbody>
          </table>
        </div>

        <button
          className="btn btn-style-3 btn-big"
          style={{ marginTop: "2rem", width: "100%" }}
          onClick={() => {/* Lógica para finalizar la compra */ }}
        >
          Realizar Compra
        </button>
      </div>
    )
  }

  return (
    <>
      <Breadcrumb title="Checkout" />

      <div className="mad-content no-pd">
        <div className="container">
          <div className="mad-section">
            <div className="content-element-10">
              <div className="row hr-size-2 vr-size-2 sticky-bar">
                {step === 1 ? renderStep1() : renderStep2()}
                {step === 1 ? (
                  <div className="col-xl-4 mad-sidebar">
                    <div className="mad-widget">
                      <h3 className="mad-widget-title color-2">
                        Resumen de compra
                      </h3>
                      <div className="mad-table-wrap mad-order color-2 content-element">
                        {
                          loading && <Loading />
                        }
                        {
                          !loading && (
                            <>
                              <table className="mad-table mad-text-color4">
                                <thead>
                                  <tr>
                                    <th>Productos</th>
                                    <th>Subtotal</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr className="mad-product-item">
                                    <td data-cell-title="Product">
                                      Jack Phunkett SuperFade Face Cream 40ml x 1
                                    </td>
                                    <td data-cell-title="Subtotal" className="align-right">
                                      <span>
                                        $17.99
                                      </span>
                                    </td>
                                  </tr>
                                  <tr className="mad-product-item">
                                    <td data-cell-title="Product">
                                      Minea For Men Extra Moisturising Shaving Gel 200ml x 1
                                    </td>
                                    <td data-cell-title="Subtotal" className="align-right">
                                      <span>
                                        $7.95
                                      </span>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <table className="mad-table mad-table--vertical">
                                <tbody>
                                  <tr className="mad-product-item">
                                    <th>
                                      Subtotal
                                    </th>
                                    <td data-cell-title="Subtotal" className="align-right">
                                      <span>
                                        $25.94
                                      </span>
                                    </td>
                                  </tr>
                                  <tr className="mad-product-item">
                                    <th>
                                      ¿Incluye Delivery?
                                    </th>
                                    <td className="align-right">
                                      <div className="form-control">
                                        <div
                                          style={{
                                            display: "block",
                                            marginTop: "-0.5rem"
                                          }}
                                          className="mad-toggled-fields"
                                        >
                                          <input
                                            type="checkbox"
                                            id="remember-me"
                                            checked={shouldAddress}
                                            onChange={(e) => setShouldAddress(e.target.checked)}
                                          />
                                          <label
                                            htmlFor="remember-me"
                                            className="mad-label-checkbox"
                                          ></label>
                                        </div>
                                      </div>
                                    </td>
                                  </tr>
                                  {
                                    shouldAddress && (
                                      <>
                                        <tr className="mad-product-item">
                                          <td style={{
                                            paddingLeft: "3rem"
                                          }}>
                                            Peso Total
                                          </td>
                                          <td data-cell-title="Subtotal" className="align-right">
                                            <span>
                                              20kg
                                            </span>
                                          </td>
                                        </tr>
                                        <tr className="mad-product-item">
                                          <td style={{
                                            paddingLeft: "3rem"
                                          }}>
                                            Gastos de Envío
                                          </td>
                                          <td data-cell-title="Subtotal" className="align-right">
                                            <span>
                                              ${cost}
                                            </span>
                                          </td>
                                        </tr>
                                      </>
                                    )
                                  }
                                  <tr className="mad-total">
                                    <th>Total </th>
                                    <td className="align-right">
                                      <span>
                                        ${25.94 + cost}
                                      </span>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td colSpan="2" className="payment-option">
                                      <div className="input-wrapper with-link">
                                        <input type="radio" name="pm_payment_method" id="pm-pago-movil" value="pm_pago_movil" />
                                        <label htmlFor="pm-pago-movil">
                                          Pago Movil
                                        </label>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td colSpan="2" className="payment-option">
                                      <div className="input-wrapper with-link">
                                        <input type="radio" name="pm_payment_method" id="pm-debito" value="pm_debito" />
                                        <label htmlFor="pm-debito">
                                          Tarjeta de Debito
                                        </label>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td colSpan="2" className="payment-option">
                                      <div className="input-wrapper with-link">
                                        <input
                                          type="radio"
                                          name="pm_payment_method"
                                          id="pm-credito"
                                          value="pm_credito" />
                                        <label htmlFor="pm-credito">
                                          Tarjeta de credito
                                        </label>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td colSpan="2" className="payment-option">
                                      <div className="input-wrapper with-link">
                                        <input type="radio" name="pm_payment_method" id="pm-credito-internacional" value="pm_credito_internacional" />
                                        <label htmlFor="pm-credito-internacional">
                                          De Credito Internacional
                                        </label>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td colSpan="2" className="payment-option">
                                      <div className="input-wrapper">
                                        <input type="checkbox" id="checkbox22" name="checkbox22" />
                                        <label htmlFor="checkbox22">
                                          He leído y acepto los <br />
                                          <a href="#" className="mad-link-color">
                                            Términos y Condiciones
                                          </a>
                                          <span className="req">*</span>
                                        </label>
                                      </div>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </>
                          )
                        }
                      </div>
                    </div>
                  </div>
                ) :
                  ""
                }
              </div>
            </div>
          </div>

          <NewsLetter />
        </div>
      </div>
    </>
  )
}
export default OrderCheckout