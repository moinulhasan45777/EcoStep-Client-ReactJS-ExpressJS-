import React, { useEffect, useState } from "react";
import EventCard from "./EventCard";
import { toast } from "react-toastify";

const UpcomingEvents = () => {
  const [upcomingEvents, setUpcomingEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      await fetch("http://localhost:3000/events")
        .then((res) => res.json())
        .then((data) => setUpcomingEvents([...data]))
        .catch((error) => toast.error(error.message));
    };

    fetchEvents();
  }, []);

  return (
    <section className="mb-20">
      <h2 className="text-4xl  font-bold text-secondary mb-10 text-center">
        Upcoming Events
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center w-9/10 md:w-8/10 lg:w-7/10 mx-auto gap-6">
        {upcomingEvents
          .filter((oneEvent) => new Date(oneEvent.date) > new Date())
          .slice(0, 4)
          .map((oneEvent) => (
            <EventCard key={oneEvent._id} oneEvent={oneEvent}></EventCard>
          ))}
      </div>
    </section>
  );
};

export default UpcomingEvents;
