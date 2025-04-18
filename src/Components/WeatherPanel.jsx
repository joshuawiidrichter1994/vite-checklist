import { useState, useEffect } from 'react';

function WeatherPanel() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const res = await fetch(
          'https://api.open-meteo.com/v1/forecast?latitude=-33.92&longitude=18.42&current_weather=true'
        );
        const data = await res.json();
        setWeather(data.current_weather);
      } catch (err) {
        console.error('Error fetching weather:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchWeather();
  }, []);

  if (loading) return <div>Loading weather...</div>;
  if (!weather) return <div>Weather data not available.</div>;

  return (
    <div>
      <h1>Weather</h1>
      <div>
        <span>Current temperature: </span>
        {weather.temperature}
        <br />
        <span>Wind: </span>
        {weather.windspeed}
      </div>
    </div>
  );
}

export default WeatherPanel;
