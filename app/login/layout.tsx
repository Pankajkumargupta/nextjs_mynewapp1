import Link from "next/link";
import "./login.css";
export default function Layout({ children }) {
  return (
    <div>
      <ul className="flex gap-4 bg-blue-600 pl-5 text-white m-0 ">
        <li><h1 className=" p-2 text-2xl text-gray-900">Login Navbar</h1></li>
        <li className="hover:bg-blue-800 rounded p-2"><Link className="" href="/login">Login Main</Link> </li>
        <li className="hover:bg-blue-800 rounded p-2"><Link href="/login/loginStudent">Student Login</Link> </li>
        <li className="hover:bg-blue-800 rounded p-2 transition-colors"><Link href="/login/loginTeacher">Teacher Login</Link> </li>
      </ul>
      {children}
    </div>
  );
}
