import React, { useEffect } from "react"

const bestSellingProducts = [
  {
    id: 1,
    name: "KLM96 Mascarillas Desechables X 5",
    category: "Esenciales contra COVID-19",
    price: 19.99,
    oldPrice: 21.99,
    image: "https://lh3.googleusercontent.com/bV0b1ELo3sC09fYNhLhadO2cik_KmWD63oYBQ8oMPjL-xlxKF8qNLLIEMwwgC1b8iRF0409A4G0n6LwrsmzX29uddKVv4CJJaw6W2YhVG0gyJic=s650-rw",
    rating: 4,
    stockLevel: "40",
  },
  {
    id: 2,
    name: "Gel Antibacterial 501ml",
    category: "Higiene Personal",
    price: 9.99,
    oldPrice: 12.99,
    image: "https://lh3.googleusercontent.com/bV0b1ELo3sC09fYNhLhadO2cik_KmWD63oYBQ8oMPjL-xlxKF8qNLLIEMwwgC1b8iRF0409A4G0n6LwrsmzX29uddKVv4CJJaw6W2YhVG0gyJic=s650-rw",
    rating: 5,
    stockLevel: "75",
  },
  {
    id: 3,
    name: "Termómetro Digital Infrarrojo",
    category: "Equipos Médicos",
    price: 29.99,
    oldPrice: 34.99,
    image: "https://lh3.googleusercontent.com/bV0b1ELo3sC09fYNhLhadO2cik_KmWD63oYBQ8oMPjL-xlxKF8qNLLIEMwwgC1b8iRF0409A4G0n6LwrsmzX29uddKVv4CJJaw6W2YhVG0gyJic=s650-rw",
    rating: 4,
    stockLevel: "60",
  },
  {
    id: 4,
    name: "Oxímetro de Pulso",
    category: "Equipos Médicos",
    price: 24.99,
    oldPrice: 27.99,
    image: "https://lh3.googleusercontent.com/bV0b1ELo3sC09fYNhLhadO2cik_KmWD63oYBQ8oMPjL-xlxKF8qNLLIEMwwgC1b8iRF0409A4G0n6LwrsmzX29uddKVv4CJJaw6W2YhVG0gyJic=s650-rw",
    rating: 5,
    stockLevel: "55",
  },
  {
    id: 5,
    name: "Kit de Prueba Rápida COVID-19",
    category: "Diagnóstico",
    price: 39.99,
    oldPrice: 44.99,
    image: "https://lh3.googleusercontent.com/bV0b1ELo3sC09fYNhLhadO2cik_KmWD63oYBQ8oMPjL-xlxKF8qNLLIEMwwgC1b8iRF0409A4G0n6LwrsmzX29uddKVv4CJJaw6W2YhVG0gyJic=s650-rw",
    rating: 4,
    stockLevel: "30",
  },
]

