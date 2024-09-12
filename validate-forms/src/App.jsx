import './App.css'
import ContactForm from './components/ContactForm'

function App() {
    return (
    <>
      <h1 className="mb-10 text-3xl font-bold text-center">Validate Forms</h1>
      <div className="card">
        <ContactForm/>
      </div>
    </>
  )
}

export default App