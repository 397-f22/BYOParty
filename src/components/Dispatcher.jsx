import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import Home from "./Home/Home";
import MainJoin from "./Main/MainJoin";
import MainHost from "./Main/MainHost";


const JoinUrl = () => {
  const { id } = useParams();
  return <MainJoin eventId={id} />;
};

const HostUrl = () => {
  const { id } = useParams();
  return <MainHost eventId={id} />;
};

const Dispatcher = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="join/:id/" element={<JoinUrl />} />
      <Route path="host/:id/" element={<HostUrl />} />
    </Routes>
  </BrowserRouter>
);

export default Dispatcher;