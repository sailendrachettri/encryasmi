import './App.css';
import Encrydecry from './components/Encrydecry';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';
import { useState } from 'react';

function App() {
  const [progress, setProgress] = useState(0);

  return (
    <>
      <BrowserRouter >
        <LoadingBar
          color='#f11946'
          progress={progress}
          onLoaderFinished={() => setProgress(0)}
        />
        <Navbar setProgress={setProgress} />
        <Routes >
          <Route path="/" element={<Home setProgress={setProgress} />} />
          <Route path="/about" element={<About />} />
          <Route path="/encrydecry" element={<Encrydecry />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
