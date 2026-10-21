import React from "react";

const studlist = [
  { slno: 1, name: "Anvita", usn: "rvce1", tmarks: 150 },
  { slno: 2, name: "Aditi", usn: "rvce2", tmarks: 145 }
];

// 1. Display one student
class StudentRow extends React.Component {
  render() {
    const s = this.props.stdli;

    return (
      <tr>
        <td>{s.slno}</td>
        <td>{s.name}</td>
        <td>{s.usn}</td>
        <td>{s.tmarks}</td>
      </tr>
    );
  }
}

// 2. Display the table
class StudentsTable extends React.Component {
  render() {
    return (
      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>Sl No</th>
            <th>Name</th>
            <th>USN</th>
            <th>Marks</th>
          </tr>
        </thead>
        <tbody>
          {this.props.studlist.map(s => (
            <StudentRow key={s.slno} stdli={s} />
          ))}
        </tbody>
      </table>
    );
  }
}

// 3. Add Student component
class StudentAddSubmit extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      usn: "",
      tmarks: ""
    };
  }

  handleSubmit = () => {
    if (!this.state.name || !this.state.usn || this.state.tmarks === "") {
      alert("Please enter all student details");
      return;
    }

    this.props.CreateStudentAdd({
      name: this.state.name,
      usn: this.state.usn,
      tmarks: Number(this.state.tmarks)
    });

    this.setState({ name: "", usn: "", tmarks: "" });
  };

  render() {
    return (
      <div>
        <h3>Add New Student</h3>

        Name:
        <input
          value={this.state.name}
          onChange={(e) => this.setState({ name: e.target.value })}
        />

        USN:
        <input
          value={this.state.usn}
          onChange={(e) => this.setState({ usn: e.target.value })}
        />

        Marks:
        <input
          type="number"
          value={this.state.tmarks}
          onChange={(e) => this.setState({ tmarks: e.target.value })}
        />

        <button onClick={this.handleSubmit}>Add Student</button>
      </div>
    );
  }
}

// 4. Main component
class StudentListTable extends React.Component {
  constructor() {
    super();
    this.state = { newStudList: [] };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ newStudList: studlist }, () => {
        setTimeout(() => this.loadupdate(), 1000);
      });
    }, 1000);
  }

  loadupdate() {
    const list = this.state.newStudList.slice();

    list.push({
      slno: 3,
      name: "Adithi",
      usn: "rvce12",
      tmarks: 250
    });

    this.setState({ newStudList: list });
  }

  CreateStudentAdd = (student) => {
  const list = this.state.newStudList.slice();

  const nextId = list.length
    ? Math.max(...list.map(s => s.slno)) + 1
    : 1;

  list.push({
    slno: nextId,
    name: student.name,
    usn: student.usn,
    tmarks: student.tmarks
  });

  this.setState({ newStudList: list });
};

  render() {
    return (
      <div>
        <h2>Student List</h2>

        <StudentsTable studlist={this.state.newStudList} />

        <hr />

        <StudentAddSubmit CreateStudentAdd={this.CreateStudentAdd} />
      </div>
    );
  }
}

export default StudentListTable;