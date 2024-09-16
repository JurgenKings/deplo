import React, { useState } from 'react'
import Breadcrumb from '../../components/Breadcrumb'

const fakeData = [
  {
    _id: 'hashsdajasjsajksajasdkasd',
    key: 10,
    section: 'Preguntas generales',
    questions: [
      {
        key: 10,
        title: '¿Cómo me contacto con los farmacéuticos?',
        answer: 'Mauris fermentum dictum magna. Sed laoreet aliquam leo. Ut tellus dolor, dapibus eget,elementum vel, cursus eleifend, elit. Aenean auctor wisi et urna. Aliquam erat volutpat. Duis ac turpis. Integer rutrum ante eu lacus. Vestibulum libero nisl, porta vel, scelerisque eget, malesuada at, neque. Vivamus eget nibh.'
      },
      {
        key: 11,
        title: '¿Aceptas algún plan de seguro?',
        answer: 'Mauris fermentum dictum magna. Sed laoreet aliquam leo. Ut tellus dolor, dapibus eget,elementum vel, cursus eleifend, elit. Aenean auctor wisi et urna. Aliquam erat volutpat. Duis ac turpis. Integer rutrum ante eu lacus. Vestibulum libero nisl, porta vel, scelerisque eget, malesuada at, neque. Vivamus eget nibh.'
      },
      {
        key: 12,
        title: '¿Cuál es la política de devolución y reembolso?',
        answer: 'Mauris fermentum dictum magna. Sed laoreet aliquam leo. Ut tellus dolor, dapibus eget,elementum vel, cursus eleifend, elit. Aenean auctor wisi et urna. Aliquam erat volutpat. Duis ac turpis. Integer rutrum ante eu lacus. Vestibulum libero nisl, porta vel, scelerisque eget, malesuada at, neque. Vivamus eget nibh.'
      },
      {
        key: 13,
        title: '¿Es seguro utilizar mi tarjeta de crédito/débito en su sitio web?',
        answer: 'Mauris fermentum dictum magna. Sed laoreet aliquam leo. Ut tellus dolor, dapibus eget,elementum vel, cursus eleifend, elit. Aenean auctor wisi et urna. Aliquam erat volutpat. Duis ac turpis. Integer rutrum ante eu lacus. Vestibulum libero nisl, porta vel, scelerisque eget, malesuada at, neque. Vivamus eget nibh.'
      },
    ]
  },
  {
    _id: 'hashsdajasqwejsajksajkasd',
    key: 11,
    section: 'Preguntas sobre medicinas',
    questions: [
      {
        key: 15,
        title: '¿Puedo saber si su farmacia tiene licencia?',
        answer: 'Mauris fermentum dictum magna. Sed laoreet aliquam leo. Ut tellus dolor, dapibus eget,elementum vel, cursus eleifend, elit. Aenean auctor wisi et urna. Aliquam erat volutpat. Duis ac turpis. Integer rutrum ante eu lacus. Vestibulum libero nisl, porta vel, scelerisque eget, malesuada at, neque. Vivamus eget nibh.'
      },
      {
        key: 16,
        title: '¿Cuáles son sus horarios de atención?',
        answer: 'Mauris fermentum dictum magna. Sed laoreet aliquam leo. Ut tellus dolor, dapibus eget,elementum vel, cursus eleifend, elit. Aenean auctor wisi et urna. Aliquam erat volutpat. Duis ac turpis. Integer rutrum ante eu lacus. Vestibulum libero nisl, porta vel, scelerisque eget, malesuada at, neque. Vivamus eget nibh.'
      },
      {
        key: 17,
        title: '¿Cuál es la dirección y el número de teléfono de su oficina?',
        answer: 'Mauris fermentum dictum magna. Sed laoreet aliquam leo. Ut tellus dolor, dapibus eget,elementum vel, cursus eleifend, elit. Aenean auctor wisi et urna. Aliquam erat volutpat. Duis ac turpis. Integer rutrum ante eu lacus. Vestibulum libero nisl, porta vel, scelerisque eget, malesuada at, neque. Vivamus eget nibh.'
      },
      {
        key: 110,
        title: '¿Cómo me contacto con los farmacéuticos?',
        answer: 'Mauris fermentum dictum magna. Sed laoreet aliquam leo. Ut tellus dolor, dapibus eget,elementum vel, cursus eleifend, elit. Aenean auctor wisi et urna. Aliquam erat volutpat. Duis ac turpis. Integer rutrum ante eu lacus. Vestibulum libero nisl, porta vel, scelerisque eget, malesuada at, neque. Vivamus eget nibh.'
      },
    ]
  },
  {
    _id: 'hashsdajas3434jsajksajkasd',
    key: 12,
    section: 'Preguntas sobre pedidos',
    questions: [
      {
        key: 99,
        title: '¿Alguna otra pregunta definida?',
        answer: 'Mauris fermentum dictum magna. Sed laoreet aliquam leo. Ut tellus dolor, dapibus eget,elementum vel, cursus eleifend, elit. Aenean auctor wisi et urna. Aliquam erat volutpat. Duis ac turpis. Integer rutrum ante eu lacus. Vestibulum libero nisl, porta vel, scelerisque eget, malesuada at, neque. Vivamus eget nibh.'
      },
      {
        key: 190,
        title: '¿Alguna otra pregunta definida?',
        answer: 'Mauris fermentum dictum magna. Sed laoreet aliquam leo. Ut tellus dolor, dapibus eget,elementum vel, cursus eleifend, elit. Aenean auctor wisi et urna. Aliquam erat volutpat. Duis ac turpis. Integer rutrum ante eu lacus. Vestibulum libero nisl, porta vel, scelerisque eget, malesuada at, neque. Vivamus eget nibh.'
      },
      {
        key: 191,
        title: '¿Alguna otra pregunta?',
        answer: 'Mauris fermentum dictum magna. asd Sed laoreet aliquam leo. Ut tellus dolor, dapibus eget,elementum vel, cursus eleifend, elit. Aenean auctor wisi et urna. Aliquam erat volutpat. Duis ac turpis. Integer rutrum ante eu lacus. Vestibulum libero nisl, porta vel, scelerisque eget, malesuada at, neque. Vivamus eget nibh.'
      },
      {
        key: 192,
        title: '¿Alguna otra pregunta 5?',
        answer: 'Mauris fermentum dictum magna. asd Sed laoreet aliquam leo. Ut tellus dolor, dapibus eget,elementum vel, cursus eleifend, elit. Aenean auctor wisi et urna. Aliquam erat volutpat. Duis ac turpis. Integer rutrum ante eu lacus. Vestibulum libero nisl, porta vel, scelerisque eget, malesuada at, neque. Vivamus eget nibh.'
      },
    ]
  },
  {
    _id: 'hashsdajasjhfghgsajksajkasd',
    key: 13,
    section: 'Preguntas sobre la entrega',
    questions: [
      {
        key: 81,
        title: '¿Alguna otra pregunta definida?',
        answer: 'Mauris fermentum dictum magna. Sed laoreet aliquam leo. Ut tellus dolor, dapibus eget,elementum vel, cursus eleifend, elit. Aenean auctor wisi et urna. Aliquam erat volutpat. Duis ac turpis. Integer rutrum ante eu lacus. Vestibulum libero nisl, porta vel, scelerisque eget, malesuada at, neque. Vivamus eget nibhss.'
      },
      {
        key: 82,
        title: '¿Alguna otra pregunta definida?',
        answer: 'Mauris fermentum dictum magna. Sed laoreet aliquam leo. Ut tellus dolor, dapibus eget,elementum vel, cursus eleifend, elit. Aenean auctor wisi et urna. Aliquam erat volutpat. Duis ac turpis. Integer rutrum ante eu lacus. Vestibulum libero nisl, porta vel, scelerisque eget, malesuada at, neque. Vivamus eget nibh.'
      },
      {
        key: 83,
        title: '¿Alguna otra pregunta definida 2?',
        answer: 'Mauris fermentum dictum magna. Sed laoreet aliquam leo. Ut tellus dolor, dapibus eget,elementum vel, cursus eleifend, elit. Aenean auctor wisi et urna. Aliquam erat volutpat. Duis ac turpis. Integer rutrum ante eu lacus. Vestibulum libero nisl, porta vel, scelerisque eget, malesuada at, neque. Vivamus eget nibhss.'
      },
      {
        key: 84,
        title: '¿Alguna otra pregunta definida 4?',
        answer: 'Mauris fermentum dictum magna. Sed laoreet aliquam leo. Ut tellus dolor, dapibus eget,elementum vel, cursus eleifend, elit. Aenean auctor wisi et urna. Aliquam erat volutpat. Duis ac turpis. Integer rutrum ante eu lacus. Vestibulum libero nisl, porta vel, scelerisque eget, malesuada at, neque. Vivamus eget nibh.'
      },
      {
        key: 85,
        title: '¿Alguna otra pregunta definida 2?',
        answer: 'Mauris fermentum dictum magna. Sed laoreet aliquam leo. Ut tellus dolor, dapibus eget,elementum vel, cursus eleifend, elit. Aenean auctor wisi et urna. Aliquam erat volutpat. Duis ac turpis. Integer rutrum ante eu lacus. Vestibulum libero nisl, porta vel, scelerisque eget, malesuada at, neque. Vivamus eget nibhss.'
      },
      {
        key: 86,
        title: '¿Alguna otra pregunta definida 4?',
        answer: 'Mauris fermentum dictum magna. Sed laoreet aliquam leo. Ut tellus dolor, dapibus eget,elementum vel, cursus eleifend, elit. Aenean auctor wisi et urna. Aliquam erat volutpat. Duis ac turpis. Integer rutrum ante eu lacus. Vestibulum libero nisl, porta vel, scelerisque eget, malesuada at, neque. Vivamus eget nibh.'
      },
    ]
  },
]

