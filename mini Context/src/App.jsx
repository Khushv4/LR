import UserContextProvider from './context/UserContextProvider'
import './App.css'
import Profile from './components/components/Profile'
import Login from './components/components/Login'

function App() {
  

  return (
    <UserContextProvider>
      <h1>React with Context</h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
