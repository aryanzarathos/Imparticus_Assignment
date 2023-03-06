// import logo from './logo.svg';
// import './App.css';
import Breadcrumbs from './BreadCrumbs';
import Layout from './Layout';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Container>
      <Row>
      <Layout />
      <Breadcrumbs />
      </Row>
    </Container>
  );
}

export default App;
