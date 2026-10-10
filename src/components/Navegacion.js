import {Navbar, Nav, Container, NavbarToggle } from 'react-bootstrap'

function Navegacion() {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
            <Container>
                <Navbar.Brand href="#introduccion">Mi portafolio</Navbar.Brand>
                <Navbar.Toggle aria-controls="menu-principal"></Navbar.Toggle>
                <Navbar.Collapse id="menu-principal">
                    <Nav className='ms-auto'>
                        <Nav.Link href="#introduccion">Introducción</Nav.Link>
                        <Nav.Link href="#proyectos">Proyectos</Nav.Link>
                        <Nav.Link href="#noticias">Noticias</Nav.Link>
                        <Nav.Link href="#contacto">Contacto</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navegacion;