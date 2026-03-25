import Link from "next/link";

export default function StudentList() {
  return (
    <div>
      <h1>Student List</h1>
      <ul>
        <li>
          <Link href="/studentList/1">Anil</Link>
        </li>
        <li>
          <Link href="/studentList/2">Sam</Link>
        </li>
        <li>
          <Link href="/studentList/3">Peter</Link>
        </li>
        <li>
          <Link href="/studentList/4">Buruce</Link>
        </li>
      </ul>
    </div>
  );
}