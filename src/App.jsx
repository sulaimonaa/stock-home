import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Company from './components/Company'
import FinancialStatement from './components/FinancialStatement'
import Stocks from './components/Stocks'
import About from './components/About'

function App() {

  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stocks" element={<Stocks />} />
        <Route path="/financial-settlement-list" element={<FinancialStatement />} />
        <Route path='/about' element={<About />} />
        <Route path='/company/:symbol' element={<Company />} />
      </Routes>
    </div>
  )
}

export default App
