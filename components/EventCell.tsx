// components/EventCell.tsx
"use client";
import React from "react";
import { Event } from "../types";
import { supabase } from "../utils/supabaseClient";

interface EventCellProps {
  event: Event;
  onEdit: (event: Event) => void;
  onDelete: (id: number) => void;
}

const EventCell: React.FC<EventCellProps> = ({ event, onEdit, onDelete }) => {
  const handleDelete = async () => {
    try {
      const { error } = await supabase
        .from("events")
        .delete()
        .eq("id", event.id);

      if (error) throw error;
      onDelete(event.id);
    } catch (error) {
      console.error("Error deleting event:", error);
    }
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col space-y-2">
      {event.title && (
        <h2 className="text-xl font-bold text-gray-900">{event.title}</h2>
      )}
      {event.startdate && (
        <p className="text-gray-600">
          <strong>Start Date:</strong> {event.startdate}
        </p>
      )}
      {event.starttime && (
        <p className="text-gray-600">
          <strong>Start Time:</strong> {event.starttime}
        </p>
      )}
      {event.enddate && (
        <p className="text-gray-600">
          <strong>End Date:</strong> {event.enddate}
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
      <div className="flex space-x-4">
        <button
          onClick={() => onEdit(event)}
          className="px-4 py-2 rounded-lg bg-yellow-400 text-white hover:bg-yellow-500 transition"
        >
          Edit
        </button>
        <button
          onClick={handleDelete}
          className="px-4 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600 transition"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default EventCell;
