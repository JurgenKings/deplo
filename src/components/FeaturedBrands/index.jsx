import React, { useState } from "react"

const fakeFeaturedBrands = [
  {
    id: 1,
    image: 'images/192x104_sponsor1.jpg',
    link: 'https://themeforest.net/user/monkeysan/portfolio'
  },
  {
    id: 2,
    image: 'images/Jorge_192x104.jpg',
    link: 'https://themeforest.net/user/monkeysan/portfolio'
  },
  {
    id: 3,
    image: 'images/192x104_sponsor1.jpg',
    link: 'https://themeforest.net/user/monkeysan/portfolio'
  },
  {
    id: 4,
    image: 'images/192x104_sponsor1.jpg',
    link: 'https://themeforest.net/user/monkeysan/portfolio'
  },
  {
    id: 5,
    image: 'images/192x104_sponsor1.jpg',
    link: 'https://themeforest.net/user/monkeysan/portfolio'
  },
  {
    id: 6,
    image: 'images/192x104_sponsor1.jpg',
    link: 'https://themeforest.net/user/monkeysan/portfolio'
  },
  {
    id: 7,
    image: 'images/192x104_sponsor1.jpg',
    link: 'https://themeforest.net/user/monkeysan/portfolio'
  },
  {
    id: 8,
    image: 'images/Jorge_192x104.jpg',
    link: 'https://themeforest.net/user/monkeysan/portfolio'
  },
  {
    id: 9,
    image: 'images/192x104_sponsor1.jpg',
    link: 'https://themeforest.net/user/monkeysan/portfolio'
  },
  {
    id: 10,
    image: 'images/192x104_sponsor1.jpg',
    link: 'https://themeforest.net/user/monkeysan/portfolio'
  },
]

function FeaturedBrands() {
  const [featuredBrands, setFeaturedBrands] = useState(fakeFeaturedBrands)

  return (
    <div className="content-element-10">
      <h5 className="mad-page-title with-carousel">Marcas Destacadas <a href="/catalogo"
        className="mad-read-more">Ver todos</a></h5>
      {/* <!--================ Partners ================--> */}
      <div className="mad-sponsors owl-carousel mad-grid mad-grid--cols-5 no-dots nav-top">
        {
          featuredBrands.map((featuredBrand => (
            <div key={featuredBrand.id} className="mad-owl-item">
              {/* <!--================ Partners Item ================--> */}
              <a href={featuredBrand.link} target="_blank">
                <img src={featuredBrand.image} alt="" />
              </a>
              {/* <!--================ End of Partners Item ================--> */}
            </div>
          )))
        }
      </div>
      {/* <!--================ End Of Partners ================--> */}
    </div>
  )
}

export default FeaturedBrands