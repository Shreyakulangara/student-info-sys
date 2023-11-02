import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';

function Login({ onLoginSuccess }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Implement your login logic here
    const loginData = {
      username,
      password,
    };

    fetch('http://localhost:8000/student/login/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginData),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Login failed');
        }
      })
      .then((data) => {
        // Store the token in local storage
        localStorage.setItem('token', data.token);
        // Check the "success" flag in the response
        if (data.success) {
          // Set loggedIn to true and perform the redirection
          onLoginSuccess(true);
          // Use the navigate function for client-side routing
          navigate('/dashboard');
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const loginStyle = {
    backgroundColor: '#d8c8b8',
    height:'100%',
    margin: 0,
    padding: 0,
    color: "white",
    position: "relative",
  };
  const cardStyle ={
    position: "absolute",
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width:'70%',
    height: '70%',
    display: "flex",
    justifyContent: "center",
  };
  return (
    <div  style={loginStyle} >
      <Card style={cardStyle}>
      <Row className='text-center'>
        <div className="col-md-4 offset-md-4">
          <div className="login-form ">
            <h2>Student Login</h2>
            <form>
              <div className="form-group">
                <input
                  type="text"
                  name="username"
                  className="form-control"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>

              <div className="form-group mt-2">
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <Button variant="primary" className="mt-2"onClick={handleLogin}>Login</Button>
            </form>
          </div>
        </div>
      </Row>
      </Card>
    </div>
  );
}

export default Login;
