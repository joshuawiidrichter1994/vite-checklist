import { useState } from 'react';
import GearList from './Components/GearList';
import GearForm from './Components/GearForm';

import './App.css';

function App() {
  const [gear, setGear] = useState([
    { id: 1, name: 'knife', packed: false },
    { id: 2, name: 'water filter', packed: false },
    { id: 3, name: 'cookset', packed: false },
    { id: 4, name: 'shelter', packed: false },
    { id: 5, name: 'carbine', packed: false },
  ]);

  const addItem = (name) => {
    const newItem = {
      id: Date.now(), // simple unique ID
      name,
      packed: false,
    };
    setGear([...gear, newItem]);
  };

  return (
    <div>
      <h1>Gear checklist</h1>
      <GearForm addItem={addItem} />
      <GearList gear={gear} />
    </div>
  );
}

export default App;
