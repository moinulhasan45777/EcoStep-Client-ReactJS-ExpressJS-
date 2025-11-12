import React from "react";

const EventCard = (oneEvent) => {
  return (
    <div className="max-w-md w-full bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200 p-5 flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <span className="text-sm text-gray-500 flex gap-1">
          📅{" "}
          <span>
            {new Date(oneEvent.oneEvent.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </span>
        </span>
        <span className="text-sm text-gray-500 flex  gap-1">
          📍 <span>{oneEvent.oneEvent.location}</span>
        </span>
      </div>

      {/* Title */}
      <h2 className="text-lg font-semibold text-gray-900 leading-snug hover:text-green-600 transition-colors cursor-pointer mb-2 mt-auto">
        {oneEvent.oneEvent.title}
      </h2>

      {/* Description */}
      <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
        {oneEvent.oneEvent.description}
      </p>
    </div>
  );
};

export default EventCard;
