import React from "react"
import { Link } from "react-router-dom"
import Breadcrumb from "../../components/Breadcrumb"
import NewsLetter from "../../components/NewsLetter"

function Privacy() {
  return (
    <>
      <Breadcrumb title="Políticas de privacidad" />
      <div className="mad-content no-pd">
        <div className="container">
          <div className="mad-section">
            <div className="row hr-size-2 vr-size-2 sticky-bar">
              <main id="main" className="col-xl-9 col-lg-8">
                <h3>
                  Alcance de nuestra política de privacidad
                </h3>
                <p className="mad-text-medium">
                  Etiam cursus leo vel metus. Nulla facilisi. Aenean nec eros. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse sollicitudin velit sed leo. Ut pharetra augue nec augue. Nam elit agna,endrerit sit amet, tincidunt ac, viverra sed, nulla. Donec porta diam eu massa.
                </p>

                <h3>
                  Recopilación de Información
                </h3>
                <p className="mad-text-medium">
                  Etiam cursus leo vel metus. Nulla facilisi. Aenean nec eros. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse sollicitudin velit sed leo. Ut pharetra augue nec augue. Nam elit agna,endrerit sit amet, tincidunt ac, viverra sed, nulla. Donec porta diam eu massa.
                  <br />
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita assumenda voluptates dolorem ratione ab aliquam, rem aspernatur animi impedit quas? Enim consequatur dicta sed, ipsam voluptatum ipsa aperiam, in id ut veritatis expedita laboriosam impedit deleniti fugit totam consequuntur porro eos sapiente. Itaque maiores repudiandae corporis aliquid, obcaecati illum nobis aperiam quaerat odit dicta cumque ad optio excepturi soluta quia eos voluptatum ullam nesciunt. Et quos voluptas fugit perferendis iure voluptatum vitae? Vitae dolor error dolorum libero perspiciatis inventore culpa soluta blanditiis laborum quisquam esse rem expedita enim, explicabo totam minima distinctio omnis cum nemo ducimus maxime excepturi hic fugit.
                </p>

                <h3>
                  Uso de la Información Personal
                </h3>
                <p className="mad-text-medium">
                  Etiam cursus leo vel metus. Nulla facilisi. Aenean nec eros. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse sollicitudin velit sed leo. Ut pharetra augue nec augue. Nam elit agna,endrerit sit amet, tincidunt ac, viverra sed, nulla. Donec porta diam eu massa.
                  <br />
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque animi vitae qui minus excepturi neque, iste ab labore tenetur, natus fugiat nesciunt molestiae? Itaque ab modi et hic vero voluptas laborum delectus incidunt ut, expedita provident id. Dolorum inventore labore nobis quam veniam magni maiores. Porro esse debitis sapiente aperiam nobis quam quasi enim nam ducimus nostrum, fuga, commodi cupiditate.
                </p>

                <h3>
                  Mayoría de edad
                </h3>
                <p className="mad-text-medium">
                  Etiam cursus leo vel metus. Nulla facilisi. Aenean nec eros. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse sollicitudin velit sed leo. Ut pharetra augue nec augue. Nam elit agna,endrerit sit amet, tincidunt ac, viverra sed, nulla. Donec porta diam eu massa.
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

export default Privacy