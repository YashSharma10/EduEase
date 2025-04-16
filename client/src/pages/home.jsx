// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import {
//   ArrowRight,
//   BookOpen,
//   Brain,
//   MessageSquare,
//   BarChart3,
//   CheckCircle,
// } from "lucide-react";
// import { Link } from "react-router-dom";

// function HomePage() {
//   return (
//     <div className="flex flex-col min-h-screen">
//       {/* Navigation */}
//       <header className="border-b">
//         <div className="container flex items-center justify-between py-4">
//           <div className="flex items-center gap-2">
//             <Brain className="h-6 w-6 text-emerald-600" />
//             <span className="text-xl font-bold">eduTutor</span>
//           </div>
//           <nav className="hidden md:flex items-center gap-6">
//             <Link
//               to="#features"
//               className="text-sm font-medium hover:text-emerald-600 transition-colors"
//             >
//               Features
//             </Link>
//             <Link
//               to="#how-it-works"
//               className="text-sm font-medium hover:text-emerald-600 transition-colors"
//             >
//               How It Works
//             </Link>
//             <Link
//               to="#testimonials"
//               className="text-sm font-medium hover:text-emerald-600 transition-colors"
//             >
//               Testimonials
//             </Link>
//           </nav>
//           <div className="flex items-center gap-4">
//             <Button variant="outline" size="sm">
//               Log In
//             </Button>
//             <Button size="sm">Sign Up</Button>
//           </div>
//         </div>
//       </header>

//       <main className="flex-1">
//         {/* Hero Section */}
//         <section className="py-20 md:py-28 bg-gradient-to-b from-emerald-50 to-white">
//           <div className="container flex flex-col md:flex-row items-center gap-8 md:gap-16">
//             <div className="flex-1 space-y-6">
//               <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
//                 Learn Smarter with{" "}
//                 <span className="text-emerald-600">Personalized</span> Education
//               </h1>
//               <p className="text-lg text-gray-600 max-w-md">
//                 Discover your unique learning style and get tailored lessons,
//                 quizzes, and AI assistance to accelerate your learning journey.
//               </p>
//               <div className="flex flex-col sm:flex-row gap-4 pt-4">
//                 <Button
//                   size="lg"
//                   className="bg-emerald-600 hover:bg-emerald-700"
//                 >
//                   Start Learning Quiz <ArrowRight className="ml-2 h-4 w-4" />
//                 </Button>
//                 <Button variant="outline" size="lg">
//                   Learn More
//                 </Button>
//               </div>
//             </div>
//             <div className="flex-1 relative">
//               <img
//                 src="/placeholder.svg?height=400&width=500"
//                 alt="Student learning with eduTutor"
//                 className="rounded-lg shadow-xl"
//               />
//               <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
//                 <div className="flex items-center gap-2">
//                   <CheckCircle className="h-5 w-5 text-emerald-600" />
//                   <span className="font-medium">
//                     Personalized for your learning style
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Features Section */}
//         <section id="features" className="py-20 bg-white">
//           <div className="container">
//             <div className="text-center mb-16">
//               <h2 className="text-3xl font-bold mb-4">
//                 Unlock Your Learning Potential
//               </h2>
//               <p className="text-gray-600 max-w-2xl mx-auto">
//                 Our platform adapts to your unique learning style, providing
//                 personalized resources and support.
//               </p>
//             </div>

//             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//               <Card>
//                 <CardHeader>
//                   <Brain className="h-10 w-10 text-emerald-600 mb-2" />
//                   <CardTitle>Learning Style Assessment</CardTitle>
//                   <CardDescription>
//                     Discover your unique learning style through our
//                     comprehensive onboarding quiz.
//                   </CardDescription>
//                 </CardHeader>
//                 <CardContent>
//                   <ul className="space-y-2">
//                     <li className="flex items-center gap-2">
//                       <CheckCircle className="h-4 w-4 text-emerald-600" />
//                       <span>Visual, auditory, reading, or kinesthetic</span>
//                     </li>
//                     <li className="flex items-center gap-2">
//                       <CheckCircle className="h-4 w-4 text-emerald-600" />
//                       <span>Personalized learning profile</span>
//                     </li>
//                     <li className="flex items-center gap-2">
//                       <CheckCircle className="h-4 w-4 text-emerald-600" />
//                       <span>Tailored recommendations</span>
//                     </li>
//                   </ul>
//                 </CardContent>
//               </Card>

//               <Card>
//                 <CardHeader>
//                   <BookOpen className="h-10 w-10 text-emerald-600 mb-2" />
//                   <CardTitle>Personalized Content</CardTitle>
//                   <CardDescription>
//                     Get lessons and quizzes tailored to your specific learning
//                     preferences.
//                   </CardDescription>
//                 </CardHeader>
//                 <CardContent>
//                   <ul className="space-y-2">
//                     <li className="flex items-center gap-2">
//                       <CheckCircle className="h-4 w-4 text-emerald-600" />
//                       <span>Custom lesson formats</span>
//                     </li>
//                     <li className="flex items-center gap-2">
//                       <CheckCircle className="h-4 w-4 text-emerald-600" />
//                       <span>Adaptive quizzes</span>
//                     </li>
//                     <li className="flex items-center gap-2">
//                       <CheckCircle className="h-4 w-4 text-emerald-600" />
//                       <span>Optimized learning paths</span>
//                     </li>
//                   </ul>
//                 </CardContent>
//               </Card>

