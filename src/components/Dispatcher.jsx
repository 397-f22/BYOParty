import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import Home from "./Home/Home";
import Main from "./Main/Main";


const EventForUrl = () => {
    const { id } = useParams();
    return <Main eventId={id} />;
  };

const Dispatcher = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="join/:id/" element={<EventForUrl />} />
    </Routes>
  </BrowserRouter>
);

export default Dispatcher;