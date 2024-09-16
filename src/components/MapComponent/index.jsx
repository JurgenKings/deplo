import React, { useEffect, useRef, useState } from "react"
import ErrorNotification from "./ErrorNotification"
// import { useLocation } from "react-router" 

const MapComponent = () => {
  const [mapLoaded, setMapLoaded] = useState(false)
  const [error, setError] = useState(null)
  const [isGpsEnabled, setIsGpsEnabled] = useState(null)
  // const [watchId, setWatchId] = useState < string | null > (null) 
  const [position, setPosition] = useState(null)
  // const location = useLocation() 

  const mapRef = useRef(null)
  const [isMapRefReady, setIsMapRefReady] = useState(false)

  // const requestPermissions = async () => {
  //   const permission = await Geolocation.checkPermissions()
  //   if (permission.location !== "granted") {
  //     await Geolocation.requestPermissions()
  //   }
  // }

  // const checkGpsEnabled = async () => {
  //   try {
  //     await requestPermissions()
  //     const position = await Geolocation.getCurrentPosition({
  //       enableHighAccuracy: true,
  //       timeout: 3000,
  //     })

  //     if (position) {
  //       setPosition(position)
  //       setIsGpsEnabled(true)
  //     }
  //   } catch (error) {
  //     setIsGpsEnabled(false)
  //   }
  // }

  useEffect(() => {
    const checkMapReady = () => {
      if (mapRef.current) {
        setIsMapRefReady(true)
      }
    }

    checkMapReady()

    const intervalId = setInterval(checkMapReady, 1000)

    return () => clearInterval(intervalId)
  }, [isMapRefReady])

  useEffect(() => {
    if (isMapRefReady) {
      try {
        if (isMapRefReady) {
          // checkGpsEnabled()

          if (!window.google || !window.google.maps) {
            setError("API de Google Maps no cargada")
            return
          }

          navigator.geolocation.getCurrentPosition(
            (position) => {
              const { latitude, longitude } = position.coords
              const latlng = new window.google.maps.LatLng(latitude, longitude)

              const mapOptions = {
                center: latlng,
                zoom: 14,
                disableDefaultUI: true,
                clickableIcons: false,
                styles: [
                  {
                    featureType: "poi",
                    stylers: [{ visibility: "off" }],
                  },
                  {
                    featureType: "transit",
                    stylers: [{ visibility: "off" }],
                  },
                ],
              }

              const map = new window.google.maps.Map(
                mapRef.current,
                mapOptions
              )

              const markers = [
                { 
                  position: new window.google.maps.LatLng(latitude, longitude), 
                  icon: '../../../images/map_marker.png' 
                },
                { 
                  position: new window.google.maps.LatLng(latitude + 0.01, longitude + 0.01), 
                  icon: '../../../images/map_marker.png' 
                },
              ]

              markers.forEach((marker) => {
                const markerImage = {
                  url: marker.icon,
                  scaledSize: new window.google.maps.Size(50, 40)
                }

                const newMarker = new window.google.maps.Marker({
                  position: marker.position,
                  map: map,
                  icon: markerImage
                })

                const markerContent = `
                  <span style="color: #00C4B3; font-weight: bold" className='label'>
                    Ubicación falsa de la farmacia
                  </span>
                `

                const infoWindow = new window.google.maps.InfoWindow({
                  content: markerContent,
                })

                infoWindow.open(map, newMarker);
              })
            })
        }
      } catch (error) {
        console.log("Error en el mapa")
      }
    } else {
      setMapLoaded(false)
    }
  }, [isMapRefReady])

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        position: "relative",
      }}
    >
      {error && !mapLoaded && (
        <ErrorNotification error={error} mapLoaded={mapLoaded} />
      )}

      {/* {isGpsEnabled === false && (
        <ErrorNotification error={error} mapLoaded={mapLoaded} isGpsEnabled={isGpsEnabled} />
      )} */}

      {!error && (
        <div
          ref={mapRef}
          id="mapaDOM"
          style={{ width: "100%", height: "100%", border: '2px solid green' }}
        ></div>
      )}
    </div>
  )
}

export default MapComponent 