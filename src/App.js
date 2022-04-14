import Companys from './Companys/Companys';
import { Container } from '@mui/material';

const container = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

function App() {
  return (
    <Container sx={container}>
      <Companys></Companys>
    </Container>
  );
}

export default App;
