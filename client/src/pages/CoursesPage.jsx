import Header from "@/components/ui/common/header";
import React, { useEffect, useState } from "react";

export default function CoursesPage() {
  const [personData, setPersonData] = useState(
    JSON.parse(localStorage.getItem("profileId"))
  );

  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    if (personData) {
      const sendPersonData = async () => {
        const queryParam = encodeURIComponent(JSON.stringify(personData));
        try {
          const response = await fetch(
            `http://localhost:5001/api/serper/search?q=${queryParam}`
          );
          const result = await response.json();
          console.log("Initial fetch result:", result);
          setSearchResults(result.courses || []); // Assuming the courses are in result.courses
        } catch (error) {
          console.error("Failed to fetch data from backend:", error);
        }
      };

      sendPersonData();
    }
  }, [personData]);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <Header />
      <h1 className="text-4xl font-bold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-500 my-15">
        Top Java Courses for 2025 {personData?.classGrade}{" "}
        {personData?.learningPace} {personData?.learningStyle}
      </h1>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {searchResults.map((course, index) => (
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
        ))}
      </div>
    </div>
  );
}
