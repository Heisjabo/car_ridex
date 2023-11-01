import * as yup from "yup";

export const carSchema = yup.object().shape({
    name: yup.string().required('Name is required'),
    year: yup.string().required('Year is required'),
    seats: yup.string().required('Seats is required'),
    fuelConsumption: yup.string().required('Fuel consumption is required'),
    fuelType: yup.string().required('Fuel type is required'),
    gearType: yup.string().required('Gear type is required'),
    price: yup.string().required('Price is required'),
    images: yup.mixed().test("required", "Car image is required", (value) => {
        return value && value.length;
      }),
})