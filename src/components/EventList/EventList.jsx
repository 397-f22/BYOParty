import EventDetails from "../EventDetails/EventDetails";

const EventList = ({uid, userData, data}) => {
    return (
        <div>
            {Object.entries(userData.eventsAttended).map(([eventId, val]) => 
                <nav>
                    
                    <a href={data[eventId].details.hostId == uid? `/host/${eventId}`: `/join/${eventId}`}>
                        <EventDetails details={data[eventId].details} />
                    </a>
                </nav>)}
        </div>
    )
}

export default EventList;