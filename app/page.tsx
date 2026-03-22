
'use client'
export default function Home() {
   const apple=(item)=>{
      alert(item);
    }
  return (
  
    <div>
      <h1 className="bg-green-400 flex-grid">home page</h1>
     <button onClick={()=>apple("green")}>Click me</button>
      
    </div>
  );
}