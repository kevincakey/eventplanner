// app/page.tsx
import { createClient } from "@/utils/supabase/server";
import EventCell from "./EventCell";
import { Event } from "@/types";

export default async function EventsList() {
  // Fetch data from Supabase
  const supabase = createClient();
  const { data: eventslist, error } = await supabase
    .from("eventslist")
    .select();

  // Check for errors
  if (error) {
    console.error("Error fetching events list:", error);
    return <div>Error loading events.</div>;
  }

  // If no data, return a message
  if (!eventslist || eventslist.length === 0) {
    return <div>No events found.</div>;
  }

  // Render the list of events
  return (
    <div>
      <h1>Events List</h1>
      {eventslist.map((event: Event) => (
        <EventCell key={event.id} event={event} />
      ))}
    </div>
  );
}
