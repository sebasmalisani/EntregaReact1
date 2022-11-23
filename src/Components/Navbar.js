
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from "./CartWidget"


function BasicExample() {
    return (
        <Navbar bg="primary" expand="lg" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Almacen de Sebas</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Categoria 1</Nav.Link>
                        <Nav.Link href="#link">Categoria 2</Nav.Link>
                        <NavDropdown title="Categoria 3" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Cat 4</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Cat 5
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Cat 6</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <CartWidget/>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
}

export default BasicExample;