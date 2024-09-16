import React, { useState } from "react"
import Breadcrumb from "../../components/Breadcrumb"
import NewsLetter from "../../components/NewsLetter"
import "./FrequentlyQuestions.css"

const faqData = {
  "Preguntas generales": [
    {
      question: "¿Puedo saber si su farmacia tiene licencia?",
      answer: "Sí, nuestra farmacia tiene licencia. lorem ajshdjahsdjhakhs ha hshsajdhahsjkhakjshjdhajhdkhajkshdk jh ha kjshjkdahs hdkajhsdjkh ajkh jashd kjahsk hakjhsd jkhakjdhjkahdh h jh ajhdjahjshdkjahsjdhahsdjhajksdh"
    },
    {
      question: "¿Cuáles son sus horarios de atención?",
      answer: "Estamos abiertos de 9 AM a 9 PM todos los días. ajhshdkjahsjdh ahhahs hdahsdhahdahskdhaushudhasuhdakhkj hkj hak hka hskjhkahkjh kah kjhdashdhajhdkahsa"
    },
    {
      question: "¿Cuáles son sus horariosfd de atención?",
      answer: "Estamos abiertos de 9 AM a 9 PM todos los días. ajhshdkjahsjdh ahhahs hdahsdhahdahskdhaushudhasuhdakhkj hkj hak hka hskjhkahkjh kah kjhdashdhajhdkahsa"
    },
    {
      question: "¿Cuáles son sus horarios dere atención?",
      answer: "Estamos abiertos de 9 AM a 9 PM todos los días. ajhshdkjahsjdh ahhahs hdaerehsdhahdahskdhaushudhasuhdakhkj hkj hak hka hskjhkahkjh kah kjhdashdhajhdkahsa"
    },
  ],
  "Preguntas sobre medicinas": [
    {
      question: "¿Cómo me contacto con los farmacéuticos?",
      answer: "Puedes llamarnos al 123-456-7890."
    },
    {
      question: "¿Cómosddasds dasdsadasdasjhassjasjasdasda das asdasdasasasddas?",
      answer: "Puedes llamarnos al 123-456-7890jahdajshd jhahjasdahsdksjadkasd uasd<sadhasdha jasdjhsadjsa yasdhasdhga asdhgahsdasd."
    },
    {
      question: "¿Cómosddasds dwwasdsadasdasjhassjasjasdasda das asdasdasasasddas?",
      answer: "Puedes llamarnos al 123-456-7890jahdajshd jhahjasdahsdksjadkasd uasd<sadhasdha jasdjhsadjsa yasdhasdhga asdhgahsdsda skjask kakskkdajksjkdaksjkjdkaskj  jkajks jka jk aka k kaj ska kjkj kasd kaks kjaksdka jkjskajdkkasdasd  askjd kajkjs kjaksjd ak jkjdskjakjdksjkajkjdkajskdjkasjdkja jk jasj jaksj kja kjasd."
    },
    {
      question: "¿Cómosddasds dwwasdsadasdasjhassjasjasdasda das asdasdasasasddas?",
      answer: "Puedes llamarnos al 123-456-7890jahdajshd jhahjasdahsdksjadkasd uasd<sadhasdha jasdjhsadjsa yasdhasdhga asdhgahsdsda skjask kakskkdajksjkdaksjkjdkaskj  jkajks jka jk aka k kaj ska kjkj kasd kaks kjaksdka jkjskajdkkasdasd  askjd kajkjs kjaksjd ak jkjdskjakjdksjkajkjdkajskdjkasjdkja jk jasj jaksj kja kjasd."
    }
  ],
  "Preguntas sobre pedidos": [
    {
      question: "¿Cuál es la dirección y el número de teléfono de su oficina?",
      answer: "Nuestra dirección es Calle Falsa 123, y nuestro teléfono es 123-456-7890."
    },
    {
      question: "¿Cómosddasds dwwasdsadasdasjhassjasjasdasda das asdasdasasasddas?",
      answer: "Puedes llamarnos al 123-456-7890jahdajshd jhahjasdahsdksjadkasd uasd<sadhasdha jasdjhsadjsa yasdhasdhga asdhgahsdsda skjask kakskkdajksjkdaksjkjdkaskj  jkajks jka jk aka k kaj ska kjkj kasd kaks kjaksdka jkjskajdkkasdasd  askjd kajkjs kjaksjd ak jkjdskjakjdksjkajkjdkajskdjkasjdkja jk jasj jaksj kja kjasd."
    },
    {
      question: "¿Cómosddasds dwwasdsadasdasjhassjasjasdasda das asdasdasasasddas?",
      answer: "Puedes llamarnos al 123-456-7890jahdajshd jhahjasdahsdksjadkasd uasd<sadhasdha jasdjhsadjsa yasdhasdhga asdhgahsdsda skjask kakskkdajksjkdaksjkjdkaskj  jkajks jka jk aka k kaj ska kjkj kasd kaks kjaksdka jkjskajdkkasdasd  askjd kajkjs kjaksjd ak jkjdskjakjdksjkajkjdkajskdjkasjdkja jk jasj jaksj kja kjasd."
    },
    {
      question: "¿Cómosddasds dwwasdsadasdasjhassjasjasdasda das asdasdasasasddas?",
      answer: "Puedes llamarnos al 123-456-7890jahdajshd jhahjasdahsdksjadkasd uasd<sadhasdha jasdjhsadjsa yasdhasdhga asdhgahsdsda skjask kakskkdajksjkdaksjkjdkaskj  jkajks jka jk aka k kaj ska kjkj kasd kaks kjaksdka jkjskajdkkasdasd  askjd kajkjs kjaksjd ak jkjdskjakjdksjkajkjdkajskdjkasjdkja jk jasj jaksj kja kjasd."
    }
  ],
  "Preguntas sobre la entrega": [
    {
      question: "¿Cuánto tiempo tarda la entrega?",
      answer: "La entrega tarda entre 3 y 5 días hábiles."
    },
    {
      question: "¿Cómosddasds dwwasdsadasdasjhassjasjasdasda das asdasdasasasddas?",
      answer: "Puedes llamarnos al 123-456-7890jahdajshd jhahjasdahsdksjadkasd uasd<sadhasdha jasdjhsadjsa yasdhasdhga asdhgahsdsda skjask kakskkdajksjkdaksjkjdkaskj  jkajks jka jk aka k kaj ska kjkj kasd kaks kjaksdka jkjskajdkkasdasd  askjd kajkjs kjaksjd ak jkjdskjakjdksjkajkjdkajskdjkasjdkja jk jasj jaksj kja kjasd."
    },
    {
      question: "¿Cómosddasds dwwasdsadasdasjhassjasjasdasda das asdasdasasasddas?",
      answer: "Puedes llamarnos al 123-456-7890jahdajshd jhahjasdahsdksjadkasd uasd<sadhasdha jasdjhsadjsa yasdhasdhga asdhgahsdsda skjask kakskkdajksjkdaksjkjdkaskj  jkajks jka jk aka k kaj ska kjkj kasd kaks kjaksdka jkjskajdkkasdasd  askjd kajkjs kjaksjd ak jkjdskjakjdksjkajkjdkajskdjkasjdkja jk jasj jaksj kja kjasd."
    }, {
      question: "¿Cómosddasds dwwasdsadasdasjhassjasjasdasda das asdasdasasasddas?",
      answer: "Puedes llamarnos al 123-456-7890jahdajshd jhahjasdahsdksjadkasd uasd<sadhasdha jasdjhsadjsa yasdhasdhga asdhgahsdsda skjask kakskkdajksjkdaksjkjdkaskj  jkajks jka jk aka k kaj ska kjkj kasd kaks kjaksdka jkjskajdkkasdasd  askjd kajkjs kjaksjd ak jkjdskjakjdksjkajkjdkajskdjkasjdkja jk jasj jaksj kja kjasd."
    },
    {
      question: "¿Cómosddasds dwwasdsadasdasjhassjasjasdasda das asdasdasasasddas?",
      answer: "Puedes llamarnos al 123-456-7890jahdajshd jhahjasdahsdksjadkasd uasd<sadhasdha jasdjhsadjsa yasdhasdhga asdhgahsdsda skjask kakskkdajksjkdaksjkjdkaskj  jkajks jka jk aka k kaj ska kjkj kasd kaks kjaksdka jkjskajdkkasdasd  askjd kajkjs kjaksjd ak jkjdskjakjdksjkajkjdkajskdjkasjdkja jk jasj jaksj kja kjasd."
    },
    {
      question: "¿Cómosddasds dwwasdsadasdasjhassjasjasdasda das asdasdasasasddas?",
      answer: "Puedes llamarnos al 123-456-7890jahdajshd jhahjasdahsdksjadkasd uasd<sadhasdha jasdjhsadjsa yasdhasdhga asdhgahsdsda skjask kakskkdajksjkdaksjkjdkaskj  jkajks jka jk aka k kaj ska kjkj kasd kaks kjaksdka jkjskajdkkasdasd  askjd kajkjs kjaksjd ak jkjdskjakjdksjkajkjdkajskdjkasjdkja jk jasj jaksj kja kjasd."
    }
  ],
}

