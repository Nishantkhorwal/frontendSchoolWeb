import { BrowserRouter,Routes,Route } from 'react-router-dom'
import ApplyNow from "./pages/ApplyNow"
import './App.css'
import About from './pages/About'
import Vission from './pages/Vission'
import Leadership from './pages/Leadership'
import AdmissionProcess from './pages/AdmissionProcess'
import Home from './pages/Home'
import ContactUs from './pages/ContactUs'
import Gallery from './pages/Gallery'
import Career from './pages/Career'


function App() {


  return (
    <>
      <BrowserRouter>
       <Routes>
       <Route path='/' element={<Home />} />
       <Route path='/contact' element={<ContactUs />} />
       <Route path='/applyNow' element={<ApplyNow />} />
       <Route path='/about' element={<About />} />
       <Route path='/vision' element={<Vission />} />
       <Route path='/leadership' element={<Leadership />} />
       <Route path='/admissionProcess' element={<AdmissionProcess />} />
       <Route path='/gallery' element={<Gallery />} />
       <Route path='/career' element={<Career />} />
      
       </Routes>
       </BrowserRouter>
    </>
  )
}

export default App
