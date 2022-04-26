import Companys from './Companys/Companys'
import { Container, styled } from '@mui/material'
import React from 'react'

const CompanysContainer = styled(Container)({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
})

function App() {
    return (
        <CompanysContainer maxWidth={false}>
            <Companys />
        </CompanysContainer>
    )
}

export default App
