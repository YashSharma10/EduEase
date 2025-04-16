import React from 'react';

const javaCourses = [
  {
    title: "Intro to Java Programming - Course for Absolute Beginners",
    imageUrl: "https://i.ytimg.com/vi/GoXwIVyNvX0/maxresdefault.jpg",
    source: "YouTube",
    link: "https://www.youtube.com/watch?v=GoXwIVyNvX0",
  },
  {
    title: "Java Course Duration, Syllabus Eligibility, Salary, Fees",
    imageUrl: "https://blog.pwskills.com/wp-content/uploads/2024/06/Java-Course-Duration-Syllabus-Eligibility-Salary-Fees.jpg",
    source: "PW Skills",
    link: "https://pwskills.com/blog/java-course-duration/",
  },
  {
    title: "5000+ Java Online Courses for 2025 | Explore Free Courses",
    imageUrl: "https://www.classcentral.com/report/wp-content/uploads/2022/05/Java-BCG-Banner.png",
    source: "Class Central",
    link: "https://www.classcentral.com/subject/java",
  },
  {
    title: "Java Training Course by Apponix Academy | 100% Placement Assurance",
    imageUrl: "https://www.apponix.com/front/images/app-java.jpeg",
    source: "Apponix Technologies",
    link: "https://www.apponix.com/java-training",
  },
  {
    title: "Advanced Java Programming Course: Master Java for Complex Applications",
    imageUrl: "https://arcticcloud-solutions.com/assets/uploads/service-14.jpg",
    source: "ArcticCloud Solutions",
    link: "https://arcticcloud-solutions.com/service/advanced-java-programming-course",
  },
  {
    title: "Java Full Course for free ☕",
    imageUrl: "https://i.ytimg.com/vi/xk4_1vDrzzo/hq720.jpg",
    source: "YouTube",
    link: "https://www.youtube.com/watch?v=xk4_1vDrzzo",
  },
  {
    title: "Save Big On This All-In Java Coding Crash Course Training - IGN",
    imageUrl: "https://assets-prd.ignimgs.com/2021/09/01/sale-301982-article-image-1630523474787.jpeg",
    source: "IGN",
    link: "https://www.ign.com/articles/save-big-on-all-in-java-coding-crash-course-training",
  },
  {
    title: "16 Best Java Courses for 2025: Write Once, Run Everywhere",
    imageUrl: "https://www.classcentral.com/report/wp-content/uploads/2022/05/BCG_Java_Banner.png",
    source: "Class Central",
    link: "https://www.classcentral.com/report/best-java-courses/",
  },
];

export default function JavaCoursesPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-4xl font-bold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-500">
        Top Java Courses for 2025
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {javaCourses.map((course, index) => (
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
