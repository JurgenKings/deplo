import React from "react"
import BestSellingProducts from "../../components/BestSellers"
import RecentlyViewed from "../../components/RecentlyViewed"
import NewsLetter from "../../components/NewsLetter"
import News from "../../components/News"
import FeaturedBrands from "../../components/FeaturedBrands"
import FeaturedProductsWeekly from "../../components/FeaturedProductsWeekly"
import MultiProductList from "../../components/MultiProductList"
import addNotification from "react-push-notification"
import { sendEmail } from "../../services/sendEmail"

const fakeProductsOnOffer = [
  {
    id: 1,
    productName: 'Natures Road Super Foods Super Greens + 100g',
    image: 'images/144x144_product1.jpg',
    category: 'Vitaminas y Suplementos',
    price: 17.99
  },
  {
    id: 2,
    productName: 'Betal Fresh, Pure, Body Butter, Restoring, Honey',
    image: 'images/144x144_product1.jpg',
    category: 'Cuidado Personal y Belleza',
    price: 37.99
  },
  {
    id: 3,
    productName: 'Maribor Gold Nutrition, Vanilla Flavor',
    image: 'images/144x144_product1.jpg',
    category: 'Vitaminas y Suplementos',
    price: 97.99
  },
]

const fakeTopRatedProducts = [
  {
    id: 1,
    productName: 'Purely Inspired Organic Protein, Vanilla',
    image: 'images/144x144_product5.jpg',
    category: 'Bebidas y Batidos',
    price: 25.99
  },
  {
    id: 2,
    productName: 'Dove Body Wash, Deep Moisture',
    image: 'images/144x144_product6.jpg',
    category: 'Cuidado Personal y Belleza',
    price: 8.99
  },
  {
    id: 3,
    productName: 'Centrum Adult Multivitamin',
    image: 'images/144x144_product7.jpg',
    category: 'Vitaminas y Suplementos',
    price: 19.99
  }
]

const fakeNewProducts = [
  {
    id: 1,
    productName: 'Organic Valley Protein Shake, Chocolate',
    image: 'images/144x144_product2.jpg',
    category: 'Bebidas y Batidos',
    price: 29.99
  },
  {
    id: 2,
    productName: 'Herbal Essence Shampoo, Argan Oil',
    image: 'images/144x144_product3.jpg',
    category: 'Cuidado Personal y Belleza',
    price: 12.99
  },
  {
    id: 3,
    productName: 'Garden of Life Multivitamin for Women',
    image: 'images/144x144_product4.jpg',
    category: 'Vitaminas y Suplementos',
    price: 45.99
  },
]


