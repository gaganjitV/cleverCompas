import {BrowserRouter, Routes, Route} from 'react-router-dom'

//Pages and components 
import Login from './Pages/login';
import Home from './Pages/home'
import StudentDashboard from './Pages/studentDashboard';
import TutorDashboard from './Pages/TutordashBoard';
import Schedule from './Pages/Schedule'
import About from './Pages/about';
import Contact from './Pages/contact';
import FAQ from './Pages/Faq';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ProtectedRoute from './components/ProtectedRoute';
import SignUp from './Pages/signup';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
          <div className='pages'>
            <Routes>
               {/* Add other routes here, as we add more pages we need to import tham and create a route for them 
              <Route path="/"    element={<Home />}  />
              <Route path="/Dashboard" element={<Dashboard />} />
              <Route path="/Schedule" element={<Schedule />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/login" element={<Login />} />  */}

               {/* Open Routes */}
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/faq" element={<FAQ />} />
               {/* Protected Routes */}
             <Route path="/studentDashboard" element={<ProtectedRoute> <StudentDashboard /> </ProtectedRoute> }/>
             <Route path="/Tutordashboard" element={<ProtectedRoute> <TutorDashboard /> </ProtectedRoute> }/>
             <Route path="/Schedule" element={<ProtectedRoute> <Schedule /> </ProtectedRoute> }/>


            </Routes>
        
          </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
