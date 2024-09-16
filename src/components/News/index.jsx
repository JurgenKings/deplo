import React from "react"

function News() {
  return (
    <div className="mad-section mad-section--stretched mad-colorizer--scheme-color-3">
      <h5 className="mad-page-title with-carousel">Últimas Noticias<a href="shop_filter_toggle.html"
        className="mad-read-more">Ver todos</a></h5>
      {/* <!--================ Partners ================--> */}
      <div className="mad-entities type-3 owl-carousel mad-grid mad-grid--cols-3 no-dots nav-top">
        <div className="mad-owl-item">
          {/* <!--================ Entity ================--> */}
          <article className="mad-entity">
            <div className="mad-entity-media">
              <img src="images/384x256_img1.jpg" alt="" />
            </div>
            <div className="mad-entity-body">
              <div className="mad-entity-header">
                <div className="mad-entity-about"><a href="#">COVID-19</a>, <a href="#">Inmune</a></div>
                <h6 className="mad-entity-title"><a href="blog_single_sidebar.html">Herbs and Supplements May Protect
                  You
                  From the Coronavirus Epidemic</a></h6>
                <div className="mad-entity-tags">
                  <span>Septiembre 28, 2021</span>
                  <span>&nbsp;|&nbsp;</span>
                  <a href="#" className="mad-link">0 Comentarios</a>
                </div>
              </div>
              <p>Mauris fermentum dictum magna. Sed laoreet aliquam leo. Ut tellus dolor, dapibus eget, elementum
                vel, cursus eleifend,
                elit.</p>
              <a href="blog_single_sidebar.html" className="mad-read-more small-size">Leer más</a>
            </div>
          </article>
          {/* <!--================ /End of Entity ================--> */}
        </div>
        <div className="mad-owl-item">
          {/* <!--================ Entity ================--> */}
          <article className="mad-entity">
            <div className="mad-entity-media">
              <img src="images/384x256_img2.jpg" alt="" />
            </div>
            <div className="mad-entity-body">
              <div className="mad-entity-header">
                <a href="#" className="mad-entity-about">Bienestar</a>
                <h6 className="mad-entity-title"><a href="blog_single_sidebar.html">5 Essential Natural Stress Relief
                  Products
                  for That Help Calm You Down</a></h6>
                <div className="mad-entity-tags">
                  <span>Septiembre 21, 2021</span>
                  <span>&nbsp;|&nbsp;</span>
                  <a href="#" className="mad-link">3 Comentarios</a>
                </div>
              </div>
              <p>Aenean auctor wisi et urna. Aliquam erat volutpat. Duis ac turpis. Integer rutrum ante eu lacus.
                Vestibulum libero nisl,
                porta vel, scelerisque.</p>
              <a href="blog_single_sidebar.html" className="mad-read-more small-size">Leer más</a>
            </div>
          </article>
          {/* <!--================ /End of Entity ================--> */}
        </div>
        <div className="mad-owl-item">
          {/* <!--================ Entity ================--> */}
          <article className="mad-entity">
            <div className="mad-entity-media">
              <img src="images/384x256_img3.jpg" alt="" />
            </div>
            <div className="mad-entity-body">
              <div className="mad-entity-header">
                <div className="mad-entity-about"><a href="#">Cuidado Personal</a>, <a href="#">Mamá y Bebe</a></div>
                <h6 className="mad-entity-title"><a href="blog_single_sidebar.html">Top 10 Products to Protect
                  Children’s
                  Skin This Summer</a></h6>
                <div className="mad-entity-tags">
                  <span>Septiembre 17, 2021</span>
                  <span>&nbsp;|&nbsp;</span>
                  <a href="#" className="mad-link">1 Comentarios</a>
                </div>
              </div>
              <p>Vivamus eget nibh. Etiam cursus leo vel metus. Nulla facilisi. Aenean nec eros. Vestibulum ante
                ipsum primis in faucibus
                orci luctus et.</p>
              <a href="blog_single_sidebar.html" className="mad-read-more small-size">Leer más</a>
            </div>
          </article>
          {/* <!--================ /End of Entity ================--> */}
        </div>
      </div>
      {/* <!--================ End Of Partners ================--> */}
    </div>
  )
}

export default News