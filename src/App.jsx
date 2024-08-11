import './App.css'
import Header from './assets/components/Header'
import Home from './assets/components/Home'
import Navbar from './assets/components/Navbar'
import Footer from './assets/components/Footer'

function App() {
  return (
    <>
      <div className='contenedor'>
        <Navbar/>
        <Header 
          title={'¡Pizzería Mamma Mia!'}
          subtitle={'¡Tenemos las mejores pizzas que podrás encontrar!'}
        />
        <Home/>
        <Footer/>

      </div>
    </>
  )
}

export default App
