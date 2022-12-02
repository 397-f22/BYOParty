import EventDetails from "../EventDetails/EventDetails";

const EventList = ({uid, userData, data}) => {
    console.log(userData)
    return (
        <div>
            {userData.eventsAttended? Object.entries(userData.eventsAttended).map(([eventId, val]) => 
                <nav>
                    
                    <a href={data[eventId].details.hostId == uid? `/host/${eventId}`: `/join/${eventId}`} className=" text-decoration-none">
                        <EventDetails details={data[eventId].details} />
                    </a>
                </nav>) : <></>}
        </div>
    )
}

export default EventList;