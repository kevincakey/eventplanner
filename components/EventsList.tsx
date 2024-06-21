"use client";

import React, { useState, useEffect } from "react";
import { supabase } from "../utils/supabaseClient";
import EventCell from "./EventCell";
import { Event } from "@/types";

const EventsList: React.FC = () => {
  // Fetch data from Supabase
  const [events, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState("");

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

  return (
    <div>
      <h1>Events List</h1>
      {events.map((event: Event) => (
        <EventCell key={event.id} event={event} />
      ))}
    </div>
  );
};

export default EventsList;
