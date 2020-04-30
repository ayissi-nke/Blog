import React from 'react';
import './App.css'
import Header from './components/header'
import Hero from './components/hero';
import Home from './containers/home/home';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import ConctatUs from './components/ConctatUs';
import Post from './components/Post';




function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Hero/>
        
        <Route path="/" exact component={Home} />
        <Route path="/contact-us"  component={ConctatUs} />
        <Route path="/post/:postid" component={Post} />
      </div>
    </Router>
    
  );
}

export default App;
