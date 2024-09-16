import { useEffect } from 'react' 
import { useLocation } from 'react-router-dom' 
import $ from 'jquery' 

const useDetectDOMChanges = (scripts) => {
  const location = useLocation() 

  useEffect(() => {
    const executeScripts = () => {
      scripts.forEach(script => {
        $.getScript(script) 
      }) 
    } 

    // Ejecutar scripts al montar el componente
    executeScripts() 

    // Detectar cambios en el DOM
    const observer = new MutationObserver(() => {
      executeScripts() 
    }) 

    observer.observe(document.getElementById('root'), {
      childList: true,
      subtree: true
    }) 

    return () => {
      observer.disconnect() 
    } 
  }, [location.pathname])  // Se ejecuta cada vez que cambia la ruta
} 

export default useDetectDOMChanges 