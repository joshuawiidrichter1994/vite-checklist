import { useState } from 'react';
import GearList from './Components/GearList';
import GearForm from './Components/GearForm';
import WeatherPanel from './Components/WeatherPanel';

import './App.css';

function App() {
  const [gear, setGear] = useState([]);

  const addItem = (name) => {
    const newItem = {
      id: Date.now(),
      name,
      packed: false,
    };
    setGear([...gear, newItem]);
  };

  const toggledPacked = (id) => {
    setGear((prevGear) =>
      prevGear.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };

  const deleteItem = (id) => {
    setGear((prevGear) => prevGear.filter((item) => item.id !== id));
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
