import EventDetails from "../EventDetails/EventDetails";
import { useNavigate } from "react-router-dom";

const EventList = ({ uid, userData, data }) => {
    const navigate = useNavigate();

    return (
        <div>
            {userData.eventsAttended ? Object.entries(userData.eventsAttended).map(([eventId, val]) =>
                <nav>

                    <div onClick={() => {
                        let url = data[eventId].details.hostId == uid ? `/host/${eventId}` : `/join/${eventId}`
                        navigate(url);
                    }
                    }>
                        <EventDetails details={data[eventId].details} home={true} />
                    </div>
                </nav>) : <></>}
        </div>
    )
}

export default EventList;