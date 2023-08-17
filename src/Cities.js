import React, { useState, useEffect } from 'react';

const Cities = () => {
  const cities = ["Berlin", "München", "Deine Stadt"];
  const [currentCityIndex, setCurrentCityIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCityIndex((prevIndex) => (prevIndex + 1) % cities.length);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <p style={{ color: 'white' }}>Das Wetter für <span style={{ color: 'orange' }}>{cities[currentCityIndex]}</span></p>
    </div>
  );
};

export default Cities;
