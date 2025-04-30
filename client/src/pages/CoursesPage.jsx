// // import Header from "@/components/ui/common/header";
// // import React, { useEffect, useState } from "react";

// // export default function CoursesPage() {
// //   const [personData, setPersonData] = useState(
// //     JSON.parse(localStorage.getItem("profileId"))
// //   );

// //   const [searchResults, setSearchResults] = useState([]);

// //   useEffect(() => {
// //     if (personData) {
// //       const sendPersonData = async () => {
// //         const queryParam = encodeURIComponent(JSON.stringify(personData));
// //         try {
// //           const response = await fetch(
// //             `http://localhost:5001/api/serper/search?q=${queryParam}`
// //           );
// //           const result = await response.json();
// //           let a = result.person
// //           console.log("Initial fetch result:", a.image);
// //           setSearchResults(result.person || []); // Assuming the courses are in result.courses
// //         } catch (error) {
// //           console.error("Failed to fetch data from backend:", error);
// //         }
// //       };

// //       sendPersonData();
// //     }
// //   }, [personData]);

// //   return (
// //     <div className="min-h-screen bg-gray-900 text-white p-6">
// //       <Header />
// //       <h1 className="text-4xl font-bold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-500 my-15">
// //         Top Java Courses for 2025 {personData?.classGrade}{" "}
// //         {personData?.learningPace} {personData?.learningStyle}
// //       </h1>

// //       <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
// //         {searchResults.map((course, index) => (
// //           <a
// //             key={index}
// //             href={course.link}
// //             target="_blank"
// //             rel="noopener noreferrer"
// //             className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 group"
// //           >
// //             <img
// //               src={course.imageUrl}
// //               alt={course.title}
// //               className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
// //             />
// //             <div className="p-4">
// //               <h2 className="text-lg font-semibold mb-2 group-hover:text-yellow-400">
// //                 {course.title}
// //               </h2>
// //               <p className="text-sm text-gray-400">{course.source}</p>
// //             </div>
// //           </a>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }

// import Header from "@/components/ui/common/header";
// import React, { useEffect, useState } from "react";

// export default function CoursesPage() {
//   const [personData, setPersonData] = useState(
//     JSON.parse(localStorage.getItem("profileId"))
//   );

//   const [searchResults, setSearchResults] = useState([]);
//   const [topicInput, setTopicInput] = useState("");
//   function handleTopicSubmit() {
//     console.log(topicInput);
//     sendPersonData()
//   }
//   useEffect(() => {
//     if (personData) {
//       const sendPersonData = async () => {
//         const queryParam = encodeURIComponent(JSON.stringify(personData));
//         try {
//           // const response = await fetch(
//           //   `http://localhost:5001/api/serper/search?q=${queryParam}`
//           // );
//           const response = await fetch(
//             `http://localhost:5001/api/serper/search?q=${queryParam}&newParam=${topicInput}`
//           );
          
//           const result = await response.json();
//           console.log("Fetched result:", result.images);
//           setSearchResults(result.images);
//           // Parse the person data if it's a string
//           // const person = JSON.parse(result.person);

//           // Check if courses exist and are in an array
//           if (person.courses && Array.isArray(person.courses)) {
//             setSearchResults(person.courses); // Set the courses to state
//           } else {
//             console.error(
//               "Courses data is not available or incorrectly structured"
//             );
//           }
//         } catch (error) {
//           console.error("Failed to fetch data from backend:", error);
//         }
//       };

//       sendPersonData();
//     }
//   }, [personData]);

//   return (
//     <div className="min-h-screen bg-gray-900 text-white p-6">
//       <Header />
//       <h1 className="text-4xl font-bold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-500 my-15">
//         Top Java Courses for 2025 {personData?.classGrade}{" "}
//         {personData?.learningPace} {personData?.learningStyle}
//       </h1>
//       {/* Input topic section */}
//       <div className="w-full max-w-xl mx-auto mb-8 flex items-center gap-4">
//         <input
//           type="text"
//           placeholder="Enter a topic (e.g., Physics, History)"
//           className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
//           value={topicInput}
//           onChange={(e) => setTopicInput(e.target.value)}
//         />
//         <button
//           onClick={handleTopicSubmit}
//           className="px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-blue-300 hover:from-blue-400 hover:to-blue-200 text-white font-semibold"
//         >
//           Generate
//         </button>
//       </div>
//       <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
//         {searchResults.length > 0 ? (
//           searchResults.map((course, index) => (
//             <a
//               key={index}
//               href={course.link}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 group"
//             >
//               <img
//                 src={course.imageUrl}
//                 alt={course.title}
//                 className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
//               />
//               <div className="p-4">
//                 <h2 className="text-lg font-semibold mb-2 group-hover:text-yellow-400">
//                   {course.title}
//                 </h2>
//                 <p className="text-sm text-gray-400">{course.source}</p>
//               </div>
//             </a>
//           ))
//         ) : (
//           <p className="text-center text-gray-400">No courses available.</p>
//         )}
//       </div>
//     </div>
//   );
// }


import Header from "@/components/ui/common/header";
import React, { useEffect, useState } from "react";

export default function CoursesPage() {
  const [personData, setPersonData] = useState(
    JSON.parse(localStorage.getItem("profileId"))
  );

  const [searchResults, setSearchResults] = useState([]);
  const [topicInput, setTopicInput] = useState("");

  const sendPersonData = async () => {
    const queryParam = encodeURIComponent(JSON.stringify(personData));
    try {
      const response = await fetch(
        `http://localhost:5001/api/serper/search?q=${queryParam}&newParam=${(topicInput)}`
      );
      const result = await response.json();
      console.log("Fetched result:", result.images);

      // Assuming the API returns a list of courses in result.images
      setSearchResults(result.images || []);
    } catch (error) {
      console.error("Failed to fetch data from backend:", error);
    }
  };

  const handleTopicSubmit = () => {
    console.log("Generate button clicked");
    console.log("Submitted topic:", topicInput);
    if (personData && topicInput.trim()) {
      sendPersonData();
    } else {
      console.log("personData or topicInput is invalid");
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <Header />
      <h1 className="text-4xl font-bold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-500 my-15">
        Top {personData.topicInput} Courses for {personData?.classGrade}{" "}
        {personData?.learningPace} {personData?.learningStyle}
      </h1>

      {/* Input topic section */}
      <div className="w-full max-w-xl mx-auto mb-8 flex items-center gap-4">
        <input
          type="text"
          placeholder="Enter a topic (e.g., Physics, History)"
          className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={topicInput}
          onChange={(e) => setTopicInput(e.target.value)}
        />
        <button
          onClick={handleTopicSubmit}
          className="px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-blue-300 hover:from-blue-400 hover:to-blue-200 text-white font-semibold"
        >
          Generate
        </button>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {searchResults.length > 0 ? (
          searchResults.map((course, index) => (
            <a
              key={index}
              href={course.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 group"
            >
              <img
                src={course.imageUrl}
                alt={course.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold mb-2 group-hover:text-yellow-400">
                  {course.title}
                </h2>
                <p className="text-sm text-gray-400">{course.source}</p>
              </div>
            </a>
          ))
        ) : (
          <p className="text-center text-gray-400">No courses available.</p>
        )}
      </div>
    </div>
  );
}
