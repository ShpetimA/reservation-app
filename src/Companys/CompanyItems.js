import React from 'react'
import Company from './Company';
import { Box } from '@mui/material';
import { useState } from 'react';

const container = {
  display: 'flex',
  justifyContent: 'center',
  alignItems:'center',
  width: '120rem',
  height: '80vh',
  gap: '2rem'
}


const CompanyItems = (props) => {
  const {companys} = props;
  const [reservations,setReservations] = useState({});

  const onReserve = (val,comp) => {
    setReservations({...reservations,[comp] : val});
  }

  return (
    <Box sx={container}>

    {companys.map((company)=>{
      return (
        <Company key={company.name} company={company} onReservation={onReserve} reservations={reservations} ></Company>
        )
      }  
    )}

    </Box>
    
  )
}

export default CompanyItems