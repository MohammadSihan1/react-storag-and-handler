import logo from './logo.svg';
import './App.css';
import Cosmetics from './components/Cosmetics/cosmetics';
import Shoes from './components/shoes/shoes';

function App() {
  return (
    <div className="App">
      <Cosmetics></Cosmetics>
      <Shoes></Shoes>
    </div>
  );
}

export default App;
