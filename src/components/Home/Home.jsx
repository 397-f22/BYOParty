import { useState } from 'react';
import Modal from '../Modal/Modal';
import AddEventModal from '../AddEventModal/AddEventForm';
import JoinEventForm from '../JoinEventForm/JoinEventForm';

import './Home.css';

const Home = ({user}) => {
    
    const [open, setOpen] = useState(false);
    const openModal = () => setOpen(true);
    const closeModal = () => setOpen(false);

    const [popJoin, setPopJoin] = useState(false);

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
        </div>
    )
}

export default Home;