//               <Card>
//                 <CardHeader>
//                   <MessageSquare className="h-10 w-10 text-emerald-600 mb-2" />
//                   <CardTitle>AI Doubt Solving</CardTitle>
//                   <CardDescription>
//                     Get instant help from our AI tutor that understands your
//                     learning style.
//                   </CardDescription>
//                 </CardHeader>
//                 <CardContent>
//                   <ul className="space-y-2">
//                     <li className="flex items-center gap-2">
//                       <CheckCircle className="h-4 w-4 text-emerald-600" />
//                       <span>24/7 doubt resolution</span>
//                     </li>
//                     <li className="flex items-center gap-2">
//                       <CheckCircle className="h-4 w-4 text-emerald-600" />
//                       <span>Explanations in your preferred style</span>
//                     </li>
//                     <li className="flex items-center gap-2">
//                       <CheckCircle className="h-4 w-4 text-emerald-600" />
//                       <span>Contextual learning support</span>
//                     </li>
//                   </ul>
//                 </CardContent>
//               </Card>

//               <Card>
//                 <CardHeader>
//                   <BarChart3 className="h-10 w-10 text-emerald-600 mb-2" />
//                   <CardTitle>Progress Tracking</CardTitle>
//                   <CardDescription>
//                     Monitor your learning journey with comprehensive analytics
//                     and insights.
//                   </CardDescription>
//                 </CardHeader>
//                 <CardContent>
//                   <ul className="space-y-2">
//                     <li className="flex items-center gap-2">
//                       <CheckCircle className="h-4 w-4 text-emerald-600" />
//                       <span>Visual progress dashboard</span>
//                     </li>
//                     <li className="flex items-center gap-2">
//                       <CheckCircle className="h-4 w-4 text-emerald-600" />
//                       <span>Skill mastery tracking</span>
//                     </li>
//                     <li className="flex items-center gap-2">
//                       <CheckCircle className="h-4 w-4 text-emerald-600" />
//                       <span>Performance analytics</span>
//                     </li>
//                   </ul>
//                 </CardContent>
//               </Card>
//             </div>
//           </div>
//         </section>

//         {/* How It Works Section */}
//         <section id="how-it-works" className="py-20 bg-gray-50">
//           <div className="container">
//             <div className="text-center mb-16">
//               <h2 className="text-3xl font-bold mb-4">How eduTutor Works</h2>
//               <p className="text-gray-600 max-w-2xl mx-auto">
//                 Our simple 4-step process helps you learn more effectively and
//                 efficiently.
//               </p>
//             </div>

//             <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//               {[
//                 {
//                   step: 1,
//                   title: "Take the Quiz",
//                   description:
//                     "Complete our learning style assessment to discover how you learn best.",
//                   icon: Brain,
//                 },
//                 {
//                   step: 2,
//                   title: "Get Recommendations",
//                   description:
//                     "Receive personalized lesson and quiz recommendations based on your profile.",
//                   icon: BookOpen,
//                 },
//                 {
//                   step: 3,
//                   title: "Learn & Practice",
//                   description:
//                     "Study with content optimized for your learning style and practice with quizzes.",
//                   icon: MessageSquare,
//                 },
//                 {
//                   step: 4,
//                   title: "Track Progress",
//                   description:
//                     "Monitor your improvement and adjust your learning path as needed.",
//                   icon: BarChart3,
//                 },
//               ].map((item) => (
//                 <div
//                   key={item.step}
//                   className="flex flex-col items-center text-center"
//                 >
//                   <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mb-4">
//                     <span className="text-xl font-bold text-emerald-600">
//                       {item.step}
//                     </span>
//                   </div>
//                   <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
//                   <p className="text-gray-600">{item.description}</p>
//                   <item.icon className="h-10 w-10 text-emerald-600 mt-4" />
//                 </div>
//               ))}
//             </div>

//             <div className="mt-16 text-center">
//               <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
//                 Start Your Learning Journey
//               </Button>
//             </div>
//           </div>
//         </section>

//         {/* Testimonials Section */}
//         <section id="testimonials" className="py-20 bg-white">
//           <div className="container">
//             <div className="text-center mb-16">
//               <h2 className="text-3xl font-bold mb-4">What Our Learners Say</h2>
//               <p className="text-gray-600 max-w-2xl mx-auto">
//                 Hear from students who have transformed their learning
//                 experience with eduTutor.
//               </p>
//             </div>

