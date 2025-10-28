import { createContext, useContext, useEffect, useState } from 'react'

const AuthContext = createContext(undefined)

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [isAuthResolved, setAuthResolved] = useState(false)

  useEffect(() => {
    try {
      const storedUser = localStorage.getItem('user') // Your key
      if (storedUser) {
        setUser(JSON.parse(storedUser))
      }
    } catch (error) {
      console.error('Error parsing stored user:', error)
    } finally {
      setAuthResolved(true)
    }
  }, [])

  const login = userData => {
    setUser(userData)
    localStorage.setItem('user', JSON.stringify(userData))
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('user')
  }

  const setProfile = user => {
    setUser(user)
    localStorage.setItem('user', JSON.stringify(user))
  }
  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        setProfile,
        isLoggedIn: !!user,
        isAuthResolved,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) throw new Error('useAuth must be used within an AuthProvider')
  return context
}
