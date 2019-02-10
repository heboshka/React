import React from 'react';
import employeesService from '../services/services';

export default class Employees extends React.Component {
  state = {
    employees: []
  }

  componentDidMount() {
    employeesService.getEmpolyeesList()
      .then(employees => {
        this.setState({ employees: employees.data })

      })
  }
  render() {
    const employeesData = this.state.employees;

    const employeesList = employeesData.length > 0 ? employeesData.map(item => {

      return (
        <React.Fragment>
          <h3>{item.first_name} {item.last_name} </h3>
          <img src={item.avatar} alt='user' />
        </React.Fragment>
      )
    }) : <></>

    return (
      <div className="emp-class">
        <h1>Employee List </h1>
        {employeesList}
      </div>
    )
  }
}