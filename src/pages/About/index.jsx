import React from "react"
import NewsLetter from "../../components/NewsLetter"
import Breadcrumb from "../../components/Breadcrumb"

function About() {
  return (
    <>
      <Breadcrumb title="Nosotros" />

      <div className="mad-content no-pd">
        <div className="container">
          <div className="mad-section">
            <div className="row align-items-center hr-size-2">
              <div className="col-xl-6">
                <a
                  href="https://www.youtube.com/embed/Hx02rTTO_oE?rel=0&amp;showinfo=0&amp;autohide=2&amp;controls=0&amp;enablejsapi=1?rel=0&amp;showinfo=0&amp;autohide=2&amp;controls=0&amp;enablejsapi=1"
                  className="mad-img"
                  data-fancybox="video"
                >
                  <img src="/images/688x448_img1.jpg" alt="" />
                </a>
              </div>
              <div className="col-xl-6">
                <h3 className="mad-page-titl">
                  15 años y contando...
                </h3>
                <p className="mad-text-medium">
                  Aenean auctor wisi et urna. Aliquam erat volutpat. Duis ac turpis. Integer <br />
                  rutrum ante eu lacus. Vestibulum libero nisl, porta vel, scelerisque. <br />
                  eget, malesuada at, neque. Vivamus eget nibh. Etiam cursus leo vel metus. Nulla <br /> facilisi. Aenean nec eros.
                </p>
                <p className="mad-text-medium">
                  Vestibulum ante ipsum primis in faucibus orci luctus et ultrices cubilia <br />
                  Curae; Suspendisse sollicitudin velit sed leo. Ut pharetra augue nec augue. Nam <br />
                  elit agna, endrerit sit amet.
                </p>
              </div>
            </div>
          </div>
          <article className="mad-cta mad-section mad-section--stretched mad-colorizer--scheme-color-2">
            {/* <!--================ Counters ================--> */}
            <div className="mad-counters hr-type style-2 item-col-4">
              <div className="mad-col">
                <div className="mad-counter">
                  <div className="mad-counter-inner">
                    <div className="mad-counter-icon">
                      <img className="svg" src="/lekarna_svg_icons/experience.svg" alt="" />
                    </div>
                    <div className="mad-counter-content">
                      <div aria-labelledby="counter-1" className="mad-counter-count">
                        15
                      </div>
                      <div id="counter-1" className="mad-counter-title">
                        Años de Experiencia
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mad-col">
                <div className="mad-counter">
                  <div className="mad-counter-inner">
                    <div className="mad-counter-icon">
                      <img className="svg" src="/lekarna_svg_icons/client.svg" alt="" />
                    </div>
                    <div className="mad-counter-content">
                      <div aria-labelledby="counter-2" className="mad-counter-count">
                        370
                      </div>
                      <div id="counter-2" className="mad-counter-title">
                        Clientes Felices
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mad-col">
                <div className="mad-counter">
                  <div className="mad-counter-inner">
                    <div className="mad-counter-icon">
                      <img className="svg" src="/lekarna_svg_icons/order.svg" alt="" />
                    </div>
                    <div className="mad-counter-content">
                      <div aria-labelledby="counter-3" className="mad-counter-count">
                        170
                      </div>
                      <div id="counter-3" className="mad-counter-title">
                        Pedidos Diarios
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mad-col">
                <div className="mad-counter">
                  <div className="mad-counter-inner">
                    <div className="mad-counter-icon">
                      <img className="svg" src="/lekarna_svg_icons/features.svg" alt="" />
                    </div>
                    <div className="mad-counter-content">
                      <div aria-labelledby="counter-4" className="mad-counter-count">
                        9264
                      </div>
                      <div id="counter-4" className="mad-counter-title">
                        Variedades de Productos
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!--================ End of Counters ================--> */}
          </article>
          <div className="mad-section">
            <div className="mad-entities align-center item-col-3">
              <div className="mad-col">
                {/* <!--================ Entity ================--> */}
                <article className="mad-entity">
                  <div className="mad-entity-media">
                    <a href="#">
                      <img src="/images/448x304_img4.jpg" alt="" />
                    </a>
                  </div>
                  <div className="mad-entity-content">
                    <h6 className="mad-entity-title">
                      Nuestra Visión
                    </h6>
                    <p>
                      Proin dictum elementum velit. Fusce euismod <br />
                      consequat ante. Lorem ipsum dolor sit amet, <br />
                      consectetuer adipis.
                    </p>
                  </div>
                </article>
                {/* <!--================ End of Entity ================--> */}
              </div>
              <div className="mad-col">
                {/* <!--================ Entity ================--> */}
                <article className="mad-entity">
                  <div className="mad-entity-media">
                    <a href="#">
                      <img src="/images/448x304_img5.jpg" alt="" />
                    </a>
                  </div>
                  <div className="mad-entity-content">
                    <h6 className="mad-entity-title">
                      Nuestra Promesa
                    </h6>
                    <p>
                      Mauris accumsan nulla vel diam. <br />
                      Sed in lacus ut enim adipiscing aliquet. Nulla <br />
                      venenatis. In pede mi, aliquet.
                    </p>
                  </div>
                </article>
                {/* <!--================ End of Entity ================--> */}
              </div>
              <div className="mad-col">
                {/* <!--================ Entity ================--> */}
                <article className="mad-entity">
                  <div className="mad-entity-media">
                    <a href="#">
                      <img src="/images/448x304_img6.jpg" alt="" />
                    </a>
                  </div>
                  <div className="mad-entity-content">
                    <h6 className="mad-entity-title">
                      Nuestra Misión
                    </h6>
                    <p>
                      Aliquam dapibus tincidunt metus. Praesent justo <br />
                      dolor, lobortis quis, lobortis dignissim, pulvinar<br />
                      ac, lorem. Vestibulum sed ante.
                    </p>
                  </div>
                </article>
                {/* <!--================ End of Entity ================-->/ */}
              </div>
            </div>
          </div>
          <div className="mad-section size-2 mad-section--stretched mad-colorizer--scheme-"
            data-bg-image-src="images/1904x640_bg1.jpg">
            <div className="row">
              <div className="col-xl-5 col-sm-7 col-offset-item">
                <h3 className="mad-page-title">
                  3 Razones Principales para Elegirnos
                </h3>
                {/* <!--================ Icon Boxes ================--> */}
                <div className="mad-icon-boxes check-list size-2 hr-type item-col-1">
                  <div className="mad-col">
                    {/* <!--================ Icon Box ================--> */}
                    <article className="mad-icon-box">
                      <i className="mad-icon-box-icon">
                        <img className="svg" src="/lekarna_svg_icons/check.svg" alt="" />
                      </i>
                      <div className="mad-icon-box-content">
                        <h6 className="mad-icon-box-title">
                          La Última Tecnología
                        </h6>
                        <p>
                          Ut tellus dolor, dapibus eget, elementum vel, cursus eleifend, elit. Aenean auctor wisi et urna. Aliquam erat volutpat.
                        </p>
                      </div>
                    </article>
                    {/* <!--================ End of Icon Box ================--> */}
                  </div>
                  <div className="mad-col">
                    {/* <!--================ Icon Box ================--> */}
                    <article className="mad-icon-box">
                      <i className="mad-icon-box-icon">
                        <img className="svg" src="lekarna_svg_icons/check.svg" alt="" />
                      </i>
                      <div className="mad-icon-box-content">
                        <h6 className="mad-icon-box-title">
                          Batería de Larga Duración
                        </h6>
                        <p>
                          Integer rutrum ante eu lacus.Vestibulum libero nisl, porta vel, scelerisque eget, malesuada at, neque. Vivamus eget nibh.
                        </p>
                      </div>
                    </article>
                    {/* <!--================ End of Icon Box ================-->/ */}
                  </div>
                  <div className="mad-col">
                    {/* <!--================ Icon Box ================--> */}
                    <article className="mad-icon-box">
                      <i className="mad-icon-box-icon">
                        <img className="svg" src="/lekarna_svg_icons/check.svg" alt="" />
                      </i>
                      <div className="mad-icon-box-content">
                        <h6 className="mad-icon-box-title">
                          Construcción Duradera
                        </h6>
                        <p>
                          Etiam cursus leo vel metus. Nulla facilisi. Aenean nec eros. Vestibulum ante ipsum primis in faucibus orci luctus et.
                        </p>
                      </div>
                    </article>
                    {/* <!--================ End of Icon Box ================--> */}
                  </div>
                </div>
                {/* <!--================ End of Icon Boxes ================--> */}
              </div>
            </div>
          </div>
          <div data-bg-image-src="/images/1920x795_bg1.jpg"
            className="with-overlay mad-section mad-section--stretched mad-colorizer--scheme- mad-colorizer--parallax mad-colorizer--scheme-light">
            <h3 className="mad-page-title align-center">
              Lo Que Dice La Gente
            </h3>
            {/* <!--================ Testimonials ================--> */}
            <div className="mad-testimonials type-2 style-2">
              <div className="mad-grid mad-grid--cols-2 owl-carousel">
                {/* <!-- owl item --> */}
                <div className="mad-grid-item">
                  <div className="mad-testimonial">
                    <div className="mad-testimonial-info">
                      <h6 className="mad-testimonial-title">
                        Entrega rápida
                      </h6>
                      <blockquote>
                        <p>
                          Entrega rápida, ¡encantado de recibir productos de muestra junto con el pedido!
                        </p>
                      </blockquote>
                    </div>
                    <div className="mad-author">
                      <div className="mad-author-img">
                        <img src="/images/72x72_photo1.jpg" alt="" />
                      </div>
                      <div className="mad-author-info">
                        <span className="mad-author-name">
                          Patrik Smith
                        </span>
                        <cite>Los Angeles, CA</cite>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mad-grid-item">
                  <div className="mad-testimonial">
                    <div className="mad-testimonial-info">
                      <h6 className="mad-testimonial-title">
                        Good price
                      </h6>
                      <blockquote>
                        <p>
                          Good price and quality but Im always disappointed with the slow delivery.
                        </p>
                      </blockquote>
                    </div>
                    <div className="mad-author">
                      <div className="mad-author-img">
                        <img src="/images/72x72_photo2.jpg" alt="" />
                      </div>
                      <div className="mad-author-info">
                        <span className="mad-author-name">
                          Antonio Lopez
                        </span>
                        <cite>Albuquerque, NM</cite>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mad-grid-item">
                  <div className="mad-testimonial">
                    <div className="mad-testimonial-info">
                      <h6 className="mad-testimonial-title">
                        Very easy to deal with
                      </h6>
                      <blockquote>
                        <p>
                          Quick and easy to order and great service as always.
                        </p>
                      </blockquote>
                    </div>
                    <div className="mad-author">
                      <div className="mad-author-img">
                        <img src="/images/72x72_photo3.jpg" alt="" />
                      </div>
                      <div className="mad-author-info">
                        <span className="mad-author-name">
                          Amanda Johnson
                        </span>
                        <cite>Austin, TX</cite>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mad-grid-item">
                  <div className="mad-testimonial">
                    <div className="mad-testimonial-info">
                      <h6 className="mad-testimonial-title">
                        Sent wrong item
                      </h6>
                      <blockquote>
                        <p>
                          They sent me the completely wrong products and I had to wait a week for replacment which was a nuisance as I had run out.
                        </p>
                      </blockquote>
                    </div>
                    <div className="mad-author">
                      <div className="mad-author-img">
                        <img src="/images/72x72_photo4.jpg" alt="" />
                      </div>
                      <div className="mad-author-info">
                        <span className="mad-author-name">
                          Sandra Mann
                        </span>
                        <cite>New York, NY</cite>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mad-grid-item">
                  <div className="mad-testimonial">
                    <div className="mad-testimonial-info">
                      <h6 className="mad-testimonial-title">
                        Fast delivery
                      </h6>
                      <blockquote>
                        <p>
                          Fast delivery, pleased recieving sample products along with order!
                        </p>
                      </blockquote>
                    </div>
                    <div className="mad-author">
                      <div className="mad-author-img">
                        <img src="/images/72x72_photo1.jpg" alt="" />
                      </div>
                      <div className="mad-author-info">
                        <span className="mad-author-name">
                          Patrik Smith
                        </span>
                        <cite>Los Angeles, CA</cite>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mad-grid-item">
                  <div className="mad-testimonial">
                    <div className="mad-testimonial-info">
                      <h6 className="mad-testimonial-title">
                        Good price
                      </h6>
                      <blockquote>
                        <p>
                          Good price and quality but Im always disappointed with the slow delivery.
                        </p>
                      </blockquote>
                    </div>
                    <div className="mad-author">
                      <div className="mad-author-img">
                        <img src="images/72x72_photo2.jpg" alt="" />
                      </div>
                      <div className="mad-author-info">
                        <span className="mad-author-name">
                          Antonio Lopez
                        </span>
                        <cite>Albuquerque, NM</cite>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!--================ End of Testimonials ================--> */}
          </div>
          <div className="mad-section">
            <h3 className="mad-page-title align-center">
              Nuestros Socios
            </h3>
            {/* <!--================ Partners ================--> */}
            <div className="mad-sponsors owl-carousel mad-grid mad-grid--cols-6 no-dots">
              <div className="mad-owl-item">
                {/* <!--================ Partners Item ================--> */}
                <a href="https://themeforest.net/user/monkeysan/portfolio" target="_blank">
                  <img src="images/192x104_sponsor1.jpg" alt="" />
                </a>
                {/* <!--================ End of Partners Item ================--> */}
              </div>
              <div className="mad-owl-item">
                {/* <!--================ Partners Item ================--> */}
                <a href="https://themeforest.net/user/monkeysan/portfolio" target="_blank">
                  <img src="images/192x104_sponsor2.jpg" alt="" />
                </a>
                {/* <!--================ End of Partners Item ================--> */}
              </div>
              <div className="mad-owl-item">
                {/* <!--================ Partners Item ================--> */}
                <a href="https://themeforest.net/user/monkeysan/portfolio" target="_blank">
                  <img src="images/192x104_sponsor3.jpg" alt="" />
                </a>
                {/* <!--================ End of Partners Item ================--> */}
              </div>
              <div className="mad-owl-item">
                {/* <!--================ Partners Item ================--> */}
                <a href="https://themeforest.net/user/monkeysan/portfolio" target="_blank">
                  <img src="images/192x104_sponsor4.jpg" alt="" />
                </a>
                {/* <!--================ End of Partners Item ================--> */}
              </div>
              <div className="mad-owl-item">
                {/* <!--================ Partners Item ================--> */}
                <a href="https://themeforest.net/user/monkeysan/portfolio" target="_blank">
                  <img src="images/192x104_sponsor5.jpg" alt="" />
                </a>
                {/* <!--================ End of Partners Item ================--> */}
              </div>
            </div>
            {/* <!--================ End Of Partners ================--> */}
          </div>

          <NewsLetter />
        </div>
      </div>
    </>
  )
}

export default About 