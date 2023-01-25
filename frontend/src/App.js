import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import Navbar from './components/Navbar/Navbar';
import JobsinDomain from './components/JobsinDomain/JobsinDomain';
import AppliedJobs from './components/AppliedJobs/AppliedJobs';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import Update from './components/Update/Update';
import Logout from './components/Logout/Logout';

function App() {
    return (
        <div className="App">
            <Router>
                <Navbar />

                <Routes>
                    <Route element={<Dashboard />} path="/dashboard"></Route>

                    <Route
                        element={<JobsinDomain />}
                        path="/jobsindomain"
                    ></Route>

                    <Route
                        element={<AppliedJobs />}
                        path="/appliedjobs"
                    ></Route>

                    {/* USER ACCOUNT MANAGEMENT */}
                    <Route element={<SignUp />} path="/signup"></Route>
                    <Route element={<Login />} path="/login"></Route>
                    <Route element={<Logout />} path="/logout"></Route>
                    <Route element={<Update />} path="/update"></Route>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
