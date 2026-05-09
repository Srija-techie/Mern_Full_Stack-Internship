import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

function Register() {
    const [details,setDetails] = useState({
        name:"",
        email:"",
        phone:"",
        password:"",
        address:"",
        city:"",
        userType:"user",
        state:"",
        zipCode:""
    })
    const handleChange=(e)=>{
        setDetails({...details,[e.target.name]:e.target.value})

    };
    const handleSubmit=(e)=>{
        e.preventDefault()
    }
  return (
    <div id="form-container">
      <Form>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" required placeholder="Enter Full Name" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPhone">
            <Form.Label>Phone</Form.Label>
            <Form.Control type="tel" pattern="[6-9]{1}[0-9]{9}" required  placeholder="+91" />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>UserType</Form.Label>
            <Form.Select name="userType" onChange={handleChange}>
              <option>Choose UserType</option>
              <option>User</option>
              <option>Admin</option>
            </Form.Select>
          </Form.Group>

           <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" required placeholder="Enter email" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" required placeholder="Password" />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Address</Form.Label>
          <Form.Control required placeholder="1234 Main St" />
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>City</Form.Label>
            <Form.Control />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>State</Form.Label>
            <Form.Select defaultValue="Choose...">
              <option>Choose State</option>
              <option>Andhra Pradesh</option>
              <option>Karnataka</option>
              <option>Telangana</option>
              <option>TamilNadu</option>
              <option>MadhyaPradesh</option>
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Zip</Form.Label>
            <Form.Control />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" id="formGridCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>

        <Form.Group className="mb-3">
            <span>If you already Registered , Click here to <a href="/login">Login</a></span>        
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Register;
