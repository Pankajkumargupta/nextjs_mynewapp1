// "use client"
// export default function Lecture({params}){
//     console.log(params)
//     return(
//         <div><h1>Lecture 1</h1></div>
//     )
// }
"use client"
import { useParams } from 'next/navigation';

export default function MultiRoute() {
    // slug will be an array: ["2024", "biology", "john"]
    const { slug } = useParams<{ slug: string[] }>();

    return (
        <div>
           <div><h1>Lecture 1</h1></div>
        </div>
    );
}