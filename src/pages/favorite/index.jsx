import React, { useEffect, useState } from "react"
import toast, { Toaster } from "react-hot-toast"
import Loading from "../../components/Loading"
import Breadcrumb from "../../components/Breadcrumb"
import NewsLetter from "../../components/NewsLetter"
import FilterWithoutSearch from "../../components/FilterWithoutSearch"
import FilterWithSearch from "../../components/FilterWithSearch"
import $ from 'jquery'
import useLoadScripts from "../../hooks/useLoadScripts"
import useReloadScripts from "../../hooks/useReloadScripts"
import useDetectDOMChanges from "../../hooks/useDetectDOMChanges"
import useExecuteScriptsOnNavigation from "../../hooks/useExecuteScriptsOnNavigation"

const fakeData = [
  {
    id: 1,
    nameProduct: "Jack Phunkett SuperFade Face Cream 40ml",
    image: "images/96x96_product1.jpg",
    price: "$10.00",
    statusStock: "In Stock",
  },
  {
    id: 2,
    nameProduct: "SuperFade Face Ice Cream",
    image: "images/96x96_product2.jpg",
    price: "$15.00",
    statusStock: "In Stock",
  },
  {
    id: 3,
    nameProduct: "SuperFade Face Mask",
    image: "images/96x96_product2.jpg",
    price: "$12.00",
    statusStock: "No Disponible",
  }
]

