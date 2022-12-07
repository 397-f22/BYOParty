import { useState } from 'react';
import { useDbUpdate, useAuthState } from "../../utilities/firebase";
import './EventDetails.css';
import Modal from '../Modal/Modal';
import { Routes, Route, useNavigate } from 'react-router-dom';


const EventDetails = ({ details, eventId, needed, home }) => {
    const [user] = useAuthState();
    const uid = user?.uid ? user.uid : "1";
    const [openModal, setOpenModal] = useState(false)
    

    const EditEventModal = ({ setOpenModal, details }) => {
        const navigate = useNavigate();
        const [update, result] = useDbUpdate(`/events/${eventId}`);
        const [eventTitle, setTitle] = useState("")
        const [host, setHost] = useState("")
        const [time, setTime] = useState(details.time)
        const [error, setError] = useState(false);

        const cb = (e, update) => {
            e.preventDefault();

            // let title = document.getElementById('eventTitle').value;
            // let host = document.getElementById('eventHost').value;
            // let time = document.getElementById('eventTime').value;
            console.log(host == "")
            console.log(eventTitle == "")
            if(eventTitle == "" || host == ""){
                setError(true)
            }
            else{
                setError(false)
                var newEvent = {
                    details: {
                        host: host,
                        time: time,
                        title: eventTitle,
                        hostId: uid
                    },
    
                }
                update(newEvent)
                setOpenModal(false)
            }            
        };

        function handleChangeTitle(event) {
            console.log(event.target.value);
            setTitle(event.target.value)
        }
        function handleChangeHost(event) {
            console.log(event.target.value);
            setHost(event.target.value)
        }
        function handleChangeTime(event) {
            console.log(event.target.value);
            setTime(event.target.value)
        }



        return (
            <form>
                <h1>Edit Event</h1>
                {error ?  <span className='error'>Error in input</span>: null}
                <div className="form-group">
                    <label htmlFor="eventTitle">Title</label>
                    <input onChange={handleChangeTitle} value={eventTitle} role="eventTitle" aria-label="title-info" type="text" className="form-control" data-testid="eventTitle" id="eventTitle" placeholder={details.title} />  
                </div>
                <div className="form-group">
                    <label htmlFor="eventHost">Host</label>
                    <input onChange={handleChangeHost} value={host} aria-label="host-info" type="text" className="form-control" id="eventHost" placeholder={details.host} />
                </div>
                <div className="form-group">
                    <label htmlFor="eventTime">Time</label>
                    <input onChange={handleChangeTime} value={time} type="datetime-local" className="form-control" id="eventTime" placeholder={details.time} />
                </div>
                <button data-testid="submit-button" className="btn btn-primary" onClick={e => cb(e, update)}>Submit</button>
            </form>
        )
    }
    let date = new Date(details.time)
    date = new Date(date.toISOString())

    return (
        <div>
            <div className={details.hostId == uid ? "event-wrapper-host" : "event-wrapper"}>
                <div className="event-info">
                    <h2>{details.title}</h2>
                    {details.hostId == uid ? <h3>Hosted by you</h3> : <h3>Hosted by {details.host}</h3>}
                    <p>{date.toLocaleDateString()} at {date.getHours() > 12 ? date.getHours() - 12 : date.getHours()}
                        :{(date.getMinutes()<10?'0':'') + date.getMinutes()} {date.getHours() >= 12 && date.getHours() != 24 ? "PM" : "AM"}</p>
                </div>
                {!home && details.hostId == uid ? <button className="btn btn-primary" aria-label="edit-button" id = "edit-button" data-testid="edit-button"onClick={() => setOpenModal(true)}>Edit</button> : <></>}
            </div>

            <Modal open={openModal} close={() => setOpenModal(false)}>
                <EditEventModal setOpenModal={setOpenModal} details={details} />
            </Modal>
        </div>

    )
}

export default EventDetails;