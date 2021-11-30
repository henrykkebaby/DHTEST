import logo from './logo.svg';
import './App.css';
import Model from "./models/model";
import Game from './presenters/gamePresenter';
import Index from './presenters/indexPresenter';

import { Routes, Route } from 'react-router-dom';

function App() {

  const model = new Model();

  return (
    <Routes>
      <Route path="/" element={<Index model={model} />} />
<<<<<<< Updated upstream
      <Route path="/game" element={<Game model={model} />} />
    </Routes>
=======
      <Route path="/duck" element={<Duck model={model} />} />
    </Routes>

>>>>>>> Stashed changes
  );
}

export default App;
