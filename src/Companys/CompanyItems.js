import React from 'react'
import Company from './Company';
import { Box } from '@mui/material';

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

  return (
    <Box sx={container}>

    {companys.map((company)=>{
      return (
        <Company company={company}></Company>
        )
      }  
    )}

    </Box>
    
  )
}

export default CompanyItems