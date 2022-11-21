import { useState } from 'react';
import './App.css';

import Main from './components/Main/Main';
import Header from './components/Header/Header';
import Dispatcher from './components/Dispatcher';
import Footer from './components/Footer/Footer';

export const uId = 1234;
const App = () => {
  const [eventId, setEventId] = useState("1234");

  return (
    <div className="App">
      <Header></Header>
      <Dispatcher></Dispatcher>
      <Footer></Footer>
    </div>
  );
};

export default App;
