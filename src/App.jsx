import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home'
import LoginPage from './pages/LoginPage'
import RegistrationPage from './pages/RegistrationPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegistrationPage />} />
        </Routes>

      </Router>
    </>
  )
}

export default App
