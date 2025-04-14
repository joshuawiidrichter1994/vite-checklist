import { useState } from 'react';
import GearList from './Components/GearList';
import GearForm from './Components/GearForm';

import './App.css';

function App() {
  const [gear, setGear] = useState([]);

  return (
    <div>
      <GearForm />
      <GearList />
    </div>
  );
}

export default App;
