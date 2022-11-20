import { useState } from 'react';
import Modal from '../AddEventModal/Modal';
import AddEventModal from '../AddEventModal/AddEventForm';
import './Header.css';


const Header = () => {
    const [open, setOpen] = useState(false);
    const openModal = () => setOpen(true);
    const closeModal = () => setOpen(false);

    return (
        <>
        <div className='header-wrapper'>
            <div>
                <h1>BYOParty!</h1>
            </div>
            <div>
                <button className="btn btn-add" onClick={openModal}>Add Event</button>
                <button className="btn btn-join">Join Event</button>
            </div>                    
        </div>
        <Modal open={open} close={closeModal}>
            <AddEventModal/>
        </Modal>
        </>

    )
}

export default Header;