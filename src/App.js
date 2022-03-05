import './App.scss';
import { ConditionalRender } from './Effect1';
import { EstadoDois } from './state 3';

function App() {
  return (
    <div className="intro">
      <ConditionalRender />
    </div>
  );
}

export default App;
