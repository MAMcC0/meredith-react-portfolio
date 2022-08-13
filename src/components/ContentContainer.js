import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Resume from '../pages/Resume';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Portfolio from '../pages/Portfolio';

export default function ContentContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderActivePage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>

      <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
      
      {renderActivePage()}

      <Footer />
      
    </div>
  );
};
