import React, { useState } from "react"
import { Toaster, toast } from "react-hot-toast"
import Breadcrumb from "../../components/Breadcrumb"
import NewsLetter from "../../components/NewsLetter"

function ShoppingCart() {

  const [productos, setProductos] = useState([
    {
      id: 1,
      nombre: "Jack Phunkett SuperFade Face Cream 40ml",
      imagen: "images/96x96_product1.jpg",
      precio: 17.99,
      cantidad: 1
    },
    {
      id: 2,
      nombre: "Minea For Men Extra Moisturising Shaving Gel 200ml",
      imagen: "images/96x96_product2.jpg",
      precio: 7.95,
      cantidad: 1
    },
    {
      id: 3,
      nombre: "Producto 3",
      imagen: "images/96x96_product2.jpg",
      precio: 7.95,
      cantidad: 1
    },
    {
      id: 4,
      nombre: "Producto 4",
      imagen: "images/96x96_product2.jpg",
      precio: 7.95,
      cantidad: 1
    },
    {
      id: 5,
      nombre: "Producto 5",
      imagen: "images/96x96_product2.jpg",
      precio: 7.95,
      cantidad: 1
    },
  ])
  const [paginaActual, setPaginaActual] = useState(1)
  const productosPorPagina = 3

  const total = productos.reduce((sum, producto) => sum + producto.precio * producto.cantidad, 0)

  const cambiarCantidad = (id, cambio) => {
    setProductos(productos.map(producto =>
      producto.id === id ? { ...producto, cantidad: Math.max(1, producto.cantidad + cambio) } : producto
    ))
  }

  const eliminarProducto = (id) => {
    toast((t) => (
      <div>
        <p>¿Estás seguro que quieres eliminar este producto del carrito?</p>
        <div>
          <button
            className="btn btn-style-1"
            onClick={() => {
              setProductos(productos.filter(producto => producto.id !== id))
              toast.dismiss(t.id)
              toast.success("Producto eliminado del carrito")
            }}
          >
            Sí, eliminar
          </button>
          <button className="btn btn-style-1" style={{ marginLeft: "10px", backgroundColor: "gray" }} onClick={() => toast.dismiss(t.id)}>
            Cancelar
          </button>
        </div>
      </div>
    ), { duration: Infinity })
  }

  const indexOfLastProduct = paginaActual * productosPorPagina
  const indexOfFirstProduct = indexOfLastProduct - productosPorPagina
  const productosActuales = productos.slice(indexOfFirstProduct, indexOfLastProduct)

  const paginate = (pageNumber) => setPaginaActual(pageNumber)

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <Breadcrumb title="Carrito de Compras" />

      <div className="mad-content no-pd">
        <div className="container">
          <div className="mad-section">
            <div className="content-element-10">
              <div className="row hr-size-2 vr-size-2 sticky-bar">
                <div className="col-xl-8">
                  {/* <!--================ Horizontal Table ================--> */}
                  <div className="mad-table-wrap shop-cart-form shopping-cart-full">
                    <table className="mad-table--responsive-md">
                      <thead>
                        <tr>
                          <th>Producto</th>
                          <th>Precio</th>
                          <th style={{ position: "relative", left: "30px" }}>Cantidad</th>
                          <th>Subtotal</th>
                        </tr>
                      </thead>
                      <tbody>
                        {productosActuales.map(producto => (
                          <tr key={producto.id} className="mad-product-item">
                            <td data-cell-title="Producto">
                              <div className="mad-products mad-product-small">
                                <div className="mad-col">
                                  <div className="mad-product">
                                    <button style={{ fontSize: "18px" }}
                                      onClick={() => eliminarProducto(producto.id)}>
                                      <i className="material-icons-outlined" style={{ fontSize: '1.5rem' }}>close</i>
                                    </button>
                                    <a href="#" className="mad-product-image">
                                      <img src={producto.imagen} alt={producto.nombre} />
                                    </a>
                                    <div className="mad-product-description">
                                      <h5 className="mad-product-title">
                                        <a href="shop_layout_boxed.html">
                                          {producto.nombre}
                                        </a>
                                      </h5>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td data-cell-title="Precio">
                              <div className="mad-products">
                                <span className="mad-product-price">
                                  ${producto.precio.toFixed(2)}
                                </span>
                              </div>
                            </td>
                            <td data-cell-title="Cantidad">
                              <div className="quantity">
                                <input type="text" value={producto.cantidad} readOnly="" />
                                <button
                                  type="button"
                                  className="qty-plus"
                                  onClick={() => cambiarCantidad(producto.id, 1)}
                                >
                                  <i className="material-icons">add</i>
                                </button>
                                <button
                                  type="button"
                                  className="qty-minus"
                                  onClick={() => cambiarCantidad(producto.id, -1)}
                                >
                                  <i className="material-icons">remove</i>
                                </button>
                              </div>
                            </td>
                            <td data-cell-title="Subtotal">
                              <div className="mad-products">
                                <span className="mad-product-price">
                                  <b>${(producto.precio * producto.cantidad).toFixed(2)}</b>
                                </span>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                      <tfoot>
                        <tr>
                          <td colSpan="4">
                            <div className="mad-shop-footer">
                              <form className="one-line size-2">
                                <input type="text" name="text" placeholder="Ingresa tu codigo aca..." />
                                <button type="submit" className="btn btn-style-3">
                                  Aplicar Cupon
                                </button>
                              </form>
                              <button type="submit" className="btn btn-style-7">
                                Actualizar Carrito
                              </button>
                            </div>
                          </td>
                        </tr>
                      </tfoot>
                    </table>
                  </div>
                  <div className="mad-pagination">
                    {Array.from({ length: Math.ceil(productos.length / productosPorPagina) }, (_, i) => (
                      <a key={i} onClick={() => paginate(i + 1)} className={`page-numbers ${i + 1 === paginaActual ? "current" : ""} jorge-button-pagination`}>
                        {i + 1}
                      </a>
                    ))}
                  </div>

                  {/* <!--================ End of Horizontal Table ================--> */}
                </div>
                <div className="col-xl-4 mad-sidebar">
                  <div className="mad-widget">
                    <h5 className="mad-widget-title color-2">
                      Resumen de Compra
                    </h5>
                    {/* <!--================ Vertical Table ================--> */}
                    <div className="mad-table-wrap color-2 content-element">
                      <table className="mad-table mad-table--vertical">
                        <tbody className="mad-text-color4">
                          <tr>
                            <th>Subtotal</th>
                            <td>
                              <span>{total.toFixed(2)}</span>
                            </td>
                          </tr>
                          <tr>
                            <th>Envío</th>
                            <td>
                              <form name="shipping" className="content-element-2">
                                <div className="form-group">
                                  <div className="form-col">
                                    <div className="form-control">
                                      <div style={{ display: "block" }} className="mad-toggled-fields">
                                        <input type="radio" name="radio-1" id="radio-1" checked="checked" />
                                        <label htmlFor="radio-1" className="mad-label-radio">
                                          Envío gratis
                                        </label>
                                        <input type="radio" name="radio-1" id="radio-2" />
                                        <label htmlFor="radio-2" className="mad-label-radio">
                                          Envío base
                                        </label>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </form>
                              <p>
                                Opciones de envío variarán <b />
                                durante el checkout
                              </p>
                              <a href="#" className="mad-link-color">
                                Calcular Envío
                              </a>
                            </td>
                          </tr>
                        </tbody>
                        <tfoot>
                          <tr className="mad-total">
                            <th>Total </th>
                            <td>
                              <span>{total.toFixed(2)}</span>
                            </td>
                          </tr>
                        </tfoot>
                      </table>
                    </div>
                    {/* <!--================ End of/ Vertical Table ================--> */}
                    <a href="/checkout" className="btn btn-style-3 btn-big w-100">
                      <span>Procesar Compra</span>
                      <i className="material-icons">arrow_right_alt</i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <h3 className="mad-page-title with-carousel">
              Puede interesarte...
            </h3>
            <div className="mad-products with-border style-2 owl-carousel mad-grid mad-grid--cols-5 no-dots nav-top">
              {/* <!-- owl item --> */}
              <div className="mad-grid-item">
                {/* <!-- Product --> */}
                <div className="mad-product">
                  <div className="mad-product-image">
                    <img src="images/217x217_product1.jpg" alt="" />
                    <div className="mad-actions">
                      <a href="#"><i className="material-icons">compare_arrows</i></a>
                      <a href="#"><i className="material-icons">favorite_border</i></a>
                      <a href="#" className="mad-qv"><i className="material-icons-outlined">remove_red_eye</i></a>
                    </div>
                  </div>
                  {/* <!-- product-info --> */}
                  <div className="mad-product-description">
                    <a href="#" className="mad-product-cat">Cold, Cough & Flu</a>
                    <h6 className="mad-product-title"><a href="shop_layout_boxed.html" className="mad-link">ApoHealth Paracetamol
                      500mg Caplets X 100</a></h6>
                  </div>
                  {/* <!--/ product-info -->/ */}
                  <div className="mad-product-info">
                    <div data-estimate="5" className="mad-rating"></div>
                    <div className="mad-info-item">
                      <div className="mad-product-price">$4.99</div>
                      <a href="shop_cart.html" className="mad-cart"><i className="material-icons-outlined">shopping_bag</i></a>
                    </div>
                    <div className="mad-info-item">
                      <span>Stock (72) Und</span>
                      <div className="mad-progress-bars mad-progress-bars--secondary">
                        <div className="mad-progress-bars-item">
                          <div role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"
                            className="mad-progress-bar">
                            <div style={{ width: "80%" }} className="mad-progress-bar-indicator"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- End of Product --> */}
              </div>
              {/* <!-- / owl item --> */}
              {/* <!-- owl item --> */}
              <div className="mad-grid-item">
                {/* <!-- Product --> */}
                <div className="mad-product">
                  <div className="mad-product-image">
                    <img src="images/217x217_product2.jpg" alt="" />
                    <div className="mad-actions">
                      <a href="#"><i className="material-icons">compare_arrows</i></a>
                      <a href="#"><i className="material-icons">favorite_border</i></a>
                      <a href="#" className="mad-qv"><i className="material-icons-outlined">remove_red_eye</i></a>
                    </div>
                  </div>
                  {/* <!-- product-info --> */}
                  <div className="mad-product-description">
                    <a href="#" className="mad-product-cat">Fever & Pain Relief</a>
                    <h6 className="mad-product-title"><a href="shop_layout_boxed.html" className="mad-link">Kurofen Tab X 24</a>
                    </h6>
                  </div>
                  {/* <!--/ product-info -->/ */}
                  <div className="mad-product-info">
                    <div data-estimate="5" className="mad-rating"></div>
                    <div className="mad-info-item">
                      <div className="mad-product-price">$11.69 <span>$17.99</span></div>
                      <a href="shop_cart.html" className="mad-cart"><i className="material-icons-outlined">shopping_bag</i></a>
                    </div>
                    <div className="mad-info-item">
                      <span>Stock (72) Und</span>
                      <div className="mad-progress-bars mad-progress-bars--secondary">
                        <div className="mad-progress-bars-item">
                          <div role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"
                            className="mad-progress-bar">
                            <div style={{ width: "80%" }} className="mad-progress-bar-indicator"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- End of Product --/> */}
              </div>
              {/* <!-- / owl item --> */}
              {/* <!-- owl item -->/ */}
              <div className="mad-grid-item">
                {/* <!-- Product --> */}
                <div className="mad-product">
                  <div className="mad-product-image">
                    <img src="images/217x217_product3.jpg" alt="" />
                    <div className="mad-actions">
                      <a href="#"><i className="material-icons">compare_arrows</i></a>
                      <a href="#"><i className="material-icons">favorite_border</i></a>
                      <a href="#" className="mad-qv"><i className="material-icons-outlined">remove_red_eye</i></a>
                    </div>
                  </div>
                  {/* <!-- product-info --> */}
                  <div className="mad-product-description">
                    <a href="#" className="mad-product-cat">Skin Conditions</a>
                    <h6 className="mad-product-title"><a href="shop_layout_boxed.html" className="mad-link">Hope’s Relief Premium
                      Eczema Cream 60g</a></h6>
                  </div>
                  {/* <!--/ product-info --> */}
                  <div className="mad-product-info">
                    <div data-estimate="3.5" className="mad-rating"></div>
                    <div className="mad-info-item">
                      <div className="mad-product-price">$23.99</div>
                      <a href="shop_cart.html" className="mad-cart"><i className="material-icons-outlined">shopping_bag</i></a>
                    </div>
                    <div className="mad-info-item">
                      <span>Stock (72) Und</span>
                      <div className="mad-progress-bars mad-progress-bars--secondary">
                        <div className="mad-progress-bars-item">
                          <div role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"
                            className="mad-progress-bar">
                            <div style={{ width: "20%" }} className="mad-progress-bar-indicator"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mad-grid-item">
                <div className="mad-product">
                  <div className="mad-product-image">
                    <img src="images/217x217_product4.jpg" alt="/" />
                    <div className="mad-actions">
                      <a href="#"><i className="material-icons">compare_arrows</i></a>
                      <a href="#"><i className="material-icons">favorite_border</i></a>
                      <a href="#" className="mad-qv"><i className="material-icons-outlined">remove_red_eye</i></a>
                    </div>
                  </div>
                  <div className="mad-product-description">
                    <a href="#" className="mad-product-cat">Allergies & Sinus</a>
                    <h6 className="mad-product-title"><a href="shop_layout_boxed.html" className="mad-link">Nasonex Allergy Nasal
                      Spray - Twin Pack 140...</a>
                    </h6>
                  </div>
                  {/* <!--/ product-info --> */}
                  <div className="mad-product-info">
                    <div data-estimate="5" className="mad-rating"></div>
                    <div className="mad-info-item">
                      <div className="mad-product-price">$40.45 </div>
                      <a href="shop_cart.html" className="mad-cart"><i className="material-icons-outlined">shopping_bag</i></a>
                    </div>
                    <div className="mad-info-item">
                      <span>Stock (72) Und</span>
                      <div className="mad-progress-bars mad-progress-bars--secondary">
                        <div className="mad-progress-bars-item">
                          <div role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"
                            className="mad-progress-bar">
                            <div style={{ width: "40%" }} className="mad-progress-bar-indicator"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mad-grid-item">
                {/* <!-- Product --> */}
                <div className="mad-product">
                  <div className="mad-product-image">
                    <span className="mad-label">Sale! <br />-30%</span>
                    <img src="images/217x217_product5.jpg" alt="" />
                    <div className="mad-actions">
                      <a href="#"><i className="material-icons">compare_arrows</i></a>
                      <a href="#"><i className="material-icons">favorite_border</i></a>
                      <a href="#" className="mad-qv"><i className="material-icons-outlined">remove_red_eye</i></a>
                    </div>
                  </div>
                  <div className="mad-product-description">
                    <a href="#" className="mad-product-cat">Probiotics</a>
                    <h6 className="mad-product-title"><a href="shop_layout_boxed.html" className="mad-link">Life Space Immune
                      Sup&shy;port Probiotic Cap X 60</a>
                    </h6>
                  </div>
                  <div className="mad-product-info">
                    <div data-estimate="4" className="mad-rating"></div>
                    <div className="mad-info-item">
                      <div className="mad-product-price">$44.79 <span>$55.99</span></div>
                      <a href="shop_cart.html" className="mad-cart"><i className="material-icons-outlined">shopping_bag</i></a>
                    </div>
                    <div className="mad-info-item">
                      <span>Stock (72) Und</span>
                      <div className="mad-progress-bars mad-progress-bars--secondary">
                        <div className="mad-progress-bars-item">
                          <div role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"
                            className="mad-progress-bar">
                            <div style={{ width: "90%" }} className="mad-progress-bar-indicator"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <NewsLetter />
        </div>
      </div>
    </>

  )
}

export default ShoppingCart