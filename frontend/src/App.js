
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route element={<Dashboard/>} path="/Dashboard"></Route>
        </Routes>
      </Router>      
    </div>
  );
}

export default App;
