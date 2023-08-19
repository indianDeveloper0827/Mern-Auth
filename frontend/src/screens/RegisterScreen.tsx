import { Button, Col, Form, Row } from "react-bootstrap"
import FormContainer from "../components/FormContainer"
import { useState,useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useRegisterMutation } from "../slices/usersApiSlice";
import { useDispatch,useSelector } from "react-redux";
import { setCredentials } from "../slices/authSlice";
import {toast} from 'react-toastify'
import { RootState } from "../store";
import Loader from "../components/Loader";

const RegisterScreen = () => {
    const [name,setName] = useState('')
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [confirmPassword,setConfirmPassword] = useState('')

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [register, {isLoading}] = useRegisterMutation();

    const {userInfo} = useSelector((state: RootState) => state.auth)

    useEffect(() => {
        if(userInfo){
            navigate('/')
        }
    },[register,navigate])




    const submitHandler = async (e: { preventDefault: () => void }) => {
      e.preventDefault();

      try {
        if(password !== confirmPassword){
            toast.error('Password must be same')
        }else{

            const res = await register({name,email,password}).unwrap();
            dispatch(setCredentials({ ...res }));
            navigate('/')
        }
      } catch (err) {
        toast.error(err?.data?.message || err.error);     
      }
    }
  return (
    <FormContainer>
        <h1>Sign Up</h1>

        <Form onSubmit={ submitHandler }>
        <Form.Group className="my-2" controlId="name">
                    <Form.Label>Enter name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    >

                    </Form.Control>
            </Form.Group>
            <Form.Group className="my-2" controlId="email">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    >

                    </Form.Control>
            </Form.Group>
            <Form.Group className="my-2" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Enter Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    >

                    </Form.Control>
            </Form.Group>
            <Form.Group className="my-2" controlId="confirmPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    >

                    </Form.Control>
            </Form.Group>

            {isLoading && <Loader/>}
            <Button type="submit" variant="primary" className="mt-3">
                Sign In
            </Button>
            <Row className="py-3">
                <Col>
                Alreadt have an account? <Link to='/login'>Login</Link>
                </Col>
            </Row>
        </Form>
    </FormContainer>
  )
}

export default RegisterScreen