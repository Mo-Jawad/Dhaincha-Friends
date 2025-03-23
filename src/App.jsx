import React, { useRef, useState } from 'react';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import MainContent from './Components/MainContent';

function App() {

  const [searchQuery, setSearchQuery] = useState(''); // State for search query


  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

  
  };


  const footerRef = useRef(null);

  // Function to scroll to the footer
  const scrollToFooter = () => {
    footerRef.current.scrollIntoView({ behavior: 'smooth' });
  }
  
  return (
    <>
      <Header searchQuery={searchQuery} handleSearch={handleSearch} 
      scrollToFooter={scrollToFooter} />
      <MainContent searchQuery={searchQuery}/>
      <Footer footerRef={footerRef}/>
    </>
  )
}

export default App
