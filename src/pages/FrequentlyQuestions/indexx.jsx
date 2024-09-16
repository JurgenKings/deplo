import React from 'react'
import Breadcrumb from '../../components/Breadcrumb'

function FrequentlyQuestions() {
  return (
    <>
    <Breadcrumb title="Preguntas Frecuentes" />

    <div className="mad-content no-pd">
      <div className="container">
        <div className="mad-section">
          <div className="row hr-size-2 vr-size-2">
            <main id="main" className="col-xl-9 col-lg-8">

              <div className="mad-tabs with-panels mad-tabs--style-2 mad-tabs--tour-sections">
                <div role="tablist" aria-label="Tour Sections v2" className="mad-tabs-nav">
                  <span><a id="tab-10-link" href="#tab-10" role="tab" aria-selected="false" aria-controls="tab-10"
                      className="mad-tab-link">Preguntas generales</a>
                  </span>
                  <span className="mad-active"><a id="tab-11-link" href="#tab-11" role="tab" aria-selected="true"
                      aria-controls="tab-11" className="mad-tab-link">Preguntas sobre medicinas</a>
                  </span>
                  <span><a id="tab-12-link" href="#tab-12" role="tab" aria-selected="false" aria-controls="tab-12"
                      className="mad-tab-link">Preguntas sobre pedidos</a>
                  </span>
                  <span><a id="tab-13-link" href="#tab-13" role="tab" aria-selected="false" aria-controls="tab-13"
                      className="mad-tab-link">Preguntas sobre entregas</a>
                  </span>
                </div>
                <div className="mad-tabs-container">
                  <div id="tab-10" tabindex="0" role="tabpanel" aria-labelledby="tab-10-link" className="mad-tab">
                    <dl role="presentation" className="mad-panels mad-panels--style-2 mad-panels--accordion">
                      <dt className="mad-panels-title">
                        <button id="panel-10-button" type="button" aria-expanded="false" aria-controls="panel-10"
                          aria-disabled="false">¿Cómo me contacto con los farmacéuticos?</button>
                      </dt>
                      <dd id="panel-10" className="mad-panels-definition">
                        <p>Mauris fermentum dictum magna. Sed laoreet aliquam leo. Ut tellus dolor, dapibus eget,
                          elementum vel, cursus
                          eleifend,
                          elit. Aenean auctor wisi et urna. Aliquam erat volutpat. Duis ac turpis. Integer rutrum ante
                          eu lacus. Vestibulum
                          libero
                          nisl, porta vel, scelerisque eget, malesuada at, neque. Vivamus eget nibh.</p>
                      </dd>
                      <dt className="mad-panels-title">
                        <button id="panel-11-button" type="button" aria-expanded="false" aria-controls="panel-11"
                          aria-disabled="false">¿Aceptas algún plan de seguro?</button>
                      </dt>
                      <dd id="panel-11" className="mad-panels-definition">
                        <p>Mauris fermentum dictum magna. Sed laoreet aliquam leo. Ut tellus dolor, dapibus eget,
                          elementum vel, cursus
                          eleifend,
                          elit. Aenean auctor wisi et urna. Aliquam erat volutpat. Duis ac turpis. Integer rutrum ante
                          eu lacus. Vestibulum
                          libero
                          nisl, porta vel, scelerisque eget, malesuada at, neque. Vivamus eget nibh.</p>
                      </dd>
                      <dt className="mad-panels-title">
                        <button id="panel-12-button" type="button" aria-expanded="false" aria-controls="panel-12"
                          aria-disabled="false">¿Cuál es la política de devolución y reembolso?</button>
                      </dt>
                      <dd id="panel-12" className="mad-panels-definition">
                        <p>Mauris fermentum dictum magna. Sed laoreet aliquam leo. Ut tellus dolor, dapibus eget,
                          elementum vel, cursus
                          eleifend,
                          elit. Aenean auctor wisi et urna. Aliquam erat volutpat. Duis ac turpis. Integer rutrum ante
                          eu lacus. Vestibulum
                          libero
                          nisl, porta vel, scelerisque eget, malesuada at, neque. Vivamus eget nibh.</p>
                      </dd>
                      <dt className="mad-panels-title">
                        <button id="panel-13-button" type="button" aria-expanded="false" aria-controls="panel-13"
                          aria-disabled="false">¿Es seguro utilizar mi tarjeta de crédito/débito en su sitio web?</button>
                      </dt>
                      <dd id="panel-13" className="mad-panels-definition">
                        <p>Mauris fermentum dictum magna. Sed laoreet aliquam leo. Ut tellus dolor, dapibus eget,
                          elementum vel, cursus
                          eleifend,
                          elit. Aenean auctor wisi et urna. Aliquam erat volutpat. Duis ac turpis. Integer rutrum ante
                          eu lacus. Vestibulum
                          libero
                          nisl, porta vel, scelerisque eget, malesuada at, neque. Vivamus eget nibh.</p>
                      </dd>
                      <dt className="mad-panels-title">
                        <button id="panel-14-button" type="button" aria-expanded="false" aria-controls="panel-14"
                          aria-disabled="false">¿Alguna otra pregunta definida?</button>
                      </dt>
                      <dd id="panel-14" className="mad-panels-definition">
                        <p>Mauris fermentum dictum magna. Sed laoreet aliquam leo. Ut tellus dolor, dapibus eget,
                          elementum vel, cursus
                          eleifend,
                          elit. Aenean auctor wisi et urna. Aliquam erat volutpat. Duis ac turpis. Integer rutrum ante
                          eu lacus. Vestibulum
                          libero
                          nisl, porta vel, scelerisque eget, malesuada at, neque. Vivamus eget nibh.</p>
                      </dd>
                    </dl>
                  </div>
                  <div id="tab-11" tabindex="0" role="tabpanel" aria-labelledby="tab-11-link" className="mad-tab">
                    <dl role="presentation" className="mad-panels mad-panels--style-2 mad-panels--accordion">
                      <dt className="mad-panels-title mad-panels-active">
                        <button id="panel-15-button" type="button" aria-expanded="false" aria-controls="panel-15"
                          aria-disabled="false">¿Puedo saber si su farmacia tiene licencia?</button>
                      </dt>
                      <dd id="panel-15" className="mad-panels-definition">
                        <p>Mauris fermentum dictum magna. Sed laoreet aliquam leo. Ut tellus dolor, dapibus eget,
                          elementum vel, cursus eleifend,
                          elit. Aenean auctor wisi et urna. Aliquam erat volutpat. Duis ac turpis. Integer rutrum ante
                          eu lacus. Vestibulum libero
                          nisl, porta vel, scelerisque eget, malesuada at, neque. Vivamus eget nibh.</p>
                      </dd>
                      <dt className="mad-panels-title">
                        <button id="panel-16-button" type="button" aria-expanded="true" aria-controls="panel-16"
                          aria-disabled="false">¿Cuáles son sus horarios de atención?</button>
                      </dt>
                      <dd id="panel-16" className="mad-panels-definition">
                        <p>Mauris fermentum dictum magna. Sed laoreet aliquam leo. Ut tellus dolor, dapibus eget,
                          elementum vel, cursus
                          eleifend,
                          elit. Aenean auctor wisi et urna. Aliquam erat volutpat. Duis ac turpis. Integer rutrum ante
                          eu lacus. Vestibulum
                          libero
                          nisl, porta vel, scelerisque eget, malesuada at, neque. Vivamus eget nibh.</p>
                      </dd>
                      <dt className="mad-panels-title">
                        <button id="panel-17-button" type="button" aria-expanded="false" aria-controls="panel-17"
                          aria-disabled="false">¿Cuál es la dirección y el número de teléfono de su oficina?</button>
                      </dt>
                      <dd id="panel-17" className="mad-panels-definition">
                        <p>Mauris fermentum dictum magna. Sed laoreet aliquam leo. Ut tellus dolor, dapibus eget,
                          elementum vel, cursus
                          eleifend,
                          elit. Aenean auctor wisi et urna. Aliquam erat volutpat. Duis ac turpis. Integer rutrum ante
                          eu lacus. Vestibulum
                          libero
                          nisl, porta vel, scelerisque eget, malesuada at, neque. Vivamus eget nibh.</p>
                      </dd>
                      <dt className="mad-panels-title">
                        <button id="panel-110-button" type="button" aria-expanded="false" aria-controls="panel-110"
                          aria-disabled="false">¿Cómo me contacto con los farmacéuticos?</button>
                      </dt>
                      <dd id="panel-110" className="mad-panels-definition">
                        <p>Mauris fermentum dictum magna. Sed laoreet aliquam leo. Ut tellus dolor, dapibus eget,
                          elementum vel, cursus
                          eleifend,
                          elit. Aenean auctor wisi et urna. Aliquam erat volutpat. Duis ac turpis. Integer rutrum ante
                          eu lacus. Vestibulum
                          libero
                          nisl, porta vel, scelerisque eget, malesuada at, neque. Vivamus eget nibh.</p>
                      </dd>
                      <dt className="mad-panels-title">
                        <button id="panel-111-button" type="button" aria-expanded="false" aria-controls="panel-111"
                          aria-disabled="false">¿Alguna otra pregunta definida?</button>
                      </dt>
                      <dd id="panel-111" className="mad-panels-definition">
                        <p>Mauris fermentum dictum magna. Sed laoreet aliquam leo. Ut tellus dolor, dapibus eget,
                          elementum vel, cursus
                          eleifend,
                          elit. Aenean auctor wisi et urna. Aliquam erat volutpat. Duis ac turpis. Integer rutrum ante
                          eu lacus. Vestibulum
                          libero
                          nisl, porta vel, scelerisque eget, malesuada at, neque. Vivamus eget nibh.</p>
                      </dd>
                      <dt className="mad-panels-title">
                        <button id="panel-112-button" type="button" aria-expanded="false" aria-controls="panel-112"
                          aria-disabled="false">¿Alguna otra pregunta definida?</button>
                      </dt>
                      <dd id="panel-112" className="mad-panels-definition">
                        <p>Mauris fermentum dictum magna. Sed laoreet aliquam leo. Ut tellus dolor, dapibus eget,
                          elementum vel, cursus
                          eleifend,
                          elit. Aenean auctor wisi et urna. Aliquam erat volutpat. Duis ac turpis. Integer rutrum ante
                          eu lacus. Vestibulum
                          libero
                          nisl, porta vel, scelerisque eget, malesuada at, neque. Vivamus eget nibh.</p>
                      </dd>
                      <dt className="mad-panels-title">
                        <button id="panel-113-button" type="button" aria-expanded="false" aria-controls="panel-113"
                          aria-disabled="false">¿Alguna otra pregunta definida?</button>
                      </dt>
                      <dd id="panel-113" className="mad-panels-definition">
                        <p>Mauris fermentum dictum magna. Sed laoreet aliquam leo. Ut tellus dolor, dapibus eget,
                          elementum vel, cursus
                          eleifend,
                          elit. Aenean auctor wisi et urna. Aliquam erat volutpat. Duis ac turpis. Integer rutrum ante
                          eu lacus. Vestibulum
                          libero
                          nisl, porta vel, scelerisque eget, malesuada at, neque. Vivamus eget nibh.</p>
                      </dd>
                      <dt className="mad-panels-title">
                        <button id="panel-114-button" type="button" aria-expanded="false" aria-controls="panel-114"
                          aria-disabled="false">¿Alguna otra pregunta definida?</button>
                      </dt>
                      <dd id="panel-114" className="mad-panels-definition">
                        <p>Mauris fermentum dictum magna. Sed laoreet aliquam leo. Ut tellus dolor, dapibus eget,
                          elementum vel, cursus
                          eleifend,
                          elit. Aenean auctor wisi et urna. Aliquam erat volutpat. Duis ac turpis. Integer rutrum ante
                          eu lacus. Vestibulum
                          libero
                          nisl, porta vel, scelerisque eget, malesuada at, neque. Vivamus eget nibh.</p>
                      </dd>
                    </dl>
                  </div>
                  <div id="tab-12" tabindex="0" role="tabpanel" aria-labelledby="tab-12-link" className="mad-tab">
                    <dl role="presentation" className="mad-panels mad-panels--style-2 mad-panels--accordion">
                      <dt className="mad-panels-title">
                        <button id="panel-99-button" type="button" aria-expanded="false" aria-controls="panel-99"
                          aria-disabled="false">¿Alguna otra pregunta definida?</button>
                      </dt>
                      <dd id="panel-99" className="mad-panels-definition">
                        <p>Mauris fermentum dictum magna. Sed laoreet aliquam leo. Ut tellus dolor, dapibus eget,
                          elementum vel, cursus
                          eleifend,
                          elit. Aenean auctor wisi et urna. Aliquam erat volutpat. Duis ac turpis. Integer rutrum ante
                          eu lacus. Vestibulum
                          libero
                          nisl, porta vel, scelerisque eget, malesuada at, neque. Vivamus eget nibh.</p>
                      </dd>
                      <dt className="mad-panels-title">
                        <button id="panel-190-button" type="button" aria-expanded="false" aria-controls="panel-190"
                          aria-disabled="false">¿Alguna otra pregunta definida?</button>
                      </dt>
                      <dd id="panel-190" className="mad-panels-definition">
                        <p>Mauris fermentum dictum magna. Sed laoreet aliquam leo. Ut tellus dolor, dapibus eget,
                          elementum vel, cursus
                          eleifend,
                          elit. Aenean auctor wisi et urna. Aliquam erat volutpat. Duis ac turpis. Integer rutrum ante
                          eu lacus. Vestibulum
                          libero
                          nisl, porta vel, scelerisque eget, malesuada at, neque. Vivamus eget nibh.</p>
                      </dd>
                      <dt className="mad-panels-title">
                        <button id="panel-191-button" type="button" aria-expanded="false" aria-controls="panel-191"
                          aria-disabled="false">¿Alguna otra pregunta definida?</button>
                      </dt>
                      <dd id="panel-191" className="mad-panels-definition">
                        <p>Mauris fermentum dictum magna. Sed laoreet aliquam leo. Ut tellus dolor, dapibus eget,
                          elementum vel, cursus
                          eleifend,
                          elit. Aenean auctor wisi et urna. Aliquam erat volutpat. Duis ac turpis. Integer rutrum ante
                          eu lacus. Vestibulum
                          libero
                          nisl, porta vel, scelerisque eget, malesuada at, neque. Vivamus eget nibh.</p>
                      </dd>
                      <dt className="mad-panels-title">
                        <button id="panel-192-button" type="button" aria-expanded="false" aria-controls="panel-192"
                          aria-disabled="false">¿Alguna otra pregunta definida?</button>
                      </dt>
                      <dd id="panel-192" className="mad-panels-definition">
                        <p>Mauris fermentum dictum magna. Sed laoreet aliquam leo. Ut tellus dolor, dapibus eget,
                          elementum vel, cursus
                          eleifend,
                          elit. Aenean auctor wisi et urna. Aliquam erat volutpat. Duis ac turpis. Integer rutrum ante
                          eu lacus. Vestibulum
                          libero
                          nisl, porta vel, scelerisque eget, malesuada at, neque. Vivamus eget nibh.</p>
                      </dd>
                      <dt className="mad-panels-title">
                        <button id="panel-193-button" type="button" aria-expanded="false" aria-controls="panel-193"
                          aria-disabled="false">¿Alguna otra pregunta definida?</button>
                      </dt>
                      <dd id="panel-193" className="mad-panels-definition">
                        <p>Mauris fermentum dictum magna. Sed laoreet aliquam leo. Ut tellus dolor, dapibus eget,
                          elementum vel, cursus
                          eleifend,
                          elit. Aenean auctor wisi et urna. Aliquam erat volutpat. Duis ac turpis. Integer rutrum ante
                          eu lacus. Vestibulum
                          libero
                          nisl, porta vel, scelerisque eget, malesuada at, neque. Vivamus eget nibh.</p>
                      </dd>
                      <dt className="mad-panels-title">
                        <button id="panel-194-button" type="button" aria-expanded="false" aria-controls="panel-194"
                          aria-disabled="false">¿Alguna otra pregunta definida?</button>
                      </dt>
                      <dd id="panel-194" className="mad-panels-definition">
                        <p>Mauris fermentum dictum magna. Sed laoreet aliquam leo. Ut tellus dolor, dapibus eget,
                          elementum vel, cursus
                          eleifend,
                          elit. Aenean auctor wisi et urna. Aliquam erat volutpat. Duis ac turpis. Integer rutrum ante
                          eu lacus. Vestibulum
                          libero
                          nisl, porta vel, scelerisque eget, malesuada at, neque. Vivamus eget nibh.</p>
                      </dd>
                    </dl>
                  </div>
                  <div id="tab-13" tabIndex="0" role="tabpanel" aria-labelledby="tab-13-link" className="mad-tab">
                    <dl role="presentation" className="mad-panels mad-panels--style-2 mad-panels--accordion">
                      <dt className="mad-panels-title">
                        <button id="panel-81-button" type="button" aria-expanded="true" aria-controls="panel-81"
                          aria-disabled="false">¿Alguna otra pregunta definida?</button>
                      </dt>
                      <dd id="panel-81" className="mad-panels-definition">
                        <p>Mauris fermentum dictum magna. Sed laoreet aliquam leo. Ut tellus dolor, dapibus eget,
                          elementum vel, cursus
                          eleifend,
                          elit. Aenean auctor wisi et urna. Aliquam erat volutpat. Duis ac turpis. Integer rutrum ante
                          eu lacus. Vestibulum
                          libero
                          nisl, porta vel, scelerisque eget, malesuada at, neque. Vivamus eget nibh.</p>
                      </dd>
                      <dt className="mad-panels-title">
                        <button id="panel-91-button" type="button" aria-expanded="false" aria-controls="panel-91"
                          aria-disabled="false">¿Alguna otra pregunta definida?</button>
                      </dt>
                      <dd id="panel-91" className="mad-panels-definition">
                        <p>Mauris fermentum dictum magna. Sed laoreet aliquam leo. Ut tellus dolor, dapibus eget,
                          elementum vel, cursus
                          eleifend,
                          elit. Aenean auctor wisi et urna. Aliquam erat volutpat. Duis ac turpis. Integer rutrum ante
                          eu lacus. Vestibulum
                          libero
                          nisl, porta vel, scelerisque eget, malesuada at, neque. Vivamus eget nibh.</p>
                      </dd>
                      <dt className="mad-panels-title">
                        <button id="panel-92-button" type="button" aria-expanded="false" aria-controls="panel-92"
                          aria-disabled="false">¿Alguna otra pregunta definida?</button>
                      </dt>
                      <dd id="panel-92" className="mad-panels-definition">
                        <p>Mauris fermentum dictum magna. Sed laoreet aliquam leo. Ut tellus dolor, dapibus eget,
                          elementum vel, cursus
                          eleifend,
                          elit. Aenean auctor wisi et urna. Aliquam erat volutpat. Duis ac turpis. Integer rutrum ante
                          eu lacus. Vestibulum
                          libero
                          nisl, porta vel, scelerisque eget, malesuada at, neque. Vivamus eget nibh.</p>
                      </dd>
                      <dt className="mad-panels-title">
                        <button id="panel-93-button" type="button" aria-expanded="false" aria-controls="panel-93"
                          aria-disabled="false">¿Alguna otra pregunta definida?</button>
                      </dt>
                      <dd id="panel-93" className="mad-panels-definition">
                        <p>Mauris fermentum dictum magna. Sed laoreet aliquam leo. Ut tellus dolor, dapibus eget,
                          elementum vel, cursus
                          eleifend,
                          elit. Aenean auctor wisi et urna. Aliquam erat volutpat. Duis ac turpis. Integer rutrum ante
                          eu lacus. Vestibulum
                          libero
                          nisl, porta vel, scelerisque eget, malesuada at, neque. Vivamus eget nibh.</p>
                      </dd>
                      <dt className="mad-panels-title">
                        <button id="panel-94-button" type="button" aria-expanded="false" aria-controls="panel-94"
                          aria-disabled="false">¿Alguna otra pregunta definida?</button>
                      </dt>
                      <dd id="panel-94" className="mad-panels-definition">
                        <p>Mauris fermentum dictum magna. Sed laoreet aliquam leo. Ut tellus dolor, dapibus eget,
                          elementum vel, cursus
                          eleifend,
                          elit. Aenean auctor wisi et urna. Aliquam erat volutpat. Duis ac turpis. Integer rutrum ante
                          eu lacus. Vestibulum
                          libero
                          nisl, porta vel, scelerisque eget, malesuada at, neque. Vivamus eget nibh.</p>
                      </dd>
                      <dt className="mad-panels-title">
                        <button id="panel-95-button" type="button" aria-expanded="false" aria-controls="panel-95"
                          aria-disabled="false">¿Alguna otra pregunta definida?</button>
                      </dt>
                      <dd id="panel-95" className="mad-panels-definition">
                        <p>Mauris fermentum dictum magna. Sed laoreet aliquam leo. Ut tellus dolor, dapibus eget,
                          elementum vel, cursus
                          eleifend,
                          elit. Aenean auctor wisi et urna. Aliquam erat volutpat. Duis ac turpis. Integer rutrum ante
                          eu lacus. Vestibulum
                          libero
                          nisl, porta vel, scelerisque eget, malesuada at, neque. Vivamus eget nibh.</p>
                      </dd>
                      <dt className="mad-panels-title">
                        <button id="panel-96-button" type="button" aria-expanded="false" aria-controls="panel-96"
                          aria-disabled="false">¿Alguna otra pregunta definida?</button>
                      </dt>
                      <dd id="panel-96" className="mad-panels-definition">
                        <p>Mauris fermentum dictum magna. Sed laoreet aliquam leo. Ut tellus dolor, dapibus eget,
                          elementum vel, cursus
                          eleifend,
                          elit. Aenean auctor wisi et urna. Aliquam erat volutpat. Duis ac turpis. Integer rutrum ante
                          eu lacus. Vestibulum
                          libero
                          nisl, porta vel, scelerisque eget, malesuada at, neque. Vivamus eget nibh.</p>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </main>
            <aside id="sidebar" className="col-xl-3 col-lg-4 mad-sidebar">
                <div className="mad-widget">
                  <h5 className="mad-widget-title">Atención al cliente</h5>
                  <div className="mad-vr-list">
                    <ul>
                      <li><a href="shop_account.html" className="mad-link">My cuenta</a></li>
                      <li><a href="#" className="mad-link">Mis pedidos</a></li>
                      <li><a href="#" className="mad-link">Seguimiento de pedido</a></li>
                      <li><a href="#" className="mad-link">Mis favoritos</a></li>
                      <li><a href="#" className="mad-link">Reembolsos/Política de Devolución</a></li>
                    </ul>
                  </div>
                </div>
                <div className="mad-widget">
                  <h5 className="mad-widget-title">¿Aún necesitas ayuda?</h5>
                  <div className="mad-icon-boxes our-info item-col-1">
                    <div className="mad-col">
                      <article className="mad-icon-box">
                        <i className="mad-icon-box-icon"><img className="svg" src="lekarna_svg_icons/support.svg" alt="" /></i>
                        <div className="mad-icon-box-content">
                          <span className="mad-icon-sub-title">24/7 Servicio al cliente:</span>
                          <h4 className="mad-icon-box-title">+1 800 559 6580, <br /> +1 800 559 6588</h4>
                        </div>
                      </article>
                    </div>
                    <div className="mad-col">
                      <article className="mad-icon-box">
                        <i className="mad-icon-box-icon"><img className="svg" src="lekarna_svg_icons/email.svg" alt="" /></i>
                        <div className="mad-icon-box-content">
                          <span className="mad-icon-sub-title">Email Us:</span>
                          <h4 className="mad-icon-box-title">info@companyname.com</h4>
                        </div>
                      </article>
                    </div>
                    <div className="mad-col">
                      <p className="content-element-3">Or feel free to submit an enquiry via the form and we will get back to
                        you as soon as possible.</p>
                      <a href="#" className="btn w-100">Enviar una consulta</a>
                    </div>
                  </div>
                </div>
              </aside>
          </div>
        </div>
        <div className="mad-section no-pd mad-section--stretched mad-colorizer--scheme-color-2">
          <div className="mad-sub-wrap">
            <h5 className="mad-page-title">¡Reciba nuestras ofertas directamente en su Inbox!</h5>
            <div className="mad-col">
              <form className="mad-newsletter-form one-line">
                <input type="email" name="email" placeholder="Ingresa tu correo electrónico" />
                <button type="submit" className="btn btn-big btn-style-3"><span>Sign Up</span></button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default FrequentlyQuestions