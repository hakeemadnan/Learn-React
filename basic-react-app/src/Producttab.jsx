import Product from "./Product";
function Producttab() {
  let options = ["hi-tech","durable","fast"]
  // let options2 = {a:"hitech",b:"durable",c:"fast"}
  return (
    <>
      <Product title ="Phone" price={40000} features={options}/>
      <Product title="Laptop" price={56000}/>
      <Product title="Pen" price={1}/>
    </>
  );
}

export default Producttab;