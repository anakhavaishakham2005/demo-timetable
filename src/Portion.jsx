import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ref, get } from "firebase/database";
import { db } from "./Firebase.config";
import "./portion.css";

function SubjectPortion() {
  const { department, subject } = useParams();
  const [portion, setPortion] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPortion = async () => {
      try {
        // First, get the subject key from the exam data
        const examRef = ref(db, `exam/${department}`);
        const examSnapshot = await get(examRef);
        
        if (examSnapshot.exists()) {
          const examData = examSnapshot.val();
          // Find the subject that matches the subject name
          const subjectEntry = examData.find(exam => 
            exam.subject.toLowerCase().replace(/\s+/g, '-') === subject.toLowerCase() ||
            exam.subject.toLowerCase() === subject.toLowerCase()
          );
          
          if (subjectEntry && subjectEntry.key) {
            // Now fetch the portion using the subject key
            const portionsRef = ref(db, `portions/${department}/${subjectEntry.key}`);
            const portionSnapshot = await get(portionsRef);
            
            if (portionSnapshot.exists()) {
              setPortion(portionSnapshot.val());
            } else {
              setPortion("No portion available");
            }
          } else {
            setPortion("Subject not found");
          }
        } else {
          setPortion("Department not found");
        }
      } catch (error) {
        console.error("Error fetching portion:", error);
        setPortion("Error loading portion");
      } finally {
        setLoading(false);
      }
    };

    if (department && subject) {
      fetchPortion();
    }
  }, [department, subject]);

  if (loading) {
    return (
      <div className="portionbox">
        <h2>{subject?.replace(/-/g, " ").toUpperCase()} Portion</h2>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="portionbox">
      <h2>{subject?.replace(/-/g, " ").toUpperCase()} Portion</h2>
      <p>{portion}</p>
    </div>
  );
}

export default SubjectPortion;
