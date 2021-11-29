import logo from './logo.svg';
import './App.css';
import Model from "./models/model";
import Game from './presenters/gamePresenter';
import Index from './presenters/indexPresenter';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  const model = new Model();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index model={model} />} />
        <Route path="/game" element={<Game model={model} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
