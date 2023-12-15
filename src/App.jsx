import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Rent from './pages/Rent';
import Carsales from './pages/Carsales';
import DashHome from "./dashboard/DashHome";
import { DashboardCars } from './dashboard/DashboardCars';
import SpareParts from './pages/SpareParts';
import ContactUs from './pages/ContactUs';
import SinglePart from './pages/SinglePart';
import SmoothScroll from "./helpers/SmoothScroll";
import Index from "./dashboard/index";
import SingleCar  from './pages/SingleCar.jsx';
import { LoginForm } from './components/LoginForm.jsx';

function App() {
  

  return (
    <>
      <div className="App">
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/rent' element={<Rent />}></Route>
        <Route path='/spare-parts' element={<SpareParts />}></Route>
        <Route path="/contact" element={<ContactUs />}></Route>
        <Route path="/:carId" element={<SingleCar />}></Route>
        <Route path='/login' element={<LoginForm />}></Route>
        <Route path='/dashboard' element={<Index />}></Route>
          <Route path="dashboard/cars" element={<DashboardCars />}/>
        <Route path="/carsales" element={<Carsales />}></Route>
        <Route path='/spare-parts/:partId' element={<SinglePart/>}></Route>
      </Routes>
      <SmoothScroll />
      </div>
    </>
  )
}

export default App
