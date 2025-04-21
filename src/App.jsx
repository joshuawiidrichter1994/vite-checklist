import { useState, useEffect } from 'react';
import GearList from './Components/GearList';
import GearForm from './Components/GearForm';
import WeatherPanel from './Components/WeatherPanel';

import './App.css';

function App() {
  const [gear, setGear] = useState([]);

  useEffect(() => {
    // Load gear data from local storage (if available)
    const storedGear = JSON.parse(localStorage.getItem('gearList'));
    if (storedGear) {
      setGear(storedGear);
    }
  }, []); // Empty dependency array ensures this runs only once, on component mount

  const addItem = (name) => {
    const newItem = {
      id: Date.now(),
      name,
      packed: false,
    };
    const updatedGear = [...gear, newItem];
    setGear(updatedGear);
    localStorage.setItem('gearList', JSON.stringify(updatedGear)); // Save to local storage
  };

  const toggledPacked = (id) => {
    const updatedGear = gear.map((item) =>
      item.id === id ? { ...item, packed: !item.packed } : item
    );
    setGear(updatedGear);
    localStorage.setItem('gearList', JSON.stringify(updatedGear)); // Save to local storage
  };

  const deleteItem = (id) => {
    const updatedGear = gear.filter((item) => item.id !== id);
    setGear(updatedGear);
    localStorage.setItem('gearList', JSON.stringify(updatedGear)); // Save to local storage
  };

  return (
    <div>
      <WeatherPanel />
      <h1>Gear checklist</h1>
      <GearForm addItem={addItem} />
      <GearList
        gear={gear}
        togglePacked={toggledPacked}
        deleteItem={deleteItem}
      />
    </div>
  );
}

export default App;
