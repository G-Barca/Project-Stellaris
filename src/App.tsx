import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Packages from './pages/Package'
import Booking from './pages/Booking'
import About from './pages/Sobre'
import Team from './pages/Integrantes'
import FAQ from './pages/FAQ'
import Reservations from './pages/Reservas'

function App() {
  return (
    <div className="bg-gray-950 min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/booking/:id" element={<Booking />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/reservations" element={<Reservations />} />

          
        </Routes>
        
      </main>
      <Footer />
    </div>
  )
}

export default App