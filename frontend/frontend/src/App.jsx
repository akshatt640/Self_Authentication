import Dashboard from "./pages/Dashboard"
import Login from "./pages/login"
import Register from "./pages/Register"
import { BrowserRouter , Routes , Route } from "react-router-dom"
const App = () => {
  return (
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
    </Routes>
   </BrowserRouter>
  )
}

export default App