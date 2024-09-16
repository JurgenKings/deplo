import React from 'react'

function NewsLetter() {
  return (
    <div className="mad-section no-pd mad-section--stretched mad-colorizer--scheme-color-2">
      <div className="mad-sub-wrap">
        <h5 className="mad-page-title">¡Reciba nuestras ofertas directamente en su Inbox!</h5>
        <div className="mad-col">
          <form className="mad-newsletter-form one-line">
            <input type="email" name="email" placeholder="Ingresa tu correo electrónico" />
            <button type="submit" className="btn btn-big btn-style-3"><span>Sign Up</span></button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default NewsLetter