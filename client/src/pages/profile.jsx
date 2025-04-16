// import { useState } from "react";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { Label } from "@/components/ui/label";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Checkbox } from "@/components/ui/checkbox";
// import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";

// const learningStyleOptions = [
//   "Visual (Images, diagrams)",
//   "Text (Notes, reading)",
// ];

// const classGrades = [
//   "Class 1",
//   "Class 2",
//   "Class 3",
//   "Class 4",
//   "Class 5",
//   "Class 6",
//   "Class 7",
//   "Class 8",
//   "Class 9",
//   "Class 10",
//   "Class 11",
//   "Class 12",
//   "College 1st Year",
//   "College 2nd Year",
//   "College 3rd Year",
//   "College 4th Year",
// ];

// const Profile = () => {
//   const [formData, setFormData] = useState({
//     fullName: "",
//     age: "",
//     classGrade: "Class 1",
//     learningStyle: [],
//     learningPace: "",
//     careerGoal: "",
//     subjectInterest: "",
//     studyDuration: "",
//     frequency: "",
//     topicsDifficulty: "",
//     voiceLearning: "",
//     boardCurriculum: "",
//     preferredFormat: "",
//   });

//   const [showMore, setShowMore] = useState(false);

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;

//     if (name === "learningStyle") {
//       setFormData((prev) => ({
//         ...prev,
//         learningStyle: checked
//           ? [...prev.learningStyle, value]
//           : prev.learningStyle.filter((style) => style !== value),
//       }));
//     } else {
//       setFormData((prev) => ({
//         ...prev,
//         [name]: value,
//       }));
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const mandatoryFields = [
//       "fullName",
//       "age",
//       "classGrade",
//       "learningStyle",
//       "learningPace",
//       "careerGoal",
//     ];
//     for (let field of mandatoryFields) {
//       if (
//         !formData[field] ||
//         (field === "learningStyle" && formData.learningStyle.length === 0)
//       ) {
//         alert("Please fill all mandatory fields.");
//         return;
//       }
//     }

//     try {
//       const response = await fetch("http://localhost:5000/api/save-profile", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });
//       response.ok ? alert("Profile saved!") : alert("Failed to save.");
//     } catch (err) {
//       console.error("Save error:", err);
//     }
//   };

//   return (
//     <div className="max-w-4xl mx-auto mt-8">
//       <Card className="shadow-lg">
//         <CardHeader>
//           <CardTitle className="text-2xl font-bold text-blue-700">
//             Student Profile
//           </CardTitle>
//         </CardHeader>
//         <CardContent>
//           <form onSubmit={handleSubmit} className="space-y-6">
//             <div>
//               <Label>Full Name *</Label>
//               <Input
//                 name="fullName"
//                 value={formData.fullName}
//                 onChange={handleChange}
//                 required
//               />
//             </div>

//             <div>
//               <Label>Age *</Label>
//               <Input
//                 type="number"
//                 name="age"
//                 min="5"
//                 max="25"
//                 value={formData.age}
//                 onChange={handleChange}
//                 required
//               />
//             </div>

//             <div>
//               <Label>Class / Grade *</Label>
//               <Select
//                 value={formData.classGrade}
//                 onValueChange={(value) =>
//                   setFormData((prev) => ({ ...prev, classGrade: value }))
//                 }
//               >
//                 <SelectTrigger>
//                   <SelectValue placeholder="Select grade" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   {classGrades.map((grade) => (
//                     <SelectItem key={grade} value={grade}>
//                       {grade}
//                     </SelectItem>
//                   ))}
//                 </SelectContent>
//               </Select>
//             </div>

//             <div>
//               <Label>Learning Style *</Label>
//               <div className="flex gap-4 flex-wrap mt-2">
//                 {learningStyleOptions.map((style) => (
//                   <div key={style} className="flex items-center gap-2">
//                     <Checkbox
//                       checked={formData.learningStyle.includes(style)}
//                       onCheckedChange={(checked) =>
//                         handleChange({
//                           target: {
//                             name: "learningStyle",
//                             value: style,
//                             checked,
//                           },
//                         })
//                       }
//                     />
//                     <span>{style}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <div>
//               <Label>Learning Pace *</Label>
//               <RadioGroup
//                 value={formData.learningPace}
//                 onValueChange={(val) =>
//                   setFormData((prev) => ({ ...prev, learningPace: val }))
//                 }
//               >
//                 {[
//                   "Fast Learner",
//                   "Intermediate Learner",
//                   "Slow Learner",
//                   "Variable Learner",
//                 ].map((pace) => (
//                   <div key={pace} className="flex items-center space-x-2">
//                     <RadioGroupItem value={pace} id={pace} />
//                     <Label htmlFor={pace}>{pace}</Label>
//                   </div>
//                 ))}
//               </RadioGroup>
//             </div>

//             <div>
//               <Label>Career Goal *</Label>
//               <Input
//                 name="careerGoal"
//                 value={formData.careerGoal}
//                 onChange={handleChange}
//                 required
//               />
//             </div>

//             {/* Show More Section */}
//             <div className="text-right">
//               <Button
//                 type="button"
//                 variant="link"
//                 onClick={() => setShowMore((prev) => !prev)}
//               >
//                 {showMore ? "Hide Optional Fields" : "Show More"}
//               </Button>
//             </div>

//             {showMore && (
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 {[
//                   { name: "subjectInterest", label: "Subject Interest" },
//                   { name: "studyDuration", label: "Study Duration" },
//                   {
//                     name: "frequency",
//                     label: "Frequency of Learning Sessions",
//                   },
//                   { name: "topicsDifficulty", label: "Topics Difficulty" },
//                   { name: "voiceLearning", label: "Voice Learning" },
//                   { name: "boardCurriculum", label: "Board and Curriculum" },
//                   { name: "preferredFormat", label: "Preferred Format" },
//                 ].map((field) => (
//                   <div key={field.name}>
//                     <Label>{field.label}</Label>
//                     <Input
//                       name={field.name}
//                       value={formData[field.name]}
//                       onChange={handleChange}
//                     />
//                   </div>
//                 ))}
//               </div>
//             )}

//             <div className="pt-4">
//               <Button type="submit" className="w-full">
//                 Save Profile
//               </Button>
//             </div>
//           </form>
//         </CardContent>
//       </Card>
//     </div>
//   );
// };

// export default Profile;

import { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import Header from "@/components/ui/common/header";


const learningStyleOptions = [
  "Visual (Images, diagrams)",
  "Text (Notes, reading)",
];

const classGrades = [
  "Class 1",
  "Class 2",
  "Class 3",
  "Class 4",
  "Class 5",
  "Class 6",
  "Class 7",
  "Class 8",
  "Class 9",
  "Class 10",
  "Class 11",
  "Class 12",
  "College 1st Year",
  "College 2nd Year",
  "College 3rd Year",
  "College 4th Year",
];

const Profile = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    age: "",
    classGrade: "Class 1",
    learningStyle: [],
    learningPace: "",
    careerGoal: "",
    subjectInterest: "",
    studyDuration: "",
    frequency: "",
    topicsDifficulty: "",
    voiceLearning: "",
    boardCurriculum: "",
    preferredFormat: "",
  });

  const [showMore, setShowMore] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (name === "learningStyle") {
      setFormData((prev) => ({
        ...prev,
        learningStyle: checked
          ? [...prev.learningStyle, value]
          : prev.learningStyle.filter((style) => style !== value),
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const mandatoryFields = [
      "fullName",
      "age",
      "classGrade",
      "learningStyle",
      "learningPace",
      "careerGoal",
    ];
    for (let field of mandatoryFields) {
      if (
        !formData[field] ||
        (field === "learningStyle" && formData.learningStyle.length === 0)
      ) {
        alert("Please fill all mandatory fields.");
        return;
      }
    }
    // try {
    //   const response = await fetch("http://localhost:5000/api/save-profile", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify(formData),
    //   });
    //   response.ok ? console.log(response) : alert("Failed to save.");
    // } catch (err) {
    //   console.error("Save error:", err);
    // }

    try {
      const response = await axios.post(
        "http://localhost:5000/api/save-profile",
        formData
      );
      console.log("Saved Profile ID:", response.data);
      localStorage.setItem("profileId", JSON.stringify(response.data.profile));
      localStorage.setItem("userid", JSON.stringify(response.data.profile._id));
      toast.success(`${response.data.message}`);
      navigate(`/`);
    } catch (error) {
      console.error("Save error:", error);
      alert("Failed to save.");
    }
  };

  return (
    <div className="min-h-screen w-full bg-black text-white relative overflow-hidden">
      <Header />
      {/* Background and Motion Effects */}
      <motion.div
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        className="absolute inset-0 z-0 bg-[length:400%_400%] bg-gradient-to-r from-[#0c0c0c] via-[#1a1a1a] to-[#0c0c0c]"
        style={{ backgroundSize: "400% 400%" }}
      />

      <motion.div
        animate={{ x: [0, 30, -30, 0], y: [0, -30, 30, 0] }}
        transition={{ repeat: Infinity, duration: 25, ease: "easeInOut" }}
        className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-blue-500 opacity-10 rounded-full filter blur-3xl"
      />

      <motion.div
        animate={{ x: [0, -40, 40, 0], y: [0, 40, -40, 0] }}
        transition={{ repeat: Infinity, duration: 30, ease: "easeInOut" }}
        className="absolute bottom-[-120px] right-[-120px] w-[400px] h-[400px] bg-blue-400 opacity-10 rounded-full filter blur-3xl"
      />

      <div className="relative z-10 max-w-4xl mx-auto p-6 py-24">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-blue-200 to-blue-100 mb-10 text-center"
        >
          Customize Your Learning Experience
        </motion.h2>

        <form
          onSubmit={handleSubmit}
          className="bg-white/5 backdrop-blur-md rounded-xl shadow-md p-6 space-y-6 text-white"
        >
          <div>
            <label className="block font-medium">Full Name *</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="mt-1 w-full bg-black/40 text-white border border-white/10 rounded-md px-4 py-2"
              required
            />
          </div>

          <div>
            <label className="block font-medium">Age *</label>
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              className="mt-1 w-full bg-black/40 text-white border border-white/10 rounded-md px-4 py-2"
              min="5"
              max="25"
              required
            />
          </div>

          <div>
            <label className="block font-medium">Class / Grade *</label>
            <select
              name="classGrade"
              value={formData.classGrade}
              onChange={handleChange}
              className="mt-1 w-full bg-black/40 text-white border border-white/10 rounded-md px-4 py-2"
            >
              {classGrades.map((grade) => (
                <option key={grade} value={grade}>
                  {grade}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block font-medium mb-1">Learning Style *</label>
            <div className="grid grid-cols-2 gap-2">
              {learningStyleOptions.map((style) => (
                <label key={style} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="learningStyle"
                    value={style}
                    checked={formData.learningStyle.includes(style)}
                    onChange={handleChange}
                  />
                  {style}
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="block font-medium">Learning Pace *</label>
            <div className="flex flex-wrap gap-4 mt-2">
              {[
                "Fast Learner",
                "Intermediate Learner",
                "Slow Learner",
                "Variable Learner",
              ].map((pace) => (
                <label key={pace} className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="learningPace"
                    value={pace}
                    checked={formData.learningPace === pace}
                    onChange={handleChange}
                  />
                  {pace}
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="block font-medium">Career Goal *</label>
            <input
              type="text"
              name="careerGoal"
              value={formData.careerGoal}
              onChange={handleChange}
              className="mt-1 w-full bg-black/40 text-white border border-white/10 rounded-md px-4 py-2"
              required
            />
          </div>

          <div className="text-right">
            <button
              type="button"
              className="text-blue-300 underline"
              onClick={() => setShowMore(!showMore)}
            >
              {showMore ? "Hide Optional Fields" : "Show More"}
            </button>
          </div>

          <div>
            <button
              type="submit"
              className="w-full mt-4 bg-gradient-to-r from-blue-500 to-blue-300 hover:from-blue-400 hover:to-blue-200 font-semibold text-black py-3 rounded-full"
            >
              Save Profile
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;
