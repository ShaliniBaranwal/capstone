
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import Navbar from './components/Navbar/Navbar';
import JobsinDomain from './components/JobsinDomain/JobsinDomain'
import AppliedJobs from './components/AppliedJobs/AppliedJobs'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route element={<Dashboard />} path="/Dashboard"></Route>
          <Route element={<JobsinDomain />} path="/JobsinDomain"></Route>
          <Route element={<AppliedJobs />} path="/AppliedJobs"></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
