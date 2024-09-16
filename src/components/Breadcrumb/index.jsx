import React from "react"
import { Link } from "react-router-dom"

function Breadcrumb({ title }) {
  return (
    <div className="mad-breadcrumb">
      <div className="container">
        <nav className="mad-breadcrumb-path">
          <span>
            <a href="/" className="mad-link">
              Home
            </a>
          </span> /
          <span>
            {title}
          </span>
        </nav>
        <h1 className="mad-page-title">
          {title}
        </h1>
      </div>
    </div>
  )
}

export default Breadcrumb