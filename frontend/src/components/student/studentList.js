import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Spinner from 'react-bootstrap/Spinner';

function StudentList() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/student/students_list/')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setStudents(data);
      })
      .catch((error) => {
        console.error(error); // Log any errors
      });
  }, []);

  return (
    <div className="container-fluid p0">
      {students.length > 0 ? (
      <Card>
        <Row>
          <Col xs={4} md={4} className="d-flex align-items-center justify-content-center">
            <Image alt="avatar1" src="https://mdbcdn.b-cdn.net/img/new/avatars/9.webp" roundedCircle className="h-50"/>
          </Col>
          <Col xs={8} md={8}>
            <Card.Body>
              <Card.Title>Hello, {students[0].first_name} {students[0].last_name}</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
          </Col>
        </Row>
      </Card>
      ):(
        <Spinner animation="border" role="status" variant="primary">
        <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}
    </div>
  );
}

export default StudentList;
