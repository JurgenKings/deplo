import React, { useState, useEffect } from "react"
import toast, { Toaster } from "react-hot-toast"
import NewsLetter from "../../components/NewsLetter"

// Array ficticio de productos
const productosIniciales = [
  {
    id: 1,
    nombre: "Twisse Ultiboost Vitamin C Chewable Natural Orange",
    categoria: "Multivitaminas y Minerales",
    imagen: "images/439x440_img1.jpg",
    precio: 9.95,
    rating: 5,
    stockLevel: 20
  },
  {
    id: 2,
    nombre: "Redmores Vitamin C 1000, Echinacea + Zinc Effervescent Tab X 10",
    categoria: "Vitaminas A-E",
    imagen: "images/439x440_img2.jpg",
    precio: 6.99,
    rating: 4,
    stockLevel: 15
  },
  {
    id: 3,
    nombre: "South Naturals Complete Omega Lemon Soft Gels X 60",
    categoria: "Omega 3, 6, 9",
    imagen: "images/439x440_img3.jpg",
    precio: 46.59,
    rating: 5,
    stockLevel: 75
  },
  {
    id: 4,
    nombre: "Vostelin Vitamin D3 (1000IU) Cap X 130",
    categoria: "Salud de Huesos",
    imagen: "images/439x440_img4.jpg",
    precio: 20.65,
    rating: 5,
    stockLevel: 40
  },
  {
    id: 5,
    nombre: "Twisse Ultiboost Magnesio Tab X 60",
    categoria: "Magnesio",
    imagen: "images/439x440_img5.jpg",
    precio: 22.35,
    rating: 4,
    stockLevel: 40
  },
  {
    id: 6,
    nombre: "Pharmacy Action Vitamin D 1000IU Cap X 250",
    categoria: "Vitaminas A-E",
    imagen: "images/439x440_img6.jpg",
    precio: 9.95,
    rating: 4.5,
    stockLevel: 75
  },
  {
    id: 7,
    nombre: "Life Space Broad Spectrum Probiotic Value Pack Cap X 90",
    categoria: "Probióticos",
    imagen: "images/439x440_img7.jpg",
    precio: 41.59,
    rating: 5,
    stockLevel: 10
  },
  {
    id: 8,
    nombre: "Natures Way Kids Smart Vita Gummies Omega + Multi X 50",
    categoria: "Multivitaminas y Minerals",
    imagen: "images/439x440_img8.jpg",
    precio: 14.45,
    rating: 4,
    stockLevel: 40
  },
  {
    id: 9,
    nombre: "Blackmores Bio C 1000mg Tab X 150",
    categoria: "Vitaminas A-E",
    imagen: "images/439x440_img1.jpg",
    precio: 24.99,
    rating: 4.5,
    stockLevel: 60
  },
  {
    id: 10,
    nombre: "Swisse Ultiboost High Strength Cranberry 25,000mg Cap X 30",
    categoria: "Suplementos Herbarios",
    imagen: "images/439x440_img2.jpg",
    precio: 17.99,
    rating: 4,
    stockLevel: 55
  },
  {
    id: 11,
    nombre: "Ostelin Vitamin D3 1000IU Cap X 250",
    categoria: "Salud de Huesos",
    imagen: "images/439x440_img3.jpg",
    precio: 19.95,
    rating: 5,
    stockLevel: 70
  },
  {
    id: 12,
    nombre: "Blackmores Glucosamine Sulfate 1500 One-A-Day Tab X 180",
    categoria: "Salud de Huesos",
    imagen: "images/439x440_img4.jpg",
    precio: 39.99,
    rating: 4.5,
    stockLevel: 45
  },
  {
    id: 13,
    nombre: "Natures Own Mega B Complex Tab X 125",
    categoria: "Vitaminas A-E",
    imagen: "images/439x440_img5.jpg",
    precio: 15.99,
    rating: 4,
    stockLevel: 65
  },
  {
    id: 14,
    nombre: "Swisse Ultiboost Calcium + Vitamin D Tab X 150",
    categoria: "Salud de Huesos",
    imagen: "images/439x440_img6.jpg",
    precio: 16.95,
    rating: 4.5,
    stockLevel: 50
  },
  {
    id: 15,
    nombre: "Blackmores CoQ10 150mg Cap X 30",
    categoria: "Salud del Corazón",
    imagen: "images/439x440_img7.jpg",
    precio: 29.99,
    rating: 5,
    stockLevel: 40
  },
  {
    id: 16,
    nombre: "Natures Way Complete Daily Multivitamin Tab X 200",
    categoria: "Multivitaminas y Minerales",
    imagen: "images/439x440_img8.jpg",
    precio: 34.95,
    rating: 4.5,
    stockLevel: 55
  },
  {
    id: 17,
    nombre: "Swisse Ultiboost Hair Skin Nails+ Tab X 60",
    categoria: "Suplementos de Belleza",
    imagen: "images/439x440_img1.jpg",
    precio: 19.99,
    rating: 4,
    stockLevel: 70
  },
  {
    id: 18,
    nombre: "Blackmores Omega Triple Concentrated Fish Oil Cap X 150",
    categoria: "Omega 3, 6, 9",
    imagen: "images/439x440_img2.jpg",
    precio: 44.99,
    rating: 5,
    stockLevel: 60
  },
  {
    id: 19,
    nombre: "Natures Own Liver Tonic Tab X 70",
    categoria: "Suplementos Herbarios",
    imagen: "images/439x440_img3.jpg",
    precio: 14.95,
    rating: 4,
    stockLevel: 45
  },
  {
    id: 20,
    nombre: "Swisse Ultiboost Sleep Tab X 60",
    categoria: "Sleep Aid",
    imagen: "images/439x440_img4.jpg",
    precio: 21.99,
    rating: 4.5,
    stockLevel: 50
  },
  {
    id: 21,
    nombre: "Blackmores Bio Zinc Tab X 84",
    categoria: "Minerals",
    imagen: "images/439x440_img5.jpg",
    precio: 11.99,
    rating: 4,
    stockLevel: 75
  },
  {
    id: 22,
    nombre: "Naturs Way Kids Smart Vita Gummies Calcium + Vit D3 X 60",
    categoria: "Childrens Health",
    imagen: "images/439x440_img6.jpg",
    precio: 13.95,
    rating: 4.5,
    stockLevel: 65
  },
  {
    id: 23,
    nombre: "Swisse Ultiboost Liver Detox Tab X 120",
    categoria: "Detox & Cleanse",
    imagen: "images/439x440_img7.jpg",
    precio: 26.99,
    rating: 4,
    stockLevel: 55
  },
  {
    id: 25,
    nombre: "Naturs Own Glucosamine 1500 One-A-Day Tab X 180",
    categoria: "Salud de Huesos",
    imagen: "images/439x440_img1.jpg",
    precio: 34.99,
    rating: 4.5,
    stockLevel: 60
  },
  {
    id: 27,
    nombre: "Blackmores Probióticos+ Dairy Free Cap X 30",
    categoria: "Probióticos",
    imagen: "images/439x440_img3.jpg",
    precio: 24.99,
    rating: 4.5,
    stockLevel: 70
  },
  {
    id: 28,
    nombre: "Natu Way Complete Daily Multivitamin for 50+ Years Tab X 100",
    categoria: "Multivitaminas y Minerales",
    imagen: "images/439x440_img4.jpg",
    precio: 29.95,
    rating: 5,
    stockLevel: 55
  },
  {
    id: 30,
    nombre: "Blackmores Vitamin B12 Tab X 75",
    categoria: "Vitaminas A-E",
    imagen: "images/439x440_img6.jpg",
    precio: 16.95,
    rating: 4,
    stockLevel: 75
  },
  {
    id: 31,
    nombre: "Nature Own Mega Magnesio Tab X 60",
    categoria: "Magnesio",
    imagen: "images/439x440_img7.jpg",
    precio: 19.99,
    rating: 4.5,
    stockLevel: 60
  },
  {
    id: 36,
    nombre: "Blackmores Bio Magnesio Tab X 100",
    categoria: "Magnesio",
    imagen: "images/439x440_img4.jpg",
    precio: 21.95,
    rating: 4.5,
    stockLevel: 60
  },
  {
    id: 38,
    nombre: "Swisse Ultiboost Calcium + Vitamin D Chewable Tab X 60",
    categoria: "Salud de Huesos",
    imagen: "images/439x440_img6.jpg",
    precio: 16.95,
    rating: 4.5,
    stockLevel: 70
  },
  {
    id: 41,
    nombre: "Swisse Ultiboost Odourless Fish Oil 1500mg Cap X 200",
    categoria: "Omega 3, 6, 9",
    imagen: "images/439x440_img1.jpg",
    precio: 29.99,
    rating: 4.5,
    stockLevel: 65
  },
  {
    id: 42,
    nombre: "Blackmores Celery 3000 Tab X 50",
    categoria: "Suplementos Herbarios",
    imagen: "images/439x440_img2.jpg",
    precio: 15.95,
    rating: 4,
    stockLevel: 60
  },
  {
    id: 43,
    nombre: "Naturs Own Glucosamine 750mg + Chondroitin 400mg Tab X 90",
    categoria: "Salud de Huesos",
    imagen: "images/439x440_img3.jpg",
    precio: 26.99,
    rating: 4.5,
    stockLevel: 55
  },
  {
    id: 44,
    nombre: "Swisse Ultiboost Grape Seed 14,250mg Tab X 60",
    categoria: "Antioxidantes",
    imagen: "images/439x440_img4.jpg",
    precio: 19.95,
    rating: 4,
    stockLevel: 70
  },
  {
    id: 45,
    nombre: "Blackmores Digestive Bio Balance Cap X 30",
    categoria: "Salud Digestiva",
    imagen: "images/439x440_img5.jpg",
    precio: 22.99,
    rating: 4.5,
    stockLevel: 50
  }
]

