
'use client'

import { useState } from "react";

export default function Home() {
  const [name , setName] = useState("pankaj");
   const apple=()=>{
     setName("gupta")
    }
    const InnerComp =()=>{
    return(
      <h1>this is inner component1</h1>
    )}
  return (
  
    <div>
      <h1 className="bg-green-400 flex-grid">hello {name} </h1>
     <button onClick={()=>apple()}>Click me</button>
      {/* <InnerComp/> */} 
      {InnerComp()} 
      {/* HOW TO USE COMPONENT AS A FUNCTION */}
    </div>
  );
}