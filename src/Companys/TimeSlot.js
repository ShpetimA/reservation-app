import React from 'react'
import { Box,Button } from '@mui/material';
import { styled } from '@mui/material';


const BootstrapButton = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  width: '10rem',
  fontSize: 16,
  padding: '6px 12px',
  border: '1px solid',
  lineHeight: 1.5,
  backgroundColor: '#ffff',
  borderColor: '#0063cc',
  fontFamily: [
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(','),
  '&:hover': {
    backgroundColor: '#0069d9',
    color: '#fff',
    borderColor: '#0062cc',
    boxShadow: 'none',
  },
  '&:active': {
    boxShadow: 'none',
    color: '#fff',
    backgroundColor: '#0062cc',
    borderColor: '#005cbf',
  },
  '&:focus': {
    boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
  },
});

const selectedStyle ={
  boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
}

const TimeSlot = () => {
  return (
    <BootstrapButton onClick={handleClick(time_slot,index)} >{formatTime(time_slot.start_time)} - {formatTime(time_slot.end_time)}</BootstrapButton>
  )
}

export default TimeSlot