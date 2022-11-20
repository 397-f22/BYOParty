function AddEventModal(){
    return (
        <form>
            <h1>Add Event</h1>
            <div className="form-group">
                <label for="eventTitle">Title</label>
                <input type="text" className="form-control" id="eventTitle" placeholder="Enter title" />
            </div>
            <div className="form-group">
                <label for="eventHost">Host</label>
                <input type="text" className="form-control" id="eventHost" placeholder="Enter host" />
            </div>
            <div className="form-group">
                <label for="eventTime">Time</label>
                <input type="text" className="form-control" id="eventTime" placeholder="Enter time" />
            </div>
            <button className="btn btn-primary">Submit</button>
        </form>
    )
}

export default AddEventModal