import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AllProducts from './pages/AllProducts'
import Attempt from './pages/Attempt'
import Chatbot from './pages/Chatbot'
import DailyForm from './pages/DailyForm'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Profile from './pages/Profile'
import Register from './pages/Register'
import SampleBlog from './pages/SampleBlog'
import Start from './pages/Start'
import Typeform from './pages/Typeform'
import AppContextWrapper from './stores/app-context-manager.tsx'

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
          <Route path="/daily" element={<DailyForm />} />
          <Route path="/blog" element={<SampleBlog />} />
        </Routes>
      </BrowserRouter>
    </AppContextWrapper>
  )
}

export default App
