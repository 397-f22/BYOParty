import EventDetails from "../EventDetails/EventDetails";

const EventList = ({uid, userData, data}) => {
    return (
        <div>
            {userData.eventsAttended? Object.entries(userData.eventsAttended).map(([eventId, val]) => 
                <nav>
                    <a href={data[eventId].details.hostId == uid? `/host/${eventId}`: `/join/${eventId}`} className=" text-decoration-none">
                        <h1>{data[eventId].details.title}</h1>
                        <EventDetails details={data[eventId].details} />
                    </a>
                </nav>) : <></>}
        </div>
    )
}

export default EventList;