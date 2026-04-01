
interface Product {
  id: number;
  title: string;
  price: number;
}
async function productList(): Promise<Product[]> {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json() ; 
    return data.products;
}

export default async function Page() {
    const products =await productList();
    //console.log(products);
  return (
    <div>
      <h1>Suerver Product List</h1>{
        products.map((item)=>(
           <div key={item.id}>
            <h3 > Name: {item.title}</h3>
            <h3 > price: {item.price}</h3>
           </div>
        ))
      }
    </div>
  );
}