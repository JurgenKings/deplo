import React from "react"
import { Link } from "react-router-dom"
import Breadcrumb from "../../components/Breadcrumb"
import NewsLetter from "../../components/NewsLetter"

function UserPrivacy() {
  return (
    <>
      <Breadcrumb title="Políticas de privacidad del usuario" />
      <div className="mad-content no-pd">
        <div className="container">
          <div className="mad-section">
            <div className="row hr-size-2 vr-size-2 sticky-bar">
              <main id="main" className="col-xl-9 col-lg-8">
                <h3>Introducción</h3>
                <p className="mad-text-medium">
                  En [Nombre de la Empresa], valoramos su privacidad y estamos comprometidos a proteger la información personal que usted nos proporciona. Esta política de privacidad explica cómo recopilamos, utilizamos, y protegemos su información cuando utiliza nuestro sitio web y servicios.
                </p>

                <h3>Recopilación de Información</h3>
                <p className="mad-text-medium">
                  Recopilamos información personal que usted nos proporciona directamente cuando crea una cuenta, realiza una compra, o se comunica con nosotros. Esta información puede incluir su nombre, dirección de correo electrónico, dirección de envío, número de teléfono, y detalles de pago.
                </p>
                <p className="mad-text-medium">
                  También recopilamos información de manera automática cuando navega por nuestro sitio, como su dirección IP, tipo de navegador, y datos sobre cómo interactúa con nuestra plataforma.
                </p>

                <h3>
                  Uso de la Información Personal
                </h3>
                <p className="mad-text-medium">
                  Utilizamos la información que recopilamos para procesar sus pedidos, gestionar su cuenta, y mejorar nuestros servicios. También podemos utilizar su información para enviarle actualizaciones sobre su pedido, ofertas promocionales, o responder a sus consultas.
                </p>
                <p className="mad-text-medium">
                  No compartimos su información personal con terceros, excepto cuando es necesario para completar una transacción (por ejemplo, procesadores de pagos) o cuando estamos obligados por ley.
                </p>

                <h3>
                  Protección de la Información
                </h3>
                <p className="mad-text-medium">
                  Tomamos medidas razonables para proteger su información personal mediante el uso de tecnologías de cifrado y otras prácticas de seguridad. Implementamos protocolos de seguridad para proteger su información contra accesos no autorizados, alteraciones, o divulgaciones.
                </p>
                <p className="mad-text-medium">
                  Cumplimos con las normativas internacionales y locales en materia de protección de datos para asegurar que su información esté adecuadamente protegida.
                </p>

                <h3>
                  Derechos del Usuario
                </h3>
                <p className="mad-text-medium">
                  Usted tiene derecho a acceder, corregir, o eliminar su información personal en cualquier momento. Si desea ejercer estos derechos o tiene alguna pregunta sobre nuestra política de privacidad, puede contactarnos a través de [Información de Contacto].
                </p>

                <h3>
                  Cambios en la Política de Privacidad
                </h3>
                <p className="mad-text-medium">
                  Podemos actualizar esta política de privacidad de vez en cuando para reflejar cambios en nuestras prácticas o en la legislación aplicable. Le notificaremos cualquier cambio significativo a través de nuestro sitio web o mediante correo electrónico.
                </p>

                <h3>
                  Contacto
                </h3>
                <p className="mad-text-medium">
                  Si tiene alguna pregunta o inquietud sobre nuestra política de privacidad, no dude en contactarnos a través de [Información de Contacto].
                </p>
              </main>
            </div>
          </div>

          <NewsLetter />
        </div>
      </div>
    </>
  )
}

export default UserPrivacy