
import './App.css';
import About from './components/About';
import Contentarea from './components/Contentarea';
import Footer from './components/Footer';
import Mointor from './components/Mointor';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
   
      <Router>
    <Navbar/>
    <Contentarea content={
      <Routes>
         <Route path='/home' element={<Mointor/>}></Route>
        </Routes>
    }>
    </Contentarea> 
     {/* <Mointor/> */}
     <About/>
      <Footer/>
      </Router>
   
  )
}

export default App;
