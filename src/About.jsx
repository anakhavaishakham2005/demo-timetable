import React from "react";
import "./about.css";

function About() {
    return (
        <div className="about">
            <h1>About This Project</h1>
            <p>
                The <strong>Timetable Management Web App</strong> is a simple and efficient scheduling tool built using React. 
                It helps users manage their weekly schedules with a clean, structured format, making time management easier. 
                Designed with a modern UI, the app ensures a seamless user experience.
            </p>

            <h2>Key Features</h2>
            <ul>
                <li><strong>Modern & Responsive Design</strong> - Works smoothly on desktops, tablets, and mobile devices.</li>
                <li><strong>Dynamic Timetable Layout</strong> - Displays schedules in an organized, clear format.</li>
                <li><strong>Fast & Lightweight</strong> - Built using React for enhanced performance.</li>
                <li><strong>Simple & Intuitive</strong> - Easy navigation and user-friendly interface.</li>
            </ul>

            <h2>Technology Stack</h2>
            <ul>
                <li><strong>Frontend:</strong> React.js, JavaScript, HTML, CSS</li>
                <li><strong>Hosting:</strong> Vercel</li>
            </ul>

            <h2>Purpose & Inspiration</h2>
            <p>
                This project was developed as a hands-on learning experience in React development, state management, 
                and frontend design. Future enhancements may include interactive scheduling, reminders, and user authentication.
            </p>

            <p className="developer"><strong>Developed by: Abhai Sankar P R</strong></p>
        </div>
    );
}

export default About;
