//REQUIRED IMPORTS
import React from 'react';
import { Formik } from 'formik';
import { useDispatch, useSelector } from "react-redux";
import * as Yup from 'yup';
import styled from "styled-components";
import './NewOrder.scss';

//THUNKS IMPORTS
import { createOrder } from '../../redux/orderReducer';

//STYLED COMPONENTS
const Select = styled.select`
  padding: 5px;
  width: 40%;
  border-radius: 2px;
  margin-bottom: 5px;
  margin-top: 5px;
`;

const ErrorInfo = styled.p`
  color: #FF0000;
  margin-top: 0;
`;

// VALIDATION SCHEMA
const SignupSchema = Yup.object().shape({
  source_address: Yup.string()
    .matches(/^ul.\s[A-Z]{1}[^\s]+\s[0-9]+,\s[A-Z]{1}/, {
    message:'(ul. Nazwa Nr, Miejscowość)'
  })
    .required('To pole jest wymagane !'),
  destination_address: Yup.string()
    .matches(/^ul.\s[A-Z]{1}[^\s]+\s[0-9]+,\s[A-Z]{1}/, {
    message:'(ul. Nazwa Nr, Miejscowość)'
  })
    .required('To pole jest wymagane !'),
  price: Yup.number()
    .min(0, 'Cena nie może być mniejsza od 0 !')
    .typeError('Cena nie jest liczbą!')
    .required('To pole jest wymagane !'),
  date: Yup.string()
    .required('Wybierz datę !'),
  active: Yup.string()
    .required('Musisz wybrać status !'),
  vehicle: Yup.string()
    .required('Musisz wybrać pojazd !'),
  driver: Yup.string()
    .required('Musisz wybrać kierowcę!'),
  customer: Yup.string()
    .required('Musisz wybrać klienta !'),
  priority: Yup.string()
    .required('Musisz wybrać priorytet !'),
});


const NewOrder = () => {
    const dispatch = useDispatch();
    const vehicles = useSelector(({ vehicles }) => vehicles.vehicles);  
    const drivers = useSelector(({ drivers }) => drivers.drivers);
    const clients = useSelector(({ clients }) => clients.clients);

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
        validationSchema={ SignupSchema }
        onSubmit={ async (values, { setSubmitting, resetForm }) => { 
            await dispatch(createOrder(values));
            resetForm(); 
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
          <form onSubmit={ handleSubmit }>
          <div className="header"></div>
            <input
              type="text"
              name="source_address"
              placeholder="Adres początkowy"
              onChange={ handleChange }
              onBlur={ handleBlur }
              value={ values.source_address } 
            />
            <ErrorInfo>{ errors.source_address && touched.source_address && errors.source_address }</ErrorInfo>
            <input
              type="text"
              name="destination_address"
              placeholder="Adres docelowy"
              onChange={ handleChange }
              onBlur={ handleBlur }
              value={ values.destination_address }
            />
            <ErrorInfo>{ errors.destination_address && touched.destination_address && errors.destination_address }</ErrorInfo>
            <input
              type="text"
              name="price"
              placeholder="Cena w zł"
              onChange={ handleChange }
              onBlur={ handleBlur }
              value={ values.price }
            />
            <ErrorInfo>{ errors.price && touched.price && errors.price }</ErrorInfo>
            <input
              type="date"
              name="date"
              placeholder="Data"
              onChange={ handleChange }
              onBlur={ handleBlur }
              value={ values.date }
            />
            <ErrorInfo>{ errors.date && touched.date && errors.date }</ErrorInfo>
            <Select
              type="text"
              name="active"
              placeholder="Status"
              onChange={ handleChange }
              onBlur={ handleBlur }
              value={ values.active }
            >
              <option value="">Wybierz Status</option>
              <option value="true">W trakcie</option>
              <option value="false">Zakończony</option>
            </Select>
            <ErrorInfo>{ errors.active && touched.active && errors.active }</ErrorInfo>
            <Select
              type="options"
              name="vehicle"
              placeholder="Pojazd"
              onChange={ handleChange }
              onBlur={ handleBlur }
              value={ values.vehicle }
            >
            <option value="">Wybierz pojazd</option>
            { vehicles.map(item => <option>{ item.car_brand } { item.car_model }</option>) }
            </Select>
            <ErrorInfo>{ errors.vehicle && touched.vehicle && errors.vehicle }</ErrorInfo>
            <Select
              type="text"
              name="driver"
              placeholder="Kierowca"
              onChange={ handleChange }
              onBlur={ handleBlur }
              value={ values.driver }
            >
              <option value="">Wybierz Kierowcę</option>
              { drivers.map(item => <option>{ item.first_name } { item.last_name }</option>) }
            </Select>
            <ErrorInfo>{ errors.driver && touched.driver && errors.driver }</ErrorInfo>
            <Select
              type="text"
              name="customer"
              placeholder="Klient"
              onChange={ handleChange }
              onBlur={ handleBlur }
              value={ values.customer }
            >
              <option value="">Wybierz Klienta</option>
              { clients.map(item => <option>{ item.name }</option>) }
            </Select>
            <ErrorInfo>{ errors.customer && touched.customer && errors.customer }</ErrorInfo>
            <Select
              type="text"
              name="priority"
              placeholder="Priorytet"
              onChange={ handleChange }
              onBlur={ handleBlur }
              value={ values.priority }
            >
              <option value="">Wybierz Priorytet</option>
              <option value="high">Wysoki</option>
              <option value="medium">Umiarkowany</option>
              <option value="low">Niski</option>
            </Select>
            <ErrorInfo>{ errors.priority && touched.priority && errors.priority }</ErrorInfo>
            <button className="btn-send" type="submit" disabled={ isSubmitting }>
              Złóż zamówienie
            </button>
          </form>
        )}
      </Formik>
    </div>
    );
};
  
  export default NewOrder;
