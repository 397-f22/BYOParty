import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import Home from "./Home/Home";
import MainJoin from "./Main/MainJoin";
import MainHost from "./Main/MainHost";


const JoinUrl = ({user}) => {
  const { id } = useParams();
  return <MainJoin eventId={id} user={user}/>;
};

const HostUrl = ({user}) => {
  const { id } = useParams();
  return <MainHost eventId={id} user={user}/>;
};

const Dispatcher = ({user}) => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home user={user}/>} />
      <Route path="join/:id/" element={<JoinUrl user={user}/>} />
      <Route path="host/:id/" element={<HostUrl user={user}/>} />
    </Routes>
  </BrowserRouter>
);

export default Dispatcher;