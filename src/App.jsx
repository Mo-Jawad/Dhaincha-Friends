import React, { useRef } from 'react';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import MainContent from './Components/MainContent';

function App() {


  const footerRef = useRef(null);

  // Function to scroll to the footer
  const scrollToFooter = () => {
    footerRef.current.scrollIntoView({ behavior: 'smooth' });
  }
  
  return (
    <>
      <Header scrollToFooter={scrollToFooter} />
      <MainContent/>
      <Footer footerRef={footerRef}/>
    </>
  )
}

export default App
