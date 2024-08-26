// import React from 'react';
// import './App.css';

// function App() {
//   const name = 'React Project';
//   return <div className="App">{name}</div>;
// }

// export default App;
import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Members from './components/Members';
import Publications from './components/Publications';
import News from './components/News';
import Projects from './components/Projects';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <main>
          <About />
          <News />
          <Members />
          <Projects />
          <Publications />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
