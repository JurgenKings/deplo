import React, { useEffect, useState } from "react"
import Breadcrumb from "../../components/Breadcrumb"
import Loading from "../../components/Loading"
import OrderDetailModal from "../../components/OrderDetailModal"
import NewsLetter from "../../components/NewsLetter"
import FilterWithSearch from "../../components/FilterWithSearch"
import FilterWithoutSearch from "../../components/FilterWithoutSearch"

const fakeData = [
  {
    _id: "sadasd23232awewe",
    numOrder: 2021,
    status: "Procesando",
    sendedBy: "ZOOM",
    date: "20/10/2001",
    total: "$10,200.00"
  },
  {
    _id: "sadasd23232awewesada",
    numOrder: 2022,
    status: "Procesando",
    sendedBy: "ZOOM",
    date: "09/02/2022",
    total: "$1,200.00"
  },
  {
    _id: "sadasd2323w2ewe",
    numOrder: 2023,
    status: "Entregado",
    sendedBy: "ZOOM",
    date: "12/05/2023",
    total: "$200.00"
  },
  {
    _id: "sadasd23232awewk",
    numOrder: 2024,
    status: "Entregado",
    sendedBy: "ZOOM",
    date: "12/05/2026",
    total: "$350.00"
  },
  {
    _id: "sadasd23232awewell",
    numOrder: 2025,
    status: "Cancelado",
    sendedBy: "ZOOM",
    date: "01/01/2025",
    total: "$500.00"
  },
]

