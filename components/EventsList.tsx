// components/EventsList.tsx
"use client";
import React, { useState, useEffect } from "react";
import { Event } from "../types";
import { supabase } from "../utils/supabaseClient";
import EventCell from "./EventCell";
import EventEditor from "./EventEditor";

const EventsList: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [editingEvent, setEditingEvent] = useState<Event | null>(null);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const fetchEvents = async () => {
      const { data, error } = await supabase.from("eventslist").select("*");

      if (error) console.error("Error fetching events:", error);
      else setEvents(data || []);
    };

    fetchEvents();
  }, []);

  const handleEdit = (event: Event) => {
    setEditingEvent(event);
    setIsEditing(true);
  };

  const handleDelete = (id: number) => {
    setEvents((prevEvents) => prevEvents.filter((event) => event.id !== id));
  };

  const handleSave = (event: Event) => {
    setEvents((prevEvents) => {
      const updatedEvents = prevEvents.map((e) =>
        e.id === event.id ? event : e
      );
      return event.id ? updatedEvents : [...prevEvents, event];
    });
    setIsEditing(false);
  };

  return (
    <div className="flex flex-col items-center px-4 py-8">
      <h1 className="text-3xl font-semibold text-gray-800 mb-4">Events List</h1>
      <button
        onClick={() => setIsEditing(true)}
        className="mb-4 px-6 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition"
      >
        Add Event
      </button>
      <div className="flex flex-col w-full max-w-2xl space-y-4">
        {events.map((event) => (
          <EventCell
            key={event.id}
            event={event}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        ))}
      </div>
      {isEditing && (
        <EventEditor
          event={editingEvent}
          onClose={() => setIsEditing(false)}
          onSave={handleSave}
        />
      )}
    </div>
  );
};

export default EventsList;
