import React, { useEffect, useState } from "react"
import Loading from "../../components/Loading"
import PurchaseDetailModal from "../../components/PurchaseDetailModal"
import Breadcrumb from "../../components/Breadcrumb"
import EditPersonalDataModal from "../../components/EditPersonalDataModal"
import EditShippingDataModal from "../../components/EditShippingDataModal"
import CreateShippingDataModal from "../../components/CreateShippingDataModal"
import CreatePaymentMethodModal from "../../components/CreatePaymentMethodModal"
import NewsLetter from "../../components/NewsLetter"
import { EditIcon, TrashIcon } from "../../components/CustomIcons"
import "./MyAccount.css"
import FilterWithoutSearch from "../../components/FilterWithoutSearch"
import FilterWithSearch from "../../components/FilterWithSearch"
import $ from 'jquery'
import useLoadScripts from "../../hooks/useLoadScripts"
import useReloadScripts from "../../hooks/useReloadScripts"
import useDetectDOMChanges from "../../hooks/useDetectDOMChanges"
import useExecuteScriptsOnNavigation from "../../hooks/useExecuteScriptsOnNavigation"

const fakeData = [
  {
    _id: "1",
    numOrder: 2021,
    status: "Pendiente",
    date: "20/10/2001",
    total: "$10,200.00"
  },
  {
    _id: "2",
    numOrder: 2022,
    status: "Pendiente",
    date: "09/02/2022",
    total: "$1,200.00"
  },
  {
    _id: "3",
    numOrder: 2023,
    status: "Completed",
    date: "12/05/2023",
    total: "$200.00"
  },
  {
    _id: "4",
    numOrder: 2024,
    status: "Completed",
    date: "12/05/2026",
    total: "$350.00"
  },
  {
    _id: "5",
    numOrder: 2025,
    status: "Canceled",
    date: "01/01/2025",
    total: "$500.00"
  },
  {
    _id: "6",
    numOrder: 2026,
    status: "Completed",
    date: "01/01/2026",
    total: "$700.00"
  },
  {
    _id: "7",
    numOrder: 2027,
    status: "Completed",
    date: "01/01/2027",
    total: "$1,000.00"
  },
  {
    _id: "8",
    numOrder: 2028,
    status: "Canceled",
    date: "01/01/2028",
    total: "$2,000.00"
  },
  {
    _id: "9",
    numOrder: 2029,
    status: "Completed",
    date: "01/01/2029",
    total: "$150.00"
  },
  {
    _id: "10",
    numOrder: 2030,
    status: "Completed",
    date: "01/01/2030",
    total: "$2,500.00"
  },
  {
    _id: "11",
    numOrder: 2031,
    status: "Completed",
    date: "01/01/2031",
    total: "$3,000.00"
  },
  {
    _id: "12",
    numOrder: 2032,
    status: "Canceled",
    date: "01/01/2032",
    total: "$4,000.00"
  },
  {
    _id: "13",
    numOrder: 2033,
    status: "Completed",
    date: "01/01/2033",
    total: "$5,000.00"
  }
]

