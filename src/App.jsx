import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home.jsx';
import Rent from './components/Rent';
import Carsales from './components/Carsales';
import DashHome from "./dashboard/DashHome";
// import Cars from "./dashboard/Cars";
import { DashboardCars } from './dashboard/DashboardCars';
import SpareParts from './components/SpareParts';
import ContactUs from './components/ContactUs';
import SinglePart from './components/SinglePart';
import SmoothScroll from "./helpers/SmoothScroll";
import Index from "./dashboard/index";
import SingleCar  from './components/SingleCar.jsx';

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
