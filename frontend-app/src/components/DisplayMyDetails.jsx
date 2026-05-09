import { useState } from "react";
const DisplayMyDetails=(props)=>{
    console.log(props);
    
    return(
        
        <h4>props Data:<br></br>Name:{props.Name}<br></br>Role:{props.Role}<br></br>RollNo:{props.RollNo}<br></br>Course:{props.Course}<br></br>CollegeName:{props.CollegeName}</h4>
    )
}
export default DisplayMyDetails