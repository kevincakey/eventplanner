// components/AddEventForm.tsx
"use client";
import React, { useState } from "react";
import { Event } from "../types";
import { supabase } from "../utils/supabaseClient";

interface AddEventFormProps {
  onClose: () => void;
  onAdd: (event: Event) => void;
}

const AddEventForm: React.FC<AddEventFormProps> = ({ onClose, onAdd }) => {
  const [eventData, setEventData] = useState<Event>({
    created_at: new Date().toISOString(),
    title: "",
    description: "",
    startdate: "",
    starttime: "",
    enddate: "",
    endtime: "",
    location: "",
    links: "",
    subdescription: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setEventData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAdd = async () => {
    try {
      // Create new event
      const { data, error } = await supabase
        .from("eventslist")
        .insert([eventData]);

      if (error) throw error;
      onAdd(data); // Assumes that `data` is an array with the newly created event
    } catch (error) {
      console.error("Error creating event:", error);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center text-black bg-gray-900 bg-opacity-50 z-50">
      <div className="bg-white rounded-lg p-6 shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4">Add Event</h2>
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
          value={eventData.subdescription}
          onChange={handleChange}
          placeholder="Subdescription"
          className="w-full mb-4 p-2 border border-gray-300 rounded-md"
        />
        <input
          name="startdate"
          type="date"
          value={eventData.startdate}
          onChange={handleChange}
          placeholder="Start Date"
          className="w-full mb-4 p-2 border border-gray-300 rounded-md"
        />
        <input
          name="enddate"
          type="date"
          value={eventData.enddate}
          onChange={handleChange}
          placeholder="End Date"
          className="w-full mb-4 p-2 border border-gray-300 rounded-md"
        />
        <input
          name="starttime"
          type="time"
          value={eventData.starttime}
          onChange={handleChange}
          placeholder="Start Time"
          className="w-full mb-4 p-2 border border-gray-300 rounded-md"
        />
        <input
          name="endtime"
          type="time"
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
          type="url"
          value={eventData.links}
          onChange={handleChange}
          placeholder="Links"
          className="w-full mb-4 p-2 border border-gray-300 rounded-md"
        />
        <div className="flex justify-between">
          <button
            onClick={handleAdd}
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

export default AddEventForm;
