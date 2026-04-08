import { API_Base_URL } from "@/config/constant";
import { Roboto } from "next/font/google"
const roboto =Roboto({
  weight:'100',
  subsets:['latin'],
  display:'swap'
});
export default function Home() {
 // console.log("ENV CHECK:", process.env.SERVER_PASSWORD);
//   console.log("ALL ENV:", Object.keys(process.env))
  console.log(process.env.DB_PASSWORD);

  return(
    <div>
      {/* {process.env.NODE_ENV === "development" ? (
        <h1>You are on Development Mode</h1>
      ) : (
        <h1>You are on Production Mode</h1>
      )} */}

      {
        API_Base_URL
      }
      <h1>Image optimazation</h1>
      {/* <h1 style={{fontFamily:'Roboto', fontWeight: 100}}>Image optimazation</h1> */}
     <h1 className={roboto.className}>font with next js font feture</h1>
     <img src="/dummyimg.jfif"/>
    </div>
  )
}

// import Image from "next/image";
// import Profile from "../public/next.svg"
// export default function Home() {
//   console.log(Profile);
//   return(
//     <div>
//       <h1>Image optimazation</h1>
//       <Image src={Profile}
//       alt="next Logo"
//       width={200} 
//       height={500}/>

//       <Image src="https://getwallpapers.com/wallpaper/full/5/e/3/738772-nice-picture-for-desktop-background-1920x1200-laptop.jpg"
//        alt="next Logo"
//       width={200}
//       height={300}
//       />
//     </div>
//   )
// }


// "use client";
// // interface abcc{
// //   name: string;
// // }
// import custom from "./custom.module.css";
// import other1 from "./other.module.css";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import outside from "./style/outside.module.css";
// import style from "./style.module.css";
// import { useState } from "react";

// export default function Home() {
//   const router = useRouter();
//   const navigate = (name) => {
//     router.push(name);
//   };
//   const [color, setcolor] = useState("red");

//   const {red}=style; 
//   return (
//     <div>
//       <h1>This is home page</h1>
//       <Link href="/login">Go to login page</Link>
//       <Link href="/about">Go to about page</Link>
//       <br />
//       <button onClick={() => navigate("/login")} className="bg-blue-500">
//         go to login page
//       </button>
//       <br />
//       <button onClick={() => navigate("/about")} className="bg-green-500">
//         go to about page
//       </button>
//       <br />
//       <Link
//         className="bg-pink-500 rounded border p-0.5 hover:bg-rose-500 "
//         href="/productlist"
//       >
//         Go to Client Product Page
//       </Link>
//       <Link
//         className="bg-pink-500 rounded border p-0.5 hover:bg-rose-500 "
//         href="/productserverlist"
//       >
//         Go to Server Product Page
//       </Link>
//       {/* <button onClick={()=>router.push("/logon")} className="bg-blue-500">go to login page</button><br/>
//      <button onClick={()=>router.push("/about")} className="bg-green-500">go to about page</button> */}
//       <br />
//       <br />
//       <hr />
//       <br />
//       <hr />

//       <h1 className="main">stype and css with next</h1>
//       <h2 className="main">heading 2</h2>
//       <p className={custom.main}>this is paragraph</p>
//       <p className={other1.main}>this is paragraph</p>
//       <p className={outside.main}>outside folder</p>
//       <div>
//         <h1 className={color == "red" ? style.red : style.green}>
//           condetion with css
//         </h1>
//         <button onClick={() => setcolor("green")}>
//           update green color button
//         </button>

//         <h2 style={{ backgroundColor: color == "red" ? "red" : "green" }}>
//           heading 2
//         </h2>

//         <h3 id={style.orange}>heading 3</h3>

// {/* const {red}=style;    write this before return start */}
//         <h4 className={red}>dummy text</h4>
//         <h4 className={red}>dummy text</h4>
//         <h4 className={red}>dummy text</h4>
//         <h4 className={red}>dummy text</h4>


//       </div>
//     </div>
//   );
// }
