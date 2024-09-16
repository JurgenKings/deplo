
import React, { useEffect, useState } from "react"
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"
import { CancelIcon, DeliveredIcon, ProcessingIcon, ShippedIcon } from "../CustomIcons"
import './OrderDetailModal.css'

const orderStatus = "shipped"

const orderSteps = [
  {
    status: "processing",
    title: "Procesando",
    description: "Su pedido está siendo procesado y pronto sera enviado a destino",
    icon: (
      <ProcessingIcon />
    )
  },
  {
    status: "shipped",
    title: "Enviado",
    description: "Su pedido ha sido enviado, en espera de ser recibido en sucursal, Fecha aproximada de entrega el 24/09/2024",
    icon: (
      <ShippedIcon />
    )
  },
  {
    status: "delivered",
    title: "Entregado",
    description: "Su pedido ha sido despachado en sucursal para su retiro",
    icon: (
      <DeliveredIcon />
    )
  },
]

const cancelledStep = {
  status: "cancelled",
  title: "Cancelado",
  description: "Su pedido ha sido cancelado",
  icon: (
    <CancelIcon />
  )
}

const isCancelled = false

const getStepsToShow = () => {
  if (isCancelled) {
    // Si está cancelado, mostramos solo el procesamiento y el cancelado
    return [orderSteps[0], cancelledStep]
  }
  return orderSteps
}

function OrderDetailModal({ isOpen, onClose }) {

  return (
    <div className={`modal-overlay ${isOpen ? "open" : ""}`} style={{ fontSize: "1px" }}>
      <div className="modal-content" >
        <button className="modal-close" onClick={onClose}>&times;</button>
        <div className="hidden-section jorge-modal-container">
          <h3 style={{
            display: "flex",
            justifyContent: "space-between"
          }}>
            <span style={{ margin: "0 auto" }}>
              Estado de mi pedido
            </span>
          </h3>

          <VerticalTimeline layout="1-column">
            {getStepsToShow().map((step, index) => (
              <VerticalTimelineElement
                key={index}
                className={`vertical-timeline-element--work ${step.status === orderStatus ? "active" : ""}`}
                contentStyle={{ background: step.status === orderStatus ? "#f3f4f6" : "#fff", color: "#333" }}
                contentArrowStyle={{ borderRight: "7px solid  #f3f4f6" }}
                iconStyle={{
                  background: step.status === orderStatus ? "#10B981" : "#cbd5e1",
                  color: "#fff",
                  ...(step.status === "cancelled" ? { background: "#EF4444" } : {})
                }}
                icon={step.icon}
              >
                <h5 className="vertical-timeline-element-title">
                  {step.title}
                </h5>
                <p>
                  {step.description}
                </p>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </div >
  )
}

export default OrderDetailModal