import React from 'react';
import Company from './Company';
import { Box } from '@mui/material';
import { useState } from 'react';

const container = {
  gap: '2rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const appointmentStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  background: '#bac8ff',
  boxShadow: '0px 0px 5px 2px rgba(0, 0, 0, .2);',
};

const CompanyItems = (props) => {
  const { companys } = props;
  const [reservations, setReservations] = useState({});

  const onReserve = (val, comp) => {
    setReservations({ ...reservations, [comp]: val });
  };

  return (
    <Box sx={container}>
      <Box sx={appointmentStyle}>
        {companys.map((company) => {
          return (
            <Company
              key={company.name}
              company={company}
              onReservation={onReserve}
              reservations={reservations}
            ></Company>
          );
        })}
      </Box>
    </Box>
  );
};

export default CompanyItems;
