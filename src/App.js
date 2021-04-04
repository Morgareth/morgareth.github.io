import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';

function App() {
  const [categories] = useState([
    {
        name: 'about me'
    },
    {
        name: 'portfolio'
    },
    {
        name: 'contact'
    },
    {
        name: "resume"
    }
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const renderPage = () => {
    switch (currentCategory.name) {
      case categories[0].name:
        return <About />
      case categories[1].name:
        return <Portfolio />
      case categories[2].name:
        return <Contact />
      case categories[3].name:
        return <Resume />
    
      default:
        break;
    }
  }

  return (
    <div id='page-container'>
      <div id='content-wrap'>
        <Nav
          categories={categories}
          setCurrentCategory={setCurrentCategory}
          currentCategory={currentCategory} />
        <main>
          {renderPage()}
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