function Catalog() {

  const [productos, setProductos] = useState(productosIniciales)
  const [paginaActual, setPaginaActual] = useState(1)
  const productosPorPagina = 12

  const notify = (productName) => {
    const toastId = toast.loading("Cargando...", {
      style: {
        borderRadius: "1rem",
        textAlign: "center",
        boxShadow: "1px 1px 2px 0px gray",
      },
    })

    setTimeout(() => {
      toast.success(`${productName} agregado al carrito`, {
        id: toastId,
        style: {
          borderRadius: "1rem",
          textAlign: "center",
          boxShadow: "1px 1px 2px 0px gray",
        },
      })
    }, 2000)
  }

  // Calcular productos para la página actual
  const indexOfLastProduct = paginaActual * productosPorPagina
  const indexOfFirstProduct = indexOfLastProduct - productosPorPagina
  const productosActuales = productos.slice(indexOfFirstProduct, indexOfLastProduct)

  // Cambiar página
  const paginate = (pageNumber) => setPaginaActual(pageNumber)

  return (
    <div className="mad-content no-pd">
      <div className="container">
        <div className="mad-section">
          <div className="row hr-size-2 vr-size-2 sticky-bar">

            <aside id="sidebar" className="col-xl-3 col-lg-4 mad-sidebar">
              <div className="mad-widget">
                <h5 className="mad-widget-title">Categorías</h5>
                <nav className="mad-vr-nav">
                  <ul>
                    <li className="menu-item menu-item-has-children current-menu-item"><a href="#">Vitamins &
                      Supplements</a>
                      <ul className="sub-menu">
                        <li className="menu-item"><a href="#">Vitamins A-E (221)</a></li>
                        <li className="menu-item"><a href="#">Multivitamins & Minerals (303)</a></li>
                        <li className="menu-item"><a href="#">Bone & Joints Health (321)</a></li>
                        <li className="menu-item"><a href="#">Magnesium (117)</a></li>
                        <li className="menu-item"><a href="#">Probiotics (196)</a></li>
                        <li className="menu-item"><a href="#">Fish Oil & Omega 3, 6, 9 (47)</a></li>
                        <li className="menu-item"><a href="#">Homeopathy (39)</a></li>
                        <li className="menu-item"><a href="#">Herbal (239)</a></li>
                        <li className="menu-item"><a href="#">Antioxidants (307)</a></li>
                      </ul>
                    </li>
                    <li className="menu-item menu-item-has-children"><a href="#">Personal Care & Beauty</a>
                      <ul className="sub-menu">
                        <li className="menu-item"><a href="#">Vitamins A-E (221)</a></li>
                        <li className="menu-item"><a href="#">Multivitamins & Minerals (303)</a></li>
                        <li className="menu-item"><a href="#">Bone & Joints Health (321)</a></li>
                        <li className="menu-item"><a href="#">Magnesium (117)</a></li>
                        <li className="menu-item"><a href="#">Probiotics (196)</a></li>
                        <li className="menu-item"><a href="#">Fish Oil & Omega 3, 6, 9 (47)</a></li>
                        <li className="menu-item"><a href="#">Homeopathy (39)</a></li>
                        <li className="menu-item"><a href="#">Herbal (239)</a></li>
                        <li className="menu-item"><a href="#">Antioxidants (307)</a></li>
                      </ul>
                    </li>
                    <li className="menu-item menu-item-has-children"><a href="#">Medicines</a>
                      <ul className="sub-menu">
                        <li className="menu-item"><a href="#">Vitamins A-E (221)</a></li>
                        <li className="menu-item"><a href="#">Multivitamins & Minerals (303)</a></li>
                        <li className="menu-item"><a href="#">Bone & Joints Health (321)</a></li>
                        <li className="menu-item"><a href="#">Magnesium (117)</a></li>
                        <li className="menu-item"><a href="#">Probiotics (196)</a></li>
                        <li className="menu-item"><a href="#">Fish Oil & Omega 3, 6, 9 (47)</a></li>
                        <li className="menu-item"><a href="#">Homeopathy (39)</a></li>
                        <li className="menu-item"><a href="#">Herbal (239)</a></li>
                        <li className="menu-item"><a href="#">Antioxidants (307)</a></li>
                      </ul>
                    </li>
                    <li className="menu-item menu-item-has-children"><a href="#">Health & First Aids</a>
                      <ul className="sub-menu">
                        <li className="menu-item"><a href="#">Vitamins A-E (221)</a></li>
                        <li className="menu-item"><a href="#">Multivitamins & Minerals (303)</a></li>
                        <li className="menu-item"><a href="#">Bone & Joints Health (321)</a></li>
                        <li className="menu-item"><a href="#">Magnesium (117)</a></li>
                        <li className="menu-item"><a href="#">Probiotics (196)</a></li>
                        <li className="menu-item"><a href="#">Fish Oil & Omega 3, 6, 9 (47)</a></li>
                        <li className="menu-item"><a href="#">Homeopathy (39)</a></li>
                        <li className="menu-item"><a href="#">Herbal (239)</a></li>
                        <li className="menu-item"><a href="#">Antioxidants (307)</a></li>
                      </ul>
                    </li>
                    <li className="menu-item menu-item-has-children"><a href="#">Sexual Health</a>
                      <ul className="sub-menu">
                        <li className="menu-item"><a href="#">Vitamins A-E (221)</a></li>
                        <li className="menu-item"><a href="#">Multivitamins & Minerals (303)</a></li>
                        <li className="menu-item"><a href="#">Bone & Joints Health (321)</a></li>
                        <li className="menu-item"><a href="#">Magnesium (117)</a></li>
                        <li className="menu-item"><a href="#">Probiotics (196)</a></li>
                        <li className="menu-item"><a href="#">Fish Oil & Omega 3, 6, 9 (47)</a></li>
                        <li className="menu-item"><a href="#">Homeopathy (39)</a></li>
                        <li className="menu-item"><a href="#">Herbal (239)</a></li>
                        <li className="menu-item"><a href="#">Antioxidants (307)</a></li>
                      </ul>
                    </li>
                    <li className="menu-item menu-item-has-children"><a href="#">Weight Loss & Fitness</a>
                      <ul className="sub-menu">
                        <li className="menu-item"><a href="#">Vitamins A-E (221)</a></li>
                        <li className="menu-item"><a href="#">Multivitamins & Minerals (303)</a></li>
                        <li className="menu-item"><a href="#">Bone & Joints Health (321)</a></li>
                        <li className="menu-item"><a href="#">Magnesium (117)</a></li>
                        <li className="menu-item"><a href="#">Probiotics (196)</a></li>
                        <li className="menu-item"><a href="#">Fish Oil & Omega 3, 6, 9 (47)</a></li>
                        <li className="menu-item"><a href="#">Homeopathy (39)</a></li>
                        <li className="menu-item"><a href="#">Herbal (239)</a></li>
                        <li className="menu-item"><a href="#">Antioxidants (307)</a></li>
                      </ul>
                    </li>
                    <li className="menu-item menu-item-has-children"><a href="#">Mum & Baby</a>
                      <ul className="sub-menu">
                        <li className="menu-item"><a href="#">Vitamins A-E (221)</a></li>
                        <li className="menu-item"><a href="#">Multivitamins & Minerals (303)</a></li>
                        <li className="menu-item"><a href="#">Bone & Joints Health (321)</a></li>
                        <li className="menu-item"><a href="#">Magnesium (117)</a></li>
                        <li className="menu-item"><a href="#">Probiotics (196)</a></li>
                        <li className="menu-item"><a href="#">Fish Oil & Omega 3, 6, 9 (47)</a></li>
                        <li className="menu-item"><a href="#">Homeopathy (39)</a></li>
                        <li className="menu-item"><a href="#">Herbal (239)</a></li>
                        <li className="menu-item"><a href="#">Antioxidants (307)</a></li>
                      </ul>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="mad-widget">
                <h5 className="mad-widget-title">Filtrar por precio</h5>
                <div className="mad-range-slider-field">
                  <div className="mad-range-slider"></div>
                  <input type="text" value="Price: $1,000 - $99,000" name="check_availability_price" readOnly
                    className="mad-range-slider-input" />
                  <a href="#" className="btn btn-small">Filtrar</a>
                </div>
              </div>
              <div className="mad-widget">
                <h5 className="mad-widget-title">Marcas</h5>
                <div style={{ display: "block" }} className="mad-toggled-fields style-2 size-2">
                  <input type="checkbox" name="checkbox-1" id="checkbox-1" />
                  <label htmlFor="checkbox-1" className="mad-label-checkbox">Alka Seltzer (5)</label>
                  <input type="checkbox" name="checkbox-2" id="checkbox-2" />
                  <label htmlFor="checkbox-2" className="mad-label-checkbox">Betavit (6)</label>
                  <input type="checkbox" name="checkbox-3" id="checkbox-3" />
                  <label htmlFor="checkbox-3" className="mad-label-checkbox">Cepacol (19)</label>
                  <input type="checkbox" name="checkbox-4" id="checkbox-4" />
                  <label htmlFor="checkbox-4" className="mad-label-checkbox">Daytona (7)</label>
                  <input type="checkbox" name="checkbox-5" id="checkbox-5" />
                  <label htmlFor="checkbox-5" className="mad-label-checkbox">Elevate (25)</label>
                </div>
                <div id="mad-toggle-brands" className="mad-toggled-fields style-2 size-2">
                  <input type="checkbox" name="checkbox-42" id="checkbox-42" />
                  <label htmlFor="checkbox-42" className="mad-label-checkbox">Betavit (6)</label>
                  <input type="checkbox" name="checkbox-43" id="checkbox-43" />
                  <label htmlFor="checkbox-43" className="mad-label-checkbox">Cepacol (19)</label>
                  <input type="checkbox" name="checkbox-45" id="checkbox-45" />
                  <label htmlFor="checkbox-45" className="mad-label-checkbox">Elevate (25)</label>
                </div>
                <a href="#" id="mad-show-more" className="mad-link-color mad-text-small"><i
                  className="material-icons">add</i>&nbsp;<span>Ver más</span></a>
              </div>
              <div className="mad-widget">
                <h5 className="mad-widget-title">Por Calificación</h5>
                <div style={{ display: "block" }} className="mad-toggled-fields style-2 size-2">
                  <input type="checkbox" name="checkbox-6" id="checkbox-6" />
                  <label htmlFor="checkbox-6" className="mad-label-checkbox">
                    <span data-estimate="5" className="mad-rating size-2"></span> <span>(8)</span>
                  </label>
                  <input type="checkbox" name="checkbox-7" id="checkbox-7" />
                  <label htmlFor="checkbox-7" className="mad-label-checkbox">
                    <span data-estimate="4" className="mad-rating size-2"></span> <span>(3)</span>
                  </label>
                  <input type="checkbox" name="checkbox-8" id="checkbox-8" />
                  <label htmlFor="checkbox-8" className="mad-label-checkbox">
                    <span data-estimate="3" className="mad-rating size-2"></span> <span>(1)</span>
                  </label>
                  <input type="checkbox" name="checkbox-9" id="checkbox-9" />
                  <label htmlFor="checkbox-9" className="mad-label-checkbox">
                    <span data-estimate="2" className="mad-rating size-2"></span> <span>(0)</span>
                  </label>
                  <input type="checkbox" name="checkbox-10" id="checkbox-10" />
                  <label htmlFor="checkbox-10" className="mad-label-checkbox">
                    <span data-estimate="1" className="mad-rating size-2"></span> <span>(2)</span>
                  </label>
                </div>

              </div>
              <div className="mad-widget">
                <h5 className="mad-widget-title">Disponibilidad</h5>
                <div style={{ display: "block" }} className="mad-toggled-fields style-2 size-2">
                  <input type="checkbox" name="checkbox-11" id="checkbox-11" />
                  <label htmlFor="checkbox-11" className="mad-label-checkbox">En stock</label>
                  <input type="checkbox" name="checkbox-12" id="checkbox-12" />
                  <label htmlFor="checkbox-12" className="mad-label-checkbox">En oferta</label>
                  <input type="checkbox" name="checkbox-13" id="checkbox-13" />
                  <label htmlFor="checkbox-13" className="mad-label-checkbox">Exclude: On backorder</label>
                  <input type="checkbox" name="checkbox-14" id="checkbox-14" />
                </div>

              </div>
              <div className="mad-widget">
                <div className="mad-products-with-countdown">
                  <h6 className="mad-page-title with-carousel">Special Deal</h6>
                  <div className="mad-products style-2 owl-carousel mad-grid mad-grid--cols-1 no-dots nav-top">
                    <div className="mad-grid-item">
                      <div className="mad-product">
                        <div className="mad-product-image">
                          <span className="mad-label">Sale! <br />-20%</span>
                          <img src="images/288x288_product1.jpg" alt="" />
                          <div className="mad-actions">
                            <a href="#"><i className="material-icons">compare_arrows</i></a>
                            <a href="#"><i className="material-icons">favorite_border</i></a>
                            <a href="#" className="mad-qv"><i className="material-icons-outlined">remove_red_eye</i></a>
                          </div>
                        </div>
                        <div className="mad-product-description">
                          <a href="#" className="mad-product-cat">Vitamins & Supplements</a>
                          <h6 className="mad-product-title"><a href="shop_layout_boxed.html" className="mad-link">Natures Road
                            Kids Smart Vita
                            Gummies Immune Defence...</a></h6>
                        </div>
                        <div className="mad-product-info">
                          <div className="mad-info-item">
                            <div className="mad-product-price">$19.99 <span>$27.99</span></div>
                            <a href="shop_cart.html" className="mad-cart"><i
                              className="material-icons-outlined">shopping_bag</i></a>
                          </div>
                          <div className="mad-info-item">
                            <div className="mad-info-title">Hurry Up! Offer ends in:</div>
                            <div data-year="2021" data-month="11" data-day="6" data-hours="15" data-minutes="0"
                              data-seconds="0" className="mad-countdown size-2"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mad-grid-item">
                      <div className="mad-product">
                        <div className="mad-product-image">
                          <span className="mad-label">Sale! <br />-35%</span>
                          <img src="images/288x288_product2.jpg" alt="" />
                          <div className="mad-actions">
                            <a href="#"><i className="material-icons">compare_arrows</i></a>
                            <a href="#"><i className="material-icons">favorite_border</i></a>
                            <a href="#" className="mad-qv"><i className="material-icons-outlined">remove_red_eye</i></a>
                          </div>
                        </div>
                        <div className="mad-product-description">
                          <a href="#" className="mad-product-cat">Weight Loss & Fitness</a>
                          <h6 className="mad-product-title"><a href="shop_layout_boxed.html" className="mad-link">Otlins Endulge
                            Milk Choco&shy;late Mint Crisp
                            Bar
                            30g X 5</a></h6>
                        </div>
                        <div className="mad-product-info">
                          <div className="mad-info-item">
                            <div className="mad-product-price">$11.69 <span>$17.99</span></div>
                            <a href="shop_cart.html" className="mad-cart"><i
                              className="material-icons-outlined">shopping_bag</i></a>
                          </div>
                          <div className="mad-info-item">
                            <div className="mad-info-title">Hurry Up! Offer ends in:</div>
                            <div data-year="2021" data-month="11" data-day="6" data-hours="15" data-minutes="0"
                              data-seconds="0" className="mad-countdown size-2"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mad-grid-item">
                      <div className="mad-product">
                        <div className="mad-product-image">
                          <span className="mad-label">Sale! <br />-22%</span>
                          <img src="images/288x288_product3.jpg" alt="" />
                          <div className="mad-actions">
                            <a href="#"><i className="material-icons">compare_arrows</i></a>
                            <a href="#"><i className="material-icons">favorite_border</i></a>
                            <a href="#" className="mad-qv"><i className="material-icons-outlined">remove_red_eye</i></a>
                          </div>
                        </div>
                        <div className="mad-product-description">
                          <a href="#" className="mad-product-cat">COVID-19 Essentials</a>
                          <h6 className="mad-product-title"><a href="shop_layout_boxed.html" className="mad-link">AirPio
                            Mucus Clearance & Lung Expansion
                            Device</a></h6>
                        </div>
                        <div className="mad-product-info">
                          <div className="mad-info-item">
                            <div className="mad-product-price">$218.39 <span>$279.99</span></div>
                            <a href="shop_cart.html" className="mad-cart"><i
                              className="material-icons-outlined">shopping_bag</i></a>
                          </div>
                          <div className="mad-info-item">
                            <div className="mad-info-title">Hurry Up! Offer ends in:</div>
                            <div data-year="2021" data-month="11" data-day="6" data-hours="15" data-minutes="0"
                              data-seconds="0" className="mad-countdown size-2"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mad-widget">
                <h5 className="mad-widget-title">Productos Recientes</h5>
                <div className="mad-products hr-type style-2">
                  <div className="mad-product">
                    <div className="mad-product-image">
                      <img src="images/144x144_product4.jpg" alt="" />
                    </div>
                    <div className="mad-col">
                      <div className="mad-product-description">
                        <a href="#" className="mad-product-cat">Skin Care</a>
                        <h6 className="mad-product-title"><a href="shop_layout_boxed.html" className="mad-link">Jack Phunkett
                          SuperFade Face Cream ...</a>
                        </h6>
                      </div>
                      <div className="mad-product-info">
                        <div className="mad-info-item">
                          <div className="mad-product-price">$17.99</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mad-product">
                    <div className="mad-product-image">
                      <img src="images/176x176_product8.jpg" alt="" />
                    </div>
                    <div className="mad-col">
                      <div className="mad-product-description">
                        <a href="#" className="mad-product-cat">Waxing & Hair Removal</a>
                        <h6 className="mad-product-title"><a href="shop_layout_boxed.html" className="mad-link">Minea For Men
                          Extra Moisturising ...</a>
                        </h6>
                      </div>
                      <div className="mad-product-info">
                        <div className="mad-info-item">
                          <div className="mad-product-price">$7.95</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mad-product">
                    <div className="mad-product-image">
                      <img src="images/144x144_product8.jpg" alt="" />
                    </div>
                    <div className="mad-col">
                      <div className="mad-product-description">
                        <a href="#" className="mad-product-cat">Bath & Body</a>
                        <h6 className="mad-product-title"><a href="shop_layout_boxed.html" className="mad-link">Posken Intensive
                          Moisture Body ...</a>
                        </h6>
                      </div>
                      <div className="mad-product-info">
                        <div className="mad-info-item">
                          <div className="mad-product-price">$12.99</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mad-widget">
                <div className="mad-banners with-fixed-height">
                  <a href="shop_layout_sticky_info.html" className="banner-link"></a>
                  <div className="mad-banner banner-small" data-bg-image-src="images/328x528_banner1.jpg">
                    <div className="mad-col">
                      <h4 className="mad-title color-white">Targeted Support</h4>
                      <h6 className="mad-title color-white">For Your Immune System</h6>
                    </div>
                    <div className="mad-col">
                      <div className="content-element">From $3.99</div>
                      <a href="#" className="btn">View Range</a>
                    </div>
                  </div>
                </div>
              </div>
            </aside>


            <main id="main" className="col-xl-9 col-lg-8">
              <div className="mad-tabs sort-tabs">
                <div className="mad-sorting-section">
                  <div className="mad-col">
                    <span>Showing 1–8 of 36 results</span>
                    <div className="mad-custom-select size-2">
                      <select data-default-text="8">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                      </select>
                    </div>
                  </div>
                  <div className="mad-col">
                    <div role="tablist" aria-label="Tabs v1" className="mad-tabs-nav">
                      <span className="mad-active"><a id="tab-1-link" href="#tab-1" role="tab" aria-selected="true"
                        aria-controls="tab-1" className="mad-tab-link"><img src="lekarna_svg_icons/list_view.svg" alt=""
                          className="svg" /></a>
                      </span>
                      <span><a id="tab-2-link" href="#tab-2" role="tab" aria-selected="false" aria-controls="tab-2"
                        className="mad-tab-link"><img src="lekarna_svg_icons/grid2_view.svg" alt="" className="svg" /></a>
                      </span>
                      <span><a id="tab-3-link" href="#tab-3" role="tab" aria-selected="false" aria-controls="tab-3"
                        className="mad-tab-link"><img src="lekarna_svg_icons/grid3_view.svg" alt="" className="svg" /></a>
                      </span>
                      <span><a id="tab-4-link" href="#tab-4" role="tab" aria-selected="false" aria-controls="tab-4"
                        className="mad-tab-link"><img src="lekarna_svg_icons/grid4_view.svg" alt="" className="svg" /></a>
                      </span>
                    </div>
                    <div className="mad-custom-select size-2">
                      <select data-default-text="Default sorting">
                        <option>Option 1</option>
                        <option>Option 2</option>
                        <option>Option 3</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="mad-tabs-container">
                  <div id="tab-1" tabIndex="0" role="tabpanel" aria-labelledby="tab-1-link" className="mad-tab">
                    <div className="mad-products one-line size-2 item-col-1">

                      {
                        productos.map((product) => (
                          <div className="mad-grid-item" key={product.id}>
                            <div className="mad-product">
                              <div className="mad-product-image">
                                <img src="images/439x440_img1.jpg" alt="" />
                              </div>
                              <div className="mad-product-col">
                                <div className="mad-product-description">
                                  <a href="#" className="mad-product-cat">{product.categoria}</a>
                                  <h6 className="mad-product-title"><a href="shop_layout_boxed.html" className="mad-link">{product.nombre}</a></h6>
                                  <div data-estimate="5" className="mad-rating"></div> <span>(5 Reseñas)</span>
                                  <p>Vestibulum libero nisl, porta vel, scelerisque eget, malesuada at, neque. Vivamus eget
                                    nibh. Etiam cursus leo vel
                                    metus.
                                    Nulla facilisi. Aenean nec eros. Vestibulum ante ipsum primis in faucibus...</p>
                                </div>
                                <div className="mad-product-info">
                                  <div className="mad-info-item">
                                    <div className="mad-product-price">${product.precio} </div>
                                  </div>
                                  <div className="mad-info-item">
                                    <span>Stock (77) Und</span>
                                    <div className="mad-progress-bars mad-progress-bars--secondary">
                                      <div className="mad-progress-bars-item">
                                        <div role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"
                                          className="mad-progress-bar">
                                          <div style={{ width: "75%" }} className="mad-progress-bar-indicator"></div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="mad-info-item">
                                    <div className="mad-actions">
                                      <a href="#"><i className="material-icons">compare_arrows</i></a>
                                      <a href="#"><i className="material-icons">favorite_border</i></a>
                                      <a href="#" className="mad-qv"><i className="material-icons-outlined">remove_red_eye</i></a>
                                    </div>
                                  </div>
                                  <div className="mad-info-item">
                                    <div className="quantity-wrap">
                                      <div className="quantity">
                                        <label>Cantidad:</label>
                                        <input type="text" value="1" readOnly="" />
                                        <button type="button" className="qty-plus"><i className="material-icons">add</i></button>
                                        <button type="button" className="qty-minus"><i
                                          className="material-icons">remove</i></button>
                                      </div>
                                      <a href="#" className="btn btn-style-3"><i
                                        className="material-icons-outlined">shopping_bag</i>
                                        <span>Añadir al Carrito
                                        </span>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))
                      }
                    </div>
                  </div>
                </div>
              </div>
            </main>

          </div>
        </div>

        <NewsLetter />
      </div>
    </div>
  )
}

export default Catalog 
