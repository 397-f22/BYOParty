import { useState } from 'react';
import './App.css';

import Main from './components/Main/Main';
import Header from './components/Header/Header';

const App = () => {

  return (
    <div className="App">
      <Header></Header>
      <Main></Main>
    </div>
  );
};

export default App;