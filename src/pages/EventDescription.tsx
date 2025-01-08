import eventsData from "@/components/constants/EventData";
import { useState } from "react";
import { FaSave } from "react-icons/fa";

const EventDescription = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
    const scrollContainer = document.querySelector("#scroll-container");
    if (scrollContainer) {
      const cardWidth = scrollContainer.children[index]?.clientWidth || 0;
      const scrollPosition = index * cardWidth;
      scrollContainer.scrollTo({ left: scrollPosition, behavior: "smooth" });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-gray-800 w-[90%] h-[70%] rounded-lg shadow-lg p-6 text-white">
        <h1 className="text-4xl font-bold mb-6 m-4">Events</h1>

        <div className="space-y-4 text-gray-400 mb-10 m-4">
          <button className="hover:text-white text-lg mr-8">Discover</button>
          <button className="hover:text-white text-lg mr-8">Registered</button>
          <button className="hover:text-white text-lg mr-8">Saved</button>
        </div>

        <div className="relative overflow-hidden">
          <div
            id="scroll-container"
            className="flex space-x-4 scrollbar-hide"
            style={{ overflow: "hidden" }}
          >
            {eventsData.map((event) => (
              <article
                key={event.id}
                className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-4 pt-72 min-w-[50%] max-w-md snap-center shadow-lg"
              >
                <img
                  src={event.image}
                  alt={event.title}
                  className="absolute inset-0 h-full w-full object-cover rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                <div className="relative z-10">
                  <div className="flex flex-row justify-between items-center gap-8">
                    <div className="flex-1">
                      <p className="flex items-center space-x-2 text-xs mb-1">
                        <span className="bg-lime-400 text-white py-1 px-2 rounded-lg">
                          {event.tag}
                        </span>
                        <span className="bg-gray-700 text-white py-1 px-2 rounded-lg opacity-75">
                          {event.date}
                        </span>
                      </p>
                      <h4 className="text-2xl font-bold text-white">
                        {event.title}
                      </h4>
                      <p className="text-sm leading-6 text-gray-300">
                        {event.description}
                      </p>
                    </div>

                    <div className="flex items-end gap-2 self-end">
                      <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-6 rounded-lg whitespace-nowrap">
                        Register Now
                      </button>
                      <button className="bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-lg flex items-center gap-2">
                        <FaSave />
                        Save
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-6 space-x-2">
          {eventsData.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-3 h-3 rounded-full ${
                currentIndex === index
                  ? "bg-white"
                  : "bg-gray-500 hover:bg-gray-400"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventDescription;
