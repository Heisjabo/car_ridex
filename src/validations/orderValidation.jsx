import * as yup from "yup";

export const orderSchema = yup.object().shape({
    name: yup.string().required('Name is required'),
    email: yup.string().required('Email is required'),
    phone: yup.string().required('Phone is required'),
    pickupDate: yup.date().required('Pickup date is required'),
    returnDate: yup.date().required('Return date is required')
});
