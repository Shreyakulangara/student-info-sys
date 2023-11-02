import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
import { Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';


const localizer = momentLocalizer(moment);

function CalendarComponent() {
  const events = [];

  const today = new Date(); // Get the current date
  const cardStyle = {
    backgroundColor: '#F5F5F5',
  };
  return (
    <Card style={cardStyle}>
      <div className="container mt-3 mb-3 ">
        <Calendar
          localizer={localizer}
          events={events}
          defaultDate={today} // Set the default selected date to today
          style={{ height: 350 }}
        />
      </div>
    </Card>
  );
}

export default CalendarComponent;
