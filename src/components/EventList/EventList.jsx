import EventDetails from "../EventDetails/EventDetails";

const EventList = ({uid, userData, data}) => {
    return (
        <div>
            {userData.eventsAttended.map(eventId => <EventDetails details={data[eventId].details} />)}
        </div>
    )
}

export default EventList;