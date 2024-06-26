"use client";

import React, { useState } from "react";
import { Event } from "../types";
import { supabase } from "../utils/supabaseClient";

interface EditEventFormProps {
  event: Event;
  onClose: () => void;
  onSave: () => void;
}

const EditEventForm: React.FC<EditEventFormProps> = ({
  event,
  onClose,
  onSave,
}) => {
  const [eventData, setEventData] = useState<Event>(event);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setEventData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = async () => {
    try {
      const { error } = await supabase
        .from("eventslist")
        .update(eventData)
        .eq("id", eventData.id);
      if (error) throw error;
      onSave();
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
          type="text"
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
          name="subdescription"
          type="text"
          value={eventData.subdescription}
          onChange={handleChange}
          placeholder="Sub Description"
          className="w-full mb-4 p-2 border border-gray-300 rounded-md"
        />
        <input
          name="startdate"
          type="date"
          value={eventData.startdate}
          onChange={handleChange}
          className="w-full mb-4 p-2 border border-gray-300 rounded-md"
        />
        <input
          name="enddate"
          type="date"
          value={eventData.enddate}
          onChange={handleChange}
          className="w-full mb-4 p-2 border border-gray-300 rounded-md"
        />
        <input
          name="starttime"
          type="time"
          value={eventData.starttime}
          onChange={handleChange}
          className="w-full mb-4 p-2 border border-gray-300 rounded-md"
        />
        <input
          name="endtime"
          type="time"
          value={eventData.endtime}
          onChange={handleChange}
          className="w-full mb-4 p-2 border border-gray-300 rounded-md"
        />
        <input
          name="location"
          type="text"
          value={eventData.location}
          onChange={handleChange}
          placeholder="Location"
          className="w-full mb-4 p-2 border border-gray-300 rounded-md"
        />
        <input
          name="links"
          type="url"
          value={eventData.links}
          onChange={handleChange}
          placeholder="Links"
          className="w-full mb-4 p-2 border border-gray-300 rounded-md"
        />
        <div className="flex justify-between">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditEventForm;
