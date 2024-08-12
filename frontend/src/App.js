import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import SignupPage from './pages/Signup';
import LoginPage from './pages/Login';
import { Homepage } from './pages/Homepage';
import { Navbar } from './components/Navbar';
import { Courses } from './pages/Courses';
import Chat from './components/chat';

function App() {
  return (
    
     <BrowserRouter>
        <Routes>
          
            <Route path="/" element={<Homepage/>} />
            <Route path="/login" element={<LoginPage/>} />
            <Route path="/signup" element={<SignupPage/>} />
            <Route path="/courses" element={<Courses/>} />
            <Route path="/chat" element={<Chat/>} />
        </Routes>
      </BrowserRouter>
    
 
  );
}

export default App;
