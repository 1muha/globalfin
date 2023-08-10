import React from 'react';
import './App.css';
import Header from "./components/Header/Header"
import Planning from './components/planning/Planning';
import Whowe from './components/whoweare/Whowe';
import Team from './components/team/Team';
import Client from './components/client/Client';
import News from './components/news/News';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Planning />
      <Whowe />
      <Team />
      <Client />
      <News />
      <Footer />
    </div>
  );
}

export default App;