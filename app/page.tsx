
'use client'

import { useState } from "react";

export default function Home() {
  const [name , setName] = useState("pankaj");
   const apple=()=>{
     setName("gupta")
    }
  return (
  
    <div>
      <h1 className="bg-green-400 flex-grid">hello {name} </h1>
     <button onClick={()=>apple()}>Click me</button>
      
    </div>
  );
}