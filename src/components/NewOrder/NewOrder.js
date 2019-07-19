//REQUIRED IMPORTS
import React from 'react';
import { Formik } from 'formik';
import { useDispatch } from "react-redux";
import { createOrder } from '../../redux/orderReducer';
import './NewOrder.scss';

//Komponent
const NewOrder = () => {
    const dispatch = useDispatch(); 
    return (
    <div className="new-order-container">
      <h1>Nowe zamówienie:</h1>
      <Formik
        initialValues={{ 
        source_address: '', 
        destination_address: '', 
        price:'', 
        date: '', 
        active:'', 
        vehicle: '', 
        driver:'', 
        customer:'', 
        priority:'' }}
        onSubmit={(values, {setSubmitting}) => {
            dispatch(createOrder(values));
            setSubmitting(false); 
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form onSubmit={handleSubmit}>
          <div class="header"></div>
            <input
              type="text"
              name="source_address"
              placeholder="Adres początkowy"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            <input
              type="text"
              name="destination_address"
              placeholder="Adres docelowy"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
            <input
              type="number"
              name="price"
              placeholder="Cena"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            <input
              type="text"
              name="date"
              placeholder="Data"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            <input
              type="text"
              name="active"
              placeholder="Status"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            <input
              type="text"
              name="vehicle"
              placeholder="Pojazd"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            <input
              type="text"
              name="driver"
              placeholder="Kierowca"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            <input
              type="text"
              name="customer"
              placeholder="Klient"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            <input
              type="text"
              name="priority"
              placeholder="Priorytet"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            <button className="btn-send" type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </form>
        )}
      </Formik>
    </div>
    );
};
  
  export default NewOrder;
