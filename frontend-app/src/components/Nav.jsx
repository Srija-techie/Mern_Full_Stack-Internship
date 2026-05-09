

function Nav(){
    return(
        <nav style={{backgroundColor:"violet",height:"90px",margin:"30px",borderRadius:"20px"}}>
            <ol style={ListStylings.orderList}>  
            <li style={ListStylings.list}>Home</li>
            <li style={ListStylings.list}>Login</li>
            <li style={ListStylings.list}>Register</li>
            <li style={ListStylings.list}>About</li>
            </ol>
        </nav>
    );
};

// declaring stylings
const ListStylings={
    list:{
        backgroundColor:"purple",
        padding:"10px 20px",
        fontSize:"22px",
        fontStyle:"italic",
        fontWeight:"bold",
        borderRadius:"20px",
    },
    orderList:{
        display:"flex",
        justifyContent:"space-evenly",
        alignItems:"center",
        height:"80px",
        listStyle:"none",
    }
}

export default Nav;