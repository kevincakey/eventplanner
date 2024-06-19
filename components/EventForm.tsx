import React from "react";

const EventForm = () => {
  return (
    <form>
      <label>EDIT LIST</label>
      <div>
        <label>Title</label>
        <input type="text" />
      </div>
      <div>
        <label>Start Date</label>
        <input type="date" />
      </div>
      <div>
        <label>End Date</label>
        <input type="date" />
      </div>
      <div>
        <label>Start Time</label>
        <input type="time" />
      </div>
      <div>
        <label>End Time</label>
        <input type="time" />
      </div>
      <div>
        <label>Location</label>
        <input type="text" />
      </div>
      <div>
        <label>Links</label>
        <input type="url" />
      </div>
      <div>
        <label>Description1</label>
        <textarea />
      </div>
      <div>
        <label>Description2</label>
        <textarea />
      </div>
      <button type="submit">Save</button>
      <button>Cancel</button>
    </form>
  );
};

export default EventForm;
