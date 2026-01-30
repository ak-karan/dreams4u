import React, { useState } from "react";

function ReviewCard({ name, rating, text }) {
  const [expanded, setExpanded] = useState(false);

  const SHORT_LENGTH = 90;
  const isLong = text.length > SHORT_LENGTH;

  return (
    <div
      className="
    relative p-0.5 rounded-xl h-full
    animate-borderSpin
    [background:conic-gradient(from_var(--border-angle),#22d3ee,#6366f1,#22d3ee)]
  "
    >
      <article
        className="md:h-44 h-full bg-gray-800 shadow-2xl rounded-xl p-6 "
        itemScope
        itemType="https://schema.org/Review"
      >
        <p className="font-semibold text-gray-200" itemProp="author">
          {name}
        </p>

        <p className="text-yellow-500 text-sm mt-1">{"⭐".repeat(rating)}</p>

        <p
          className={`text-gray-300 text-sm mt-3 transition-all duration-300`}
          itemProp="reviewBody"
        >
          {expanded || !isLong ? text : text.slice(0, SHORT_LENGTH) + "..."}
        </p>

        {isLong && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="mt-2 text-cyan-600 text-sm font-medium hover:underline"
            aria-expanded={expanded}
          >
            {expanded ? "Read Less" : "Read More"}
          </button>
        )}
      </article>
    </div>
  );
}

export default ReviewCard;
