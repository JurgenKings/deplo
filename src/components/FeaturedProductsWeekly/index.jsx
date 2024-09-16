import React from "react"

function FeaturedProductsWeekly() {
  return (
    <div className="content-element-10">
      <h5 className="mad-page-title with-carousel">
        Productos Destacados Semanales
        <a href="/catalogo" className="mad-read-more">Ver todos</a>
      </h5>
      {/* <!--================ Tabs ================--> */}
      <div className="mad-tabs with-carousel type-2">
        {/* <!--================ Tabs Navigation ================--> */}
        <div role="tablist" aria-label="Tabs v1" className="mad-tabs-nav">
          <span className="mad-active"><a id="tab-1-link" href="#tab-1" role="tab" aria-selected="false"
            aria-controls="tab-1" className="mad-tab-link">Todas</a>
          </span>
          <span><a id="tab-2-link" href="#tab-2" role="tab" aria-selected="true" aria-controls="tab-2"
            className="mad-tab-link">Vitaminas y Suplementos</a>
          </span>
          <span><a id="tab-3-link" href="#tab-3" role="tab" aria-selected="false" aria-controls="tab-3"
            className="mad-tab-link">Cuidado Personal y Belleza</a>
          </span>
          <span><a id="tab-4-link" href="#tab-4" role="tab" aria-selected="false" aria-controls="tab-4"
            className="mad-tab-link">Medicinas</a>
          </span>
          <span><a id="tab-5-link" href="#tab-5" role="tab" aria-selected="false" aria-controls="tab-5"
            className="mad-tab-link">Salud y Primeros Auxilios</a>
          </span>
          <span><a id="tab-6-link" href="#tab-6" role="tab" aria-selected="false" aria-controls="tab-6"
            className="mad-tab-link">Salud Sexual</a>
          </span>
          <span><a id="tab-7-link" href="#tab-7" role="tab" aria-selected="false" aria-controls="tab-7"
            className="mad-tab-link">Pérdida de Peso y Fitness</a>
          </span>
          <span><a id="tab-8-link" href="#tab-8" role="tab" aria-selected="false" aria-controls="tab-8"
            className="mad-tab-link">Mamá y Bebe</a>
          </span>
        </div>
        {/* <!--================ End of Tabs Navigation ================--> */}
        {/* <!--================ Tabs Container ================--> */}
        <div className="mad-tabs-container">
          {/* <!--================ Tab ================--> */}
          <div id="tab-1" tabIndex="0" role="tabpanel" aria-labelledby="tab-1-link" className="mad-tab">
            <div className="mad-products owl-carousel mad-grid mad-grid--cols-4 no-dots nav-top">
              {/* <!-- owl item --> */}
              <div className="mad-grid-item">
                {/* <!-- Product --> */}
                <div className="mad-product">
                  <div className="mad-product-image">
                    <span className="mad-label">Con <br />-10%</span>
                    <img src="images/264x264_product1.jpg" alt="" />
                    <div className="mad-actions">
                      <a href="#"><i className="material-icons">compare_arrows</i></a>
                      <a href="#"><i className="material-icons">favorite_border</i></a>
                      <a href="#" className="mad-qv"><i className="material-icons-outlined">remove_red_eye</i></a>
                    </div>
                  </div>
                  {/* <!-- product-info --> */}
                  <div className="mad-product-description">
                    <a href="#" className="mad-product-cat">Medicinas</a>
                    <h6 className="mad-product-title"><a href="shop_layout_boxed.html" className="mad-link">Kurofen Tab X
                      24</a></h6>
                  </div>
                  {/* <!--/ product-info --> */}
                  <div className="mad-product-info">
                    <div data-estimate="5" className="mad-rating"></div>
                    <div className="mad-info-item">
                      <div className="mad-product-price">$3.99 <span>$4.99</span></div>
                      <a href="shop_cart.html" className="mad-cart"><i
                        className="material-icons-outlined">shopping_bag</i></a>
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
                    <img src="images/264x264_product2.jpg" alt="" />
                    <div className="mad-actions">
                      <a href="#"><i className="material-icons">compare_arrows</i></a>
                      <a href="#"><i className="material-icons">favorite_border</i></a>
                      <a href="#" className="mad-qv"><i className="material-icons-outlined">remove_red_eye</i></a>
                    </div>
                  </div>
                  {/* <!-- product-info --> */}
                  <div className="mad-product-description">
                    <a href="#" className="mad-product-cat">Mamá y Bebe</a>
                    <h6 className="mad-product-title"><a href="shop_layout_boxed.html" className="mad-link">Holly Organic
                      Pouch Fennel Frog -
                      Pear with
                      Apple
                      ...</a></h6>
                  </div>
                  {/* <!--/ product-info --> */}
                  <div className="mad-product-info">
                    <div data-estimate="4" className="mad-rating"></div>
                    <div className="mad-info-item">
                      <div className="mad-product-price">$2.99</div>
                      <a href="shop_cart.html" className="mad-cart"><i
                        className="material-icons-outlined">shopping_bag</i></a>
                    </div>
                    <div className="mad-info-item">
                      <span>Stock (77) Und</span>
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
                {/* <!-- End of Product --> */}
              </div>
              {/* <!-- / owl item --> */}
              {/* <!-- owl item --> */}
              <div className="mad-grid-item">
                {/* <!-- Product --> */}
                <div className="mad-product">
                  <div className="mad-product-image">
                    <img src="images/264x264_product3.jpg" alt="" />
                    <div className="mad-actions">
                      <a href="#"><i className="material-icons">compare_arrows</i></a>
                      <a href="#"><i className="material-icons">favorite_border</i></a>
                      <a href="#" className="mad-qv"><i className="material-icons-outlined">remove_red_eye</i></a>
                    </div>
                  </div>
                  {/* <!-- product-info --> */}
                  <div className="mad-product-description">
                    <a href="#" className="mad-product-cat">Salud y Primeros Auxilios</a>
                    <h6 className="mad-product-title"><a href="shop_layout_boxed.html" className="mad-link">AirPio Mucus
                      Clearance & Lung
                      Expansion
                      Device</a>
                    </h6>
                  </div>
                  {/* <!--/ product-info --> */}
                  <div className="mad-product-info">
                    <div data-estimate="5" className="mad-rating"></div>
                    <div className="mad-info-item">
                      <div className="mad-product-price">$89.99</div>
                      <a href="shop_cart.html" className="mad-cart"><i
                        className="material-icons-outlined">shopping_bag</i></a>
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
                  </div>
                </div>
                {/* <!-- End of Product --> */}
              </div>
              {/* <!-- / owl item --> */}
              {/* <!-- owl item --> */}
              <div className="mad-grid-item">
                {/* <!-- Product --> */}
                <div className="mad-product">
                  <div className="mad-product-image sold">
                    <span className="mad-label">Vendido</span>
                    <img src="images/264x264_product4.jpg" alt="" />
                    <div className="mad-actions">
                      <a href="#"><i className="material-icons">compare_arrows</i></a>
                      <a href="#"><i className="material-icons">favorite_border</i></a>
                      <a href="#" className="mad-qv"><i className="material-icons-outlined">remove_red_eye</i></a>
                    </div>
                  </div>
                  {/* <!-- product-info --> */}
                  <div className="mad-product-description">
                    <a href="#" className="mad-product-cat">Orgánico y Sin Gluten</a>
                    <h6 className="mad-product-title"><a href="shop_layout_boxed.html" className="mad-link">Vitaly Protein
                      Slim & Trim Vegan
                      Slimming
                      Blend Cocoa</a></h6>
                  </div>
                  {/* <!--/ product-info --> */}
                  <div className="mad-product-info">
                    <div data-estimate="4.5" className="mad-rating"></div>
                    <div className="mad-info-item">
                      <div className="mad-product-price">$6.99</div>
                      <a href="shop_cart.html" className="mad-cart"><i
                        className="material-icons-outlined">arrow_right_alt</i></a>
                    </div>
                    <div className="mad-info-item">
                      <span>Stock (77) Und</span>
                      <div className="mad-progress-bars mad-progress-bars--secondary">
                        <div className="mad-progress-bars-item">
                          <div role="progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"
                            className="mad-progress-bar">
                            <div style={{ width: "10%" }} className="mad-progress-bar-indicator"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- End of Product --> */}
              </div>
              {/* <!-- / owl item --> */}
            </div>
          </div>
          {/* <!--================ End of Tab ================--> */}
          {/* <!--================ Tab ================--> */}
          <div id="tab-2" tabIndex="0" role="tabpanel" aria-labelledby="tab-2-link" className="mad-tab">
            <div className="mad-products owl-carousel mad-grid mad-grid--cols-4 no-dots nav-top">
              {/* <!-- owl item --> */}
              <div className="mad-grid-item">
                {/* <!-- Product --> */}
                <div className="mad-product">
                  <div className="mad-product-image">
                    <span className="mad-label">Con <br />-10%</span>
                    <img src="images/264x264_product1.jpg" alt="" />
                    <div className="mad-actions">
                      <a href="#"><i className="material-icons">compare_arrows</i></a>
                      <a href="#"><i className="material-icons">favorite_border</i></a>
                      <a href="#" className="mad-qv"><i className="material-icons-outlined">remove_red_eye</i></a>
                    </div>
                  </div>
                  {/* <!-- product-info --> */}
                  <div className="mad-product-description">
                    <a href="#" className="mad-product-cat">Medicinas</a>
                    <h6 className="mad-product-title"><a href="shop_layout_boxed.html" className="mad-link">Kurofen Tab X
                      24</a></h6>
                  </div>
                  {/* <!--/ product-info --> */}
                  <div className="mad-product-info">
                    <div data-estimate="5" className="mad-rating"></div>
                    <div className="mad-info-item">
                      <div className="mad-product-price">$3.99 <span>$4.99</span></div>
                      <a href="shop_cart.html" className="mad-cart"><i
                        className="material-icons-outlined">shopping_bag</i></a>
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
                    <img src="images/264x264_product2.jpg" alt="" />
                    <div className="mad-actions">
                      <a href="#"><i className="material-icons">compare_arrows</i></a>
                      <a href="#"><i className="material-icons">favorite_border</i></a>
                      <a href="#" className="mad-qv"><i className="material-icons-outlined">remove_red_eye</i></a>
                    </div>
                  </div>
                  {/* <!-- product-info --> */}
                  <div className="mad-product-description">
                    <a href="#" className="mad-product-cat">Mamá y Bebe</a>
                    <h6 className="mad-product-title"><a href="shop_layout_boxed.html" className="mad-link">Holly Organic
                      Pouch Fennel Frog -
                      Pear with
                      Apple
                      ...</a></h6>
                  </div>
                  {/* <!--/ product-info --> */}
                  <div className="mad-product-info">
                    <div data-estimate="4" className="mad-rating"></div>
                    <div className="mad-info-item">
                      <div className="mad-product-price">$2.99</div>
                      <a href="shop_cart.html" className="mad-cart"><i
                        className="material-icons-outlined">shopping_bag</i></a>
                    </div>
                    <div className="mad-info-item">
                      <span>Stock (77) Und</span>
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
                {/* <!-- End of Product --> */}
              </div>
              {/* <!-- / owl item --> */}
              {/* <!-- owl item --> */}
              <div className="mad-grid-item">
                {/* <!-- Product --> */}
                <div className="mad-product">
                  <div className="mad-product-image">
                    <img src="images/264x264_product3.jpg" alt="" />
                    <div className="mad-actions">
                      <a href="#"><i className="material-icons">compare_arrows</i></a>
                      <a href="#"><i className="material-icons">favorite_border</i></a>
                      <a href="#" className="mad-qv"><i className="material-icons-outlined">remove_red_eye</i></a>
                    </div>
                  </div>
                  {/* <!-- product-info --> */}
                  <div className="mad-product-description">
                    <a href="#" className="mad-product-cat">Salud y Primeros Auxilios</a>
                    <h6 className="mad-product-title"><a href="shop_layout_boxed.html" className="mad-link">AirPio Mucus
                      Clearance & Lung
                      Expansion
                      Device</a>
                    </h6>
                  </div>
                  {/* <!--/ product-info --> */}
                  <div className="mad-product-info">
                    <div data-estimate="5" className="mad-rating"></div>
                    <div className="mad-info-item">
                      <div className="mad-product-price">$89.99</div>
                      <a href="shop_cart.html" className="mad-cart"><i
                        className="material-icons-outlined">shopping_bag</i></a>
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
                  </div>
                </div>
                {/* <!-- End of Product --> */}
              </div>
              {/* <!-- / owl item --> */}
              {/* <!-- owl item --> */}
              <div className="mad-grid-item">
                {/* <!-- Product --> */}
                <div className="mad-product">
                  <div className="mad-product-image sold">
                    <span className="mad-label">Vendido</span>
                    <img src="images/264x264_product4.jpg" alt="" />
                    <div className="mad-actions">
                      <a href="#"><i className="material-icons">compare_arrows</i></a>
                      <a href="#"><i className="material-icons">favorite_border</i></a>
                      <a href="#" className="mad-qv"><i className="material-icons-outlined">remove_red_eye</i></a>
                    </div>
                  </div>
                  {/* <!-- product-info --> */}
                  <div className="mad-product-description">
                    <a href="#" className="mad-product-cat">Orgánico y Sin Gluten</a>
                    <h6 className="mad-product-title"><a href="shop_layout_boxed.html" className="mad-link">Vitaly Protein
                      Slim & Trim Vegan
                      Slimming
                      Blend Cocoa</a></h6>
                  </div>
                  {/* <!--/ product-info --> */}
                  <div className="mad-product-info">
                    <div data-estimate="4.5" className="mad-rating"></div>
                    <div className="mad-info-item">
                      <div className="mad-product-price">$6.99</div>
                      <a href="shop_cart.html" className="mad-cart"><i
                        className="material-icons-outlined">arrow_right_alt</i></a>
                    </div>
                    <div className="mad-info-item">
                      <span>Stock (77) Und</span>
                      <div className="mad-progress-bars mad-progress-bars--secondary">
                        <div className="mad-progress-bars-item">
                          <div role="progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"
                            className="mad-progress-bar">
                            <div style={{ width: "10%" }} className="mad-progress-bar-indicator"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- End of Product --> */}
              </div>
              {/* <!-- / owl item --> */}
            </div>
          </div>
          {/* <!--================ End of Tab ================--> */}
          {/* <!--================ Tab ================--> */}
          <div id="tab-3" tabIndex="0" role="tabpanel" aria-labelledby="tab-3-link" className="mad-tab">
            <div className="mad-products owl-carousel mad-grid mad-grid--cols-4 no-dots nav-top">
              {/* <!-- owl item --> */}
              <div className="mad-grid-item">
                {/* <!-- Product --> */}
                <div className="mad-product">
                  <div className="mad-product-image">
                    <span className="mad-label">Con <br />-10%</span>
                    <img src="images/264x264_product1.jpg" alt="" />
                    <div className="mad-actions">
                      <a href="#"><i className="material-icons">compare_arrows</i></a>
                      <a href="#"><i className="material-icons">favorite_border</i></a>
                      <a href="#" className="mad-qv"><i className="material-icons-outlined">remove_red_eye</i></a>
                    </div>
                  </div>
                  {/* <!-- product-info --> */}
                  <div className="mad-product-description">
                    <a href="#" className="mad-product-cat">Medicinas</a>
                    <h6 className="mad-product-title"><a href="shop_layout_boxed.html" className="mad-link">Kurofen Tab X
                      24</a></h6>
                  </div>
                  {/* <!--/ product-info --> */}
                  <div className="mad-product-info">
                    <div data-estimate="5" className="mad-rating"></div>
                    <div className="mad-info-item">
                      <div className="mad-product-price">$3.99 <span>$4.99</span></div>
                      <a href="shop_cart.html" className="mad-cart"><i
                        className="material-icons-outlined">shopping_bag</i></a>
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
                    <img src="images/264x264_product2.jpg" alt="" />
                    <div className="mad-actions">
                      <a href="#"><i className="material-icons">compare_arrows</i></a>
                      <a href="#"><i className="material-icons">favorite_border</i></a>
                      <a href="#" className="mad-qv"><i className="material-icons-outlined">remove_red_eye</i></a>
                    </div>
                  </div>
                  {/* <!-- product-info --> */}
                  <div className="mad-product-description">
                    <a href="#" className="mad-product-cat">Mamá y Bebe</a>
                    <h6 className="mad-product-title"><a href="shop_layout_boxed.html" className="mad-link">Holly Organic
                      Pouch Fennel Frog -
                      Pear with
                      Apple
                      ...</a></h6>
                  </div>
                  {/* <!--/ product-info --> */}
                  <div className="mad-product-info">
                    <div data-estimate="4" className="mad-rating"></div>
                    <div className="mad-info-item">
                      <div className="mad-product-price">$2.99</div>
                      <a href="shop_cart.html" className="mad-cart"><i
                        className="material-icons-outlined">shopping_bag</i></a>
                    </div>
                    <div className="mad-info-item">
                      <span>Stock (77) Und</span>
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
                {/* <!-- End of Product --> */}
              </div>
              {/* <!-- / owl item --> */}
              {/* <!-- owl item --> */}
              <div className="mad-grid-item">
                {/* <!-- Product --> */}
                <div className="mad-product">
                  <div className="mad-product-image">
                    <img src="images/264x264_product3.jpg" alt="" />
                    <div className="mad-actions">
                      <a href="#"><i className="material-icons">compare_arrows</i></a>
                      <a href="#"><i className="material-icons">favorite_border</i></a>
                      <a href="#" className="mad-qv"><i className="material-icons-outlined">remove_red_eye</i></a>
                    </div>
                  </div>
                  {/* <!-- product-info --> */}
                  <div className="mad-product-description">
                    <a href="#" className="mad-product-cat">Salud y Primeros Auxilios</a>
                    <h6 className="mad-product-title"><a href="shop_layout_boxed.html" className="mad-link">AirPio Mucus
                      Clearance & Lung
                      Expansion
                      Device</a>
                    </h6>
                  </div>
                  {/* <!--/ product-info --> */}
                  <div className="mad-product-info">
                    <div data-estimate="5" className="mad-rating"></div>
                    <div className="mad-info-item">
                      <div className="mad-product-price">$89.99</div>
                      <a href="shop_cart.html" className="mad-cart"><i
                        className="material-icons-outlined">shopping_bag</i></a>
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
                  </div>
                </div>
                {/* <!-- End of Product --> */}
              </div>
              {/* <!-- / owl item --> */}
              {/* <!-- owl item --> */}
              <div className="mad-grid-item">
                {/* <!-- Product --> */}
                <div className="mad-product">
                  <div className="mad-product-image sold">
                    <span className="mad-label">Vendido</span>
                    <img src="images/264x264_product4.jpg" alt="" />
                    <div className="mad-actions">
                      <a href="#"><i className="material-icons">compare_arrows</i></a>
                      <a href="#"><i className="material-icons">favorite_border</i></a>
                      <a href="#" className="mad-qv"><i className="material-icons-outlined">remove_red_eye</i></a>
                    </div>
                  </div>
                  {/* <!-- product-info --> */}
                  <div className="mad-product-description">
                    <a href="#" className="mad-product-cat">Orgánico y Sin Gluten</a>
                    <h6 className="mad-product-title"><a href="shop_layout_boxed.html" className="mad-link">Vitaly Protein
                      Slim & Trim Vegan
                      Slimming
                      Blend Cocoa</a></h6>
                  </div>
                  {/* <!--/ product-info --> */}
                  <div className="mad-product-info">
                    <div data-estimate="4.5" className="mad-rating"></div>
                    <div className="mad-info-item">
                      <div className="mad-product-price">$6.99</div>
                      <a href="shop_cart.html" className="mad-cart"><i
                        className="material-icons-outlined">arrow_right_alt</i></a>
                    </div>
                    <div className="mad-info-item">
                      <span>Stock (77) Und</span>
                      <div className="mad-progress-bars mad-progress-bars--secondary">
                        <div className="mad-progress-bars-item">
                          <div role="progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"
                            className="mad-progress-bar">
                            <div style={{ width: "10%" }} className="mad-progress-bar-indicator"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- End of Product --> */}
              </div>
              {/* <!-- / owl item --> */}
            </div>
          </div>
          {/* <!--================ End of Tab ================--> */}
          {/* <!--================ Tab ================--> */}
          <div id="tab-4" tabIndex="0" role="tabpanel" aria-labelledby="tab-4-link" className="mad-tab">
            <div className="mad-products owl-carousel mad-grid mad-grid--cols-4 no-dots nav-top">
              {/* <!-- owl item --> */}
              <div className="mad-grid-item">
                {/* <!-- Product --> */}
                <div className="mad-product">
                  <div className="mad-product-image">
                    <span className="mad-label">Con <br />-10%</span>
                    <img src="images/264x264_product1.jpg" alt="" />
                    <div className="mad-actions">
                      <a href="#"><i className="material-icons">compare_arrows</i></a>
                      <a href="#"><i className="material-icons">favorite_border</i></a>
                      <a href="#" className="mad-qv"><i className="material-icons-outlined">remove_red_eye</i></a>
                    </div>
                  </div>
                  {/* <!-- product-info --> */}
                  <div className="mad-product-description">
                    <a href="#" className="mad-product-cat">Medicinas</a>
                    <h6 className="mad-product-title"><a href="shop_layout_boxed.html" className="mad-link">Kurofen Tab X
                      24</a></h6>
                  </div>
                  {/* <!--/ product-info --> */}
                  <div className="mad-product-info">
                    <div data-estimate="5" className="mad-rating"></div>
                    <div className="mad-info-item">
                      <div className="mad-product-price">$3.99 <span>$4.99</span></div>
                      <a href="shop_cart.html" className="mad-cart"><i
                        className="material-icons-outlined">shopping_bag</i></a>
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
                    <img src="images/264x264_product2.jpg" alt="" />
                    <div className="mad-actions">
                      <a href="#"><i className="material-icons">compare_arrows</i></a>
                      <a href="#"><i className="material-icons">favorite_border</i></a>
                      <a href="#" className="mad-qv"><i className="material-icons-outlined">remove_red_eye</i></a>
                    </div>
                  </div>
                  {/* <!-- product-info --> */}
                  <div className="mad-product-description">
                    <a href="#" className="mad-product-cat">Mamá y Bebe</a>
                    <h6 className="mad-product-title"><a href="shop_layout_boxed.html" className="mad-link">Holly Organic
                      Pouch Fennel Frog -
                      Pear with
                      Apple
                      ...</a></h6>
                  </div>
                  {/* <!--/ product-info --> */}
                  <div className="mad-product-info">
                    <div data-estimate="4" className="mad-rating"></div>
                    <div className="mad-info-item">
                      <div className="mad-product-price">$2.99</div>
                      <a href="shop_cart.html" className="mad-cart"><i
                        className="material-icons-outlined">shopping_bag</i></a>
                    </div>
                    <div className="mad-info-item">
                      <span>Stock (77) Und</span>
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
                {/* <!-- End of Product --> */}
              </div>
              {/* <!-- / owl item --> */}
              {/* <!-- owl item --> */}
              <div className="mad-grid-item">
                {/* <!-- Product --> */}
                <div className="mad-product">
                  <div className="mad-product-image">
                    <img src="images/264x264_product3.jpg" alt="" />
                    <div className="mad-actions">
                      <a href="#"><i className="material-icons">compare_arrows</i></a>
                      <a href="#"><i className="material-icons">favorite_border</i></a>
                      <a href="#" className="mad-qv"><i className="material-icons-outlined">remove_red_eye</i></a>
                    </div>
                  </div>
                  {/* <!-- product-info --> */}
                  <div className="mad-product-description">
                    <a href="#" className="mad-product-cat">Salud y Primeros Auxilios</a>
                    <h6 className="mad-product-title"><a href="shop_layout_boxed.html" className="mad-link">AirPio Mucus
                      Clearance & Lung
                      Expansion
                      Device</a>
                    </h6>
                  </div>
                  {/* <!--/ product-info --> */}
                  <div className="mad-product-info">
                    <div data-estimate="5" className="mad-rating"></div>
                    <div className="mad-info-item">
                      <div className="mad-product-price">$89.99</div>
                      <a href="shop_cart.html" className="mad-cart"><i
                        className="material-icons-outlined">shopping_bag</i></a>
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
                  </div>
                </div>
                {/* <!-- End of Product --> */}
              </div>
              {/* <!-- / owl item --> */}
              {/* <!-- owl item --> */}
              <div className="mad-grid-item">
                {/* <!-- Product --> */}
                <div className="mad-product">
                  <div className="mad-product-image sold">
                    <span className="mad-label">Vendido</span>
                    <img src="images/264x264_product4.jpg" alt="" />
                    <div className="mad-actions">
                      <a href="#"><i className="material-icons">compare_arrows</i></a>
                      <a href="#"><i className="material-icons">favorite_border</i></a>
                      <a href="#" className="mad-qv"><i className="material-icons-outlined">remove_red_eye</i></a>
                    </div>
                  </div>
                  {/* <!-- product-info --> */}
                  <div className="mad-product-description">
                    <a href="#" className="mad-product-cat">Orgánico y Sin Gluten</a>
                    <h6 className="mad-product-title"><a href="shop_layout_boxed.html" className="mad-link">Vitaly Protein
                      Slim & Trim Vegan
                      Slimming
                      Blend Cocoa</a></h6>
                  </div>
                  {/* <!--/ product-info --> */}
                  <div className="mad-product-info">
                    <div data-estimate="4.5" className="mad-rating"></div>
                    <div className="mad-info-item">
                      <div className="mad-product-price">$6.99</div>
                      <a href="shop_cart.html" className="mad-cart"><i
                        className="material-icons-outlined">arrow_right_alt</i></a>
                    </div>
                    <div className="mad-info-item">
                      <span>Stock (77) Und</span>
                      <div className="mad-progress-bars mad-progress-bars--secondary">
                        <div className="mad-progress-bars-item">
                          <div role="progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"
                            className="mad-progress-bar">
                            <div style={{ width: "10%" }} className="mad-progress-bar-indicator"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- End of Product --> */}
              </div>
              {/* <!-- / owl item --> */}
            </div>
          </div>
          {/* <!--================ End of Tab ================--> */}
          {/* <!--================ Tab ================--> */}
          <div id="tab-5" tabIndex="0" role="tabpanel" aria-labelledby="tab-5-link" className="mad-tab">
            <div className="mad-products owl-carousel mad-grid mad-grid--cols-4 no-dots nav-top">
              {/* <!-- owl item --> */}
              <div className="mad-grid-item">
                {/* <!-- Product --> */}
                <div className="mad-product">
                  <div className="mad-product-image">
                    <span className="mad-label">Con <br />-10%</span>
                    <img src="images/264x264_product1.jpg" alt="" />
                    <div className="mad-actions">
                      <a href="#"><i className="material-icons">compare_arrows</i></a>
                      <a href="#"><i className="material-icons">favorite_border</i></a>
                      <a href="#" className="mad-qv"><i className="material-icons-outlined">remove_red_eye</i></a>
                    </div>
                  </div>
                  {/* <!-- product-info --> */}
                  <div className="mad-product-description">
                    <a href="#" className="mad-product-cat">Medicinas</a>
                    <h6 className="mad-product-title"><a href="shop_layout_boxed.html" className="mad-link">Kurofen Tab X
                      24</a></h6>
                  </div>
                  {/* <!--/ product-info --> */}
                  <div className="mad-product-info">
                    <div data-estimate="5" className="mad-rating"></div>
                    <div className="mad-info-item">
                      <div className="mad-product-price">$3.99 <span>$4.99</span></div>
                      <a href="shop_cart.html" className="mad-cart"><i
                        className="material-icons-outlined">shopping_bag</i></a>
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
                    <img src="images/264x264_product2.jpg" alt="" />
                    <div className="mad-actions">
                      <a href="#"><i className="material-icons">compare_arrows</i></a>
                      <a href="#"><i className="material-icons">favorite_border</i></a>
                      <a href="#" className="mad-qv"><i className="material-icons-outlined">remove_red_eye</i></a>
                    </div>
                  </div>
                  {/* <!-- product-info --> */}
                  <div className="mad-product-description">
                    <a href="#" className="mad-product-cat">Mamá y Bebe</a>
                    <h6 className="mad-product-title"><a href="shop_layout_boxed.html" className="mad-link">Holly Organic
                      Pouch Fennel Frog -
                      Pear with
                      Apple
                      ...</a></h6>
                  </div>
                  {/* <!--/ product-info --> */}
                  <div className="mad-product-info">
                    <div data-estimate="4" className="mad-rating"></div>
                    <div className="mad-info-item">
                      <div className="mad-product-price">$2.99</div>
                      <a href="shop_cart.html" className="mad-cart"><i
                        className="material-icons-outlined">shopping_bag</i></a>
                    </div>
                    <div className="mad-info-item">
                      <span>Stock (77) Und</span>
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
                {/* <!-- End of Product --> */}
              </div>
              {/* <!-- / owl item --> */}
              {/* <!-- owl item --> */}
              <div className="mad-grid-item">
                {/* <!-- Product --> */}
                <div className="mad-product">
                  <div className="mad-product-image">
                    <img src="images/264x264_product3.jpg" alt="" />
                    <div className="mad-actions">
                      <a href="#"><i className="material-icons">compare_arrows</i></a>
                      <a href="#"><i className="material-icons">favorite_border</i></a>
                      <a href="#" className="mad-qv"><i className="material-icons-outlined">remove_red_eye</i></a>
                    </div>
                  </div>
                  {/* <!-- product-info --> */}
                  <div className="mad-product-description">
                    <a href="#" className="mad-product-cat">Salud y Primeros Auxilios</a>
                    <h6 className="mad-product-title"><a href="shop_layout_boxed.html" className="mad-link">AirPio Mucus
                      Clearance & Lung
                      Expansion
                      Device</a>
                    </h6>
                  </div>
                  {/* <!--/ product-info --> */}
                  <div className="mad-product-info">
                    <div data-estimate="5" className="mad-rating"></div>
                    <div className="mad-info-item">
                      <div className="mad-product-price">$89.99</div>
                      <a href="shop_cart.html" className="mad-cart"><i
                        className="material-icons-outlined">shopping_bag</i></a>
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
                  </div>
                </div>
                {/* <!-- End of Product --> */}
              </div>
              {/* <!-- / owl item --> */}
              {/* <!-- owl item --> */}
              <div className="mad-grid-item">
                {/* <!-- Product --> */}
                <div className="mad-product">
                  <div className="mad-product-image sold">
                    <span className="mad-label">Vendido</span>
                    <img src="images/264x264_product4.jpg" alt="" />
                    <div className="mad-actions">
                      <a href="#"><i className="material-icons">compare_arrows</i></a>
                      <a href="#"><i className="material-icons">favorite_border</i></a>
                      <a href="#" className="mad-qv"><i className="material-icons-outlined">remove_red_eye</i></a>
                    </div>
                  </div>
                  {/* <!-- product-info --> */}
                  <div className="mad-product-description">
                    <a href="#" className="mad-product-cat">Orgánico y Sin Gluten</a>
                    <h6 className="mad-product-title"><a href="shop_layout_boxed.html" className="mad-link">Vitaly Protein
                      Slim & Trim Vegan
                      Slimming
                      Blend Cocoa</a></h6>
                  </div>
                  {/* <!--/ product-info --> */}
                  <div className="mad-product-info">
                    <div data-estimate="4.5" className="mad-rating"></div>
                    <div className="mad-info-item">
                      <div className="mad-product-price">$6.99</div>
                      <a href="shop_cart.html" className="mad-cart"><i
                        className="material-icons-outlined">arrow_right_alt</i></a>
                    </div>
                    <div className="mad-info-item">
                      <span>Stock (77) Und</span>
                      <div className="mad-progress-bars mad-progress-bars--secondary">
                        <div className="mad-progress-bars-item">
                          <div role="progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"
                            className="mad-progress-bar">
                            <div style={{ width: "10%" }} className="mad-progress-bar-indicator"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- End of Product --> */}
              </div>
              {/* <!-- / owl item --> */}
            </div>
          </div>
          {/* <!--================ End of Tab ================--> */}
          {/* <!--================ Tab ================--> */}
          <div id="tab-6" tabIndex="0" role="tabpanel" aria-labelledby="tab-6-link" className="mad-tab">
            <div className="mad-products owl-carousel mad-grid mad-grid--cols-4 no-dots nav-top">
              {/* <!-- owl item --> */}
              <div className="mad-grid-item">
                {/* <!-- Product --> */}
                <div className="mad-product">
                  <div className="mad-product-image">
                    <span className="mad-label">Con <br />-10%</span>
                    <img src="images/264x264_product1.jpg" alt="" />
                    <div className="mad-actions">
                      <a href="#"><i className="material-icons">compare_arrows</i></a>
                      <a href="#"><i className="material-icons">favorite_border</i></a>
                      <a href="#" className="mad-qv"><i className="material-icons-outlined">remove_red_eye</i></a>
                    </div>
                  </div>
                  {/* <!-- product-info --> */}
                  <div className="mad-product-description">
                    <a href="#" className="mad-product-cat">Medicinas</a>
                    <h6 className="mad-product-title"><a href="shop_layout_boxed.html" className="mad-link">Kurofen Tab X
                      24</a></h6>
                  </div>
                  {/* <!--/ product-info --> */}
                  <div className="mad-product-info">
                    <div data-estimate="5" className="mad-rating"></div>
                    <div className="mad-info-item">
                      <div className="mad-product-price">$3.99 <span>$4.99</span></div>
                      <a href="shop_cart.html" className="mad-cart"><i
                        className="material-icons-outlined">shopping_bag</i></a>
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
                    <img src="images/264x264_product2.jpg" alt="" />
                    <div className="mad-actions">
                      <a href="#"><i className="material-icons">compare_arrows</i></a>
                      <a href="#"><i className="material-icons">favorite_border</i></a>
                      <a href="#" className="mad-qv"><i className="material-icons-outlined">remove_red_eye</i></a>
                    </div>
                  </div>
                  {/* <!-- product-info --> */}
                  <div className="mad-product-description">
                    <a href="#" className="mad-product-cat">Mamá y Bebe</a>
                    <h6 className="mad-product-title"><a href="shop_layout_boxed.html" className="mad-link">Holly Organic
                      Pouch Fennel Frog -
                      Pear with
                      Apple
                      ...</a></h6>
                  </div>
                  {/* <!--/ product-info --> */}
                  <div className="mad-product-info">
                    <div data-estimate="4" className="mad-rating"></div>
                    <div className="mad-info-item">
                      <div className="mad-product-price">$2.99</div>
                      <a href="shop_cart.html" className="mad-cart"><i
                        className="material-icons-outlined">shopping_bag</i></a>
                    </div>
                    <div className="mad-info-item">
                      <span>Stock (77) Und</span>
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
                {/* <!-- End of Product --> */}
              </div>
              {/* <!-- / owl item --> */}
              {/* <!-- owl item --> */}
              <div className="mad-grid-item">
                {/* <!-- Product --> */}
                <div className="mad-product">
                  <div className="mad-product-image">
                    <img src="images/264x264_product3.jpg" alt="" />
                    <div className="mad-actions">
                      <a href="#"><i className="material-icons">compare_arrows</i></a>
                      <a href="#"><i className="material-icons">favorite_border</i></a>
                      <a href="#" className="mad-qv"><i className="material-icons-outlined">remove_red_eye</i></a>
                    </div>
                  </div>
                  {/* <!-- product-info --> */}
                  <div className="mad-product-description">
                    <a href="#" className="mad-product-cat">Salud y Primeros Auxilios</a>
                    <h6 className="mad-product-title"><a href="shop_layout_boxed.html" className="mad-link">AirPio Mucus
                      Clearance & Lung
                      Expansion
                      Device</a>
                    </h6>
                  </div>
                  {/* <!--/ product-info --> */}
                  <div className="mad-product-info">
                    <div data-estimate="5" className="mad-rating"></div>
                    <div className="mad-info-item">
                      <div className="mad-product-price">$89.99</div>
                      <a href="shop_cart.html" className="mad-cart"><i
                        className="material-icons-outlined">shopping_bag</i></a>
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
                  </div>
                </div>
                {/* <!-- End of Product --> */}
              </div>
              {/* <!-- / owl item --> */}
              {/* <!-- owl item --> */}
              <div className="mad-grid-item">
                {/* <!-- Product --> */}
                <div className="mad-product">
                  <div className="mad-product-image sold">
                    <span className="mad-label">Vendido</span>
                    <img src="images/264x264_product4.jpg" alt="" />
                    <div className="mad-actions">
                      <a href="#"><i className="material-icons">compare_arrows</i></a>
                      <a href="#"><i className="material-icons">favorite_border</i></a>
                      <a href="#" className="mad-qv"><i className="material-icons-outlined">remove_red_eye</i></a>
                    </div>
                  </div>
                  {/* <!-- product-info --> */}
                  <div className="mad-product-description">
                    <a href="#" className="mad-product-cat">Orgánico y Sin Gluten</a>
                    <h6 className="mad-product-title"><a href="shop_layout_boxed.html" className="mad-link">Vitaly Protein
                      Slim & Trim Vegan
                      Slimming
                      Blend Cocoa</a></h6>
                  </div>
                  {/* <!--/ product-info --> */}
                  <div className="mad-product-info">
                    <div data-estimate="4.5" className="mad-rating"></div>
                    <div className="mad-info-item">
                      <div className="mad-product-price">$6.99</div>
                      <a href="shop_cart.html" className="mad-cart"><i
                        className="material-icons-outlined">arrow_right_alt</i></a>
                    </div>
                    <div className="mad-info-item">
                      <span>Stock (77) Und</span>
                      <div className="mad-progress-bars mad-progress-bars--secondary">
                        <div className="mad-progress-bars-item">
                          <div role="progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"
                            className="mad-progress-bar">
                            <div style={{ width: "10%" }} className="mad-progress-bar-indicator"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- End of Product --> */}
              </div>
              {/* <!-- / owl item --> */}
            </div>
          </div>
          {/* <!--================ End of Tab ================--> */}
          {/* <!--================ Tab ================--> */}
          <div id="tab-7" tabIndex="0" role="tabpanel" aria-labelledby="tab-7-link" className="mad-tab">
            <div className="mad-products owl-carousel mad-grid mad-grid--cols-4 no-dots nav-top">
              {/* <!-- owl item --> */}
              <div className="mad-grid-item">
                {/* <!-- Product --> */}
                <div className="mad-product">
                  <div className="mad-product-image">
                    <span className="mad-label">Con <br />-10%</span>
                    <img src="images/264x264_product1.jpg" alt="" />
                    <div className="mad-actions">
                      <a href="#"><i className="material-icons">compare_arrows</i></a>
                      <a href="#"><i className="material-icons">favorite_border</i></a>
                      <a href="#" className="mad-qv"><i className="material-icons-outlined">remove_red_eye</i></a>
                    </div>
                  </div>
                  {/* <!-- product-info --> */}
                  <div className="mad-product-description">
                    <a href="#" className="mad-product-cat">Medicinas</a>
                    <h6 className="mad-product-title"><a href="shop_layout_boxed.html" className="mad-link">Kurofen Tab X
                      24</a></h6>
                  </div>
                  {/* <!--/ product-info --> */}
                  <div className="mad-product-info">
                    <div data-estimate="5" className="mad-rating"></div>
                    <div className="mad-info-item">
                      <div className="mad-product-price">$3.99 <span>$4.99</span></div>
                      <a href="shop_cart.html" className="mad-cart"><i
                        className="material-icons-outlined">shopping_bag</i></a>
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
                    <img src="images/264x264_product2.jpg" alt="" />
                    <div className="mad-actions">
                      <a href="#"><i className="material-icons">compare_arrows</i></a>
                      <a href="#"><i className="material-icons">favorite_border</i></a>
                      <a href="#" className="mad-qv"><i className="material-icons-outlined">remove_red_eye</i></a>
                    </div>
                  </div>
                  {/* <!-- product-info --> */}
                  <div className="mad-product-description">
                    <a href="#" className="mad-product-cat">Mamá y Bebe</a>
                    <h6 className="mad-product-title"><a href="shop_layout_boxed.html" className="mad-link">Holly Organic
                      Pouch Fennel Frog -
                      Pear with
                      Apple
                      ...</a></h6>
                  </div>
                  {/* <!--/ product-info --> */}
                  <div className="mad-product-info">
                    <div data-estimate="4" className="mad-rating"></div>
                    <div className="mad-info-item">
                      <div className="mad-product-price">$2.99</div>
                      <a href="shop_cart.html" className="mad-cart"><i
                        className="material-icons-outlined">shopping_bag</i></a>
                    </div>
                    <div className="mad-info-item">
                      <span>Stock (77) Und</span>
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
                {/* <!-- End of Product --> */}
              </div>
              {/* <!-- / owl item --> */}
              {/* <!-- owl item --> */}
              <div className="mad-grid-item">
                {/* <!-- Product --> */}
                <div className="mad-product">
                  <div className="mad-product-image">
                    <img src="images/264x264_product3.jpg" alt="" />
                    <div className="mad-actions">
                      <a href="#"><i className="material-icons">compare_arrows</i></a>
                      <a href="#"><i className="material-icons">favorite_border</i></a>
                      <a href="#" className="mad-qv"><i className="material-icons-outlined">remove_red_eye</i></a>
                    </div>
                  </div>
                  {/* <!-- product-info --> */}
                  <div className="mad-product-description">
                    <a href="#" className="mad-product-cat">Salud y Primeros Auxilios</a>
                    <h6 className="mad-product-title"><a href="shop_layout_boxed.html" className="mad-link">AirPio Mucus
                      Clearance & Lung
                      Expansion
                      Device</a>
                    </h6>
                  </div>
                  {/* <!--/ product-info --> */}
                  <div className="mad-product-info">
                    <div data-estimate="5" className="mad-rating"></div>
                    <div className="mad-info-item">
                      <div className="mad-product-price">$89.99</div>
                      <a href="shop_cart.html" className="mad-cart"><i
                        className="material-icons-outlined">shopping_bag</i></a>
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
                  </div>
                </div>
                {/* <!-- End of Product --> */}
              </div>
              {/* <!-- / owl item --> */}
              {/* <!-- owl item --> */}
              <div className="mad-grid-item">
                {/* <!-- Product --> */}
                <div className="mad-product">
                  <div className="mad-product-image sold">
                    <span className="mad-label">Vendido</span>
                    <img src="images/264x264_product4.jpg" alt="" />
                    <div className="mad-actions">
                      <a href="#"><i className="material-icons">compare_arrows</i></a>
                      <a href="#"><i className="material-icons">favorite_border</i></a>
                      <a href="#" className="mad-qv"><i className="material-icons-outlined">remove_red_eye</i></a>
                    </div>
                  </div>
                  {/* <!-- product-info --> */}
                  <div className="mad-product-description">
                    <a href="#" className="mad-product-cat">Orgánico y Sin Gluten</a>
                    <h6 className="mad-product-title"><a href="shop_layout_boxed.html" className="mad-link">Vitaly Protein
                      Slim & Trim Vegan
                      Slimming
                      Blend Cocoa</a></h6>
                  </div>
                  {/* <!--/ product-info --> */}
                  <div className="mad-product-info">
                    <div data-estimate="4.5" className="mad-rating"></div>
                    <div className="mad-info-item">
                      <div className="mad-product-price">$6.99</div>
                      <a href="shop_cart.html" className="mad-cart"><i
                        className="material-icons-outlined">arrow_right_alt</i></a>
                    </div>
                    <div className="mad-info-item">
                      <span>Stock (77) Und</span>
                      <div className="mad-progress-bars mad-progress-bars--secondary">
                        <div className="mad-progress-bars-item">
                          <div role="progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"
                            className="mad-progress-bar">
                            <div style={{ width: "10%" }} className="mad-progress-bar-indicator"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- End of Product --> */}
              </div>
              {/* <!-- / owl item --> */}
            </div>
          </div>
          {/* <!--================ End of Tab ================--> */}
          {/* <!--================ Tab ================--> */}
          <div id="tab-8" tabIndex="0" role="tabpanel" aria-labelledby="tab-8-link" className="mad-tab">
            <div className="mad-products owl-carousel mad-grid mad-grid--cols-4 no-dots nav-top">
              {/* <!-- owl item --> */}
              <div className="mad-grid-item">
                {/* <!-- Product --> */}
                <div className="mad-product">
                  <div className="mad-product-image">
                    <span className="mad-label">Con <br />-10%</span>
                    <img src="images/264x264_product1.jpg" alt="" />
                    <div className="mad-actions">
                      <a href="#"><i className="material-icons">compare_arrows</i></a>
                      <a href="#"><i className="material-icons">favorite_border</i></a>
                      <a href="#" className="mad-qv"><i className="material-icons-outlined">remove_red_eye</i></a>
                    </div>
                  </div>
                  {/* <!-- product-info --> */}
                  <div className="mad-product-description">
                    <a href="#" className="mad-product-cat">Medicinas</a>
                    <h6 className="mad-product-title"><a href="shop_layout_boxed.html" className="mad-link">Kurofen Tab X
                      24</a></h6>
                  </div>
                  {/* <!--/ product-info --> */}
                  <div className="mad-product-info">
                    <div data-estimate="5" className="mad-rating"></div>
                    <div className="mad-info-item">
                      <div className="mad-product-price">$3.99 <span>$4.99</span></div>
                      <a href="shop_cart.html" className="mad-cart"><i
                        className="material-icons-outlined">shopping_bag</i></a>
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
                    <img src="images/264x264_product2.jpg" alt="" />
                    <div className="mad-actions">
                      <a href="#"><i className="material-icons">compare_arrows</i></a>
                      <a href="#"><i className="material-icons">favorite_border</i></a>
                      <a href="#" className="mad-qv"><i className="material-icons-outlined">remove_red_eye</i></a>
                    </div>
                  </div>
                  {/* <!-- product-info --> */}
                  <div className="mad-product-description">
                    <a href="#" className="mad-product-cat">Mamá y Bebe</a>
                    <h6 className="mad-product-title"><a href="shop_layout_boxed.html" className="mad-link">Holly Organic
                      Pouch Fennel Frog -
                      Pear with
                      Apple
                      ...</a></h6>
                  </div>
                  {/* <!--/ product-info --> */}
                  <div className="mad-product-info">
                    <div data-estimate="4" className="mad-rating"></div>
                    <div className="mad-info-item">
                      <div className="mad-product-price">$2.99</div>
                      <a href="shop_cart.html" className="mad-cart"><i
                        className="material-icons-outlined">shopping_bag</i></a>
                    </div>
                    <div className="mad-info-item">
                      <span>Stock (77) Und</span>
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
                {/* <!-- End of Product --> */}
              </div>
              {/* <!-- / owl item --> */}
              {/* <!-- owl item --> */}
              <div className="mad-grid-item">
                {/* <!-- Product --> */}
                <div className="mad-product">
                  <div className="mad-product-image">
                    <img src="images/264x264_product3.jpg" alt="" />
                    <div className="mad-actions">
                      <a href="#"><i className="material-icons">compare_arrows</i></a>
                      <a href="#"><i className="material-icons">favorite_border</i></a>
                      <a href="#" className="mad-qv"><i className="material-icons-outlined">remove_red_eye</i></a>
                    </div>
                  </div>
                  {/* <!-- product-info --> */}
                  <div className="mad-product-description">
                    <a href="#" className="mad-product-cat">Salud y Primeros Auxilios</a>
                    <h6 className="mad-product-title"><a href="shop_layout_boxed.html" className="mad-link">AirPio Mucus
                      Clearance & Lung
                      Expansion
                      Device</a>
                    </h6>
                  </div>
                  {/* <!--/ product-info --> */}
                  <div className="mad-product-info">
                    <div data-estimate="5" className="mad-rating"></div>
                    <div className="mad-info-item">
                      <div className="mad-product-price">$89.99</div>
                      <a href="shop_cart.html" className="mad-cart"><i
                        className="material-icons-outlined">shopping_bag</i></a>
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
                  </div>
                </div>
                {/* <!-- End of Product --> */}
              </div>
              {/* <!-- / owl item --> */}
              {/* <!-- owl item --> */}
              <div className="mad-grid-item">
                {/* <!-- Product --> */}
                <div className="mad-product">
                  <div className="mad-product-image sold">
                    <span className="mad-label">Vendido</span>
                    <img src="images/264x264_product4.jpg" alt="" />
                    <div className="mad-actions">
                      <a href="#"><i className="material-icons">compare_arrows</i></a>
                      <a href="#"><i className="material-icons">favorite_border</i></a>
                      <a href="#" className="mad-qv"><i className="material-icons-outlined">remove_red_eye</i></a>
                    </div>
                  </div>
                  {/* <!-- product-info --> */}
                  <div className="mad-product-description">
                    <a href="#" className="mad-product-cat">Orgánico y Sin Gluten</a>
                    <h6 className="mad-product-title"><a href="shop_layout_boxed.html" className="mad-link">Vitaly Protein
                      Slim & Trim Vegan
                      Slimming
                      Blend Cocoa</a></h6>
                  </div>
                  {/* <!--/ product-info --> */}
                  <div className="mad-product-info">
                    <div data-estimate="4.5" className="mad-rating"></div>
                    <div className="mad-info-item">
                      <div className="mad-product-price">$6.99</div>
                      <a href="shop_cart.html" className="mad-cart"><i
                        className="material-icons-outlined">arrow_right_alt</i></a>
                    </div>
                    <div className="mad-info-item">
                      <span>Stock (77) Und</span>
                      <div className="mad-progress-bars mad-progress-bars--secondary">
                        <div className="mad-progress-bars-item">
                          <div role="progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"
                            className="mad-progress-bar">
                            <div style={{ width: "10%" }} className="mad-progress-bar-indicator"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- End of Product --> */}
              </div>
              {/* <!-- / owl item --> */}
            </div>
          </div>
          {/* <!--================ End of Tab ================--> */}
        </div>
        {/* <!--================ End of Tabs Container ================--> */}
      </div>
      {/* <!--================ End of Tabs ================--> */}
    </div>
  )
}

export default FeaturedProductsWeekly