// const stylesHidden = {
//   position: 'absolute',
//   top: '0px',
//   left: '0px',
//   width: '100%',
//   height: 'auto',
//   opacity: '0',
//   visibility: 'hidden',
// }


const FrequentlyQuestions = () => {
  const [filterFakeData, setFilterFakeData] = useState(fakeData)
  const [searchText, setSearchText] = useState('')

  const handleSearch = (e) => {
    const text = e.target.value.toLowerCase();
    setSearchText(text);
    const filteredData = fakeData.map((section) => ({
      ...section,
      questions: section.questions.filter((question) =>
        question.title.toLowerCase().includes(text)
      )
    }))
    setFilterFakeData(filteredData)
  }

  const stylesHidden = searchText.length === 0 ? {
    position: 'absolute',
    top: '0px',
    left: '0px',
    width: '100%',
    height: 'auto',
    opacity: '0',
    visibility: 'hidden',
    backgroundColor: 'redd'
  } : { backgroundColor: 'blude'}
  

  const highlightText = (text, highlight) => {
    const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
    return parts.map((part, index) =>
      part.toLowerCase() === highlight.toLowerCase()
        ? <span key={index} style={{ backgroundColor: 'yellow' }}>{part}</span>
        : part
    )
  }

  return (
    <>
      <Breadcrumb title="Preguntas Frecuentes" />

      <div className="mad-content no-pd">
        <div className="container">
          <div className="mad-section">
            <div className="row hr-size-2 vr-size-2">
              <main id="main" className="col-xl-9 col-lg-8">

                <div className="content-element-10" style={{
                  marginBottom: '1rem'
                }}>
                  <div className='jorge-container-search'>
                    <div className="mad-search-section jorge-search-bar">
                      <div className="mad-col jorge-search-input-container">
                        <input
                          type="text"
                          placeholder="Buscar preguntas..."
                          className='jorge-input-search'
                          onChange={handleSearch}
                        />
                      </div>
                      <button type="submit">
                        <i style={{ color: '#26658c' }} className="material-icons">
                          search
                        </i>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="mad-tabs with-panels mad-tabs--style-2 mad-tabs--tour-sections">

                  {
                    searchText.length === 0 && (
                      <div role="tablist" aria-label="Tour Sections v2" className="mad-tabs-nav">
                        {
                          filterFakeData.map((item) => (
                            <span key={item._id}>
                              <a
                                id={`tab-${item.key}-link`}
                                href={`#tab-${item.key}`}
                                role="tab"
                                aria-selected="false"
                                aria-controls={`tab-${item.key}`}
                                className="mad-tab-link">
                                {item.section}
                              </a>
                            </span>
                          ))
                        }
                      </div>
                    )
                  }


                  <div className="mad-tabs-container"
                    style={{
                      position: searchText.length === 0 ? 'relative' : 'static'
                    }}
                  >
                    {
                      filterFakeData.map((item) => (
                        <>
                          <div
                            id={`tab-${item.key}`}
                            key={item._id}
                            tabIndex="0"
                            role="tabpanel"
                            aria-labelledby={`tab-${item.key}-link`}
                            className="mad-tab"
                            style={stylesHidden}
                          >
                            <dl role="presentation" className="mad-panels mad-panels--style-2 mad-panels--accordion">
                              {
                                item.questions.map((question) => (
                                  <>
                                    <dt className="mad-panels-title">
                                      <button
                                        id={`panel-${question.key}-button`}
                                        type="button"
                                        aria-expanded="false"
                                        aria-controls={`panel-${question.key}`}
                                        aria-disabled="false">
                                        {/* {question.title} */}
                                        {highlightText(question.title, searchText)}
                                      </button>
                                    </dt>
                                    <dd id={`panel-${question.key}`} className="mad-panels-definition">
                                      <p>
                                        {question.answer}
                                      </p>
                                    </dd>
                                  </>
                                ))
                              }
                            </dl>
                          </div>
                        </>
                      ))
                    }
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