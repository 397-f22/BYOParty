import { useState } from 'react';
import { useDbUpdate, useAuthState } from "../../utilities/firebase";
import JoinEventForm from '../JoinEventForm/JoinEventForm';
import './EventDetails.css';
import Modal from '../Modal/Modal';
import AddEventModal from '../AddEventModal/AddEventForm';
import { Routes, Route, useNavigate } from 'react-router-dom';


const EventDetails = ({details, eventId, needed}) => {
    const [user] = useAuthState();
    const uid = user?.uid ? user.uid : "1";
    const [openModal, setOpenModal] = useState(false)

    const EditEventModal = ({setOpenModal, details}) => {
        const navigate = useNavigate();
        const [update, result] = useDbUpdate(`/events/${eventId}`);
        const uid = user?.uid ? user.uid : "1";
    
        const cb = (e, update, navigate, user, close) => {
            e.preventDefault();
        
            let title = document.getElementById('eventTitle').value;
            let host = document.getElementById('eventHost').value;
            let time = document.getElementById('eventTime').value;
        
            var newEvent = {
                details: {
                    host: host,
                    time: time,
                    title: title,
                    hostId: user.uid
                },
  
            }
            update(newEvent)
            setOpenModal(false)
        };
    
        return (
            <form>
                <h1>Edit Event</h1>
                <div className="form-group">
                    <label htmlFor="eventTitle">Title</label>
                    <input type="text" className="form-control" id="eventTitle" placeholder={details.title} />
                </div>
                <div className="form-group">
                    <label htmlFor="eventHost">Host</label>
                    <input type="text" className="form-control" id="eventHost" placeholder={details.host} />
                </div>
                <div className="form-group">
                    <label htmlFor="eventTime">Time</label>
                    <input type="datetime-local" className="form-control" id="eventTime" placeholder={details.time} />
                </div>
                <button className="btn btn-primary" onClick={e => cb(e, update, navigate, user)}>Submit</button>
            </form>
        )
    }
    const date = new Date(details.time)
    // console.log(date.toUTCString());

    return (
        <div className={details.hostId == uid? "event-wrapper-host" : "event-wrapper"}>
            
            <h2>{details.title}</h2>
            {details.hostId == uid? <h3>Hosted by you</h3> : <h3>Hosted by {details.host}</h3>}
            <p>{date.toString()}</p>
            <Modal open={openModal} close={() => setOpenModal(false)}>
                <EditEventModal setOpenModal={setOpenModal} details={details}/>
            </Modal>
            <button className="btn btn-primary" onClick={() => setOpenModal(true)}>Edit</button>
        </div>

    )
}

export default EventDetails;