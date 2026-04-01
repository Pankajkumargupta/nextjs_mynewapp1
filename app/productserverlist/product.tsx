"use client"
interface ProductProps {
  myprice: number; // This tells TS that 'myprice' is allowed!
}
export default function Product({myprice}:ProductProps){
    return(
        <div>
            <button className="bg-amber-600 rounded p-1 m-1 hover:bg-amber-800" onClick={()=>alert(myprice)}>Check price</button>
        </div>
    )

}