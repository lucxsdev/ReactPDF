import React from 'react';
import './App.css';
import Routes from "./routes";

import NavBar from './components/NavBar';
 
import { Content } from './styles/main';

function App() {
  return (
    <>
      <NavBar />
      <Content>
        <Routes />
      </Content>
    </>
  );
}

export default App;
