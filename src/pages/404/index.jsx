import React from "react"
import NewsLetter from "../../components/NewsLetter"

function NotFound() {

  return (
    <div className="mad-content no-pd">
      <div className="container">
        <div className="mad-section">
          <div className="row align-items-center">
            <div className="col-xl-6">
              <h1 className="mad-404-title">
                404
              </h1>
              <h6>
                Lo sentimos, la página que buscas no existe en Megafarma
              </h6>
            </div>
            <div className="col-xl-6">
              <p className="mad-text-medium">
                Probablemente sea algo que hemos hecho mal, pero ahora que lo sabemos, intentaremos arreglarlo. Go <a href="#" className="mad-link">Home</a> o intenta buscar aca
              </p>
              <div className="mad-search-section">
                <div className="mad-col">
                  <input type="text" placeholder="Buscar página" />
                </div>
                <button type="submit">
                  <i style={{ color: "#26658c " }} className="material-icons">search</i>
                </button>
              </div>
            </div>
          </div>
        </div>

        <NewsLetter />
      </div>
    </div>
  )
}

export default NotFound 
