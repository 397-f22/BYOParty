import { useState } from 'react';
import './App.css';

import Main from './components/Main/Main';
import Header from './components/Header/Header';

const App = () => {
  const [eventId, setEventId] = useState("1234");

  return (
    <div className="App">
      <Header></Header>
      <Main eventId={eventId}></Main>
    </div>
  );
};

export default App;
