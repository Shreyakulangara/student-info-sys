import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StudentList from './components/student/studentList';
import DashboardSidebar from './components/dashboard/sidebar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Calendar from './components/dashboard/calendar';
import Login from './components/student/login';
import Navbar from './components/dashboard/navbar';
import EnrolledCourses from './components/course/enrolledcourses';
function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  // Function to handle successful login
  const handleLoginSuccess = () => {
    setLoggedIn(true);
  };
  console.log(loggedIn);
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Login onLoginSuccess={handleLoginSuccess} />} />
      
      {loggedIn && (
        <Route
          path="/dashboard"
          element={
            <div>
            <Navbar expand="lg"/>
            <Row>
              <Col xs={2} md={2}>
                <DashboardSidebar/>
              </Col>
              <Col xs={7} md={7} className="mt-5">
                <StudentList />
                <EnrolledCourses/>
              </Col>
              <Col xs={3} md={3} className="mt-5">
                <Calendar/>
              </Col>
            </Row>
            </div>
          } 
        />  
      )}
      </Routes>
    </Router>
  );
}

export default App;
