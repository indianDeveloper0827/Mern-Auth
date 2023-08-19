import { Col, Container, Row } from "react-bootstrap"

interface Prop {
  children: React.ReactNode
}

const FormContainer = ({children}:Prop) => {
  return (
    <Container>
       <Row>
        <Col xs={12} md={6} className="card p-5">
          { children }
        </Col>
        </Row> 
    </Container>
  )
}

export default FormContainer