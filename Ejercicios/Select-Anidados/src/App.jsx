import './App.css'
import { Selects } from './components/selects'

const App = () => {
  return (
    <div className='container'>
      <h1>Aprendizaje React</h1>
      <p>Selects anidados</p>
      {/* SelectAnidades*/}
      <Selects/>
    </div>
  )
}

export default App