import { FaSave } from "react-icons/fa";

const EventDescription = () => {
    return (
      <div className="flex items-center justify-center min-h-screen ">
        <div className="bg-gray-800 w-[90%] h-[70%] rounded-lg shadow-lg p-6 text-white">
          <h1 className="text-4xl font-bold mb-6 m-4">Events</h1>
  
          <div className="space-y-4 text-gray-400 mb-10 m-4">
            <button className="hover:text-white text-lg mr-8">Discover</button>
            <button className="hover:text-white text-lg mr-8">Registered</button>
            <button className="hover:text-white text-lg mr-8">Saved</button>
          </div>
  
          <div className="space-y-6">
            <article className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-4 pt-72 max-w-2xl m-4 h-144 w-144">
                <img
                    src="https://images.unsplash.com/photo-1499856871958-5b9627545d1a"
                    alt="University of Southern California"
                    className="absolute inset-0 h-full w-full object-cover rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                <div className="relative z-10">
                    <div className="flex flex-row justify-between items-center gap-8"> 
                        <div className="flex-1">
                            <p className="flex items-center space-x-2 text-xs mb-1">
                                <span className="bg-lime-400 text-white py-1 px-2 rounded-lg">Hackathon</span>
                                <span className="bg-gray-700 text-white py-1 px-2 rounded-lg opacity-75">Sep 17-18, 2024</span>
                            </p>
                            <h4 className="text-2xl font-bold text-white whitespace-nowrap">HackVerse: Beyond the Binary</h4>                            <p className="text-sm leading-6 text-gray-300">
                                Join us to explore the limitless possibilities <br />
                                of technology and innovation.
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
          </div>
        </div>
      </div>
    );
  };
  
  export default EventDescription;