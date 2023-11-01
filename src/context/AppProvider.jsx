import React, { useState, createContext, useEffect } from "react";
import axios from "../axios/axios.jsx";

export const AppContext = createContext({});

export const AppProvider = ({children}) => {
    const [cars, setCars] = useState([]);
    const [spareParts, setSpareParts] = useState([]);
    const [carOrders, setCarOrders] = useState([]);
    const [partOrders, setPartOrders] = useState([]);
    const [expanded, setExpanded] = useState(true);

    const fetchCars = async () => {
        const response = await axios.get('/cars');
        const data = await response.data.cars;
        setCars(data);
    }

    const fetchParts = async () => {
      const response = await axios.get("/spare-parts");
      const data = await response.data.spareParts;
      setSpareParts(data);
    }

    const fetchCarOrders = async () => {
      const response = await axios.get("/cars-order");
      const data = await response.data.carOrders;
      setCarOrders(data);
    }

    const fetchPartOrders = async () => {
      const response = await axios.get("/sparePart/orders");
      const data = await response.data.partOrders;
      setPartOrders(data);
    }


    useEffect(() => {
        fetchCars();
        fetchParts();
        fetchCarOrders();
        fetchPartOrders();
    }, []);
    

  return (
    <AppContext.Provider value={{cars, spareParts, carOrders, expanded, setExpanded}}>
        {children}
    </AppContext.Provider>
  )
}

export default AppProvider;