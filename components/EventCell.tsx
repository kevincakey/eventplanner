// EventCell.tsx
import React from "react";
import { Event } from "./types";

interface EventCellProps {
  event: Event;
}

const EventCell: React.FC<EventCellProps> = ({ event }) => {
  return (
    <div className="event-cell">
      {event.title && <h2>{event.title}</h2>}
      {event.startdate && (
        <p>
          <strong>Start Date:</strong> {event.startdate}
        </p>
      )}
      {event.starttime && (
        <p>
          <strong>Start Time:</strong> {event.starttime}
        </p>
      )}
      {event.enddate && (
        <p>
          <strong>End Date:</strong> {event.enddate}
        </p>
      )}
      {event.endtime && (
        <p>
          <strong>End Time:</strong> {event.endtime}
        </p>
      )}
      {event.location && (
        <p>
          <strong>Location:</strong> {event.location}
        </p>
      )}
      {event.links && (
        <p>
          <strong>Links:</strong>{" "}
          <a href={event.links} target="_blank" rel="noopener noreferrer">
            View Location
          </a>
        </p>
      )}
      {event.description && (
        <p>
          <strong>Description:</strong> {event.description}
        </p>
      )}
      {event.subdescription && (
        <p>
          <strong>Sub Description:</strong> {event.subdescription}
        </p>
      )}
    </div>
  );
};

export default EventCell;