function FrequentlyQuestions() {
  const [selectedSection, setSelectedSection] = useState("Preguntas generales")
  const [searchTerm, setSearchTerm] = useState("")

  const handleSectionChange = (section) => {
    setSelectedSection(section)
    setSearchTerm("")
  }

  let filteredQuestions = []

  if (searchTerm.trim() === "") {
    filteredQuestions = faqData[selectedSection]
  } else {
    filteredQuestions = Object.values(faqData).flat().filter((item) =>
      item.question.toLowerCase().includes(searchTerm.toLowerCase())
    )
  }

  const stylesRightColumnOnly = searchTerm.length !== 0 ? {
    margin: "0 auto",
    width: "90%"
  } : {}

  return (
    <>
      <Breadcrumb title="Preguntas Frecuentes" />
      <div className="mad-content no-pd">
        <div className="container">
          <div className="mad-section">
            <div className="row hr-size-2 vr-size-2">
              <main id="main" className="col-xl-9 col-lg-8">

                <input
                  type="text"
                  placeholder="Ingresa tu pregunta aqui..."
                  className="jorge-search-questions"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />

                <div
                  className="jorge-container-faq"
                >
                  {
                    searchTerm.length === 0 && (
                      <div className="left-column">

                        {Object.keys(faqData).map((section) => (
                          <div
                            key={section}
                            onClick={() => handleSectionChange(section)}
                            style={{
                              color: selectedSection === section ? "#2e3133" : "#26658c",
                              borderRight: selectedSection === section ? "0px solid #dce3e6" : "2px solid #dce3e6",
                            }}
                          >
                            {section}
                          </div>
                        ))}
                      </div>
                    )
                  }

                  <div className="right-column" style={stylesRightColumnOnly}>
                    {
                      filteredQuestions.length === 0 && (
                        <p>No hay preguntas frecuentes para la búsqueda {searchTerm}</p>
                      )
                    }

                    {filteredQuestions.map((item, index) => (
                      <div key={index} style={{ marginBottom: "10px" }} className="mad-panels mad-panels--style-2 mad-panels--accordion">
                        <div
                          className="jorge-questions mad-panels-title "
                          onClick={(e) => {
                            const answer = e.currentTarget.nextElementSibling
                            answer.classList.toggle("show")
                          }}
                        >
                          <button
                            type="button"
                          >
                            {item.question}
                          </button>
                        </div>
                        <div
                          className="faq-answer"
                        >
                          {item.answer}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </main>

              <aside id="sidebar" className="col-xl-3 col-lg-4 mad-sidebar">
                <div className="mad-widget">
                  <h5 className="mad-widget-title">
                    Atención al cliente
                  </h5>
                  <div className="mad-vr-list">
                    <ul>
                      <li>
                        <a href="/mi-cuenta" className="mad-link">
                          Mi cuenta
                        </a>
                      </li>
                      <li>
                        <a href="/pedidos" className="mad-link">
                          Mis pedidos
                        </a>
                      </li>
                      <li>
                        <a href="#" className="mad-link">
                          Seguimiento de pedido
                        </a>
                      </li>
                      <li>
                        <a href="/favoritos" className="mad-link">
                          Mis favoritos
                        </a>
                      </li>
                      <li>
                        <a href="#" className="mad-link">
                          Reembolsos/Política de Devolución
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="mad-widget">
                  <h5 className="mad-widget-title">
                    ¿Aún necesitas ayuda?
                  </h5>
                  <div className="mad-icon-boxes our-info item-col-1">
                    <div className="mad-col">
                      <article className="mad-icon-box">
                        <i className="mad-icon-box-icon">
                          <img className="svg" src="/lekarna_svg_icons/support.svg" alt="" />
                        </i>
                        <div className="mad-icon-box-content">
                          <span className="mad-icon-sub-title">
                            24/7 Servicio al cliente:
                          </span>
                          <h4 className="mad-icon-box-title">
                            +1 800 559 6580, <br />
                            +1 800 559 6588
                          </h4>
                        </div>
                      </article>
                    </div>
                    <div className="mad-col">
                      <article className="mad-icon-box">
                        <i className="mad-icon-box-icon">
                          <img className="svg" src="/lekarna_svg_icons/email.svg" alt="" />
                        </i>
                        <div className="mad-icon-box-content">
                          <span className="mad-icon-sub-title">
                            
Envíenos un correo electrónico:
                          </span>
                          <h4 className="mad-icon-box-title">
                            info@companyname.com
                          </h4>
                        </div>
                      </article>
                    </div>
                    <div className="mad-col">
                      <p className="content-element-3">
                        O no dude en enviar una consulta a través del formulario y nos comunicaremos con usted lo antes posible.
                      </p>
                      <a href="#" className="btn w-100">
                        Enviar una consulta
                      </a>
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </div>

          <NewsLetter />
        </div>
      </div>
    </>
  )
}

export default FrequentlyQuestions 