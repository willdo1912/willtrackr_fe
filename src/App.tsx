import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AppContextWrapper from './stores/app-context-manager.tsx'
import Start from './pages/Start'
import Login from './pages/Login/index.tsx'
import Register from './pages/Register/index.tsx'
import Typeform from './pages/Typeform/index.tsx'
import Dashboard from './pages/Dashboard/index.tsx'
import Attempt from './pages/Attempt/index.tsx'
import Chatbot from './pages/Chatbot/index.tsx'
import Profile from './pages/Profile/index.tsx'
import AllProducts from './pages/Products/index.tsx'

function App() {
  return (
    <AppContextWrapper>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/typeform" element={<Typeform />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/attempt" element={<Attempt />} />
          <Route path="/chat" element={<Chatbot />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/product" element={<AllProducts />} />
        </Routes>
      </BrowserRouter>
    </AppContextWrapper>
  )
}

export default App
