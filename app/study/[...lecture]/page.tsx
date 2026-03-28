// "use client"
// export default function Lecture({params}){
//     console.log(params)
//     return(
//         <div><h1>Lecture 1</h1></div>
//     )
// }


// const Lecture = async ( { params }:{ parama : Promise<{study: string }>} ) => {
//     const {study}= await params;


    const Lecture1 = async ({ params }: { params: Promise<{ lecture: string[] }> }) => {
 
  const { lecture } = await params;
  console.log({ lecture })
  return (<div>
    <div>Lecture : {lecture.join("/")}</div><br/>
    Current Topic: <strong>{lecture[lecture.length - 1]}</strong>
    <div>Lecture : {lecture}</div><br/>
  </div>
    

  )
}

export default Lecture1;