import { useState, useEffect } from 'react'
import LoginForm from './LoginForm'
import Dashboard from './Dashboard'
import './App.css'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [user, setUser] = useState(null)

  // Load user data from localStorage on app mount
  useEffect(() => {
    const savedUser = localStorage.getItem('user')
    if (savedUser) {
      try {
        const parsedUser = JSON.parse(savedUser)
        setUser(parsedUser)
        setIsLoggedIn(true)
      } catch (error) {
        console.error('Failed to parse saved user data:', error)
      }
    }
  }, [])

  const handleLogin = (credentials) => {
    setUser(credentials)
    setIsLoggedIn(true)
    // Store user data in localStorage
    localStorage.setItem('user', JSON.stringify(credentials))
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
    setUser(null)
    // Remove user data from localStorage
    localStorage.removeItem('user')
  }

  return (
    <>
      {isLoggedIn ? (
        <Dashboard user={user} onLogout={handleLogout} />
      ) : (
        <LoginForm onLogin={handleLogin} />
      )}
    </>
  )
}

export default App
