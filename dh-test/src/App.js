import logo from './logo.svg';
import './App.css';
import Model from "./models/model";
import HenrikPresenter from "./presenters/henrikPresenter";
import FilipPresenter from './presenters/filipPresenter';
import OllePresenter from './presenters/ollePresenter';
import ShayanPresenter from './presenters/shayanPresenter';
import Duck from './presenters/duckPresenter';
import Index from './presenters/indexPresenter';
import TimerPresenter from './presenters/timerPresenter';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  const model = new Model();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index model={model} />} />
        <Route path="/duck" element={<Duck model={model} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
