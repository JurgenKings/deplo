import { PDFDownloadLink } from "@react-pdf/renderer"
import React, { useEffect, useState } from "react"
import MakePDFOrderDetail from "../MakePDFOrderDetail"
import './PurchaseDetailModal.css'

const styleTdContent = {
  display: "flex",
  justifyContent: "center"
}

const fakeData = {
  _id: "1",
  numOrder: 2021,
  status: "Pendiente",
  date: "20/10/2001",
  total: 102000,
  products: [
    {
      _id: "2",
      name: "Jack Phunkett SuperFade Face Cream 40ml",
      price: "10",
      priceBs: "380",
      quantity: "3",
      subtotal: "30"
    },
    {
      _id: "3",
      name: "Jack Phunkett 10ml",
      price: "20",
      priceBs: "380",
      quantity: "3",
      subtotal: "60"
    },
    {
      _id: "4",
      name: "Ice",
      price: "220",
      priceBs: "380",
      quantity: "4",
      subtotal: "880"
    },
    {
      _id: "5",
      name: "Ice asdsad",
      price: "220",
      priceBs: "380",
      quantity: "4",
      subtotal: "880"
    },
    {
      _id: "6",
      name: "Ice sdasdasd asdsad",
      price: "220",
      priceBs: "380",
      quantity: "4",
      subtotal: "880"
    },
    {
      _id: "7",
      name: "Jack Phunkett SuperFade Face Cream 40ml",
      price: "10",
      priceBs: "380",
      quantity: "3",
      subtotal: "30"
    },
    {
      _id: "8",
      name: "Jack Phunkett 10ml",
      price: "20",
      priceBs: "380",
      quantity: "3",
      subtotal: "60"
    },
    {
      _id: "9",
      name: "Ice sdasdasd asdsad",
      price: "220",
      priceBs: "380",
      quantity: "4",
      subtotal: "880"
    },
    {
      _id: "10",
      name: "Jack Phunkett 10ml",
      price: "20",
      priceBs: "380",
      quantity: "3",
      subtotal: "60"
    },
    {
      _id: "11",
      name: "Ice",
      price: "220",
      priceBs: "380",
      quantity: "4",
      subtotal: "880"
    },
  ]
}

const client = {
  name: "Jorge",
  lastName: "Reyes",
  address: "La Guardia, sector Moscú"
}

const office = {
  address: "X5Q6+G8M, CC Los Robles, Sector El Pilar, 6316, Nueva Esparta",
  phone: "0295-261-22-87",
}

const tasaBCV = 38

function PurchaseDetailModal({ isOpen, onClose }) {
  const [logoBase64, setLogoBase64] = useState(null)

  const toBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => resolve(reader.result)
      reader.onerror = (error) => reject(error)
    })
  }

  const fetchLogo = async () => {
    const logoPath = "/images/logo.png"
    const response = await fetch(logoPath)
    const blob = await response.blob()
    const base64Logo = await toBase64(blob)
    setLogoBase64(base64Logo)
  }

  useEffect(() => {
    fetchLogo()
  }, [])

  return (
    <div className={`modal-overlay ${isOpen ? "open" : ""}`}>
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>&times;</button>
        <div className="hidden-section ">
          <h2
            style={{
              display: 'flex',
              justifyContent: 'space-between'
            }}
          >
            <span className="jorge-title-modal">
              Detalles de mi compra
            </span>
            <span style={{ fontSize: "24px", color: "gray", paddingRight: '1rem', }}>
            #{fakeData.numOrder}
            </span>
          </h2>
          <p
            style={{
              textAlign: "right",
              paddingRight: "1rem",
              margin: 0
            }}
          >
            {/* Orden #: {fakeData.numOrder} */}
            {/* <br /> */}
            Fecha: {fakeData.date}
          </p>

          <div className="mad-table-wrap shop-cart-form shopping-cart-full jorge-container-table-modal">
            <table className="mad-table--responsive-md jorge-container-table-modal">
              <thead>
                <tr>
                  <th>Producto</th>
                  <th className="align-center">Cantidad</th>
                  <th className="align-center">Precio unitario</th>
                  <th>Subtotal</th>
                </tr>
              </thead>
              <tbody className="jorge-container-table-modal jorge-tbody-modal">
                {
                  fakeData?.products?.map((product) => (
                    <tr key={product._id} className="mad-product-item">
                      <td data-cell-title="Producto">
                        <div className="mad-products mad-product-small">
                          <div className="mad-col">
                            <div className="mad-product">
                              <div className="mad-product-description">
                                <h5 className="mad-product-title">
                                  {product.name}
                                </h5>
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>

                      <td data-cell-title="Cantidad">
                        <div className="mad-products" style={styleTdContent}>
                          <span className="mad-product-price">
                            {product.quantity}
                          </span>
                        </div>
                      </td>

                      <td data-cell-title="Precio">
                        <div className="mad-products" style={styleTdContent}>
                          <span className="mad-product-price">
                            ${product.price}
                          </span>
                        </div>
                      </td>

                      <td data-cell-title="Subtotal">
                        <div className="mad-products" style={styleTdContent}>
                          <span className="mad-product-price">
                            <b>
                              ${product.subtotal}
                            </b>
                          </span>
                        </div>
                      </td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div>
          <div className="jorge-table-footer-modal">
            <PDFDownloadLink
              document={
                <MakePDFOrderDetail
                  order={fakeData}
                  logoBase64={logoBase64}
                  client={client}
                  office={office}
                  tasaBCV={tasaBCV}
                />
              }
              fileName={`Orden #${fakeData.numOrder}.pdf`}
            >
              <button className="btn btn-small btn-style-7">
                <i className="material-icons-outlined">
                  download
                </i>
                <span>
                  Descargar factura
                </span>
              </button>
            </PDFDownloadLink>
            <h6>Total: ${fakeData.total}</h6>
          </div>
        </div>
      </div>
    </div >
  )
}

export default PurchaseDetailModal