import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './pages/Signup.jsx';
import Task from "./pages/Task.jsx";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signup/>} />
        <Route path="/task" element={<Task />} />
      </Routes>
    </Router>
  );
}
