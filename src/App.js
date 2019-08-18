import React from 'react';

// Page Components
import Header from './components/Header';
import FullMenu from './components/FullMenu';
import Home from './components/Home';
import Mission from './components/Mission';
import Portfolio from './components/Portfolio';
import Partners from './components/Partners';
import Footer from './components/Footer';

// Data
import data from './content';


function App() {
  return (
    <div className="App">
      <Header />

      <FullMenu menulinks={data.menulinks} contact={data.contact} />

      <div className="wrapper">
        <Home home={data.home} social={data.contact.social} />

        <Mission mission={data.mission} />

        <div className="cont">
          <Portfolio portfolio={data.portfolio} />

          <hr className="top_90 bottom_45 col-md-8" />

          <Partners partners={data.partners} />
        </div>
      </div>
      <Footer logo={data.logo} footer={data.footer} contact={data.contact} />
    </div>
    
  );
}

export default App;
