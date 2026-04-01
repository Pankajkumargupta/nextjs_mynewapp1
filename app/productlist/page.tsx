"use client"
import { useEffect, useState } from "react";
interface Todo {
  id: number;
  title: string;
}
export default function Page() {
  //useEfect is a reat hook it takes callback function
  const [product, setProduct] = useState<Todo[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      let data = await fetch("https://dummyjson.com/products");
      data = await data.json();
    //   console.log(data);
      setProduct(data.products);
    //   console.log(product);
    };
    fetchData();
  }, []);
  return (
    <div>
      <h1>product</h1>
      {product.map((item) => (
        <h2 key={item.id}>{item.title}</h2>
      ))}
    </div>
  );
}
