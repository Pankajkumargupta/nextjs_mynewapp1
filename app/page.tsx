"use client";
// interface abcc{
//   name: string;
// }
import custom from "./custom.module.css";
import other1 from "./other.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
import outside from "./style/outside.module.css";
import style from "./style.module.css";
import { useState } from "react";

export default function Home() {
  const router = useRouter();
  const navigate = (name) => {
    router.push(name);
  };
  const [color, setcolor] = useState("red");

  const {red}=style; 
  return (
    <div>
      <h1>This is home page</h1>
      <Link href="/login">Go to login page</Link>
      <Link href="/about">Go to about page</Link>
      <br />
      <button onClick={() => navigate("/login")} className="bg-blue-500">
        go to login page
      </button>
      <br />
      <button onClick={() => navigate("/about")} className="bg-green-500">
        go to about page
      </button>
      <br />
      <Link
        className="bg-pink-500 rounded border p-0.5 hover:bg-rose-500 "
        href="/productlist"
      >
        Go to Client Product Page
      </Link>
      <Link
        className="bg-pink-500 rounded border p-0.5 hover:bg-rose-500 "
        href="/productserverlist"
      >
        Go to Server Product Page
      </Link>
      {/* <button onClick={()=>router.push("/logon")} className="bg-blue-500">go to login page</button><br/>
     <button onClick={()=>router.push("/about")} className="bg-green-500">go to about page</button> */}
      <br />
      <br />
      <hr />
      <br />
      <hr />

      <h1 className="main">stype and css with next</h1>
      <h2 className="main">heading 2</h2>
      <p className={custom.main}>this is paragraph</p>
      <p className={other1.main}>this is paragraph</p>
      <p className={outside.main}>outside folder</p>
      <div>
        <h1 className={color == "red" ? style.red : style.green}>
          condetion with css
        </h1>
        <button onClick={() => setcolor("green")}>
          update green color button
        </button>

        <h2 style={{ backgroundColor: color == "red" ? "red" : "green" }}>
          heading 2
        </h2>

        <h3 id={style.orange}>heading 3</h3>

{/* const {red}=style;    write this before return start */}
        <h4 className={red}>dummy text</h4>
        <h4 className={red}>dummy text</h4>
        <h4 className={red}>dummy text</h4>
        <h4 className={red}>dummy text</h4>


      </div>
    </div>
  );
}
