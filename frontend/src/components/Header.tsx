import {Navbar,Nav,Container, NavDropdown} from 'react-bootstrap'
import {FaSignInAlt, FaSignOutAlt} from 'react-icons/fa'
import { LinkContainer } from 'react-router-bootstrap'
import { useSelector,useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { RootState } from '../store'
import { useLogoutMutation } from '../slices/usersApiSlice'
import { logout } from '../slices/authSlice'

const Header = () => {

  const {userInfo} = useSelector((state: RootState) => state.auth)
  const [logoutApiCall] = useLogoutMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandle = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate('/');
    } catch (error) {
      console.log(error);
      
    }
  }
  return (
    <header>
    <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
    <Container>
      <LinkContainer to='/'>
      <Navbar.Brand >Mern App</Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-aria-controls='basic-navbar-nav'/>
      <Navbar.Collapse>
        <Nav className='ms-auto'>
          {
            userInfo ? <>
            <NavDropdown title={userInfo?.name} id='username'>
              <LinkContainer to='/profile'>
                <NavDropdown.Item>Profile</NavDropdown.Item>
              </LinkContainer>
              <NavDropdown.Item onClick={logoutHandle}>Logout</NavDropdown.Item>
            </NavDropdown>
             </>
            : 
            <>
        <LinkContainer to='/login'>
        <Nav.Link ><FaSignInAlt/>Sign In</Nav.Link>
      </LinkContainer>
      <LinkContainer to='/register'>
        <Nav.Link><FaSignOutAlt/>Sign Up</Nav.Link>
      </LinkContainer>
            </>
          }
        </Nav>
      </Navbar.Collapse>
    </Container>
    </Navbar>
  </header>
  )
}

export default Header