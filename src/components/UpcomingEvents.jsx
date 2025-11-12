import React, { useEffect, useState } from "react";
import EventCard from "./EventCard";

const UpcomingEvents = () => {
  const [upcomingEvents, setUpcomingEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      await fetch("http://localhost:3000/events")
        .then((res) => res.json())
        .then((data) => setUpcomingEvents([...data]));
    };

    fetchEvents();
  }, []);

  return (
    <div className="mb-20">
      <h2 className="text-4xl  font-bold text-secondary mb-10 text-center">
        Upcoming Events
      </h2>
      <div className="grid grid-cols-4 justify-center w-7/10 mx-auto gap-6">
        {upcomingEvents.map((oneEvent) => (
          <EventCard key={oneEvent._id} oneEvent={oneEvent}></EventCard>
        ))}
      </div>
    </div>
  );
};

export default UpcomingEvents;
