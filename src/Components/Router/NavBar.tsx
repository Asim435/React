import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <div>
            <h1> Hello </h1>
            {/* bootstrap 
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Nav className="me-auto">
                        {/* <Link to="/Controlled" >
                            <Nav.Link href="<Controlled/>">Home</Nav.Link>
                        </Link>
                        <Link to="/">
                            <Nav.Link href="<Hooks/>">Hook</Nav.Link>
                        </Link>
                        <Link to="/Example">
                            <Nav.Link href='<Example/>' >Link</Nav.Link>
                        </Link> */}
            {/* </Nav>
                </Container>
            </Navbar> */}
            <nav>
                <ul>

                    <li>           <Link to="/Controlled">Home</Link> </li>
                    <li>                  <Link to="/">Hooks</Link>
                    </li>
                    <li>                <Link to="/calclator">calclator</Link>
                    </li>
                    <li><Link to="/Task">Task</Link></li>

                </ul>


            </nav>


        </div>
    );
}

export default NavBar;