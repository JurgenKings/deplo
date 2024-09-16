import React, { useEffect, useState } from "react"
import Loading from "../../components/loading"
import ImageSkeleton from "./ImageSkeleton"
import NewsLetter from "../../components/NewsLetter"
import "./ProductDetail.css"

const fakeData = [
  {
    _id: "jasdjdsahjsahas",
    state: "Nueva Esparta",
    branch: "Porlamar",
    stock: 46
  },
  {
    _id: "877ejsjjgsdajgsda",
    state: "Caracas",
    branch: "La Candelaria",
    stock: 86
  },
  {
    _id: "877ejsjjgsd34sfdajgsda",
    state: "Maracay",
    branch: "Este",
    stock: 10
  },

]

function ProductDetail() {

  const [loading, setLoading] = useState(true)
  const [fakeImages, setFakeImages] = useState(null)
  const [product, setProduct] = useState(null)
  const [error, setError] = useState(null)
  const [shouldShowBranches, setShouldShowBranches] = useState(false)
  const [selectedBranch, setSelectedBranch] = useState("Ver en otras sucursales:")
  const [selected, setSelected] = useState("Nueva Esparta - Porlamar")
  const [stock, setStock] = useState(50)

  useEffect(() => {
    const fetchImagesAndProduct = async () => {
      setLoading(true)
      try {
        // Simular carga de imágenes
        const imagesResponse = await new Promise((resolve) =>
          setTimeout(() => resolve([
            {
              url: "../images/112x112_product1.jpg",
              url2: "../images/592x592_product1.jpg"
            },
            {
              url: "../images/112x112_product1.jpg",
              url2: "../images/592x592_product1.jpg"
            },
            {
              url: "../images/112x112_product1.jpg",
              url2: "../images/592x592_product1.jpg"
            },
            {
              url: "../images/112x112_product1.jpg",
              url2: "../images/592x592_product1.jpg"
            },
          ]), 3000)
        )
        setFakeImages(imagesResponse)

        // Simular carga de información del producto
        const productResponse = await new Promise((resolve) =>
          setTimeout(() => resolve({
            success: true,
            data: {
              title: "Wovalan Allergy Premium Infant Formula (0-12 Months) 800g",
              price: 41.95,
              description: "Ut tellus dolor, dapibus eget, elementum vel, cursus eleifend, elit. Aenean auctor wisi et urna. Aliquam erat volutpat. Duis ac turpis.",
            }
          }), 3000)
        )

        if (productResponse.success) {
          setProduct(productResponse.data)
        } else {
          setError("No se pudo cargar la información del producto.")
        }
      } catch (error) {
        setError("Hubo un error al cargar la información. Por favor, inténtalo de nuevo más tarde.")
      } finally {
        setLoading(false)
      }
    }

    fetchImagesAndProduct()
  }, [])

  // const handleChangeBranch = (branchName) => {
  //   setShouldShowBranches(true)
  //   setSelectedBranch(branchName)
  // }

  return (
    <div className="mad-content no-pd">
      <div className="mad-breadcrumb single-page">
        <div className="container">
          <nav className="mad-breadcrumb-path">
            <span>
              <a href="index.html" className="mad-link">
                Home
              </a>
            </span> /
            <span>
              <a href="#" className="mad-link">
                Bebes
              </a>
            </span> /
            <span>
              <a href="#" className="mad-link">
                Alimentación
              </a>
            </span> /
            <span>
              Wovalan Allergy Premium Infant Formula (0-12 Meses) 800g
            </span>
            <ul className="mad-pagination justify-content-center">
              <li><a href="#" className="prev mad-arrows"></a></li>
              <li><a href="#" className="next mad-arrows"></a></li>
            </ul>
          </nav>
        </div>
      </div>

      <div className="container">
        <div className="mad-section">
          <div className="content-element-10">
            <div className="mad-product mad-product-single">
              <div className="row hr-size-2 vr-size-2 sticky-bar">
                <div className="col-xl-6">

                  <div className="image-preview-container">
                    {/* Image Preview Container */}
                    <div className="image-preview">
                      <a href="#">
                        {loading ? (
                          <ImageSkeleton width="500px" height="500px" />
                        ) : (
                          <>
                            <img id="zoom-image" src="../images/592x592_product1.jpg" alt="" />
                            <a href="images/592x592_product1.jpg" className="mad-zoom-img" data-fancybox="group">
                              <i className="material-icons">fullscreen</i>
                            </a>
                          </>
                        )}
                      </a>

                    </div>
                    {/* End of Image Preview */}

                    {/* Galeria */}
                    <div className="mad-thumb-holer">
                      <div className="mad-product-thumbs" id="thumbnails">
                        {loading ? (
                          // Mostramos 4 skeletons mientras carga
                          Array(4).fill().map((_, index) => (
                            <div className="mad-grid-item" key={index}>
                              <ImageSkeleton width="112px" height="112px" />
                            </div>
                          ))
                        ) : (
                          fakeImages.map((image, index) => (
                            <div className="mad-grid-item" key={index}>
                              <a className="active" href="" data-image={image.url2} data-zoom-image={image.url2}>
                                <img src={image.url} alt={`Product thumbnail ${index + 1}`} style={{ width: "112px", height: "112px" }} />
                              </a>
                            </div>
                          ))
                        )}
                      </div>
                    </div>
                    {/* Galeria */}
                  </div>
                </div>
                {loading ? (
                  <div className="col-xl-6 center">
                    <Loading />
                  </div>
                ) : product ? (

                  <div className="col-xl-6">
                    <h3 className="mad-product-title">
                      {product.title}
                    </h3>
                    <div className="mad-product-info">

                      <div className="mad-info-item" style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "flex-start"
                      }}>

                    <div className="mad-col" style={{
                          width: "40%",
                          display: "flex",
                          justifyContent: "",
                          flexDirection: "column",
                          alignItems: "flex-end",
                          gap: "0.5rem",
                          marginTop: "1rem",
                          marginRight: "1rem",
                          marginBottom: '3rem'
                        }}>
                          {
                            fakeData?.map((item) => (
                              <div key={item._id} className="mad-col" style={{
                                width: "100%",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "flex-start",
                                boxSizing: "border-box",
                                padding: "0 10px",
                              }}>
                                <div>
                                  <span>
                                    {item.state} - {item.branch}
                                  </span>
                                </div>
                                <div className="mad-progress-bars mad-progress-bars--secondary">
                                  <span>
                                    Stock ({item.stock} unid)
                                  </span>
                                  <div className="mad-progress-bars-item">
                                    <div
                                      role="progressbar"
                                      aria-valuenow={`${item.stock}`}
                                      aria-valuemin="0"
                                      aria-valuemax="100"
                                      className="mad-progress-bar"
                                    >
                                      <div style={{ width: `${item.stock}%` }} className="mad-progress-bar-indicator"></div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ))
                          }
                        </div>
                        <div className="mad-col" style={{
                          width: "15%",
                          marginRight:'3rem',
                          marginTop: '1rem'
                        }}>
                          <div className="mad-text-small content-element" >
                            De <a href="#" className="mad-link">(Marca)</a>
                          </div>
                          <div data-estimate="5" className="mad-rating">
                          </div>
                          <a href="#">
                            (5 Reseñas)
                          </a>
                        </div>

                      
                      </div>

                      <div className="mad-info-item" style={{
                        marginTop: "-3rem"
                      }}>
                        <div className="mad-product-price">
                          ${product.price}
                        </div>
                      </div>
                      <div className="mad-info-item">
                        <p className="mad-text-small">
                          {product.description}
                        </p>
                      </div>
                      <div className="mad-info-item">
                        <div>
                          <p className="mad-text-small content-element">
                            Cantidad
                          </p>
                          <div className="btn-set">
                            <div className="quantity size-2">
                              <input type="text" value="1" readOnly />
                              <button type="button" className="qty-plus">
                                <i className="material-icons">add</i>
                              </button>
                              <button type="button" className="qty-minus">
                                <i className="material-icons">remove</i>
                              </button>
                            </div>
                            <a href="shop_cart.html" className="btn btn-big btn-style-3">
                              <i className="material-icons-outlined">shopping_bag</i>
                              <span>
                                Añadir al carrito
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="mad-info-item">
                        <div className="btn-set mad-text-small mad-links">
                          <a href="#" className="mad-link-color">
                            <i className="material-icons">favorite_border</i>
                            <span>
                              Añadir a favoritos
                            </span>
                          </a>
                          <a href="#" className="mad-link-color">
                            <i className="material-icons">compare_arrows</i>
                            <span>Compartir</span>
                          </a>
                        </div>
                      </div>
                      <div className="mad-info-item">
                        <ul className="product-meta">
                          <li>
                            <span>
                              SKU:
                            </span> 100396
                          </li>
                          <li>
                            <span>
                              Categoria:
                            </span>
                            <a href="#" className="mad-link">
                              Bebes
                            </a>,
                            <a href="#" className="mad-link">
                              Feeding
                            </a>
                          </li>
                          <li className="tags">
                            <span>
                              Etiquetas:
                            </span>
                            <div className="tagcloud">
                              <a href="#">
                                0-12 meses
                              </a>
                              <a href="#">
                                alergia
                              </a>
                              <a href="#">
                                alimentación
                              </a>
                            </div>
                          </li>
                          <li className="tags">
                            <span>Comparte:</span>
                            <div className="mad-social-icons type-2">
                              <ul>
                                <li>
                                  <a href="#">
                                    <i className="fab fa-facebook-f"></i>
                                  </a>
                                </li>
                                <li>
                                  <a href="#" className="color-2">
                                    <i className="fab fa-twitter"></i>
                                  </a>
                                </li>
                                <li>
                                  <a href="#" className="color-3">
                                    <i className="fa fa-envelope"></i>
                                  </a>
                                </li>
                                <li>
                                  <a href="#" className="color-4">
                                    <i className="fab fa-pinterest-p"></i>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div>No se pudo cargar la información del producto.</div>
                )}
              </div>
            </div>
          </div>

          <div className="content-element-10">
            {/* <!--================ Tabs ================--> */}
            <div className="mad-tabs mad-tabs--style-2">
              {/* <!--================ Tabs Navigation ================--> */}
              <div role="tablist" aria-label="Tabs v1" className="mad-tabs-nav">
                <span className="mad-active">
                  <a
                    id="tab-4-link"
                    href="#tab-4"
                    role="tab"
                    aria-selected="true"
                    aria-controls="tab-4"
                    className="mad-tab-link"
                  >
                    Descripción
                  </a>
                </span>
                <span>
                  <a
                    id="tab-5-link"
                    href="#tab-5"
                    role="tab"
                    aria-selected="false"
                    aria-controls="tab-5"
                    className="mad-tab-link"
                  >
                    Información Adicional
                  </a>
                </span>
                <span>
                  <a
                    id="tab-6-link"
                    href="#tab-6"
                    role="tab"
                    aria-selected="false"
                    aria-controls="tab-6"
                    className="mad-tab-link"
                  >
                    Reseñas (5)
                  </a>
                </span>
                <span>
                  <a
                    id="tab-7-link"
                    href="#tab-7"
                    role="tab"
                    aria-selected="false"
                    aria-controls="tab-7"
                    className="mad-tab-link"
                  >
                    Envíos y Devoluciones
                  </a>
                </span>
              </div>
              {/* <!--================ End of Tabs Navigation ================--> */}

              {/* <!--================ Tabs Container ================--> */}

              <div className="mad-tabs-container">
                {/* <!--================ Tab ================--> */}
                <div id="tab-4" tabIndex="0" role="tabpanel" aria-labelledby="tab-4-link" className="mad-tab">
                  <p>
                    Mauris fermentum dictum magna. Sed laoreet aliquam leo. Ut tellus dolor, dapibus eget, elementumvel, cursus eleifendelit. Aenean auctor wisi et urna. Aliquam erat volutpat. Duis ac turpis. Integer rutrum ante euacus. Vestibulum liberonisl, porta vel, scelerisque eget, malesuada at, neque. Vivamus eget nibh. Etiam cursus lemetus. NulAenean nec eros. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubCurae.
                  </p>
                  <ul className="mad-list--icon">
                    <li>
                      Suspendisse sollicitudin velit sed leo.
                      <i className="icon material-icons">arrow_forward</i>
                    </li>
                    <li>
                      Ut pharetra augue nec augue
                      <i className="icon material-icons">arrow_forward</i>
                    </li>
                    <li>
                      Nam elit agna, endrerit sit amet, tincidunt ac, viverra sed, nulla
                      <i className="icon material-icons">arrow_forward</i>
                    </li>
                    <li>
                      Donec porta diam eu massa
                      <i className="icon material-icons">arrow_forward</i>
                    </li>
                    <li>
                      Quisque diam lorem, interdum vitae, dapibus ac.
                      <i className="icon material-icons">arrow_forward</i>
                    </li>
                  </ul>
                </div>
                {/* <!--================ End of Tab ================--> */}
                {/* <!--================ Tab ================--> */}
                <div id="tab-5" tabIndex="0" role="tabpanel" aria-labelledby="tab-5-link" className="mad-tab">
                  <div className="mad-table-wrap">
                    <table className="mad-table mad-table--vertical">
                      <tbody>
                        <tr>
                          <th>Ingredientes</th>
                          <td>
                            Proteína de guisante 78%, Polvo de Triglicéridos de Cadena Media (TCM) 17%, Cacao en polvo, Colágeno en polvo, Sabor natural a chocolate, Proteína de semilla de cáñamo orgánico, Taumatina.
                          </td>
                        </tr>
                        <tr>
                          <th>Tamaño</th>
                          <td>300g</td>
                        </tr>
                        <tr>
                          <th>Tamaño por racion</th>
                          <td>Cucharada de 30g con 1 taza (250mL) de agua</td>
                        </tr>
                        <tr>
                          <th>Raciones por paquete</th>
                          <td>10</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div id="tab-6" tabIndex="0" role="tabpanel" aria-labelledby="tab-6-link" className="mad-tab">
                  <div className="content-element-10">
                    <h5 className="mad-page-title">
                      5 Reseñas para Wovalan Allergy Premium Infant Formula (0-12 Meses) 800g
                    </h5>
                    <ol className="comments-list">
                      <li className="comment comment-has-children">
                        <div className="comment-body clearfix">
                          <div className="comment-author-avatar">
                            <a href="#">
                              <img src="../images/80x80_photo1.jpg" alt="Caroline Beek" />
                            </a>
                          </div>
                          <div className="comment-author-info">
                            <cite className="fn">Caroline Beek</cite>
                            <div className="comment-meta">
                              <time dateTime="2021-10-17">Octubre 17, 2021 a las 2:41 pm</time>
                              <div data-estimate="5" className="mad-rating size-small"></div>
                            </div>
                            <div className="comment-content">
                              <p>
                                Sed in lacus ut enim adipiscing aliquet. Nulla venenatis. In pede mi, aliquet sit amet, euismod in, auctor ut, ligula.
                              </p>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="comment comment-has-children">
                        <div className="comment-body clearfix">
                          <div className="comment-author-avatar">
                            <a href="#">
                              <img src="../images/80x80_photo2.jpg" alt="John Smith" />
                            </a>
                          </div>
                          <div className="comment-author-info">
                            <cite className="fn">Jorge Reyes</cite>
                            <div className="comment-meta">
                              <time datetime="2021-10-17">Octubre 13, 2020 a las 2:41 pm</time>
                              <div data-estimate="5" className="mad-rating size-small"></div>
                            </div>
                            <div className="comment-content">
                              <p>Aliquam dapibus tincidunt metus. Praesent justo dolor, lobortis.</p>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="comment">
                        <div className="comment-body">
                          <div className="comment-author-avatar">
                            <a href="#">
                              <img src="../images/80x80_photo3.jpg" alt="Bred Anderson" />
                            </a>
                          </div>
                          <div className="comment-author-info">
                            <cite className="fn">Thays Gonzales</cite>
                            <div className="comment-meta mad-columns-aligner--edges-md align-items-center">
                              <time datetime="2021-10-21">October 21, 2020 a las 2:41 pm</time>
                              <div data-estimate="5" className="mad-rating size-small"></div>
                            </div>
                            <div className="comment-content">
                              <p>Vestibulum sed ante. Donec sagittis euismod purus.</p>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ol>
                  </div>
                  <div className="content-element-10">
                    <h5 className="mad-page-title">
                      Agregar una reseña
                    </h5>
                    <div className="content-element-2">
                      <div className="mad-share-wrap">
                        <span>
                          Social
                        </span>
                        <div className="mad-social-icons type-2">
                          <ul>
                            <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                            <li><a href="#" className="color-2"><i className="fab fa-twitter"></i></a></li>
                            <li><a href="#" className="color-4"><i className="fab fa-linkedin-in"></i></a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="content-element-3">
                      <p>
                        Tu dirección de correo no sera publicada, Campos requeridos marcados con<span className="req">*</span>
                      </p>
                    </div>
                    <form className="mad-contact-form">
                      <div className="row">
                        <div className="col-12">
                          <div className="row">
                            <div className="col-sm-4">
                              <label className="content-element-2">
                                Tu calificación <span>*</span>
                              </label>
                              <div data-estimate="0" className="mad-rating size-big"></div>
                            </div>
                            <div className="col-sm-4">
                              <label>
                                Nombre <span>*</span>
                              </label>
                              <input type="email" placeholder="Nombre" />
                            </div>
                            <div className="col-sm-4">
                              <label>
                                Correo Electrónico
                              </label>
                              <input type="email" placeholder="Correo Electrónico" />
                            </div>
                          </div>
                        </div>
                        <div className="col-12">
                          <label>
                            Tu reseña <span>*</span>
                          </label>
                          <textarea rows="6" placeholder="Agrega aqui tu reseña acerca de este producto"></textarea>
                        </div>
                        <div className="col-12">
                          <div style={{ display: "block" }} className="mad-toggled-fields">
                            <input type="checkbox" name="checkbox-1" id="checkbox-1" />
                            <label htmlFor="checkbox-1" className="mad-label-checkbox">
                              Recuerdame
                            </label>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="align-right">
                            <a href="#" className="btn btn-big">
                              Add Review
                            </a>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div id="tab-7" tabIndex="0" role="tabpanel" aria-labelledby="tab-7-link" className="mad-tab">
                  <p>
                    Envíos:
                    Nos comprometemos a procesar y enviar su pedido dentro de las 24-48 horas siguientes a la recepción del mismo. Utilizamos servicios de envío confiables para garantizar que su paquete llegue de manera segura y oportuna. Los tiempos de entrega estimados son de 3-5 días hábiles para envíos nacionales y 7-14 días para envíos internacionales.
                  </p>
                </div>
                {/* <!--================ End of Tab ================--> */}
              </div>
              {/* <!--================ End of Tabs Container ================--> */}
            </div>
            {/* <!--================ End of Tabs ================--> */}
          </div>

          <h3 className="mad-page-title with-carousel">
            Puede interesarte...
          </h3>
          <div className="mad-products owl-carousel mad-grid mad-grid--cols-4 no-dots nav-top">
            <div className="mad-grid-item">
              <div className="mad-product">
                <div className="mad-product-image">
                  <span className="mad-label">
                    Sale! <br />
                    -10%
                  </span>
                  <img src="/images/264x264_product1.jpg" alt="" />
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
                    Medicines
                  </a>
                  <h6 className="mad-product-title">
                    <a href="shop_layout_boxed.html" className="mad-link">
                      Kurofen Tab X 24
                    </a>
                  </h6>
                </div>

                <div className="mad-product-info">
                  <div data-estimate="5" className="mad-rating"></div>
                  <div className="mad-info-item">
                    <div className="mad-product-price">
                      $3.99 <span>$4.99</span>
                    </div>
                    <a href="shop_cart.html" className="mad-cart">
                      <i className="material-icons-outlined">shopping_bag</i>
                    </a>
                  </div>
                  <div className="mad-info-item">
                    <span>
                      Stock Level
                    </span>
                    <div className="mad-progress-bars mad-progress-bars--secondary">
                      <div className="mad-progress-bars-item">
                        <div
                          role="progressbar"
                          aria-valuenow="75"
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

            <div className="mad-grid-item">
              <div className="mad-product">
                <div className="mad-product-image">
                  <img src="/images/264x264_product2.jpg" alt="" />
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
                    Mum & Baby
                  </a>
                  <h6 className="mad-product-title">
                    <a href="shop_layout_boxed.html" className="mad-link">
                      Holly Organic Pouch Fennel Frog - Pear with Apple...
                    </a>
                  </h6>
                </div>

                <div className="mad-product-info">
                  <div data-estimate="4" className="mad-rating"></div>
                  <div className="mad-info-item">
                    <div className="mad-product-price">
                      $2.99
                    </div>
                    <a href="shop_cart.html" className="mad-cart">
                      <i className="material-icons-outlined">shopping_bag</i>
                    </a>
                  </div>
                  <div className="mad-info-item">
                    <span>
                      Stock Level
                    </span>
                    <div className="mad-progress-bars mad-progress-bars--secondary">
                      <div className="mad-progress-bars-item">
                        <div
                          role="progressbar"
                          aria-valuenow="40"
                          aria-valuemin="0"
                          aria-valuemax="100"
                          className="mad-progress-bar"
                        >
                          <div style={{ width: "40%" }} className="mad-progress-bar-indicator"></div>
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
                  <img src="/images/264x264_product3.jpg" alt="" />
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
                    Health & First Aids
                  </a>
                  <h6 className="mad-product-title">
                    <a href="shop_layout_boxed.html" className="mad-link">
                      AirPio Mucus Clearance & Lung Expansion Device
                    </a>
                  </h6>
                </div>
                <div className="mad-product-info">
                  <div data-estimate="5" className="mad-rating"></div>
                  <div className="mad-info-item">
                    <div className="mad-product-price">
                      $89.99
                    </div>
                    <a href="shop_cart.html" className="mad-cart">
                      <i className="material-icons-outlined">shopping_bag</i>
                    </a>
                  </div>
                  <div className="mad-info-item">
                    <span>
                      Stock Level
                    </span>
                    <div className="mad-progress-bars mad-progress-bars--secondary">
                      <div className="mad-progress-bars-item">
                        <div
                          role="progressbar"
                          aria-valuenow="75"
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
            <div className="mad-grid-item">
              <div className="mad-product">
                <div className="mad-product-image sold">
                  <span className="mad-label">
                    Sold
                  </span>
                  <img src="/images/264x264_product4.jpg" alt="" />
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
                    Organic & Gluten Free
                  </a>
                  <h6 className="mad-product-title">
                    <a href="shop_layout_boxed.html" className="mad-link">
                      Vitaly Protein Slim & Trim Vegan Slimming Blend...
                    </a>
                  </h6>
                </div>
                {/* <!--/ product-info --> */}
                <div className="mad-product-info">
                  <div data-estimate="4.5" className="mad-rating"></div>
                  <div className="mad-info-item">
                    <div className="mad-product-price">
                      $6.99
                    </div>
                    <a href="shop_cart.html" className="mad-cart">
                      <i className="material-icons-outlined">arrow_right_alt</i>
                    </a>
                  </div>
                  <div className="mad-info-item">
                    <span>
                      Stock Level
                    </span>
                    <div className="mad-progress-bars mad-progress-bars--secondary">
                      <div className="mad-progress-bars-item">
                        <div
                          role="progressbar"
                          aria-valuenow="10"
                          aria-valuemin="0"
                          aria-valuemax="100"
                          className="mad-progress-bar"
                        >
                          <div style={{ width: "10%" }} className="mad-progress-bar-indicator"></div>
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

  )
}

export default ProductDetail
