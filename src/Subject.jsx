import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ref, get } from "firebase/database";
import { db } from "./Firebase.config";
import "./table.css";
import "./subject.css";

function Table() {
  const navigate = useNavigate();
  const [departments, setDepartments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDepartments = async () => {
      try {
        const examRef = ref(db, 'exam');
        const snapshot = await get(examRef);
        
        if (snapshot.exists()) {
          const data = snapshot.val();
          // Extract department names from the exam data
          const deptNames = Object.keys(data).map(dept => dept.toUpperCase());
          setDepartments(deptNames);
        } else {
          console.log("No departments found in Firebase");
          setDepartments([]);
        }
      } catch (error) {
        console.error("Error fetching departments:", error);
        setDepartments([]);
      } finally {
        setLoading(false);
      }
    };

    fetchDepartments();
  }, []);

  if (loading) {
    return <div className="subject">Loading departments...</div>;
  }

  return (
    <>
      <div className="subject">
        {departments.map((dept, index) => (
          <div className="bar" key={index}>
            <div className="dayanddate">
              <span>{dept}</span>
            </div>
            <div
              className="details"
              onClick={() => navigate(`/timetable/${dept.toLowerCase()}`)}
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
      </div>
    </>
  );
}

export default Table;
