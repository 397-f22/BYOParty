import "./JoinEventForm.css";

const cb = (e, events, setEvents) => {
  e.preventDefault();
  setEvents(events.push(e.target.value));
  setData(data);
  console.log(data);
};

const JoinEventForm = ({events, setEvents}) => {
    return (
        <form>
            <div className="form-group">
                <label htmlFor="eventId">Invitation Code</label>
                <input className="form-control" type="text" id="eventId" placeholder="XXXX"></input>
            </div>
            <button type="submit" className="btn btn-outline-danger" onClick={e => cb(e, events, setEvents)}>Submit</button>
        </form>
    )
};

export default JoinEventForm;
