// components/ViewEventCell.tsx

"use client";
import React from "react";
import { Event } from "../types";

interface ViewEventCellProps {
  event: Event;
}

const ViewEventCell: React.FC<ViewEventCellProps> = ({ event }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col space-y-2">
      {event.title && (
        <h2 className="text-xl font-bold text-gray-900">{event.title}</h2>
      )}
      {event.description && (
        <p className="text-gray-600">
          <strong>Description:</strong> {event.description}
        </p>
      )}
      {event.subdescription && (
        <p className="text-gray-600">
          <strong>Sub Description:</strong> {event.subdescription}
        </p>
      )}
      {event.startdate && (
        <p className="text-gray-600">
          <strong>Start Date:</strong> {event.startdate}
        </p>
      )}
      {event.enddate && (
        <p className="text-gray-600">
          <strong>End Date:</strong> {event.enddate}
        </p>
      )}
      {event.starttime && (
        <p className="text-gray-600">
          <strong>Start Time:</strong> {event.starttime}
        </p>
      )}
      {event.endtime && (
        <p className="text-gray-600">
          <strong>End Time:</strong> {event.endtime}
        </p>
      )}
      {event.location && (
        <p className="text-gray-600">
          <strong>Location:</strong> {event.location}
        </p>
      )}
      {event.links && (
        <p className="text-gray-600">
          <strong>Links:</strong>{" "}
          <a
            href={event.links}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            View Location
          </a>
        </p>
      )}
    </div>
  );
};

export default ViewEventCell;
