"use client"; // Required for browser-only APIs like navigator

import { useState } from "react";
console.log("location file loaded")
export default function GeoLocation() {
  // 1. Use state instead of direct DOM manipulation (x.innerHTML)
  const [status, setStatus] = useState<string>("");

  // 2. Explicitly type the success callback
  const success = (position: GeolocationPosition): void => {
    const { latitude, longitude } = position.coords;
    setStatus(`Latitude: ${latitude} <br> Longitude: ${longitude}`);
  };

  // 3. Explicitly type the error callback
  const error = (err: GeolocationPositionError): void => {
    setStatus(`Error: ${err.message}`);
    alert("Sorry, no position available.");
  };

  const getLocation = (): void => {
    // Check if navigator is available (prevents SSR errors)
    if (typeof window !== "undefined" && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    } else {
      setStatus("Geolocation is not supported by this browser.");
    }
  };

  return (
    <div className="p-5">
      <button 
        onClick={getLocation}
        className="px-4 py-2 bg-blue-600 text-white rounded-md"
      >
        Get Location
      </button>
      
      {/* Rendering HTML strings safely in React */}
      <div 
        className="mt-4" 
        dangerouslySetInnerHTML={{ __html: status }} 
      />
    </div>
  );
}

GeoLocation();

// function getLocation() {
//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(success, error);
//   } else { 
//     x.innerHTML = "Geolocation is not supported by this browser.";
//   }
// }

// function success(position) {
//   x.innerHTML = "Latitude: " + position.coords.latitude + 
//   "<br>Longitude: " + position.coords.longitude;
// }

// function error() {
//   alert("Sorry, no position available.");
// }