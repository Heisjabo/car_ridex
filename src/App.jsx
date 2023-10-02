import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home.jsx';
import Rent from './components/Rent';
import Carsales from './components/Carsales';
import DashHome from "./dashboard/DashHome";
import Cars from "./dashboard/Cars";
import SharedLayout from "./dashboard/SharedLayout";

function App() {
  

  return (
    <>
      <div className="App">
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/rent' element={<Rent />}></Route>
        <Route path='/dashboard' element={<SharedLayout />}>
          <Route index element={<DashHome />}/>
          <Route path="cars" element={<Cars />}/>
        </Route>
        <Route path="/carsales" element={<Carsales />}></Route>
      </Routes>
      </div>
    </>
  )
}

export default App