function Orders() {

  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage, setPostsPerPage] = useState(5)
  const [isPurchaseDetailModalOpen, setIsPurchaseDetailModalOpen] = useState(false)
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

  setTimeout(() => {
    setLoading(false)
  }, 4000)

  const getData = () => {
    setData(fakeData)
  }

  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost)

  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  const handlePostsPerPageChange = (e) => {
    setPostsPerPage(Number(e.target.value))
    setCurrentPage(1)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <>
      <Breadcrumb title="Mis Pedidos" />
      <div className="mad-content no-pd">
        <div className="container">
          <div className="mad-section">
            <div className="row hr-size-2 vr-size-2 sticky-bar">
              <main id="main" className="col-xl-9 col-lg-8">
                <div className="content-element-10">

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
                            Estado del pedido
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
                                Procesando
                              </label>
                            </div>
                            <div>
                              <input type="checkbox" name="checkbox-4" id="checkbox-4" />
                              <label htmlFor="checkbox-4" className="mad-label-checkbox">
                                Enviado
                              </label>
                            </div>
                            <div>
                              <input type="checkbox" name="checkbox-2" id="checkbox-2" />
                              <label htmlFor="checkbox-2" className="mad-label-checkbox">
                                Entregado
                              </label>
                            </div>
                            <div>
                              <input type="checkbox" name="checkbox-3" id="checkbox-3" />
                              <label htmlFor="checkbox-3" className="mad-label-checkbox">
                                Cancelado
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

                  <div style={{ marginTop: '1rem' }} className="mad-table-wrap shop-acc">
                    {
                      loading && <Loading />
                    }
                    {
                      !loading && (
                        <>
                          <table className="mad-table--responsive-md">
                            <thead>
                              <tr>
                                <th className="order-number">#</th>
                                <th className="order-date">Fecha</th>
                                <th>Estado</th>
                                <th>Total</th>
                                <th>Acción</th>
                              </tr>
                            </thead>
                            <tbody>
                              {
                                currentPosts?.map((item) => (
                                  <tr key={item._id}>

                                    <td
                                      data-cell-title="Order #">
                                      <span className="mad-link-color">
                                        {item.numOrder}
                                      </span>
                                    </td>

                                    <td data-cell-title="Date">
                                      {item.date}
                                    </td>

                                    <td data-cell-title="Status">
                                      {item.status}
                                    </td>

                                    <td data-cell-title="Total">
                                      {item.total}
                                    </td>

                                    <td data-cell-title="Action">
                                      <button
                                        className="mad-link-color"
                                        onClick={() => {
                                          setIsPurchaseDetailModalOpen(true)
                                        }}
                                      >
                                        Ver Detalles
                                      </button>
                                    </td>
                                  </tr>
                                ))
                              }
                            </tbody>
                          </table>
                        </>
                      )
                    }
                  </div>
                  {
                    !loading && (
                      <ul className="mad-pagination justify-content-center">
                        {Array.from({ length: Math.ceil(data.length / postsPerPage) }, (_, index) => (
                          <li key={index}>
                            <button
                              className={`page-numbers ${index + 1 === currentPage ? "current" : ""} jorge-button-pagination`}
                              onClick={() => paginate(index + 1)}
                            >
                              {index + 1}
                            </button>
                          </li>
                        ))}
                      </ul>
                    )
                  }
                </div>
              </main>

              <aside id="sidebar" className="col-xl-3 col-lg-4 mad-sidebar">
                <div className="mad-widget">
                  <div className="mad-products-with-countdown">
                    <h6 style={{ marginRight: "1rem" }} className="mad-page-title with-carousel">
                      Oferta especial
                    </h6>
                    <div className="mad-products style-2 owl-carousel mad-grid mad-grid--cols-1 no-dots nav-top">
                      <div className="mad-grid-item">
                        <div className="mad-product">
                          <div className="mad-product-image">
                            <span className="mad-label">
                              Con <br />
                              -35%
                            </span>
                            <img src="images/288x288_product2.jpg" alt="" />
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
                              Fitness
                            </a>
                            <h6 className="mad-product-title">
                              <a href="shop_layout_boxed.html" className="mad-link">
                                Otlins Endulge Milk Choco&shy;late Mint Crisp Bar...
                              </a>
                            </h6>
                          </div>
                          <div className="mad-product-info">
                            <div className="mad-info-item">
                              <div className="mad-product-price">
                                $11.69 <span>$17.99</span>
                              </div>
                              <a href="shop_cart.html" className="mad-cart">
                                <i className="material-icons-outlined">shopping_bag</i>
                              </a>
                            </div>
                            <div className="mad-info-item">
                              <div className="mad-info-title">
                                Corre! la oferta se acaba en:
                              </div>
                              <div
                                data-year="2021"
                                data-month="11"
                                data-day="6"
                                data-hours="15"
                                data-minutes="0"
                                data-seconds="0"
                                className="mad-countdown size-2"
                              ></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mad-grid-item">
                        <div className="mad-product">
                          <div className="mad-product-image">
                            <span className="mad-label">
                              Con <br />
                              -35%
                            </span>
                            <img src="images/288x288_product2.jpg" alt="" />
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
                              Fitness
                            </a>
                            <h6 className="mad-product-title">
                              <a href="shop_layout_boxed.html" className="mad-link">
                                Otlins Endulge Milk Choco&shy;late Mint Crisp Bar...
                              </a>
                            </h6>
                          </div>
                          <div className="mad-product-info">
                            <div className="mad-info-item">
                              <div className="mad-product-price">
                                $11.69 <span>$17.99</span>
                              </div>
                              <a href="shop_cart.html" className="mad-cart">
                                <i className="material-icons-outlined">shopping_bag</i>
                              </a>
                            </div>
                            <div className="mad-info-item">
                              <div className="mad-info-title">
                                Corre! la oferta se acaba en:
                              </div>
                              <div
                                data-year="2021"
                                data-month="11"
                                data-day="6"
                                data-hours="15"
                                data-minutes="0"
                                data-seconds="0"
                                className="mad-countdown size-2">
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mad-grid-item">
                        <div className="mad-product">
                          <div className="mad-product-image">
                            <span className="mad-label">
                              Con <br />
                              -35%
                            </span>
                            <img src="images/288x288_product2.jpg" alt="" />
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
                              Fitness
                            </a>
                            <h6 className="mad-product-title">
                              <a href="shop_layout_boxed.html" className="mad-link">
                                Otlins Endulge Milk Choco&shy;late Mint Crisp Bar...
                              </a>
                            </h6>
                          </div>
                          <div className="mad-product-info">
                            <div className="mad-info-item">
                              <div className="mad-product-price">
                                $11.69 <span>$17.99</span>
                              </div>
                              <a href="shop_cart.html" className="mad-cart">
                                <i className="material-icons-outlined">shopping_bag</i>
                              </a>
                            </div>
                            <div className="mad-info-item">
                              <div className="mad-info-title">
                                Corre! la oferta se acaba en:
                              </div>
                              <div
                                data-year="2021"
                                data-month="11"
                                data-day="6"
                                data-hours="15"
                                data-minutes="0"
                                data-seconds="0"
                                className="mad-countdown size-2"
                              ></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mad-widget">
                  <h5 className="mad-widget-title">
                    Visto ultimamente
                  </h5>
                  <div className="mad-products hr-type style-2">
                    <div className="mad-product">
                      <div className="mad-product-image">
                        <img src="/images/144x144_product4.jpg" alt="" />
                      </div>
                      <div className="mad-col">
                        <div className="mad-product-description">
                          <a href="#" className="mad-product-cat">
                            Skin Care
                          </a>
                          <h6 className="mad-product-title">
                            <a href="shop_layout_boxed.html" className="mad-link">
                              Jack Phunkett Super&shy;Fade Face Cream ...
                            </a>
                          </h6>
                        </div>
                        <div className="mad-product-info">
                          <div className="mad-info-item">
                            <div className="mad-product-price">
                              $17.99
                            </div>
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
                          <a href="#" className="mad-product-cat">
                            Waxing & Hair Removal
                          </a>
                          <h6 className="mad-product-title">
                            <a href="shop_layout_boxed.html" className="mad-link">
                              Minea For Men Extra Moisturising ...
                            </a>
                          </h6>
                        </div>
                        <div className="mad-product-info">
                          <div className="mad-info-item">
                            <div className="mad-product-price">
                              $7.95
                            </div>
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
                          <a href="#" className="mad-product-cat">
                            Bath & Body
                          </a>
                          <h6 className="mad-product-title">
                            <a href="shop_layout_boxed.html" className="mad-link">
                              Posken Intensive Moisture Body ...
                            </a>
                          </h6>
                        </div>
                        <div className="mad-product-info">
                          <div className="mad-info-item">
                            <div className="mad-product-price">
                              $12.99
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </div>

          <NewsLetter />
        </div >
      </div >

      <OrderDetailModal
        isOpen={isPurchaseDetailModalOpen}
        onClose={() => setIsPurchaseDetailModalOpen(false)}
      />
    </>
  )
}

export default Orders