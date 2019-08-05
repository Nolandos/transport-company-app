//REQUIRED IMPORTS
import React from 'react';
import { Formik } from 'formik';
import { useDispatch } from "react-redux";
import { createOrder } from '../redux/orderReducer';

const NewOrder = () => {
    const dispatch = useDispatch(); 
    return (
    <div>
      <h1>Anywhere in your app!</h1>
      <Formik
        initialValues={{ source_address: '', destination_address: '', price:'', date: '', active:'', vehicle: '', driver:'', customer:'' }}
        onSubmit={(values) => {
            dispatch(createOrder(JSON.stringify(values, null, 2))); 
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
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="source_address"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            <input
              type="text"
              name="destination_address"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
            <input
              type="number"
              name="price"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            <input
              type="text"
              name="date"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            <input
              type="text"
              name="active"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            <input
              type="text"
              name="vehicle"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            <input
              type="text"
              name="driver"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            <input
              type="text"
              name="customer"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </form>
        )}
      </Formik>
    </div>
    );
};
  
  export default NewOrder;