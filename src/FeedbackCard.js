// ReminderItem.js
import React from 'react';
import './ReminderItem.module.css';
import Card from 'react-bootstrap/Card';
import {useState} from "react";

const FeedbackCard = ({ feedback, removeFeedback, updateFeedback }) => {



  // const submitForm = (e) => {
  //   e.preventDefault();
  //   // Call the updateReminder function passed down from the parent component
  //   updateReminder(reminder.firstName, editedText);
  //   // Disable editing mode
  //   setIsEditing(false);
  // };

  return (
    // <div className="reminder-item">
    //     <div className="flex-row">
    //         <div className="flex-row-small">
    //             <div className='name'>{reminder.firstName}</div>
    //             <div className='date'>{reminder.startDate}</div>
    //         </div>
    //         <button className="remove-button" onClick={() => removeReminder(reminder.firstName)}>X</button>
    //     </div>
        
    //     <div className="flex-column">
            
    //         <div>{reminder.course}</div>
    //         <div>{reminder.feedback}</div>
    //     </div>
    // </div>
  //   <>
  //   <Card.Text>
  //   {isEditing ? (
  //     <input
  //       type="text"
  //       value={editedText}
  //       onChange={(e) => setEditedText(e.target.value)}
  //     />
  //   ) : (
  //     reminder.feedback
  //   )}
  // </Card.Text>
  // <Card.Link href="#" onClick={handleEditClick}>
  //   Edit
  // </Card.Link>
  // </>

<Card style={{ width: '18rem' }}>
<Card.Body>
  <Card.Title className='name'>{feedback.firstName}</Card.Title>
  <Card.Subtitle className="mb-2 text-muted date">{feedback.startDate}</Card.Subtitle>
  <Card.Subtitle className="mb-2 text-muted">{feedback.course}</Card.Subtitle>
  <Card.Text>
  {feedback.feedback}
  </Card.Text>
  <Card.Link href="#" onClick={updateFeedback}>Edit</Card.Link>
  <Card.Link href="#" onClick={() => removeFeedback(feedback.firstName)}>Delete</Card.Link>
</Card.Body>
</Card> 
    
  );
};

export default FeedbackCard;
