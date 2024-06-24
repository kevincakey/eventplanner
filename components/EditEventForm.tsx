// components/EditEventForm.tsx
"use client";
import React, { useState, useEffect } from "react";
import { Event } from "../types";
import { supabase } from "../utils/supabaseClient";

interface EditEventFormProps {
  event: Event;
  onClose: () => void;
  onSave: (event: Event) => void;
}

const EditEventForm: React.FC<EditEventFormProps> = ({
  event,
  onClose,
  onSave,
}) => {
  const [eventData, setEventData] = useState<Event>(event);

  useEffect(() => {
    if (event) setEventData(event);
  }, [event]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setEventData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = async () => {
    try {
      // Update existing event
      const { data, error } = await supabase
        .from("eventslist")
        .update(eventData)
        .eq("id", eventData.id);

      if (error) throw error;
      onSave(eventData);
    } catch (error) {
      console.error("Error updating event:", error);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center text-black bg-gray-900 bg-opacity-50 z-50">
      <div className="bg-white rounded-lg p-6 shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4">Edit Event</h2>
        <input
          name="title"
          value={eventData.title}
          onChange={handleChange}
          placeholder="Title"
          className="w-full mb-4 p-2 border border-gray-300 rounded-md"
        />
        <textarea
          name="description"
          value={eventData.description}
          onChange={handleChange}
          placeholder="Description"
          className="w-full mb-4 p-2 border border-gray-300 rounded-md h-32"
        />
        <input
          name="startdate"
          value={eventData.startdate}
          onChange={handleChange}
          placeholder="Start Date"
          className="w-full mb-4 p-2 border border-gray-300 rounded-md"
        />
        <input
          name="starttime"
          value={eventData.starttime}
          onChange={handleChange}
          placeholder="Start Time"
          className="w-full mb-4 p-2 border border-gray-300 rounded-md"
        />
        <input
          name="enddate"
          value={eventData.enddate}
          onChange={handleChange}
          placeholder="End Date"
          className="w-full mb-4 p-2 border border-gray-300 rounded-md"
        />
        <input
          name="endtime"
          value={eventData.endtime}
          onChange={handleChange}
          placeholder="End Time"
          className="w-full mb-4 p-2 border border-gray-300 rounded-md"
        />
        <input
          name="location"
          value={eventData.location}
          onChange={handleChange}
          placeholder="Location"
          className="w-full mb-4 p-2 border border-gray-300 rounded-md"
        />
        <input
          name="links"
          value={eventData.links}
          onChange={handleChange}
          placeholder="Links"
          className="w-full mb-4 p-2 border border-gray-300 rounded-md"
        />
        <input
          name="subdescription"
          value={eventData.subdescription}
          onChange={handleChange}
          placeholder="Subdescription"
          className="w-full mb-4 p-2 border border-gray-300 rounded-md"
        />
        <div className="flex justify-between">
          <button
            onClick={handleSave}
            className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
          >
            Save
          </button>
          <button
            onClick={onClose}
            className="px-6 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditEventForm;
