import { useEffect } from 'react' 
import $ from 'jquery' 

const useExecuteScriptsOnNavigation = (scripts) => {
  useEffect(() => {
    const executeScripts = () => {
      scripts.forEach(script => {
        $.getScript(script) 
      }) 
    } 

    // Ejecutar scripts al montar el componente
    executeScripts() 

    // Detectar cambios en la URL
    const handlePopState = () => {
      executeScripts() 
    } 

    window.addEventListener('popstate', handlePopState) 

    return () => {
      window.removeEventListener('popstate', handlePopState) 
    } 
  }, [scripts]) 
} 

export default useExecuteScriptsOnNavigation 