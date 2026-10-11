import React from "react";
import "./App.css";

import Resume_Header from "./ResumeCreate/Resume_Header";
import Resume_Person_Info from "./ResumeCreate/Resume_Person_Info";
import Education from "./ResumeCreate/Education";

class App extends React.Component {
  render() {
    return (
      <div className="resume">
        <Resume_Header />

        <Resume_Person_Info />

        <h2>Educational Qualifications</h2>

        <Education />
      </div>
    );
  }
}

export default App;