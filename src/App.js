import './App.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from "./containers/Main";


function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Main />
    </div>
  );
}

export default App;
