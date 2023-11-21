import './App.css';
import { Hello } from './components/Hello';
import { Menu } from './components/Menu';

function App() {
  return (
    <div>
      <Menu/>
      <header className="container">
        <Hello/>
      </header>
    </div>
  );
}

export default App;
