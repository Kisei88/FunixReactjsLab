import './App.css';
import Main from './components/MainComponent';
import React, {Component} from 'react'
import { BrowserRouter } from 'react-router-dom'

function App() {
return (
    <BrowserRouter>
      <div>
        <Main/>
      </div>
    </BrowserRouter>
  );
}


export default App;
