'use client'
import Link from "next/link";
import { useRouter } from "next/navigation";

const Login =()=>{
  const navigate=(name)=>{
router.push("/login/"+name)}
  
const router =useRouter();
  return(
    <div>
        <h1>login page</h1>
        <Link href="/">go to home page</Link><br/>
        <button className="bg-green-400" onClick={()=>navigate("loginStudent")}>Go to Student Login Pge</button><br/>
         <button className="bg-pink-500" onClick={()=>navigate("loginTeacher")}>Go to Teacher Login Pge</button>
    </div>
  )  
}
export default Login;