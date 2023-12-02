import { Route, Routes } from "react-router-dom";
import Header from "./Header.js"
import Footer from "./Footer.js";
import Note from "./Note.js";
import Form from "./Form.js";
import Problem4 from "./Problem4.js";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div>
      <Header />
      {/* <Problem4 /> */}
      <Form />
      {/* <Note title="Title" content="content"/> */}
      <Footer />
    </div>
  );
}

export default App;
