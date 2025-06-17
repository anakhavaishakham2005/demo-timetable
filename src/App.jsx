import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import ButtonToGo from './buttonToGo.jsx';
import Header from './header.jsx';
import TablePage from './timetablepage.jsx';
import SubjectPortion from './Portion.jsx';
import './App.css';
import BackButton from './backbutton.jsx';
import LoadingScreen from './LoadingScreen.jsx';
import AdminLogin from './AdminLogin.jsx';
import EditTimeTable from './EditTimeTable.jsx';
import NotFound from './NotFound.jsx';
import CreatenewLogin from './CreatenewLogin.jsx';
import About from './About.jsx';
import Subject from './Subject.jsx';

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 200);

    return () => clearTimeout(timer);
  }, [location.pathname]);
  return loading ? (
    <LoadingScreen />
  ) : (
    <>
      <Header />
      {location.pathname !== "/" && <BackButton />}

      {location.pathname === "/" && (
        <div className="timetable-intro">
          <h1>📅 Plan Smart, Study Smarter!</h1>
          <p>
            Welcome to your <strong>Timetable Hub</strong>! 🎯 Stay on top of your schedule with an organized view of your classes.
            Whether you're gearing up for the day or revising a subject, this timetable is your go-to guide.
          </p>
          <ul>
            <li>✨ Effortlessly track your subjects & timings</li>
            <li>🔍 Click on subjects for in-depth portion details</li>
            <li>⏳ Stay ahead, stay prepared, stay stress-free!</li>
          </ul>
          <p className='abouts'>To know more about this project : <span className='KnowMore' onClick={() => navigate("/About")}>Know More!</span></p>
        </div>
      )}

      <Routes>
        <Route path="/" element={<ButtonToGo />} />
        <Route path="/timetable/:subject" element={<TablePage />} />
        <Route path="/Subject" element={<Subject />} />
        <Route path="/subjects/:department/:subject" element={<SubjectPortion />} />
        <Route path="/AdminLogin" element={<AdminLogin />} />
        <Route path="/EditTimeTable" element={<EditTimeTable />} />
        <Route path="/CreatenewLogin" element={<CreatenewLogin />} />
        <Route path="/About" element={<About />} />
        <Route path="*" element={<NotFound />} />

      </Routes>
    </>
  );
}

export default App;
