import { useState } from 'react';
import Modal from '../Modal/Modal';
import AddEventModal from '../AddEventModal/AddEventForm';
import JoinEventForm from '../JoinEventForm/JoinEventForm';
import './Header.css';


const Header = () => {
    const [open, setOpen] = useState(false);
    const openModal = () => setOpen(true);
    const closeModal = () => setOpen(false);

    const [popJoin, setPopJoin] = useState(false);

    return (
        <>
        <div className='header-wrapper'>
            <div>
                <h1>BYOParty!</h1>
            </div>
            <div>
                <button className="btn btn-add" onClick={openModal}>Add Event</button>
                <button className="btn btn-join" onClick={() => setPopJoin(true)}>Join Event</button>
            </div>                    
        </div>
        <Modal open={open} close={closeModal}>
            <AddEventModal/>
        </Modal>

        <Modal open={popJoin} close={() => setPopJoin(false)}>
            <JoinEventForm events={[]} setEvents={() => 0} />
        </Modal>
        </>

    )
}

export default Header;