function MyAccount() {

  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage, setPostsPerPage] = useState(5)
  const [isPurchaseDetailModalOpen, setIsPurchaseDetailModalOpen] = useState(false)
  const [isShippingDataModalOpen, setIsShippingDataModalOpen] = useState(false)
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)
  const [mostrarMetodosPago, setmostrarMetodosPago] = useState(false)
  const [isCreateShippingDataModalOpen, setIsCreateShippingDataModalOpen] = useState(false)
  const [isCreatePaymentMehtodModalOpen, setIsCreatePaymentMethodModalOpen] = useState(false)
  const [editingAddress, setEditingAddress] = useState(null)
  const [editingPaymentMethod, setEditingPaymentMethods] = useState(null)

  // Datos de envio:
  const [addresses, setAddresses] = useState([
    {
      id: 1,
      type: "shipping",
      street: "Av. Bolivar",
      building: "Edificio Arrecife",
      country: "Vzla, Margarita",
      isDefault: true
    },
    {
      id: 2,
      type: "shipping",
      street: "Pampatar",
      building: "Edificio La Catanta",
      country: "Vzla",
      isDefault: false
    },
  ])
  // Datos de pago:
  const [methods, setMethods] = useState([
    {
      id: 1,
      type: "creditCard",
      name: "Tarjeta Visa terminada en 1234",
      details: {
        cardNumber: "**** **** **** 1234",
        expirationDate: "12/25",
        cardHolder: "Juan Pérez"
      },
      isDefault: true
    },
    {
      id: 2,
      type: "debitCard",
      name: "Tarjeta Maestro terminada en 5678",
      details: {
        cardNumber: "**** **** **** 5678",
        expirationDate: "06/24",
        cardHolder: "María González"
      },
      isDefault: false
    },
    {
      id: 3,
      type: "pagoMovil",
      name: "Pago Móvil Banesco",
      details: {
        cedula: "V-12345678",
        phoneNumber: "0414-1234567",
        bank: "Banesco",
        accountHolder: "Carlos Rodríguez"
      },
      isDefault: false
    },
    {
      id: 4,
      type: "zelle",
      name: "Zelle",
      details: {
        email: "ana.martinez@email.com"
      },
      isDefault: false
    }
  ])

  const handleDeleteAddress = (id) => {
    setAddresses(addresses.filter(addr => addr.id !== id))
  }

  const makeDefault = (id) => {
    setAddresses(prevAddresses =>
      prevAddresses.map(address => ({
        ...address,
        isDefault: address.id === id
      }))
    )
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
      <Breadcrumb title="Mi Cuenta" />
      <div className="mad-content no-pd">
        <div className="container">
          <div className="mad-section">
            <div className="row hr-size-2 vr-size-2 sticky-bar">
              <main id="main" className="col-xl-9 col-lg-8">
                <div className="content-element-10">
                  <div>
                    <h3>
                      Mis Compras
                    </h3>
                  </div>

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
                            Estado de la compra
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

                  <div className="mad-table-wrap shop-acc" style={{marginTop: '1rem'}}>
                    {
                      loading && <Loading />
                    }
                    {
                      !loading && (
                        <>
                          <table className="mad-table--responsive-md">
                            <thead>
                              <tr>
                                <th className="order-number">Orden #</th>
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
                                      data-cell-title="Orden #">
                                      <span className="mad-link-color">
                                        {item.numOrder}
                                      </span>
                                    </td>

                                    <td data-cell-title="Fecha">
                                      {item.date}
                                    </td>

                                    <td data-cell-title="Estado">
                                      {item.status}
                                    </td>

                                    <td data-cell-title="Total">
                                      {item.total}
                                    </td>

                                    <td data-cell-title="Acción">
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

                <div className="content-element-15">
                  <h3>
                    Información Personal
                  </h3>
                  <div className="content-element-4">
                    <div className="mad-text-title">
                      Bienvenido, Daniel! (no eres Daniel Passantino?
                      <a href="#" className="mad-link-color">
                        Cerrar sesión
                      </a>)
                    </div>
                    <p className="mad-text-medium">
                      Desde el panel de control de tu cuenta puedes ver tus pedidos recientes, gestionar tus direcciones de envío y facturación y{" "}
                      <span
                        className="mad-link-color"
                        style={{ cursor: "pointer" }}
                        onClick={() => setIsEditModalOpen(true)}
                      >
                        Editar tu contraseña y datos personales
                      </span>.
                    </p>
                  </div>
                  <div className="content-element-4">
                    <div className="mad-text-title">
                      Mis direcciones
                    </div>
                    {addresses.length ?
                      (
                        <>
                          <div>
                            {addresses.map((add) => (
                              <div
                                key={add.id}
                                style={{
                                  display: "flex",
                                  flexDirection: "column",
                                  marginBottom: "1rem"
                                }}
                                className="flex"
                              >
                                <p
                                  style={{
                                    display: "flex",
                                    flexDirection: "column"
                                  }}
                                >
                                  *{add.street + "," + add.building + "," + add.country} {add.isDefault ? (
                                    <span style={{ fontSize: "14px" }}>
                                      (Predeterminada)
                                    </span>
                                  ) :
                                    (
                                      <span
                                        style={{ fontSize: "14px", color: "green" }}
                                        className="mad-link"
                                        onClick={() =>
                                          makeDefault(add.id)}
                                      >
                                        Hacer predeterminada
                                      </span>
                                    )}
                                </p>

                                <div
                                  style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    gap: "1rem"
                                  }}
                                >
                                  <button
                                    onClick={() => setIsShippingDataModalOpen(true)}
                                    className="btn btn-style-1"
                                    style={{
                                      width: "11%",
                                      fontSize: "15px",
                                      backgroundColor: "gray",
                                      padding: ".5rem 0",
                                    }}
                                  >
                                    <EditIcon />
                                  </button>

                                  <button
                                    className="btn btn-style-1"
                                    style={{
                                      width: "11%",
                                      fontSize: "15px",
                                      backgroundColor: "red",
                                      padding: ".5rem 0"
                                    }}
                                    onClick={() => handleDeleteAddress(add.id)}
                                  >
                                    <TrashIcon />
                                  </button>
                                </div>
                              </div>
                            ))}
                          </div>

                          <button
                            onClick={() => setIsCreateShippingDataModalOpen(true)}
                            className="btn btn-style-1"
                            style={{ margin: "0 auto", marginTop: "1rem" }}
                          >
                            Agregar Dirección
                          </button>
                        </>
                      ) : (
                        <div style={{ gap: "1rem" }}>
                          <p className="mad-text-medium">
                            Las siguientes direcciones serán usadas en el checkout del carrito de compras.
                          </p>
                          <button
                            className="btn btn-style-1"
                            onClick={() => setIsShippingDataModalOpen(true)}
                          >
                            Agregar Dirección
                          </button>
                        </div>
                      )}
                  </div>
                  <div className="content-element-4">
                    <div className="row vr-size-1">
                      <div className="col-sm-6">
                        <div className="mad-text-title">
                          Métodos de pago
                        </div>
                        {mostrarMetodosPago ? (
                          methods.map(address => (
                            <div key={address.id} className="mb-4">
                              <p className="mad-text-normal">
                                {address.st} <br />
                                {address.building}<br />
                                {address.country}
                                {address.isDefault && <span className="text-green-600"> (Predeterminada)</span>}
                              </p>
                              <button className="btn btn-small mr-2" >
                                Editar
                              </button>
                              <button
                                className="btn btn-small"
                                onClick={() => handleDeleteAddress(address.id)}
                              >
                                Eliminar
                              </button>
                            </div>
                          ))
                        ) : (
                          <>
                            <div style={{ gap: "1rem", marginTop: "2rem", }}>
                              <p style={{ position: "relative", top: "20%", }}>
                                No hay ningún método de pago registrado aún
                              </p>
                              <button
                                className="btn btn-style-1"
                                onClick={() => setIsCreatePaymentMethodModalOpen(true)}
                              >
                                Agregar Método
                              </button>
                            </div>
                          </>
                        )}
                      </div>
                      <div className="col-sm-6">
                        <div className="mad-text-title">
                          Dirección de envío
                        </div>
                        {addresses.filter(addr => addr.isDefault === true) ? (
                          addresses.filter(addr => addr.isDefault === true).map(address => (
                            <div key={address.id} className="mb-4">
                              <p className="mad-text-normal">
                                Daniel Passantino <br />
                                {address.street} <br />
                                {address.building}<br />
                                {address.country}
                                {address.isDefault && <span className="text-green-600"> (Predeterminada)</span>}
                              </p>
                              <div>
                              </div>
                            </div>
                          ))
                        )
                          :
                          (
                            <>
                              <div
                                style={{
                                  display: "flex",
                                  flexDirection: "column",
                                  gap: "1rem",
                                  marginTop: "2rem",
                                }}
                              >
                                <p style={{ position: "relative", top: "20%", }}>
                                  No hay ninguna dirección de envío seleccionada aún
                                </p>
                              </div>
                            </>
                          )}
                      </div>
                    </div>
                  </div>
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

      <EditPersonalDataModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
      />

      <PurchaseDetailModal
        isOpen={isPurchaseDetailModalOpen}
        onClose={() => setIsPurchaseDetailModalOpen(false)}
      />

      <EditShippingDataModal
        isOpen={isShippingDataModalOpen}
        onClose={() => setIsShippingDataModalOpen(false)}
      />

      <CreateShippingDataModal
        isOpen={isCreateShippingDataModalOpen}
        onClose={() => setIsCreateShippingDataModalOpen(false)}
      />

      <CreatePaymentMethodModal
        isOpen={isCreatePaymentMehtodModalOpen}
        onClose={() => setIsCreatePaymentMethodModalOpen(false)}
      />
    </>
  )
}

export default MyAccount