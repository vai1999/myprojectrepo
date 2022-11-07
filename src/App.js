import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import Sidenav from './Components/Sidenav';
import Table from "./Pages/Tables";
import Home from "./Pages/Home";
import Settings from "./Pages/Settings";
import Form from "./Pages/Form";

function App() {
  return (
    <div className="App">
      
      <Sidenav/>
      <main>
      <Routes>
        <Route  path="/" element={<Home />}/>
        <Route path="/table" element={<Table />} />
        <Route path="/form" element={<Form />}/>
      </Routes>
      </main>
     
    </div>
  );
}

export default App;