function BestSellingProducts() {

  return (
    <>
      <div className="content-element-10">
        <h5 className="mad-page-title with-carousel">
          Los más vendidos
          <a href="/catalogo" className="mad-read-more">
            Ver todos
          </a>
        </h5>
        <div className="row">
          <div className="col-xl-3 col-lg-4 hide-mobile">
            <div className="mad-banners">
              <a href="/catalogo" className="banner-link"></a>
              <div
                className="mad-banner banner-small"
                data-bg-image-src="https://lh3.googleusercontent.com/UwlvKzcKJh55goT8gWlBQ23_XYWpUC_Eu5wMWKfnpxgbAuKYoGhFSLy0seFzbmW3nJh_SxE6lfjzwf8ISs9LD6crOZKowZbc_OucRwY_DjV7nKs=s1350-rw"
              >
                <div className="mad-col">
                  <h4 className="mad-title color-white">
                    Apoyo Dirigido
                  </h4>
                  <h6 className="mad-title color-white">
                    A Su Sistema Inmunológico
                  </h6>
                </div>
                <div className="mad-col">
                  <div className="content-element">
                    Desde $3.99
                  </div>
                  <a href="#" className="btn">
                    Ver rango
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-9 col-lg-8">
            <div className="mad-products owl-carousel mad-grid mad-grid--cols-3 no-dots nav-top">
              {bestSellingProducts.map((producto) => (
                <>
                  <div key={producto.id} className="mad-grid-item">
                    <div className="mad-product">
                      <div className="mad-product-image">
                        <img src={producto.image} alt="" />
                        <div className="mad-actions">
                          <a href="#">
                            <i className="material-icons">compare_arrows</i>
                          </a>
                          <a href="#">
                            <i className="material-icons">favorite_border</i>
                          </a>
                          <a href="#" className="mad-qv">
                            <i className="material-icons-outlined">remove_red_eye</i>
                          </a>
                        </div>
                      </div>
                      <div className="mad-product-description">
                        <a href="#" className="mad-product-cat">
                          {producto.category}
                        </a>
                        <h6 className="mad-product-title">
                          <a href="/detalle/1" className="mad-link">
                            {producto.name}
                          </a>
                        </h6>
                      </div>
                      <div className="mad-product-info">
                        <div data-estimate="5" className="mad-rating"></div>
                        <div className="mad-info-item">
                          <div className="mad-product-price">
                            {producto.price}
                            <span>{producto.oldPrice}</span>
                          </div>
                          <a href="/detalle/1" className="mad-cart">
                            <i className="material-icons-outlined">shopping_bag</i>
                          </a>
                        </div>
                        <div className="mad-info-item">
                          <span>Stock</span>
                          <span>
                            ({producto.stockLevel} Und)
                          </span>
                          <div className="mad-progress-bars mad-progress-bars--secondary">
                            <div className="mad-progress-bars-item">
                              <div
                                role="progressbar"
                                aria-valuenow={producto.stockLevel}
                                aria-valuemin="0"
                                aria-valuemax="100"
                                className="mad-progress-bar"
                              >
                                <div style={{ width: "75%" }} className="mad-progress-bar-indicator"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="content-element-10">
        <div className="mad-banners two-coll">
          <a href="shop_layout_sticky_info.html" className="banner-link"></a>
          <div className="mad-banner" data-bg-image-src="https://lh3.googleusercontent.com/3e9oEdS-zhIXljCd9u3FrHcHmw0Y4TyUaK3Gf6VzTOMWwA4JDHEXMfUK8gfU5LP0JpK9UktXSiJWo8--6gT_QkJoCSCg-GsHTDrMMUF5uun8kGtslw=s1350-rw">
            <div className="content-element-4">
              <h6 className="mad-title color-blue style-3">
                Ahorra más del
              </h6>
              <h2 className="mad-title color-blue style-3 big-title">
                40% Descuento
              </h2>
              <h2 className="mad-title color-white style-2">
                En todos los productos <br />
                Aktins
              </h2>
            </div>
            <div className="content-element-4">
              <a href="shop_cart.html" className="btn btn-big btn-style-3">
                ¡Comprar Ahora!
              </a>
            </div>
            <div className="banner-info">
              <div className="mad-col">
                <img src="/images/banner_label.png" alt="" />
              </div>
              <div className="mad-col">
                <ul className="banner-list">
                  <li>
                    <span className="material-icons">check_circle_outline</span>
                    Bajo en Carbohidratos
                  </li>
                  <li>
                    <span className="material-icons">check_circle_outline</span>
                    Bajo en Azucar
                  </li>
                  <li>
                    <span className="material-icons">check_circle_outline</span>
                    Alto en Proteínas
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mad-banner" data-bg-image-src="https://lh3.googleusercontent.com/rKLZIkHHb5cIbZwLIQXw_Gftfl0VFHJJoNwiGigd1oR3niLg7xxCL96ugW6Cy45X9fl9Cx4VZ2joYTE7Jk7UqpWQ8-nS3biYncHaQHAAnY8LU9ml=s1350-rw">
            <div className="content-element-4">
              <h6 className="mad-title color-white style-3">
                Compra 1, Obten 1
              </h6>
              <h2 className="mad-title color-white style-3 big-title">
                Gratis
              </h2>
              <h2 className="mad-title style-2">
                Sport Gel <br />
                Rapid Active
              </h2>
            </div>
            <div className="content-element-4">
              <a href="#" className="btn btn-big btn-style-2">
                ¡Comprar Ahora!
              </a>
            </div>
            <div className="banner-info">
              <div className="mad-col"><img src="images/banner_label2.png" alt="" /></div>
              <div className="mad-col">
                <ul className="banner-list">
                  <li>
                    <span className="material-icons">check_circle_outline</span>
                    Alta Calidad
                  </li>
                  <li>
                    <span className="material-icons">check_circle_outline</span>
                    Para Uso Diario
                  </li>
                  <li>
                    <span className="material-icons">check_circle_outline</span>
                    Efecto de Enfriamiento
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default BestSellingProducts 
