import { Routes, Route, useNavigate } from 'react-router-dom';
import { useDbUpdate, useAuthState } from '../../utilities/firebase';


function AddEventModal() {
    const [user] = useAuthState();
    const navigate = useNavigate();
    const [update, result] = useDbUpdate(`/events/`);
    const uid = user?.uid ? user.uid : "1";
    const [eventUpdate, eventResult] = useDbUpdate(`/users/${uid}/eventsAttended`);


    const cb = (e, update, navigate, user) => {
        e.preventDefault();
    
        let title = document.getElementById('eventTitle').value;
        let host = document.getElementById('eventHost').value;
        let time = document.getElementById('eventTime').value;
    
        let eventcode = ("000" + (Math.random() * 9999)).slice(-4);
    
        console.log(eventcode);
    
        var newEvent = {
            [eventcode]: {
                details: {
                    host: host,
                    time: time,
                    title: title,
                    hostId: user.uid
                },
            }
        }
        update(newEvent)
    
        var newEvent = {
            [eventcode] : true
          }
        eventUpdate(newEvent);
    
        navigate(`host/${eventcode}/`);
    };

    return (
        <form>
            <h1>Add Event</h1>
            <div className="form-group">
                <label htmlFor="eventTitle">Title</label>
                <input type="text" className="form-control" id="eventTitle" placeholder="Enter title" />
            </div>
            <div className="form-group">
                <label htmlFor="eventHost">Host</label>
                <input type="text" className="form-control" id="eventHost" placeholder="Enter host" />
            </div>
            <div className="form-group">
                <label htmlFor="eventTime">Time</label>
                <input type="datetime-local" className="form-control" id="eventTime" placeholder="Enter time" />
            </div>
            <button className="btn btn-primary" onClick={e => cb(e, update, navigate, user)}>Submit</button>
        </form>
    )
}

export default AddEventModal