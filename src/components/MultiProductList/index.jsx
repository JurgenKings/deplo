import React, { useState } from "react"

function MultiProductList({ title, propsProducts }) {
  const [products, setproducts] = useState(propsProducts)

  return (
    <>
      <h5 className="mad-page-title">
        {title}
        <a href="/catalogo" className="mad-read-more">
          Ver todos
        </a>
      </h5>

      <div className="mad-products hr-type with-border style-2">
        <div className="mad-grid-item">
          {
            products.map(product => (
              <div key={product.id} className="mad-product">
                <div className="mad-product-image">
                  <img src={product.image} alt="" />
                  <div className="mad-actions">
                    <a href="#"><i className="material-icons">compare_arrows</i></a>
                    <a href="#"><i className="material-icons">favorite_border</i></a>
                    <a href="#" className="mad-qv"><i className="material-icons-outlined">remove_red_eye</i></a>
                  </div>
                </div>
                <div className="mad-col">
                  <div className="mad-product-description">
                    <a href="#" className="mad-product-cat">
                      {product.category}
                    </a>
                    <h6 className="mad-product-title">
                      <a href="shop_layout_boxed.html" className="mad-link">
                        {product.productName}
                      </a>
                    </h6>
                  </div>
                  <div className="mad-product-info">
                    <div className="mad-info-item">
                      <div className="mad-product-price">
                        ${product.price}
                      </div>
                      <a href="shop_cart.html" className="mad-cart"><i
                        className="material-icons-outlined">shopping_bag</i></a>
                    </div>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default MultiProductList