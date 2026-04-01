
'use client'

import Link from "next/link";
import { useRouter } from "next/navigation";
// import {} from
export default function Home() {

    const router =useRouter();
    const navigate=(name)=>{
      router.push(name)
    }
  return (
     <div>
      <h1>This is home page</h1>
     <Link href="/login">Go to login page</Link>
     <Link href="/about">Go to about page</Link>
     <br/>
     <button onClick={()=>navigate("/login")} className="bg-blue-500">go to login page</button><br/>
     <button onClick={()=>navigate("/about")} className="bg-green-500">go to about page</button><br/>
      <Link className="bg-pink-500 rounded border p-0.5 hover:bg-rose-500 " href="/productlist">Go to Client Product Page</Link>
<Link className="bg-pink-500 rounded border p-0.5 hover:bg-rose-500 " href="/productserverlist">Go to Server Product Page</Link>
     {/* <button onClick={()=>router.push("/logon")} className="bg-blue-500">go to login page</button><br/>
     <button onClick={()=>router.push("/about")} className="bg-green-500">go to about page</button> */}
     </div>
  );
}