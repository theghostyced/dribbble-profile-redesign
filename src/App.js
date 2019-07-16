import React from 'react';
import Header from './components/Header';
import Tab from './components/Tab';
import Profile from './components/Profile';
import Cards from './components/Cards';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main">
        <Tab />
        <div className="px-0 py-8 md:py-4 lg:flex">
          <div className="w-full p-8 md:px-16 md:py-8 lg:w-3/12">
            <Profile />
          </div>
          <div className="w-full p-8 md:px-16 md:py-8 lg:w-9/12">
            <Cards />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
