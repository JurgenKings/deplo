import React, { useEffect } from 'react'
import { toast, Toaster } from 'react-hot-toast'

function ErrorNotification({ error, mapLoaded, isGpsEnabled }) {

  useEffect(() => {
    if (error && !mapLoaded) {
      toast.error("No se pudo cargar el mapa", {
        duration: 7000,
        position: 'top-center',
        style: {
          border: '1px solid #FF0000',
          padding: '16px',
          color: '#222222',
          cursor: 'pointer,'
        },
      })
    }

    if (!isGpsEnabled) {
      toast.error("Por favor, habilita el GPS para usar esta función", {
        duration: 4000,
        position: 'top-center',
        style: {
          border: '1px solid #FF0000',
          padding: '16px',
          color: '#222222',
          cursor: 'pointer,'
        },
      })
    }
  }, [error, mapLoaded, isGpsEnabled])

  return (
    <div>
      <Toaster />
    </div>
  )
}

export default ErrorNotification 