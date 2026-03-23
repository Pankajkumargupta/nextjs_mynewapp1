import Link from "next/link";

const About =()=>{
  return(
    <div>
        <h1>About page</h1>
<br/>
        <Link className="bg-amber-500" href="/about/aboutCollege">go to about College</Link>
        <br/>
         <Link className="bg-rose-600" href="/about/aboutClass">go to about Class</Link>
    </div>
  )  
}
export default About;