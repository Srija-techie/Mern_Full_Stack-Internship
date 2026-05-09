import ProductCard from "./ProductCard";

const Products=()=>{
    let products=[
        {
            Name:"Mobile",
            Price:50000,
            Description:"Good Condition",
            Ratings:"⭐⭐⭐",
            imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGWrC3xP8qbkm65zS4ktw67C_wlpKu3NP_vg&s"
        },
        {
            Name:"Laptop",
            Price:75000,
            Description:"Good Condition",
            Ratings:"⭐⭐⭐⭐⭐",
            imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi8R6gtPpXb9i_6LYOX1K0ynOOrVOJzrl-Mw&s"
        },
        {
            Name:"Clothes",
            Price:5000,
            Description:"Comfortable",
            Ratings:"⭐⭐⭐⭐",
            imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ7nrpFVpXp-6Rx9U4GfZT9u7GXY1du09vEw&s"
        }
    ]
    return(
        <>
        <Nav/>
        <div id="main-container">
            {products.map((product)=>(
                <div>
                    <ProductCard details={product}/>
                </div>
            ))}
        </div>
        </>
    )}
    export default Products;