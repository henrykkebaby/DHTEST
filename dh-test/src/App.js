import logo from './logo.svg';
import './App.css';
import Model from "./models/model";
import HenrikPresenter from "./presenters/henrikPresenter";
import FilipPresenter from './presenters/filipPresenter';
import OllePresenter from './presenters/ollePresenter';
import ShayanPresenter from './presenters/shayanPresenter';
import Duck from './presenters/duckPresenter';
import Timer from './presenters/timerPresenter';

function App() {

  const model = new Model();

  return (
    <div>
        <Duck model={model} />
        <Timer model={model} />
    </div>
  );
}

export default App;
