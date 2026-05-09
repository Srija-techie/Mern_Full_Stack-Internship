import {Component} from "react";
class RegisterForm extends Component{
    render(){
        return(
            
            <form action="">
                <fieldset>
            <label htmlfor="name">Username:</label>
            <input type="text" id ="name" required placeholder="Enter your username"/>
            <br></br>
            <label htmlfor="pwd">Password:</label>
            <input type="password" id ="pwd" required placeholder="Enter your password"/>
            <br></br>
            <label htmlfor="email">Email:</label>
            <input type="email" id ="email" required placeholder="Enter your Email:"/>
           <br></br>
            <label htmlfor="phone">Phone Number:</label>
            <input type="tel" pattern ="[6-9]{1}[0-9]{9}" required placeholder="+91"/>
            <br></br>
            <button type="submit">Register</button>
           
               </fieldset>
            </form>
        )
    }
}
export default RegisterForm;