"use client";

import React, { useState, useEffect } from "react";
import { Event } from "../types";
import { supabase } from "../utils/supabaseClient";
import EventCell from "./EventCell";
import AddEventForm from "./AddEventForm";
import EditEventForm from "./EditEventForm";

const EventsList: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [editingEvent, setEditingEvent] = useState<Event | null>(null);
  const [addingNewEvent, setAddingNewEvent] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    const { data, error } = await supabase.from("eventslist").select("*");
    if (error) {
      console.error("Error fetching events:", error);
    } else {
      setEvents((data || []).sort((a, b) => a.id - b.id));
    }
  };

  const handleAdd = () => {
    fetchEvents();
    setAddingNewEvent(false);
  };

  const handleEdit = (event: Event) => {
    setEditingEvent(event);
    setIsEditing(true);
  };

  const handleDelete = (id: number) => {
    setEvents((prevEvents) => prevEvents.filter((event) => event.id !== id));
  };

  const handleSave = () => {
    fetchEvents();
    setIsEditing(false);
    setAddingNewEvent(false);
  };

  return (
    <div className="flex flex-col items-center px-4 py-8">
      <h1 className="text-3xl font-semibold text-white mb-4">Events List</h1>
      <button
        onClick={() => setAddingNewEvent(true)}
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
      {isEditing && editingEvent && (
        <EditEventForm
          event={editingEvent}
          onClose={() => setIsEditing(false)}
          onSave={handleSave}
        />
      )}
      {addingNewEvent && (
        <AddEventForm
          onClose={() => setAddingNewEvent(false)}
          onAdd={handleAdd}
        />
      )}
    </div>
  );
};

export default EventsList;
