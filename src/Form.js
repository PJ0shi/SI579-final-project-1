import { useState, useEffect} from "react";
import FormItem from "./FormItem.js";
import FeedbackCard from "./FeedbackCard.js";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";

//These are the initial form values
const initialFormValues = {
  firstName: "",
  lastName: "",
  startDate: "",
  endDate: "",
};


const Form = () => {
//data for the entire form
  const [formData, setFormData] = useState(initialFormValues);
  // const noneEmpty = Object.values(formData).every(item => item.length > 0)

//checking if the form fields are empty (noneEmpty=true if all are filled) 
  const noneEmpty =
    String(formData.firstName) !== "" &&
    String(formData.startDate) !== "" &&
    String(formData.course) !== "" &&
    String(formData.feedback) !== "";

  const [inputText, setInputText] = useState("");

  //list of all the feedbacks
  const [feedbacks, setFeedbacks] = useState([]);


    // // Load reminders from local storage when the component mounts
    // useEffect(() => {
    //   const storedReminders = JSON.parse(localStorage.getItem('reminders')) || [];
    //   setReminders(storedReminders);
    // }, []);
  
    // // Save reminders to local storage whenever the reminders state changes
    // useEffect(() => {
    //   localStorage.setItem('reminders', JSON.stringify(reminders));
    // }, [reminders]);

  // updates the reminder list
  const addFeedback = () => {
    setFeedbacks((previousValue) => {
      return [...previousValue, formData];
    });

    //setFormData('')
    setFormData(initialFormValues);
    console.log("added reminder");
    console.log(feedbacks);
  };

  // const removeReminder = (text) => {
  //   // Use filter to keep anything that doesn't match the
  //   // `text` argument.
  //   setReminders(
  //     reminders.filter((item) => item !== formData.firstName)
  //   );
  // }

  const removeFeedback = (text) => {
    setFeedbacks((previousFeedbacks) =>
      previousFeedbacks.filter((feedback) => feedback.firstName !== text)
    );
  };

  const inputHandler = (e, stateName) => {
    setFormData((previousState) => {
      return {
        ...previousState,
        [stateName]: e.target.value,
      };
    });
  };

  const submitForm = (e) => {
    e.preventDefault();
    // setMessage(`${formData.firstName} ${formData.lastName}${formData.startDate} ${formData.endDate}`)
    setFormData(initialFormValues);
    // Call the updateReminder function passed down from the parent component
  };

  const updateReminder = (firstName, updatedFeedback) => {
    // Implement logic to update the reminder in your data store or state
    // For example, if reminders is a state variable:
    setFeedbacks((prevFeedbacks) =>
      prevFeedbacks.map((feedback) =>
      feedback.firstName === firstName
          ? { ...feedback, feedback: updatedFeedback }
          : feedback
      )
    );


    return (
      <div>
        <Card style={{ width: "60rem", padding: "2rem", margin: "2%" }}>
          <form className="col col-sm-12 col-lg-5" onSubmit={submitForm}>
            <FormItem
              label="Name"
              stateName="firstName"
              type="text"
              formData={formData}
              inputHandler={inputHandler}
            />
            {/* <FormItem label="Last Name" stateName="lastName" type="text" formData={formData} inputHandler={inputHandler} />       */}
            <FormItem
              label="Entry Date"
              stateName="startDate"
              type="date"
              formData={formData}
              inputHandler={inputHandler}
            />
            {/* <FormItem label="End Date" stateName="endDate" type="date" formData={formData} inputHandler={inputHandler} />       */}
            <FormItem
              label="Course"
              stateName="course"
              type="text"
              formData={formData}
              inputHandler={inputHandler}
            />
            <FormItem
              label="Feedback"
              stateName="feedback"
              type="text"
              formData={formData}
              inputHandler={inputHandler}
            />

            <div className="mb-3">
              {/* <button disabled={!noneEmpty && !startBeforeEnd} type='submit'>Submit Vacation Request</button> */}
              <button
                type="submit"
                className="btn btn-primary"
                onClick={addFeedback}
                disabled={!noneEmpty}
              >
                Add Feedback
              </button>
            </div>
          </form>
        </Card>

        {/* the returned list of reminders */}
        <div className="col col-sm-12 col-lg-8">
          {feedbacks.length === 0 && "no entries"}
          <ul>
            {feedbacks.length > 0 &&
              feedbacks.map((reminder, index) => (
                // <li key={index}>{`${reminder.firstName} ${reminder.lastName} ${reminder.startDate} ${reminder.course}`}<button onClick={(e) => removeReminder(reminder.firstName)} >X</button></li>)}
                <FeedbackCard
                  key={index}
                  feedback={feedback}
                  removeFeedback={removeFeedback}
                  updateFeedback={updateFeedback}
                />
              ))}
          </ul>
        </div>
      </div>
    );
  };
};

export default Form;
