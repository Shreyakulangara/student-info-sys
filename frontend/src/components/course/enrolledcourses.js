import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function EnrolledCourses() {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
      fetch('http://localhost:8000/course/course_list/')
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setCourses(data);
        })
        .catch((error) => {
          console.error(error);
        });
    }, []);
  

  return (
    <div className="container-fluid p0 my-3 mx-2 p-3">
    <Card >
      <Card.Header>Courses </Card.Header>
      <Card.Body>
        {courses.length === 0 ? (
          <p>No courses enrolled.</p>
        ) : (
            <ListGroup>
            {courses.map((course, index) => (
              <ListGroup.Item key={index}>{courses[index].course_name}</ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </Card.Body>
    </Card>
    </div>
  );
}

export default EnrolledCourses;