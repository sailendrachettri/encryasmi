import './App.css';
import Encrydecry from './components/Encrydecry';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Signup from './components/Signup';
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
          <Route exact path="/" element={<Home setProgress={setProgress} />} />
          <Route exact path="/signup" element={<Signup setProgress={setProgress} />} />
          <Route exact path="/login" element={<Login setProgress={setProgress} />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/encrydecry" element={<Encrydecry />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
