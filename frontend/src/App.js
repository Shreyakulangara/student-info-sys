import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StudentList from './components/student/studentList';
import Navbar from './components/dashboard/navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Calendar from './components/dashboard/calendar';
import Login from './components/student/login';

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
            <Row>
              <Col xs={2} md={2}>
                <Navbar />
              </Col>
              <Col xs={7} md={7} className="mt-5">
                <StudentList />
              </Col>
              <Col xs={3} md={3} className="mt-5">
                <Calendar/>
              </Col>
            </Row>
          } 
        />  
      )}
      </Routes>
    </Router>
  );
}

export default App;
