//REQUIRED IMPORTS
import React, { useState } from "react";
import styled from "styled-components";
import './OrderDetails.scss';

//IMPORT REDUX ELEMENTS

const TransportDetailsSytle = styled.div`
  background-color: #fff;
  width: 85%;
  padding-left: 0;
  list-style-type: none;
  position: relative;
`;

const TransportDetails = ({
  id,
  source_address,
  destination_address,
  price,
  date,
  active,
  driver,
  vehicle,
  priority
}) => {
  /*HOOKS*/
  const [visible, setVisible] = useState(false);

  return (
    <TransportDetailsSytle>
      <div className="container">
        <div className="wrapper">
          <p className="source-address">{ source_address }</p>
          <i className='uil uil-arrow-to-right'></i>
          <p className="destination-address">{ destination_address }</p>
        </div>
        <div onClick={() => setVisible(!visible)} className="show-details">
          <i className='uil uil-eye'></i>
          <p className="details-text">Szczegóły</p>
        </div>
        <div className="active">
          { active ? <div class="active-ico"></div> : <div class="onactive-ico"></div> }
        </div>
        <div className="priority">
          { priority === 'low' && <i class='uil uil-arrow-down'></i> }
          { priority === 'medium' && <i class='uil uil-arrow-right'></i> }
          { priority === 'high' && <i class='uil uil-arrow-up'></i> }
        </div>
      </div>
      { visible && 
      <div className="details">
        <p>Skąd: { source_address }</p>
        <p>Dokąd: { destination_address }</p>
        <p>Cena: { price }</p>
        <p>Data: { date }</p>
        <p>Status: { active ? 'W trakcie' : 'Zakończony' }</p>
        <p>Samochód: { vehicle }</p>
        <p>Kierowca: { driver }</p>
        <p>Priorytet: { priority }</p>
      </div> }
    </TransportDetailsSytle>
  );
};

export default TransportDetails;
