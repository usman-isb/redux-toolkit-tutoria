import { FunctionComponent } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

interface NavBarProps {

}

const NavBarProps: FunctionComponent<NavBarProps> = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand href="#">Redux Toolkit</Navbar.Brand>
                <Nav>

                    <Nav.Link to="/" as={Link}>Products</Nav.Link>
                </Nav>
                <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                    <Nav.Link to="/cart" as={Link}>May Bag 0</Nav.Link>
                    </Navbar.Text> 
            </Navbar.Collapse>
        </Container>
        </Navbar >
    );
}

export default NavBarProps;