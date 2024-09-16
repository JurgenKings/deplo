import React from "react"
import { Link } from "react-router-dom"

function Footer() {
  return (
    <>
      <footer id="mad-footer" className="mad-footer">
        {/* <!--================ Footer row ================--> */}
        <div className="mad-footer-main">
          <div className="container">
            <div className="row">
              <div className="col-xl-2 col-md-4">
                {/* <!--================ Widget ================--> */}
                <section className="mad-widget">
                  <h6 className="mad-widget-title">
                    Sobre nosotros
                  </h6>
                  <div className="mad-vr-list">
                    <ul>
                      <li>
                        <a href="index.html" className="mad-link">
                          Home
                        </a>
                      </li>
                      <li>
                        <a href="pages_about_v1.html" className="mad-link">
                          Sobre nosotros
                        </a>
                      </li>
                      <li>
                        <a href="pages_faq.html" className="mad-link">
                          Career</a>
                      </li>
                      <li>
                        <a href="blog_classNameic_sidebar.html" className="mad-link">
                          Blog
                        </a>
                      </li>
                      <li>
                        <a href="#" className="mad-link">
                          Términos y Condiciones
                        </a>
                      </li>
                      <li>
                        <a href="/politicas-privacidad" className="mad-link">
                          Políticas de Privacidad
                        </a>
                      </li>
                      <li>
                        <a href="pages_contact_v1.html" className="mad-link">
                          Contactanos
                        </a>
                      </li>
                    </ul>
                  </div>
                </section>
                {/* <!--================ End of Widget ================--> */}
              </div>
              <div className="col-xl-2 col-md-4">
                {/* <!--================ Widget ================--> */}
                <section className="mad-widget">
                  <h6 className="mad-widget-title">
                    Categorías
                  </h6>
                  <div className="mad-vr-list">
                    <ul>
                      <li>
                        <a href="shop_category.html" className="mad-link">
                          Vitamins & Supplements
                        </a>
                      </li>
                      <li>
                        <a href="shop_grid_2c_sidebar.html" className="mad-link">
                          Personal Care & Beauty
                        </a>
                      </li>
                      <li>
                        <a href="shop_grid_3c.html" className="mad-link">
                          Medicines
                        </a>
                      </li>
                      <li>
                        <a href="shop_grid_3c_sidebar.html" className="mad-link">
                          Health & First Aids
                        </a>
                      </li>
                      <li>
                        <a href="shop_grid_4c_full.html" className="mad-link">
                          Sexual Health
                        </a>
                      </li>
                      <li>
                        <a href="shop_grid_4c_sidebar.html" className="mad-link">
                          Weight Loss & Fitness
                        </a>
                      </li>
                      <li>
                        <a href="shop_grid_5c_full.html" className="mad-link">
                          Mum & Baby
                        </a>
                      </li>
                      <li>
                        <a href="shop_grid_6c_full.html" className="mad-link">
                          Organic & Gluten Free
                        </a>
                      </li>
                    </ul>
                  </div>
                </section>
                {/* <!--================ End of Widget ================--> */}
              </div>
              <div className="col-xl-2 col-md-4">
                {/* <!--================ Widget ================--> */}
                <section className="mad-widget">
                  <h6 className="mad-widget-title">
                    Cuidado del Cliente
                  </h6>
                  <div className="mad-vr-list">
                    <ul>
                      <li>
                        <a href="shop_account.html" className="mad-link">
                          Mi cuenta
                        </a>
                      </li>
                      <li>
                        <a href="#" className="mad-link">
                          Mis compras
                        </a>
                      </li>
                      <li>
                        <a href="#" className="mad-link">
                          Sigue tu pedido
                        </a>
                      </li>
                      <li>
                        <a href="#" className="mad-link">
                          Favoritos
                        </a>
                      </li>
                      <li>
                        <a href="pages_faq.html" className="mad-link">
                          FAQs
                        </a>
                      </li>
                      <li>
                        <a href="#" className="mad-link">
                          Política de Devoluciones
                        </a>
                      </li>
                    </ul>
                  </div>
                </section>
                {/* <!--================ End of Widget ================--> */}
              </div>
              <div className="col-xl-2 col-md-6">
                {/* <!--================ Widget ================--> */}
                <section className="mad-widget">
                  <h6 className="mad-widget-title">
                    Ubicaciones
                  </h6>
                  <div className="mad-our-info">
                    <div className="mad-info">
                      <div>
                        9863 - 9867 Mill Road, <br />
                        Cambridge, MG09 99HT
                      </div>
                      <a href="https://bit.ly/2RNqbia" className="mad-link">
                        Ver ubicación
                      </a>
                    </div>
                    <div className="mad-info">
                      <div>
                        9870 St Vincent Place, <br />
                        Glasgow, DC 45 Fr 45
                      </div>
                      <a href="https://bit.ly/2RNqbia" className="mad-link">
                        Ver ubicación
                      </a>
                    </div>
                    <div className="mad-info">
                      <div>
                        8901 Marmora Road, <br />
                        Glasgow, D04 89GR
                      </div>
                      <a href="https://bit.ly/2RNqbia" className="mad-link">
                        Ver ubicacion
                      </a>
                    </div>
                  </div>
                </section>
                {/* <!--================ End of Widget ================--> */}
              </div>
              <div className="col-xl-4 col-md-6">
                {/* <!--================ Widget ================--> */}
                <section className="mad-widget">
                  <h6 className="mad-widget-title">
                    Soporte al cliente
                  </h6>
                  {/* <!--================ Icon Boxes ================--> */}
                  <div className="mad-icon-boxes our-info item-col-1">
                    <div className="mad-col">
                      {/* <!--================ Icon Box ================--> */}
                      <article className="mad-icon-box">
                        <i className="mad-icon-box-icon">
                          <img className="svg" src="lekarna_svg_icons/support.svg" alt="" />
                        </i>
                        <div className="mad-icon-box-content">
                          <span className="mad-icon-sub-title">
                            24/7 Servicio al cliente
                          </span>
                          <h4 className="mad-icon-box-title">
                            +58412-1968978
                          </h4>
                        </div>
                      </article>
                      {/* <!--================ End of Icon Box ================--> */}
                    </div>
                    <div className="mad-col">
                      {/* <!--================ Icon Box ================--> */}
                      <article className="mad-icon-box">
                        <i className="mad-icon-box-icon">
                          <img className="svg" src="lekarna_svg_icons/email.svg" alt="" />
                        </i>
                        <div className="mad-icon-box-content">
                          <span className="mad-icon-sub-title">
                            Contactanos:
                          </span>
                          <h4 className="mad-icon-box-title">
                            info@megafarma.com
                          </h4>
                        </div>
                      </article>
                      {/* <!--================ End of Icon Box ================--> */}
                    </div>
                  </div>
                  {/* <!--================ End of Icon Boxes ================--> */}
                  <div className="mad-social-icons">
                    <ul>
                      <li>
                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                      </li>
                      <li>
                        <a href="#"><i className="fab fa-twitter"></i></a>
                      </li>
                      <li>
                        <a href="#"><i className="fab fa-instagram"></i></a>
                      </li>
                      <li>
                        <a href="#"><i className="fab fa-linkedin-in"></i></a>
                      </li>
                      <li>
                        <a href="#"><i className="fab fa-youtube"></i></a>
                      </li>
                      <li>
                        <a href="#"><i className="fab fa-pinterest-p"></i></a>
                      </li>
                    </ul>
                  </div>
                </section>
                {/* <!--================ End of Widget ================--> */}
              </div>
            </div>
            <div className="mad-footer-bottom">
              <p className="copyrights">
                Copyright © 2024 <a href="#">Megafarma </a> Todos los derechos reservados
              </p>
              <a href="#">
                <img src="/images/payment.png" alt="" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer