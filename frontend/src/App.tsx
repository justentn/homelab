import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from "./components/NavBar/NavBar"
import Home from "./pages/Home"
import Projects from "./pages/Projects"

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}