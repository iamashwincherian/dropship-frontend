import {Navbar, Container, Nav} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'

const TopNavBar = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">DropShip</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <LinkContainer to="/"><Nav.Link>Home</Nav.Link></LinkContainer>
                        <LinkContainer to="/cart"><Nav.Link>Cart</Nav.Link></LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default TopNavBar