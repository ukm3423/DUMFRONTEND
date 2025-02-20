import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home'
import LoginPage from './pages/LoginPage'
import RegistrationPage from './pages/RegistrationPage'
import Dashboard from './pages/Dashboard';
import Main from './pages/components/Main';
import Courses from './pages/components/sidebarmenus/Courses';

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/main" element={<Main />} />
          <Route path="/courses" element={<Courses />} />
        </Routes>

      </Router>
    </>
  )
}

export default App
