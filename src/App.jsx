import { useState } from 'react';
import './App.css';

import Header from './components/Header/Header';
import Dispatcher from './components/Dispatcher';
import Footer from './components/Footer/Footer';

import { useAuthState } from "./utilities/firebase";

export const uId = 1234;
const App = () => {
  const [user] = useAuthState();
  const [eventId, setEventId] = useState("1234");

  return (
    <div className="App">
      <Header user={user}></Header>
      <Dispatcher user={user}></Dispatcher>
      <Footer></Footer>
    </div>
  );
};

export default App;
