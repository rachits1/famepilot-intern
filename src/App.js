import React from 'react';  
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import HomeScreen from './components/pages/HomeScreen';
import DeptScreen from './components/pages/DeptScreen';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path='/' exact component={HomeScreen} />
        <Route path='/:dept' exact component={DeptScreen} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
