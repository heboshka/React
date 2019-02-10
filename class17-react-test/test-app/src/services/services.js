export default class employeesService {

  static getEmpolyeesList() {
    // return fetch('https://reqres.in/api/users')
    //   .then(response => this.checkStatusCode(response))

    return fetch('https://reqres.in/api/users')
      .then(response => response.json())

  }

  static checkStatusCode(response) {
    if (response.status === 200) {
      return response.json();
    } else {
      throw response.json();
    }
  }
}
