import React, { useEffect, useState } from "react"
import Loading from "../Loading"

const fakeData = [
  {
    _id: "1",
    title: "El producto ha sido agregado exitosamente al carrito de compras",
    type: "info",
  },
  {
    _id: "2",
    title: "Segunda notificación recibida hoy jueves 29",
    type: "info",
  },
  {
    _id: "3",
    title: "Tercera notificación recibida hoy viernes 30",
    type: "infdaso",
  },
  {
    _id: "4",
    title: "Cuerta notificación recibida hoy viernes 30",
    type: "inasdfo",
  },
  {
    _id: "5",
    title: "Quinta notificación recibida hoy viernes 30",
    type: "info",
  },
  {
    _id: "6",
    title: "Sexta notificación recibida hoy viernes 30",
    type: "infoas",
  },
]

function Notifications() {
  const [loading, setLoading] = useState(true)
  const [notifications, setNotifications] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage, setPostsPerPage] = useState(5)
  const [lastNotifications, setLastNotifications] = useState([])

  setTimeout(() => {
    setLoading(false)
  }, 4000)

  const getData = () => {
    setNotifications(fakeData)
    setLastNotifications(fakeData.slice(-3))
  }

  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = notifications.slice(indexOfFirstPost, indexOfLastPost)

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
      <div className="shopping-cart mad-dropdown-element">
        {
          loading && <Loading />
        }
        {
          !loading && (
            <>
              <div className="mad-products hr-type style-2">
                {
                  lastNotifications?.map((notification) => (
                    <div key={notification._id} className="mad-product">
                      <button className="mad-close-item">
                        <i className="material-icons-outlined">close</i>
                      </button>
                      <div className="mad-col">
                        <div className="">
                          <h6 style={{ color: "black", fontSize: "16px" }} className="mad-product-title ">
                            <p className="">
                              {notification.title}
                            </p>
                          </h6>
                        </div>
                      </div>
                    </div>
                  ))
                }
              </div>
            </>
          )
        }
      </div>

      {/* <div id="mad-filter-canvas" className="mad-sidebar mad-filter-canvas mad-filter-opened"> */}
      <div id="mad-filter-canvas" className="mad-sidebar mad-filter-canvas">
        <div className="mad-filter-inner">
          <button id="mad-filter-close" className="mad-filter-close">
            <i className="material-icons">close</i>
          </button>
          <div className="mad-widget">
            <h5 className="mad-page-title">
              Notificaciones
            </h5>
          </div>
          {
            loading && <Loading />
          }
          {
            !loading && (
              <>
                <div className="jorge-container-search" style={{
                  display: "flex",
                  flexDirection: "column"
                }}>
                  <div className="jorge-select-bar">
                    <span>
                      Filas por página
                    </span>
                    <div className="mad-col jorge-select-container-row-per-page mad-custom-selectx size-4">
                      <select
                        className="jorge-select-row-per-page"
                        data-default-text="5"
                        value={postsPerPage}
                        onChange={handlePostsPerPageChange}
                      >
                        <option value={5}>5</option>
                        <option value={10}>10</option>
                        <option value={25}>25</option>
                      </select>
                    </div>
                  </div>
                  <div className="mad-search-section jorge-search-bar">
                    <div className="mad-col jorge-search-input-container">
                      <input type="text" placeholder="Buscar..." className="jorge-input-search" />
                    </div>
                    <button type="submit">
                      <i className="material-icons">
                        search
                      </i>
                    </button>
                  </div>
                </div>
                {
                  currentPosts?.map((notification) => (
                    <div key={notification._id}>
                      {
                        notification.type === "info"
                          ? (
                            <div role="alert" className="mad-alert-box mad-alert-box--info" key={notification._id}>
                              <div className="mad-alert-box-inner">
                                {notification.title}
                                <button type="button" className="mad-alert-box-close">Close</button>
                              </div>
                            </div>
                          )
                          : (
                            <div role="alert" className="mad-alert-box mad-alert-box--warning" key={notification._id}>
                              <div className="mad-alert-box-inner">
                                {notification.title}
                                <button type="button" className="mad-alert-box-close">Close</button>
                              </div>
                            </div>
                          )
                      }
                    </div>
                  ))
                }
                <>
                  <ul className="mad-pagination justify-content-center">
                    {Array.from({ length: Math.ceil(notifications?.length / postsPerPage) }, (_, index) => (
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
                  <br />
                </>
              </>
            )
          }
        </div>
      </div>
    </>
  )
}

export default Notifications