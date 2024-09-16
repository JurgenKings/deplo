import { useEffect } from 'react'
import $ from 'jquery'
import { useLocation } from 'react-router-dom'

const useLoadScripts = (scripts) => {
  const location = useLocation()

  useEffect(() => {
    scripts.forEach(script => {
      $.getScript(script)
    })

    return () => {
      // Limpieza si es necesario
    }
  }, [scripts, location.pathname])
}

export default useLoadScripts