import logo from './logo.svg';
import './App.css';
import Model from "./models/model";
import HenrikPresenter from "./presenters/henrikPresenter";
import FilipPresenter from './presenters/filipPresenter';
import OllePresenter from './presenters/ollePresenter';
import ShayanPresenter from './presenters/shayanPresenter';

function App() {

  const model = new Model();

  return (
    <div>
        
        <HenrikPresenter model={model} />
        <FilipPresenter model={model} />
        <OllePresenter model={model} />
        <ShayanPresenter model={model} />
    </div>
  );
}

export default App;
