import React from "react";

const studlist = [
  {
    slno: 1,
    name: "stud1",
    usn: "rvce1",
    tmarks: 150,
  },
  {
    slno: 2,
    name: "stud2",
    usn: "rvce2",
    tmarks: 145,
  },
];

class StudentRow extends React.Component {
  render() {
    const studl = this.props.stdli;

    return (
      <tr>
        <td>{studl.slno}</td>
        <td>{studl.name}</td>
        <td>{studl.usn}</td>
        <td>{studl.tmarks}</td>
      </tr>
    );
  }
}

class StudentsTable extends React.Component {
  render() {
    const studrows = this.props.studlist.map((studli) => (
      <StudentRow key={studli.slno} stdli={studli} />
    ));

    return (
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Sl No</th>
            <th>Student Name</th>
            <th>USN</th>
            <th>Total Marks</th>
          </tr>
        </thead>

        <tbody>{studrows}</tbody>
      </table>
    );
  }
}

class StudentListTable extends React.Component {
  constructor() {
    super();

    this.state = {
      newStudList: [],
    };
  }

  componentDidMount() {
    this.loadData();
  }

  loadData() {
    setTimeout(() => {
      this.setState({ newStudList: studlist }, () => {
        setTimeout(() => {
          this.loadupdate();
        }, 1000);
      });
    }, 1000);

    console.log("I have loaded the student list component");
  }

  loadupdate() {
    const newstudlist1 = this.state.newStudList.slice();

    const stud = {
      slno: 3,
      name: "rvce12",
      usn: "rvce12",
      tmarks: 250,
    };

    newstudlist1.push(stud);

    this.setState({
      newStudList: newstudlist1,
    });
  }

  render() {
    return (
      <React.Fragment>
        <h1>Student List</h1>
        <hr />

        <StudentsTable studlist={this.state.newStudList} />

        <hr />
      </React.Fragment>
    );
  }
}

export default StudentListTable;