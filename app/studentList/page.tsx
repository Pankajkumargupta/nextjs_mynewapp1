import Link from "next/link";

export default function StudentList() {
  return (
    <div>
      <Link href="/studentList/Read10">
  Read 
</Link>
      <h1>Student List</h1>
      <ul>
        <li>
          <Link href="/studentList/Anil11">Anil</Link>
        </li>
        <li>
          <Link href="/studentList/12">Sam</Link>
        </li>
        <li>
          <Link href="/studentList/13">Peter</Link>
        </li>
        <li>
          <Link href="/studentList/14">Buruce</Link>
        </li>
      </ul>
    </div>
  );
}