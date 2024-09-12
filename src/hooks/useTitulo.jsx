import { useEffect } from "react"


const useTitulo = ( textoTitulo = 'Sin título') => {

    useEffect(() => {
      document.title = `INFINITOO - ${textoTitulo}`
    }, [])
    
}

export default useTitulo