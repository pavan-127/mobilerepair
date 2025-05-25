import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";
import LocationPopup from "./LocationPopup";

export default function Navbar() {
  const navigate = useNavigate();
  const [showLocationPopup, setShowLocationPopup] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState("Select Your Location");

  const handleLocationClick = () => {
    setShowLocationPopup(true);
  };

  const handleLocationSelect = (location) => {
    setSelectedLocation(location);
    console.log("Selected location to send to admin:", location);
    setShowLocationPopup(false);
    // Optionally send location to backend here
  };

  return (
    <>
      <header className="navbar">
        <div className="navbar-left">
          <img
            src={"/public/logo.png"}
            alt="MobileRepair"
            className="logo"
            onClick={() => navigate('/')} // ✅ Navigate to homepage
            style={{ cursor: "pointer" }}
          />

          <input
            type="text"
            placeholder="Search for Display's, Motherboards & More"
            className="search-bar"
          />
        </div>

        <div className="navbar-right">
          <button className="location" onClick={handleLocationClick}>
            <span className="location-icon">📍</span> {selectedLocation} ▼
          </button>
        </div>
      </header>

    

      {/* Location Popup */}
      {showLocationPopup && (
        <LocationPopup
          onClose={() => setShowLocationPopup(false)}
          onSelectLocation={handleLocationSelect}
        />
      )}
    </>
  );
}
