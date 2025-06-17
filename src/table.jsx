// import React, { useState, useEffect } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import "./table.css";

// function Table() {
//   const navigate = useNavigate();
//   const { subject } = useParams();

//   const subjectsData = {
//     cse: [
//       { subject: "Data Structures", key: "ds", examDate: "2025-04-10" },
//       { subject: "Operating Systems", key: "os", examDate: "2025-04-15" },
//       { subject: "Algorithms", key: "algo", examDate: "2025-04-20" },
//       { subject: "Database Management", key: "dbms", examDate: "2025-04-25" },
//       { subject: "Computer Networks", key: "cn", examDate: "2025-04-30" },
//     ],
//     mech: [
//       { subject: "Thermodynamics", key: "thermo", examDate: "2025-04-12" },
//       { subject: "Fluid Mechanics", key: "fluid", examDate: "2025-04-17" },
//       { subject: "Machine Design", key: "machine", examDate: "2025-04-22" },
//       { subject: "Engineering Mechanics", key: "eng_mech", examDate: "2025-04-27" },
//       { subject: "Manufacturing Processes", key: "manufacturing", examDate: "2025-05-02" },
//     ],
//     eee: [
//       { subject: "Circuit Theory", key: "circuit", examDate: "2025-04-11" },
//       { subject: "Power Systems", key: "power", examDate: "2025-04-16" },
//       { subject: "Electromagnetics", key: "em", examDate: "2025-04-21" },
//       { subject: "Electrical Machines", key: "machines", examDate: "2025-04-26" },
//       { subject: "Control Systems", key: "control", examDate: "2025-05-01" },
//     ],
//     civil: [
//       { subject: "Structural Analysis", key: "structure", examDate: "2025-04-13" },
//       { subject: "Concrete Technology", key: "concrete", examDate: "2025-04-18" },
//       { subject: "Surveying", key: "survey", examDate: "2025-04-23" },
//       { subject: "Geotechnical Engineering", key: "geotech", examDate: "2025-04-28" },
//       { subject: "Transportation Engineering", key: "transport", examDate: "2025-05-03" },
//     ],
//   };

//   const [upNext, setUpNext] = useState(null);

//   useEffect(() => {
//     if (!subject || !subjectsData[subject]) return;

//     const today = new Date();

//     const upcomingExam = subjectsData[subject]
//       .map((exam) => ({
//         ...exam,
//         examDateObj: new Date(exam.examDate),
//       }))
//       .find((exam) => exam.examDateObj >= today);

//     setUpNext(upcomingExam);
//   }, [subject]);

//   return (
//     <>
//       <div className="upnext-container">
//         <p>Up Next</p>
//         {upNext ? (
//           <>
//             <div className="upnext-subject">{upNext.subject}</div>
//             <div className="upnext-date">
//               <div>{upNext.examDate}</div>
//             </div>
//           </>
//         ) : (
//           <p>No upcoming exams</p>
//         )}
//       </div>

//       {subjectsData[subject]?.map((exam, index) => (
//         <div className="bar" key={index}>
//           <div className="dayanddate">
//             <span>{exam.subject}</span>
//             <div className="date-day">{exam.examDate}</div>
//           </div>
//           <div
//             className="details"
//             onClick={() => navigate(`/subjects/${subject}/${exam.subject}`)}
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               height="44px"
//               viewBox="0 -960 960 960"
//               width="44px"
//               fill="#e8eaed"
//             >
//               <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
//               <title>Details</title>
//             </svg>
//           </div>
//         </div>
//       ))}
//     </>
//   );
// }

// export default Table;

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ref, get } from "firebase/database";
import { db } from "./Firebase.config";
import "./table.css";

function Table({ subject }) {
  const navigate = useNavigate();
  const [subjectsList, setSubjectsList] = useState([]);
  const [upNext, setUpNext] = useState(null);

  useEffect(() => {
    if (!subject) return;

    const fetchSubjects = async () => {
      const subjectRef = ref(db, `exam/${subject}`);
      try {
        const snapshot = await get(subjectRef);
        if (snapshot.exists()) {
          const data = snapshot.val();
          setSubjectsList(data);

          const today = new Date();
          const upcoming = data
            .map((exam) => ({
              ...exam,
              examDateObj: new Date(exam.examDate),
            }))
            .find((exam) => exam.examDateObj >= today);

          setUpNext(upcoming);
        } else {
          console.log("No data found");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchSubjects();
  }, [subject]);

  return (
    <>
      <div className="upnext-container">
        <p>Up Next</p>
        {upNext ? (
          <>
            <div className="upnext-subject">{upNext.subject}</div>
            <div className="upnext-date">{upNext.examDate}</div>
          </>
        ) : (
          <p>No upcoming exams</p>
        )}
      </div>

      {subjectsList.map((exam, index) => (
        <div className="bar" key={index}>
          <div className="dayanddate">
            <span>{exam.subject}</span>
            <div className="date-day">{exam.examDate}</div>
          </div>
          <div
            className="details"
            onClick={() => navigate(`/subjects/${subject}/${exam.subject}`)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="44px"
              viewBox="0 -960 960 960"
              width="44px"
              fill="#e8eaed"
            >
              <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
              <title>Details</title>
            </svg>
          </div>
        </div>
      ))}
    </>
  );
}

export default Table;
