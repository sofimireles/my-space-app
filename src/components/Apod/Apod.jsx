import React, { useState, useEffect } from 'react'; 
import './Apod.css';

function Apod() {
  const [apod, setApod] = useState(null);

  useEffect(() => {
    const fetchApod = async () => {
      try {
        const response = await fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY');
        const data = await response.json();
        setApod(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchApod();
  }, []);

  if (!apod) return <div>Loading...</div>;

  return (
    <div className="apod-container">
      <h1 className="apod-title">{apod.title}</h1>
      <img className="apod-img" src={apod.url} alt={apod.title} />
      <p className= "apod-text">{apod.explanation}</p>
    </div>
  );
}

export default Apod;
