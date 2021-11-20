import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Nav, Container } from 'react-bootstrap'

const Header = () => {
    return (
        <header>

            <Navbar bg="dark" variant="dark"  expand="lg" collapseOnSelect>
                <Container>
                    <Navbar.Brand as={Link} to="/">ProShop</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link as={Link} to="/cart"><i class="fas fa-shopping-cart px-2"></i>Cart </Nav.Link>
                            <Nav.Link as={Link} to="/login"><i class="fas fa-user px-2"></i>Sign in</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </header>
    )
}

export default Header
