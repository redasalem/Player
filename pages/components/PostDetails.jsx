import React from "react";
import { HiCalendarDateRange } from "react-icons/hi2";
import { IoLocationOutline } from "react-icons/io5";

const PostDetails = ({ post }) => {
  // ✅ Universal date formatter - يشتغل مع أي field name
  const formatDate = () => {
    // جرب كل الأسماء المحتملة
    const possibleDateFields = [
      post?.Data,
      post?.data,
      post?.date,
      post?.Date,
      post?.createdAt,
      post?.created_at,
      post?.eventDate,
      post?.timestamp,
    ];

    // لاقي أول field موجود
    const dateField = possibleDateFields.find((field) => field);

    if (!dateField) return "No Data";

    // لو Firebase Timestamp
    if (dateField.seconds) {
      return new Date(dateField.seconds * 1000).toLocaleString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });
    }

    // لو String date
    try {
      return new Date(dateField).toLocaleString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      });
    } catch {
      return "Invalid Date";
    }
  };
  const formattedData = formatDate();

  return (
    <div className="h-full">
      <div className="group relative bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
        {/* Image Container - Enforcing consistent height and width */}
        <div className="relative h-64 w-full overflow-hidden bg-gray-800">
          <img
            src={post.image}
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
            alt={post.title}
          />
          <div className="absolute inset-0 bg-linear-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Content Container */}
        <div className="p-6 flex flex-col grow">
          <h5 className="mb-3 text-xl font-bold tracking-tight text-white group-hover:text-blue-400 transition-colors line-clamp-2">
            {post?.title}
          </h5>

          <p className="text-gray-400 mb-6 text-sm leading-relaxed line-clamp-3 grow">
            {post?.desc}
          </p>

          <div className="space-y-3 mb-6 border-t border-gray-800 pt-4">
            <div className="flex items-center text-sm text-gray-300">
              <span className="mr-3 text-blue-500 bg-blue-500/10 p-2 rounded-lg">
                <HiCalendarDateRange size={18} />
              </span>
              <span className="font-medium">{formattedData}</span>
            </div>

            <div className="flex items-center text-sm text-gray-300">
              <span className="mr-3 text-pink-500 bg-pink-500/10 p-2 rounded-lg">
                <IoLocationOutline size={18} />
              </span>
              <span className="font-medium">
                {post?.location || "Location not specified"}
              </span>
            </div>
          </div>

          <a
            href="#"
            className="inline-flex items-center justify-center w-full text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-xl text-sm px-5 py-3 transition-all duration-300 shadow-lg hover:shadow-blue-500/25 group/btn"
          >
            Read more
            <svg
              className="w-4 h-4 ms-2 rtl:rotate-180 transform group-hover/btn:translate-x-1 transition-transform"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
