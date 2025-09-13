import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';

const ActivityShowcase = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [selectedEventIndex, setSelectedEventIndex] = useState(0);

  // Activity images for the main carousel
  const activityImages = [
    "/HOME/act3.jpg",
    "/HOME/act2.jpg",
    "/HOME/act1.jpg",
  ];

  // Events list (currently just one event)
  const events = [
 {
  id: 1,
  title: "Tamil Entrepreneur Meet at Europe",
  description: "Connect with Tamil entrepreneurs across Europe",
  location: "Europe",
  images: activityImages
}

  ];

  // Auto-slide effect for main carousel
  useEffect(() => {
    if (isAutoPlay) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % activityImages.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlay, activityImages.length]);

  const goToSlide = (index:any) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? activityImages.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % activityImages.length);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlay(!isAutoPlay);
  };

  const handleEventSelect = (eventIndex:any) => {
    setSelectedEventIndex(eventIndex);
    setCurrentIndex(0); // Reset to first image of selected event
  };

  return (
    <div className="w-full min-h-screen bg-gray-50 flex">
      {/* Main Activity Section */}
      <div className="flex-1 py-12 px-4 sm:px-6 lg:px-10">
        {/* Section Heading */}
        <div className="relative flex items-center justify-between mb-10">
          <h1 
            className="text-4xl sm:text-6xl md:text-7xl lg:text-7xl font-extrabold text-transparent uppercase tracking-widest select-none text-center w-full"
            style={{ WebkitTextStroke: "0.5px gray" }}
          >
            Activities
          </h1>
        </div>

        {/* Main Carousel Container */}
        <div className="flex items-center justify-center max-w-4xl mx-auto w-full">
          <div className="relative w-full">
            
            {/* Image Carousel */}
            <div className="relative h-[400px] sm:h-[500px] lg:h-[400px] rounded-lg overflow-hidden shadow-lg bg-white">
              
              {/* Images Container */}
              <div 
                className="flex transition-transform duration-700 ease-in-out h-full"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {activityImages.map((image, index) => (
                  <div key={index} className="w-full h-full flex-shrink-0 relative">
                    <img
                      src={image}
                      alt={`Activity ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={goToPrevious}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-blue-800 text-white shadow-md hover:bg-blue-700 transition-colors duration-200"
              >
                <ChevronLeft size={20} />
              </button>
              
              <button
                onClick={goToNext}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-blue-800 text-white shadow-md hover:bg-blue-700 transition-colors duration-200"
              >
                <ChevronRight size={20} />
              </button>

              {/* Auto-play Control */}
              <button
                onClick={toggleAutoPlay}
                className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-white/90 backdrop-blur-sm hover:bg-white shadow-md transition-all duration-200"
              >
                {isAutoPlay ? (
                  <Pause className="w-5 h-5 text-gray-700" />
                ) : (
                  <Play className="w-5 h-5 text-gray-700" />
                )}
              </button>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-8 space-x-2">
              {activityImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-blue-800 w-8'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>

            {/* Image Counter */}
            <div className="text-center mt-3">
              <span className="text-gray-600 text-base font-medium">
                {String(currentIndex + 1).padStart(2, '0')} / {String(activityImages.length).padStart(2, '0')}
              </span>
            </div>
          </div>
        </div>
      </div>

<div className="w-80 bg-blue-50 border-l-4 border-blue-500 p-6 flex flex-col">
  {/* Sticky Header */}
  <div className="sticky top-0 bg-blue-50 pb-4 mb-4 border-b border-blue-200 z-10">
    <h2 className="text-xl font-normal text-blue-800">Select Event</h2>
  </div>

  {/* Events List with Enhanced Scroll */}
  <div className="flex-1 overflow-y-auto space-y-4 pr-2 scrollbar-thin scrollbar-thumb-blue-400 scrollbar-track-blue-100">
    {events.map((event, index) => {
      // Remove location from title if present
      const cleanedTitle = event.title.replace(` at ${event.location}`, "");

      return (
        <div
          key={event.id}
          onClick={() => handleEventSelect(index)}
          className={`p-4 rounded-lg cursor-pointer transition-all duration-200 hover:shadow-lg hover:border-blue-400 ${
            selectedEventIndex === index
              ? 'bg-blue-200 border-2 border-blue-500 shadow-md'
              : 'bg-white border-2 border-blue-200'
          }`}
        >
          <h3 className={`font-semibold text-lg mb-2 ${
            selectedEventIndex === index ? 'text-blue-800' : 'text-gray-800'
          }`}>
            {cleanedTitle}
          </h3>
          <p className="text-gray-600 text-sm mb-2">
            {event.description}
          </p>

          {/* Optional: Expanded Info for Selected Event */}
          {selectedEventIndex === index && (
            <div className="mt-3 text-blue-700 text-xs space-y-1">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                <span>Currently Selected</span>
              </div>
            <div className='flex justify-between items-center'>
                  <div className="flex items-center gap-2">
                <span className="font-medium">Images:</span>
                <span>{event.images.length}</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a8 8 0 100 16 8 8 0 000-16zm1 12H9v-2h2v2zm0-4H9V6h2v4z"/></svg>
                <span><span className="font-medium">Location:</span> {event.location}</span>
              </div>
            </div>
            </div>
          )}
        </div>
      );
    })}
  </div>
</div>


    </div>
  );
};

export default ActivityShowcase;