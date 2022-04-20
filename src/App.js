import Companys from './Companys/Companys'
import { Container } from '@mui/material'
import React from 'react'

const container = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}

function App() {
    return (
        <Container maxWidth={false} sx={container}>
            <Companys />
        </Container>
    )
}

export default App
