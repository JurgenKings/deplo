import React, { useState } from "react"
import NewsLetter from "../../components/NewsLetter"
import Breadcrumb from "../../components/Breadcrumb"
import MapComponent from "../../components/MapComponent"

function Contact() {

  const [errors, setErrors] = useState({})
  const [formData, setFormData] = useState({
    cf_name: "",
    cf_email: "",
    cf_phone: "",
    cf_message: ""
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const validateForm = () => {
    let errors = {}
    if (!formData.cf_name.trim() || formData.cf_name.length > 50) {
      errors.cf_name = "El nombre es obligatorio y debe tener máximo 50 caracteres."
    }
    if (
      !formData.cf_email.trim() || !/\S+@\S+\.\S+/.test(formData.cf_email) ||
      formData.cf_email.length > 100
    ) {
      errors.cf_email = "Ingrese un correo electrónico válido de máximo 100 caracteres."
    }
    if (formData.cf_message.trim().length === 0 || formData.cf_message.length > 500) {
      errors.cf_message = "El mensaje es obligatorio y debe tener máximo 500 caracteres."
    }
    return errors
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const validationErrors = validateForm()
    if (Object.keys(validationErrors).length === 0) {
      console.info("Formulario enviado:", formData)
    } else {
      setErrors(validationErrors)
    }
  }

  return (
    <>
      <Breadcrumb title="Contacto" />

      <div className="mad-content no-pd">
        <div className="container">
          <div className="mad-section">
            <div className="row hr-size-2 vr-size-2">
              <div className="col-lg-6">
                <div className="content-element-5">
                  <h3 className="mad-page-title">
                    Información de Contacto
                  </h3>
                  <p className="mad-text-medium">
                    Aenean auctor wisi et urna. Aliquam erat volutpat. Duis ac turpis. Integer rutrum ante eu lacus. Vestibulum libero nisl, porta vel, scelerisque.
                  </p>
                </div>
                {/* <!--================ Icon Boxes ================--> */}
                <div className="mad-icon-boxes size-2 hr-type item-col-1">
                  {/* ... (resto del código de los icon boxes) ... */}
                </div>
                {/* <!--================ End of Icon Boxes ================--> */}
              </div>
              <div className="col-lg-6">
                <div className="content-element-3">
                  <h3 className="mad-page-title">
                    ¿Alguna pregunta?
                  </h3>
                  <p className="mad-text-medium">
                    Before you reach out to us, check out our FAQs page. If you still have question or enquiries, please use the form below.
                  </p>
                </div>
                <form className="mad-contact-form" onSubmit={handleSubmit}>
                  <input
                    type="text"
                    id="cf_name"
                    name="cf_name"
                    placeholder="Nombre"
                    required
                    maxLength={50}
                    value={formData.cf_name}
                    onChange={handleChange}
                  />
                  {errors.cf_name && <p style={{ color: "red", fontSize: "0.8em" }}>{errors.cf_name}</p>}
                  <input
                    type="email"
                    id="cf_email"
                    name="cf_email"
                    placeholder="Correo"
                    required
                    maxLength={100}
                    value={formData.cf_email}
                    onChange={handleChange}
                  />
                  {errors.cf_email && <p style={{ color: "red", fontSize: "0.8em" }}>{errors.cf_email}</p>}
                  <input
                    type="tel"
                    id="cf_phone"
                    name="cf_phone"
                    placeholder="Teléfono (opcional)"
                    value={formData.cf_phone}
                    onChange={handleChange}
                  />
                  <textarea
                    rows="5"
                    id="cf_message"
                    name="cf_message"
                    required
                    maxLength={500}
                    placeholder="Tu mensaje"
                    value={formData.cf_message}
                    onChange={handleChange}
                  ></textarea>
                  {errors.cf_message && <p style={{ color: "red", fontSize: "0.8em" }}>{errors.cf_message}</p>}
                  <div className="mad-col align-right">
                    <button type="submit" className="btn btn-big">
                      <span>Enviar</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="mad-section no-pd mad-section--stretched-content-no-px">
            <MapComponent />
          </div>

          <div className="mad-section">
            <h3 className="mad-page-title with-carousel">
              Ubicación de nuestras tiendas
            </h3>
            <div className="mad-our-info-box owl-carousel mad-grid mad-grid--cols-2 no-dots nav-top">
              {/* <!-- owl item --> */}
              <div className="mad-grid-item">
                <div className="mad-our-info-item">
                  <div className="mad-our-info-img">
                    <img src="images/248x248_img1.jpg" alt="" />
                  </div>
                  <div className="mad-our-info vr-type">
                    <div className="mad-info-title">lekarna Mill</div>
                    <div className="mad-info"><i className="material-icons-outlined">location_on</i> <span>9863 - 9867 Mill Road,
                      <br />
                      Cambridge, MG09 99HT</span></div>
                    <div className="mad-info"><i className="material-icons-outlined">call</i> <span>+1 800 603 6035, +1 800 889
                      9898</span>
                    </div>
                    <div className="mad-info"><i className="material-icons">mail_outline</i> <a href="#"
                      className="mad-link">mail@companyname.com</a>
                    </div>
                    <div className="mad-info"><i className="material-icons">access_time</i> <span>Mon - Fri: 8am - 11pm, <br />
                      Sat - Sun: 8am - 12pm</span></div>
                    <div className="mad-info"><a href="https://bit.ly/2RNqbia" className="mad-link">
                    Obtener dirección</a></div>
                  </div>
                </div>
              </div>
              {/* <!-- / owl item --> */}
              {/* <!-- owl item --> */}
              <div className="mad-grid-item">
                <div className="mad-our-info-item">
                  <div className="mad-our-info-img">
                    <img src="images/248x248_img2.jpg" alt="" />
                  </div>
                  <div className="mad-our-info vr-type">
                    <div className="mad-info-title">lekarna Vincent</div>
                    <div className="mad-info"><i className="material-icons-outlined">location_on</i> <span>9863 - 9867 Mill Road,
                      <br />
                      Cambridge, MG09 99HT</span></div>
                    <div className="mad-info"><i className="material-icons-outlined">call</i> <span>+1 800 603 6035, +1 800 889
                      9898</span>
                    </div>
                    <div className="mad-info"><i className="material-icons">mail_outline</i> <a href="#"
                      className="mad-link">mail@companyname.com</a>
                    </div>
                    <div className="mad-info"><i className="material-icons">access_time</i> <span>Mon - Fri: 8am - 11pm, <br />
                      Sat - Sun: 8am - 12pm</span></div>
                    <div className="mad-info"><a href="https://bit.ly/2RNqbia" className="mad-link">Get Directions</a></div>
                  </div>
                </div>
              </div>
              {/* <!-- / owl item --> */}
            </div>
          </div>

          <NewsLetter />
        </div>
      </div>
    </>
  )
}

export default Contact

