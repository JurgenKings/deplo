import { useEffect } from 'react' 
import { useLocation } from 'react-router-dom' 

const useReloadScripts = (scripts) => {
  const location = useLocation() 

  useEffect(() => {
    const scriptElements = scripts.map(script => {
      const scriptElement = document.createElement('script') 
      scriptElement.src = script 
      scriptElement.async = true 
      document.body.appendChild(scriptElement) 
      return scriptElement 
    }) 

    return () => {
      scriptElements.forEach(scriptElement => {
        document.body.removeChild(scriptElement) 
      }) 
    } 
  }, [location.pathname]) // Se ejecuta cada vez que cambia la ruta
} 

export default useReloadScripts 