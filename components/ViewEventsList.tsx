// components/ViewEventsList.tsx

"use client";
import React, { useEffect, useState } from "react";
import { Event } from "../types";
import { supabase } from "../utils/supabaseClient";
import ViewEventCell from "./ViewEventCell";

const ViewEventsList: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    setLoading(true);
    const { data, error } = await supabase.from("eventslist").select("*");
    if (error) {
      console.error("Error fetching events:", error);
    } else {
      setEvents((data || []).sort((a, b) => a.id - b.id));
    }
    setLoading(false);
  };

  if (loading) {
    return <div className="text-white">Loading events...</div>;
  }

  return (
    <div className="flex flex-col items-center px-4 py-8">
      <h1 className="text-3xl font-semibold text-white mb-4">Events List</h1>
      <div className="flex flex-col w-full max-w-2xl space-y-4">
        {events.map((event) => (
          <ViewEventCell key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
};

export default ViewEventsList;
