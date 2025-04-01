import Botao from "./componentes/Botao"
import Caixa from "./componentes/Caixa"
import Etiqueta from "./componentes/Etiqueta"

const App = () => {

  return (
    <>
    Aula de Componentes
   
    <Etiqueta texto="Texto Enviado" />
    <Etiqueta texto="mais um texto lek"/>
    <Etiqueta texto="sim outro texto" />
    <Caixa/>
    <Botao />
    </>
  )
}

export default App