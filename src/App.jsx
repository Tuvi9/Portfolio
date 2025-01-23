import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Introduction from './components/Introduction'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<Introduction/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
