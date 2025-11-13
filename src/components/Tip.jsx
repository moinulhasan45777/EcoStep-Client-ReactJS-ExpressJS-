import React, { useState } from "react";
import { toast } from "react-toastify";

const Tip = ({ tip }) => {
  const [upvoteCount, setUpvoteCount] = useState(tip.upvotes);
  const handleUpvote = async () => {
    const updatedTip = {
      upvotes: tip.upvotes + 1,
    };
    await fetch(`http://localhost:3000/tips/${tip._id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedTip),
    })
      .then((res) => res.json())
      .then(() => {
        setUpvoteCount(upvoteCount + 1);
      })
      .catch((error) => toast.error(error.message));
  };
  return (
    <div className=" w-full bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-200 p-5 flex flex-col justify-between">
      {/* Header */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs text-gray-400">
            Posted on{" "}
            {new Date(tip.createdAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </span>
          <span className="text-xs text-gray-500">
            ✍️ by{" "}
            <span className="font-medium text-gray-700">{tip.authorName}</span>
          </span>
        </div>

        {/* Title */}
        <h2 className="text-lg font-semibold text-gray-900 mb-2 leading-snug hover:text-green-600 transition-colors cursor-pointer">
          {tip.title}
        </h2>

        {/* Preview */}
        <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
          {tip.content}
        </p>
      </div>

      {/* Footer */}
      <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-3">
        <div className="flex items-center gap-1 text-gray-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.8}
            stroke="currentColor"
            className="w-5 h-5 text-green-600"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14 9l-2-2m0 0l-2 2m2-2v12m8-6a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span className="text-sm font-medium">{upvoteCount} upvotes</span>
        </div>

        <button
          disabled={upvoteCount > tip.upvotes}
          onClick={handleUpvote}
          className={`text-sm px-3 py-1.5 rounded-lg bg-primary text-white hover:bg-secondary cursor-pointer transition disabled:cursor-auto disabled:bg-secondary `}
        >
          Upvote
        </button>
      </div>
    </div>
  );
};

export default Tip;
