import "./Product.css";
import Price from "./price";
function Product({title,idx}) {


    let oldPrices = ["12,495","11,900","1,599","599"]
    let newPrices = ["9595","8900","899","299"]
    let Description = [["8000 DPI","8000 DPI"],["intuitive surface","intuitive surface"],["designed for ipad pro","intuitive surface"],["wireless","intuitive surface"]]
    return (
    <div className="Product">
      <h4>{title}</h4>
      <p>{Description[idx][0]}</p>
      
      <p>{Description[idx][1]}</p>
      <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]}/>
    </div>
  );
}

export default Product;
