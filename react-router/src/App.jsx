import { Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Contact from './Components/Contact'
import About from './Components/About'

function App() {
  return (
    <div>
      <h1>WELCOME TO REACT ROUTING</h1>
      <Navbar />
      <Routes>
        <Route path="/" element = {<Home />}></Route>
        <Route path="/about" element = {<About />}></Route>
        <Route path="/contact" element = {<Contact />}></Route>
      </Routes>

    </div>
  )
}

export default App
