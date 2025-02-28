import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Home from './paginas/home/Home';


function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
          <div className='min-h-[80vh]'>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;