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

function App() {
  return (
    <div className="min-h-full h-screen items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-white">
    <div className="max-w-md w-full space-y-8">
     <BrowserRouter>
        <Routes>
          
            <Route path="/" element={<Homepage/>} />
            <Route path="/login" element={<LoginPage/>} />
            <Route path="/signup" element={<SignupPage/>} />
            <Route path="/courses" element={<Courses/>} />
        </Routes>
      </BrowserRouter>
    </div>
  </div>
  );
}

export default App;
