"use client"

import { useState } from "react"

export default function Page(){
    const[h3Style , setH3Style]=useState({backgroundColor:'green'});
    return(
        <div>
            <h1>this is css</h1>
            <h3 style={h3Style}>heading 3 for user</h3>
            <button onClick={()=>setH3Style({backgroundColor:'pink'})}>update style</button>
        </div>
    )
}