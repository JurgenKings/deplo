import React from "react"

const recentlySeenProducts = [
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

function RecentlyViewed() {

  return (
    <>
      <div className="col-xl-3">
        <div className="mad-products-with-countdown">
          <h5 className="mad-page-title with-carousel">Visto recientemente</h5>
          <div className="mad-products style-2 owl-carousel mad-grid mad-grid--cols-1 no-dots nav-top">
            {recentlySeenProducts.map((producto) => (
              <>
                <div className="mad-grid-item">
                  <div className="mad-product">
                    <div className="mad-product-image">
                      <span className="mad-label">
                        Con <br />
                        -20%
                      </span>
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
                        <a href="shop_layout_boxed.html" className="mad-link">
                          {producto.name}
                        </a>
                      </h6>
                    </div>
                    <div className="mad-product-info">
                      <div className="mad-info-item">
                        <div className="mad-product-price">
                          {producto.price}
                          <span>
                            {producto.oldPrice}
                          </span>
                        </div>
                        <a href="shop_cart.html" className="mad-cart">
                          <i className="material-icons-outlined">shopping_bag</i>
                        </a>
                      </div>
                      <div className="mad-info-item">
                        <div className="mad-info-title">
                          ¡Apresúrate! La oferta termina en:
                        </div>
                        <div
                          data-year="2021"
                          data-month="11"
                          data-day="6"
                          data-hours="15"
                          data-minutes="0"
                          data-seconds="0"
                          className="mad-countdown size-2"
                        >
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
    </>
  )
}

export default RecentlyViewed