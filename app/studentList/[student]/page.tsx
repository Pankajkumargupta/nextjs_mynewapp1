// "use client"
// interface PageProps {
//   params: Promise<{ student: string }>;
// }

// export default async function BlogPost({ params }: PageProps) {
//   // In Next.js 15+, params is a Promise that must be awaited
//   const { student } = await params;

  // In a real app, you would fetch data from a database or API here
  // const post = await getPost(student);


// console.log({student});
//   return (
//     <div>
//       <h1>Post student: {student}</h1>
//       <p>This page was generated dynamically based on the URL.</p>      
//     </div>
//   );



const TeamMember = async ({ params }: { params: Promise<{ student: string }> }) => {
  // Awaiting the promise is the correct way to handle Next.js 15+ params
  const { student } = await params;

  console.log("Rendering student ID:", student);

  return (

    <div >
      <h1 >Team Member Profile</h1>
      <p>Student ID is: <span className="font-mono">{student}</span></p>
    </div>
   
  );
};

export default TeamMember;