function Home() {

  const handleClick = () => {
    addNotification({
      title: 'Una notificación',
      subtitle: 'Subtítulo',
      message: 'Recibiste una notificación de prueba',
      theme: 'darkblue',
      duration: 999999999999999,
      native: true,
      onClick: () => {alert("Deberia hacer algo")}
    })
  }

  // const handleSendEmail = () => {
  //   const to = 'jorgelreyes2001@gmail.com'
  //   const subject = 'Nueva Notificación'
  //   const url = 'http://localhost:5173/'
  //   sendEmail(to, subject, url)
  // }

  return (
    <>
      {/* Content */}
      <div className="mad-content no-pd">
        <div className="container">
          <article className="mad-section very-small-size">
            {/* <!--================ Icon Boxes ================--> */}
            <div className="mad-icon-boxes style-3 size-2 hr-type item-col-4">
              <div className="mad-col">
                {/* <!--================ Icon Box ================--> */}
                <article className="mad-icon-box">
                  <i className="mad-icon-box-icon"><img className="svg" src="lekarna_svg_icons/delivery.svg" alt="" /></i>
                  <div className="mad-icon-box-content">
                    <h6 className="mad-icon-box-title">Entrega rápida</h6>
                    <p>
                      Dentro de 1-4 días hábiles
                    </p>
                  </div>
                </article>
                {/* <!--================ End of Icon Box ================--> */}
              </div>
              <div className="mad-col">
                {/* <!--================ Icon Box ================--> */}
                <article className="mad-icon-box">
                  <i className="mad-icon-box-icon"><img className="svg" src="lekarna_svg_icons/refund.svg" alt="" /></i>
                  <div className="mad-icon-box-content">
                    <h6 className="mad-icon-box-title">
                      Política de Devoluciones
                    </h6>
                    <p>
                      Política de devolución de 30 días
                    </p>
                  </div>
                </article>
                {/* <!--================ End of Icon Box ================--> */}
              </div>
              <div className="mad-col">
                {/* <!--================ Icon Box ================--> */}
                <article className="mad-icon-box">
                  <i className="mad-icon-box-icon">
                    <img className="svg" src="/lekarna_svg_icons/cards.svg" alt="" />
                  </i>
                  <div className="mad-icon-box-content">
                    <h6 className="mad-icon-box-title">
                      Pagos seguros
                    </h6>
                    <p>
                      Pago 100% seguro
                    </p>
                  </div>
                </article>
                {/* <!--================ End of Icon Box ================--> */}
              </div>
              <div className="mad-col">
                {/* <!--================ Icon Box ================--> */}
                <article className="mad-icon-box">
                  <i className="mad-icon-box-icon"><img className="svg" src="lekarna_svg_icons/cards.svg" alt="" /></i>
                  <div className="mad-icon-box-content">
                    <h6 className="mad-icon-box-title">
                      Obten descuentos
                    </h6>
                    <p>
                      En cualquiera de nuestras tiendas
                    </p>
                  </div>
                </article>
                {/* <!--================ End of Icon Box ================--> */}
              </div>
            </div>
            {/* <!--================ End of Icon Boxes ================--> */}
          </article>
          <div className="content-element-10">
            <div className="row">
              <div className="col-xl-9">
                {/* <!--================ Slider Revolution ================--> */}
                <div dir="ltr" className="rev_slider_wrapper fullscreenbanner-container">
                  <div id="rev-slider-1" data-version="5.4.5" className="mad-d-none rev-slider fullscreenabanner">
                    <ul>
                      {/* <!--================ Slide 1 ================--> */}
                      <li data-transition="fade">
                        {/* <!-- MAIN IMAGE --> */}
                        <img src="https://lh3.googleusercontent.com/d0veDk0zwZnPtm-VWIQ9b6xKIXofyDMOY2XiLaqIImxiw0NYtNk7cy9q_muQDpLRUiFQMmDTeZSBoiNymGvVGVCdIQ0YbFDh_6Fguw2iOG7Y8X__=s1350-rw" alt="" data-bgposition="top right" data-bgfit="cover"
                          data-bgrepeat="no-repeat" data-bgparallax="off" className="rev-slidebg" data-no-retina />

                        {/* <!--================ Layer ================--> */}
                        <div
                          data-frames="[{&quot;delay&quot;:200,&quot;speed&quot;:2000,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power4.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;auto:auto;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]"
                          data-x="left" data-y="center" data-hoffset="['66', '66', '66', '66']"
                          data-voffset="['-125', '-125', '-125', '-125']" data-width="['360', '560', '560', '100%']"
                          data-height="['auto']" data-textAlign="['left']" data-color="['#46a69c']" data-fontsize="['56']"
                          data-lineheight="[48']" className="tp-caption tp-resizeme tp-layer-section-title style-2">
                          <div className="tp-sub-title">
                            <span>
                              Save
                            </span>
                            <span>
                              Up To
                            </span>
                          </div> 30% OFF
                        </div>
                        {/* <!--================ End of Layer ================--> */}
                        {/* <!--================ Layer ================--> */}
                        <div
                          data-frames="[{&quot;delay&quot;:400,&quot;speed&quot;:2000,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power4.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;auto:auto;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]"
                          data-x="left" data-y="center" data-hoffset="['66', '66', '66', '66']"
                          data-voffset="['-30', '-30', '-30', '-30']" data-width="['620', '620', '620', '100%']"
                          data-height="['auto']" data-textAlign="['left']" data-color="['#2e3133']" data-fontsize="['60']"
                          data-lineheight="['64']" className="tp-caption tp-resizeme tp-layer-section-title">
                          En todas las Lociones
                          <br />
                          Bebé</div>
                        {/* <!--================ End of Layer ================--> */}
                        {/* <!--================ Layer ================--> */}
                        <div
                          data-frames="[{&quot;delay&quot;:600,&quot;speed&quot;:2000,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power4.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;auto:auto;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]"
                          data-x="left" data-y="center" data-hoffset="['66', '66', '66', '66']"
                          data-voffset="['100', '100', '100', '100']" data-width="['620', '620', '620', '100%']"
                          data-textAlign="['left']" className="tp-caption">
                          <a href="shop_grid_3c_sidebar.html" className="btn btn-huge btn-style-4"><span>¡Comprar Ahora!</span></a>
                        </div>
                        {/* <!--================ End of Layer ================--> */}

                      </li>
                      {/* <!--================ End of Slide 1 ================--> */}
                      {/* <!--================ Slide 1 ================--> */}
                      <li data-transition="fade">
                        {/* <!-- MAIN IMAGE --> */}
                        <img src="https://lh3.googleusercontent.com/1WWUQBrrfJaBuk4VkLVxCSR5nR0wgKRuSY2RskWJnIZbAOQhokCgft5bGxUtyGQAhSDNKtLE1pk7vwgWgpgyBpUV_AvsBd_9A9PdZuwCpwEztKQ=s1350-rw" alt="" data-bgposition="top right" data-bgfit="cover"
                          data-bgrepeat="no-repeat" data-bgparallax="off" className="rev-slidebg" data-no-retina />

                        {/* <!--================ Layer ================--> */}
                        <div
                          data-frames="[{&quot;delay&quot;:200,&quot;speed&quot;:2000,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power4.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;auto:auto;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]"
                          data-x="left" data-y="center" data-hoffset="['66', '66', '66', '66']"
                          data-voffset="['-125', '-125', '-125', '-125']" data-width="['420', '420', '420', '100%']"
                          data-height="['auto']" data-textAlign="['left']" data-color="['#2e3133']" data-fontsize="['60']"
                          data-lineheight="['64']" className="tp-caption tp-resizeme tp-layer-section-title">
                          Cosmética Natural
                        </div>
                        {/* <!--================ End of Layer ================--> */}
                        {/* <!--================ Layer ================--> */}
                        <div
                          data-frames="[{&quot;delay&quot;:200,&quot;speed&quot;:2000,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power4.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;auto:auto;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]"
                          data-x="left" data-y="center" data-hoffset="['66', '66', '66', '66']"
                          data-voffset="['-30', '-30', '-30', '-30']" data-width="['620', '620', '620', '100%']"
                          data-height="['auto']" data-textAlign="['left']" data-color="['#46a69c']" data-fontsize="['56']"
                          data-lineheight="[48']" className="tp-caption tp-layer-section-title style-2">
                          <div className="tp-sub-title"><span>Ahorra</span><span>más</span></div> 50% Descuento
                        </div>
                        {/* <!--================ End of Layer ================--> */}
                        {/* <!--================ Layer ================--> */}
                        <div
                          data-frames="[{&quot;delay&quot;:600,&quot;speed&quot;:2000,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power4.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;auto:auto;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]"
                          data-x="left" data-y="center" data-hoffset="['66', '66', '66', '66']"
                          data-voffset="['70', '70', '70', '70']" data-width="['620', '620', '620', '100%']"
                          data-textAlign="['left']" className="tp-caption">
                          <a href="shop_grid_2c_sidebar.html" className="btn btn-huge btn-style-4"><span>¡Comprar Ahora!</span></a>
                        </div>
                        {/* <!--================ End of Layer ================--> */}

                      </li>
                      {/* <!--================ End of Slide 1 ================--> */}
                      {/* <!--================ Slide 1 ================--> */}
                      <li data-transition="fade">
                        {/* <!-- MAIN IMAGE </li>--> */}
                        <img src="https://lh3.googleusercontent.com/3nDmJPxw2k05Ugr7j33T02m3YN3Ff8oGX4QZN8wqdfoAOf-cYbmVHuSlR-lbv0J-4kSV19an_2T9QlkcKumfcJV1ES_BZckCBbTz7FnHkFxTEhA-=s1350-rw" alt="" data-bgposition="top right" data-bgfit="cover"
                          data-bgrepeat="no-repeat" data-bgparallax="off" className="rev-slidebg" data-no-retina />

                        {/* <!--================ Layer ================--> */}
                        <div
                          data-frames="[{&quot;delay&quot;:200,&quot;speed&quot;:2000,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power4.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;auto:auto;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]"
                          data-x="left" data-y="center" data-hoffset="['66', '66', '66', '66']"
                          data-voffset="['-90', '-90', '-90', '-90']" data-width="['620', '620', '620', '100%']"
                          data-height="['auto']" data-textAlign="['left']" data-color="['#2e3133']" data-fontsize="['60']"
                          data-lineheight="['64']" className="tp-caption tp-resizeme tp-layer-section-title">
                          Apoya <br />
                          Tu Salud <br />
                          Con Nutrición</div>
                        {/* <!--================ Layer ================--> */}
                        {/* <!--================ Layer ================--> */}
                        <div
                          data-frames="[{&quot;delay&quot;:200,&quot;speed&quot;:2000,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power4.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;auto:auto;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]"
                          data-x="left" data-y="center" data-hoffset="['66', '66', '66', '66']"
                          data-voffset="['40', '40, '40', '40']" data-width="['620', '620', '620', '100%']"
                          data-height="['auto']" data-textAlign="['left']" data-color="['#2e3133']" data-fontsize="['18']"
                          data-lineheight="['24']" className="tp-caption">Gomitas Multivitamínicas Completas <br />
                          por <a href="#" className="mad-link">SunUp Naturals</a></div>
                        {/* <!--================ Layer ================--> */}
                        <div
                          data-frames="[{&quot;delay&quot;:600,&quot;speed&quot;:2000,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power4.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;auto:auto;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]"
                          data-x="left" data-y="center" data-hoffset="['66', '66', '66', '66']"
                          data-voffset="['130', '130', '130', '130']" data-width="['620', '620', '620', '100%']"
                          data-textAlign="['left']" className="tp-caption">
                          <a href="shop_grid_4c_sidebar.html" className="btn btn-huge btn-style-4"><span>¡Comprar Ahora!</span></a>
                        </div>
                        {/* <!--================ End of Layer ================--> */}

                      </li>
                      {/* <!--================ End of Slide 1 ================--> */}
                    </ul>
                  </div>
                </div>
                {/* <!--================ End of Slider Revolution ================--> */}
              </div>
              <RecentlyViewed />
            </div>
          </div>

          <BestSellingProducts />

          <FeaturedProductsWeekly />

          <FeaturedBrands />

          <div className="content-element-10">
            <div className="row">

              <div className="col-xl-4">
                <MultiProductList title="Productos Nuevos" propsProducts={fakeNewProducts}/>
              </div>

              <div className="col-xl-4">
                <MultiProductList title="Mejor Valorados" propsProducts={fakeTopRatedProducts}/>
              </div>

              <div className="col-xl-4">
                <MultiProductList title="Productos en Oferta" propsProducts={fakeProductsOnOffer}/>
              </div>

            </div>
          </div>
          <News />
          <NewsLetter />

          <button onClick={handleClick}>Mostrar Notificación</button>
          <br />
          {/* <button onClick={handleSendEmail}>Enviar Notificación</button> */}
        </div>
      </div>
      {/*End of Content*/}

    </>

  )
}


export default Home