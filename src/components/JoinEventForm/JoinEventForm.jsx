import "./JoinEventForm.css";
import {Routes, Route, useNavigate} from 'react-router-dom';
import { useAuthState } from '../../utilities/firebase';


const cb = (e, navigate) => {
  e.preventDefault();

  console.log(document.getElementById('eventId'));
  
  navigate(`join/${document.getElementById('eventId').value}/`);
};

const JoinEventForm = ({events, setEvents}) => {
    const [user] = useAuthState();
    const navigate = useNavigate();

    return (
        <form>
            <h1>Join Event</h1>
            <div className="form-group">
                <label htmlFor="eventId">Invitation Code</label>
                <input className="form-control" type="text" id="eventId" placeholder="XXXX"></input>
            </div>
            <button type="submit" className="btn btn-primary" onClick={e => cb(e, navigate)}>Submit</button>
        </form>
    )
};

export default JoinEventForm;
