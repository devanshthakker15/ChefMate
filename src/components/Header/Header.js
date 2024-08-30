import React, { useState, useEffect } from 'react';
import "./Header.scss";
import Navbar from "./Navbar";
import SearchForm from "./SearchForm";

const Header = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const lines = [
    "What are your favorite cuisines?",
    "Discover new flavors every day!",
    "Unleash your inner chef.",
    "Explore cuisines from around the world."
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % lines.length);
    }, 3000); // Change every 3 seconds
    return () => clearInterval(interval);
  }, [lines.length]);

  return (
    <header className='header'>
      <Navbar />
      <div className='header-content flex align-center justify-center flex-column text-center'>
        <SearchForm />
        <h1 className='text-white header-title ls-2 fade-in-out'>{lines[currentIndex]}</h1>
        <p className='text-uppercase text-white my-3 ls-1'>personalize your experience</p>
      </div>
    </header>
  )
}

export default Header;
