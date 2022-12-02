import EventDetails from "../EventDetails/EventDetails";

const EventList = ({uid, userData, data}) => {
    return (
        <div>
            {Object.entries(userData.eventsAttended).map(([eventId, val]) => <EventDetails details={data[eventId].details} />)}
        </div>
    )
}

export default EventList;