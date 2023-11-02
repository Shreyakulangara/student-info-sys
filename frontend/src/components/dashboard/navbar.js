    import Container from 'react-bootstrap/Container';
    import Nav from 'react-bootstrap/Nav';
    import Navbar from 'react-bootstrap/Navbar';
    import NavDropdown from 'react-bootstrap/NavDropdown';

    function DashboardNavbar() {
        const cardStyle = {
            backgroundColor: '#d8c8b8',
            position: 'fixed',
            left: 0, 
            top: 0, 
            height: '100%',
            color:'white'
          };
        return(
        <Navbar 
        expand="lg" 
        style={cardStyle}
        >
            <Container className = "flex-column">
            <Navbar.Brand href="#home">Dashboard</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto flex-column">
                <Nav.Link href="#home">Courses</Nav.Link>
                <Nav.Link href="#link">Insights</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                    Another action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                    Separated link
                    </NavDropdown.Item>
                </NavDropdown>
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
        );
    }

    export default DashboardNavbar;
