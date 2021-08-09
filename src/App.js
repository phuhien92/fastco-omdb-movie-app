import './App.css';
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import SearchContainer from './Containers/SearchContainer';

function App() {
  const [fcolor, setFColor] = React.useState('#d2d2d2');
  return (
    <div className="App min-h-screen" style={{ backgroundColor: fcolor }}>
      <Header />
      <div className="container mx-auto px-4">
        <SearchContainer />
      </div>
      <Footer fcolor={fcolor} />
    </div>
  );
}

export default App;
