import {Navbar,Nav,Container} from 'react-bootstrap'
import {FaSignInAlt} from 'react-icons/fa'

const Header = () => {
  return (
    <header>
    <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
    <Container>
      <Navbar.Brand href='/'>Mern App</Navbar.Brand>
      <Navbar.Toggle aria-aria-controls='basic-navbar-nav'/>
      <Navbar.Collapse>
        <Nav className='ms-auto'>
        <Nav.Link><FaSignInAlt/>Sign In</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
    </Navbar>
  </header>
  )
}

export default Header