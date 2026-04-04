import Product from "../productserverlist/product";

interface Product {
  id: number;
  title: string;
 price: number;
}
async function usertList(): Promise<Product[]> {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json() ; 
    return data.products;
}
    

export default async function Page(){
    const users = await usertList();
    console.log(users);
    return(
        <div>
            <h1>
                page loader
            </h1>{
               users.map((item) => (
          <div key={item.id}>        {/* Added a 'key' prop to fix the React warning */}
            <h1>{item.title}</h1>        {/* Replaced static text with actual data */}
            <p>Price: ${item.price}</p>
          </div>
        ))
            }
        </div>
    )
}