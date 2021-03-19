import logo from './logo.svg';
import './App.css';
import TopBar from './TopBar';
import Nav from './Nav';
import Banner from './Banner';
import Fact from './Fact';
import About from './About';
import Feature from './Feature'
import Remaining from './Remaining';
import Registeration from './Registration';

function App() {
  return (
    <div className="App">
      <TopBar/>
      <Nav/>
      <Banner/>
      <Fact/>
      <About/>
      <Feature/>
      <Remaining/>
      <Registeration/>
      hello react
    </div>
  );
}

export default App;