function Favorite() {
  const [loading, setLoading] = useState(true)
  const [favorites, setFavorites] = useState([])

  setTimeout(() => {
    setLoading(false)
  }, 4000)

  const getFavorites = () => {
    setFavorites(fakeData)
  }

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    window.addEventListener('resize', handleResize)
    handleResize()
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

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

  const deleteProduct = (id) => {
    toast((t) => (
      <div>
        <p>¿Estás seguro que quieres eliminar este producto de favoritos?</p>
        <div>
          <button
            className="btn btn-style-1"
            onClick={() => {
              setFavorites(favorites.filter(favorite => favorite.id !== id))
              toast.dismiss(t.id)
              toast.success("Producto eliminado de favoritos")
            }}
          >
            Sí, eliminar
          </button>
          <button
            className="btn btn-style-1"
            style={{ marginLeft: "10px", backgroundColor: "gray" }}
            onClick={() => toast.dismiss(t.id)}>Cancelar</button>
        </div>
      </div>
    ), { duration: Infinity })
  }

  useEffect(() => {
    getFavorites()
  }, [])







  useExecuteScriptsOnNavigation([
    '/vendors/test.js',
    // '/vendors/monkeysan.jquery.nav.1.0.js',
    // '/vendors/owl-carousel/owl.carousel.min.js',
    // '/vendors/mad.customselect.js',
    // '/vendors/countdown/jquery.plugin.min.js',
    // '/vendors/countdown/jquery.countdown.js',
    // '/js/mad.app.js'
  ])

  // useDetectDOMChanges([
  //   '/vendors/test.js',
  //   // '/vendors/monkeysan.jquery.nav.1.0.js',
  //   // '/vendors/owl-carousel/owl.carousel.min.js',
  //   // '/vendors/mad.customselect.js',
  //   // '/vendors/countdown/jquery.plugin.min.js',
  //   // '/vendors/countdown/jquery.countdown.js',
  //   // '/js/mad.app.js'
  // ])

  // useReloadScripts([
  //   '/vendors/test.js',
  //   // '/vendors/monkeysan.jquery.nav.1.0.js',
  //   // '/vendors/owl-carousel/owl.carousel.min.js',
  //   // '/vendors/mad.customselect.js',
  //   // '/vendors/countdown/jquery.plugin.min.js',
  //   // '/vendors/countdown/jquery.countdown.js',
  //   // '/js/mad.app.js'
  // ])


  // useLoadScripts([
  //   '/vendors/test.js',
  //   // '/vendors/monkeysan.jquery.nav.1.0.js',
  //   // '/vendors/owl-carousel/owl.carousel.min.js',
  //   // '/vendors/mad.customselect.js',
  //   // '/vendors/countdown/jquery.plugin.min.js',
  //   // '/vendors/countdown/jquery.countdown.js',
  //   // '/js/mad.app.js'
  // ])

  // useEffect(() => {
  //   // Aquí colocas tus scripts jQuery
  //   $(document).ready(function() {
  //     // Tu código jQuery
  //     $.getScript('/vendors/test.js')

  //     // $.getScript('/vendors/monkeysan.jquery.nav.1.0.js')
  //     // $.getScript('/vendors/owl-carousel/owl.carousel.min.js')
  //     // $.getScript('/vendors/mad.customselect.js')
  //     // $.getScript('/vendors/countdown/jquery.plugin.min.js')
  //     // $.getScript('/vendors/countdown/jquery.countdown.js')
  //     // $.getScript('/js/mad.app.js')
  //   })
  // }, [])



  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <Breadcrumb title="Mis Favoritos" />
      <div className="mad-content no-pd">
        <div className="container">
          <div className="mad-section">

            {isMobile ? (
              <FilterWithoutSearch />
            ) : (
              <FilterWithSearch />
            )}

            <div id="mad-filter" className="mad-filter-section mad-sidebar">
              <div className="row">
                <div className="col-lg-6">
                  <div className="mad-widget">
                    <h5 className="mad-widget-title">
                      Estado del stock
                    </h5>
                    <div
                      style={{
                        display: "flex",
                        gap: "1rem",
                        marginBottom: "1rem",
                        alignItems: "center",
                        overflowX: `${isMobile ? 'auto': ''}`,
                      }} className="mad-toggled-fields style-2 size-2"
                    >
                      <div>
                        <input type="checkbox" name="checkbox-1" id="checkbox-1" />
                        <label htmlFor="checkbox-1" className="mad-label-checkbox">
                          En Stock
                        </label>
                      </div>
                      <div>
                        <input type="checkbox" name="checkbox-4" id="checkbox-4" />
                        <label htmlFor="checkbox-4" className="mad-label-checkbox">
                          No Disponible
                        </label>
                      </div>
                      <div>
                        <a href="#" className="btn btn-small">
                          Filtrar
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>


            <div className="mad-table-wrap shop-cart-form wishlist content-element-3 shopping-cart-full" style={{marginTop: '1rem'}}>
              {
                loading && <Loading />
              }
              {
                !loading && (
                  <>
                    <table className="mad-table--responsive-md">
                      <thead>
                        <tr>
                          <th>Producto</th>
                          <th>Precio</th>
                          <th>Estado del Stock</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                          favorites?.map((favorite => (
                            <tr key={favorite?.id} className="mad-product-item">

                              <td data-cell-title="Producto">
                                <div className="mad-products mad-product-small">
                                  <div className="mad-col">
                                    <div className="mad-product">
                                      <button
                                        onClick={() => deleteProduct(favorite?.id)}
                                      >
                                        <i className="material-icons-outlined" style={{ fontSize: "1.5rem" }}>close</i>
                                      </button>
                                      <a href="#" className="mad-product-image">
                                        <img src={favorite?.image} alt="" />
                                      </a>
                                      <div className="mad-product-description">
                                        <h5 className="mad-product-title">
                                          <a href="shop_layout_boxed.html">
                                            {favorite?.nameProduct}
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
                                    {favorite?.price}
                                  </span>
                                </div>
                              </td>

                              <td data-cell-title="Estado del Stock">
                                <a href="#" className="mad-link">
                                  <b>
                                    {favorite?.statusStock}
                                  </b>
                                </a>
                              </td>

                              <td data-cell-title="Acción">
                                <button
                                  className="btn btn-style-3"
                                  onClick={() => {
                                    notify(favorite.nameProduct)
                                  }}
                                >
                                  <span>
                                    Añadir al
                                  </span>
                                  <i className="material-icons-outlined">shopping_bag</i>
                                </button>
                              </td>
                            </tr>
                          )))
                        }
                      </tbody>
                    </table>
                  </>
                )
              }
            </div>
            <div className="mad-share-wrap">
              <span>
                Compartir en:
              </span>
              <div className="mad-social-icons size-small-2">
                <ul>
                  <li>
                    <a href="#">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-envelope"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-pinterest-p"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <NewsLetter />
        </div>
      </div>
    </>
  )
}

export default Favorite