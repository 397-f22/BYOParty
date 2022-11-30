import { useState } from 'react';
import Modal from '../Modal/Modal';
import AddEventModal from '../AddEventModal/AddEventForm';
import JoinEventForm from '../JoinEventForm/JoinEventForm';
import EventList from '../EventList/EventList';
import { useDbData } from '../../utilities/firebase';
import { useAuthState } from "../../utilities/firebase";
import './Home.css';

const Home = () => {
    
    const [open, setOpen] = useState(false);
    const openModal = () => setOpen(true);
    const closeModal = () => setOpen(false);

    const [popJoin, setPopJoin] = useState(false);
    const [user] = useAuthState();
    const uid = user?.uid ? user.uid : "1";
    // right now assuming user already logged in
    const [userData, userError] = useDbData(`/users/${uid}`);
    const [data, error] = useDbData("/events/");

    if (userError) return <h1>Error loading data: {error.toString()}</h1>;
	if (userData === undefined) return <h1>Loading data...</h1>;
	if (!userData) return <h1>No data found</h1>;

    if (error) return <h1>Error loading data: {error.toString()}</h1>;
	if (data === undefined) return <h1>Loading data...</h1>;
	if (!data) return <h1>No data found</h1>;

    return (
        <div className='home-wrapper'>

            <h3> Get ready for some fun :)</h3>

            <div className='button-wrapper'>
                <button className="btn btn-add" onClick={openModal}>Add Event</button>
                <button className="btn btn-join" onClick={() => setPopJoin(true)}>Join Event</button>
            </div>

            <Modal open={open} close={closeModal}>
                <AddEventModal />
            </Modal>

            <Modal open={popJoin} close={() => setPopJoin(false)}>
                <JoinEventForm events={[]} setEvents={() => 0} />
            </Modal>

            <EventList uid={uid} userData={userData} data={data} />
        </div>
    )
}

export default Home;