//             <div className="grid md:grid-cols-3 gap-8">
//               {[
//                 {
//                   name: "Alex Johnson",
//                   role: "Visual Learner",
//                   quote:
//                     "The personalized visual content helped me grasp complex concepts that I struggled with for years. My grades improved dramatically!",
//                   avatar: "/placeholder.svg?height=80&width=80",
//                 },
//                 {
//                   name: "Sarah Williams",
//                   role: "Auditory Learner",
//                   quote:
//                     "As someone who learns best by listening, the audio lessons and AI explanations were perfect for my learning style.",
//                   avatar: "/placeholder.svg?height=80&width=80",
//                 },
//                 {
//                   name: "Michael Chen",
//                   role: "Kinesthetic Learner",
//                   quote:
//                     "The interactive exercises tailored to my hands-on learning style made all the difference. I'm finally enjoying studying!",
//                   avatar: "/placeholder.svg?height=80&width=80",
//                 },
//               ].map((testimonial, index) => (
//                 <Card key={index} className="bg-gray-50">
//                   <CardContent className="pt-6">
//                     <div className="flex flex-col items-center text-center">
//                       <img
//                         src={testimonial.avatar || "/placeholder.svg"}
//                         alt={testimonial.name}
//                         className="w-20 h-20 rounded-full mb-4"
//                       />
//                       <p className="text-gray-700 italic mb-4">
//                         "{testimonial.quote}"
//                       </p>
//                       <h4 className="font-semibold">{testimonial.name}</h4>
//                       <p className="text-sm text-gray-500">
//                         {testimonial.role}
//                       </p>
//                     </div>
//                   </CardContent>
//                 </Card>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* CTA Section */}
//         <section className="py-16 bg-emerald-600 text-white">
//           <div className="container text-center">
//             <h2 className="text-3xl font-bold mb-4">
//               Ready to Transform Your Learning Experience?
//             </h2>
//             <p className="max-w-2xl mx-auto mb-8">
//               Take the first step toward personalized education tailored to your
//               unique learning style.
//             </p>
//             <Button
//               size="lg"
//               variant="secondary"
//               className="bg-white text-emerald-600 hover:bg-gray-100"
//             >
//               Start Your Learning Quiz Now
//             </Button>
//           </div>
//         </section>
//       </main>

//       {/* Footer */}
//       <footer className="bg-gray-900 text-gray-300 py-12">
//         <div className="container">
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//             <div>
//               <h3 className="font-semibold text-white mb-4">eduTutor</h3>
//               <ul className="space-y-2">
//                 <li>
//                   <Link
//                     to="#"
//                     className="hover:text-emerald-400 transition-colors"
//                   >
//                     About Us
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     to="#"
//                     className="hover:text-emerald-400 transition-colors"
//                   >
//                     Our Team
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     to="#"
//                     className="hover:text-emerald-400 transition-colors"
//                   >
//                     Careers
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     to="#"
//                     className="hover:text-emerald-400 transition-colors"
//                   >
//                     Contact
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//             <div>
//               <h3 className="font-semibold text-white mb-4">Resources</h3>
//               <ul className="space-y-2">
//                 <li>
//                   <Link
//                     to="#"
//                     className="hover:text-emerald-400 transition-colors"
//                   >
//                     Blog
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     to="#"
//                     className="hover:text-emerald-400 transition-colors"
//                   >
//                     Learning Guides
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     to="#"
//                     className="hover:text-emerald-400 transition-colors"
//                   >
//                     Webinars
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     to="#"
//                     className="hover:text-emerald-400 transition-colors"
//                   >
//                     FAQ
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//             <div>
//               <h3 className="font-semibold text-white mb-4">Legal</h3>
//               <ul className="space-y-2">
//                 <li>
//                   <Link
//                     to="#"
//                     className="hover:text-emerald-400 transition-colors"
//                   >
//                     Terms of Service
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     to="#"
//                     className="hover:text-emerald-400 transition-colors"
//                   >
//                     Privacy Policy
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     to="#"
//                     className="hover:text-emerald-400 transition-colors"
//                   >
//                     Cookie Policy
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     to="#"
//                     className="hover:text-emerald-400 transition-colors"
//                   >
//                     GDPR
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//             <div>
//               <h3 className="font-semibold text-white mb-4">Connect</h3>
//               <ul className="space-y-2">
//                 <li>
//                   <Link
//                     to="#"
//                     className="hover:text-emerald-400 transition-colors"
//                   >
//                     Twitter
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     to="#"
//                     className="hover:text-emerald-400 transition-colors"
//                   >
//                     LinkedIn
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     to="#"
//                     className="hover:text-emerald-400 transition-colors"
//                   >
//                     Facebook
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     to="#"
//                     className="hover:text-emerald-400 transition-colors"
//                   >
//                     Instagram
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//           </div>
//           <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
//             <p>© {new Date().getFullYear()} eduTutor. All rights reserved.</p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }

// export default HomePage;
