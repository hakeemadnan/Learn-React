import "./Product.css"
function Product({title,price,features,features2}){
    let isDiscount = price>30000;
    let bgstyles = {backgroundColor : isDiscount ? "lightgreen" : ""};
    return(
        <div className="Product" style={bgstyles}>
            <h3> {title}</h3>
            <h5>Price : {price}</h5>
            {/* <ul>{features.map((feature) => <li>{feature}</li>)}</ul> */}
            {isDiscount && <p>discount of 5%</p>}
        </div>
    )
}

export default Product;