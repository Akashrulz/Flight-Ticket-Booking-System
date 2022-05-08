import React, { Component } from "react";
import Passenger_Service from "../services/Passenger_Service";

class addpassengers extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    }
    this.changeEmailHandler = this.changeEmailHandler.bind(this);
    this.changePasswordHandler = this.changePasswordHandler.bind(this);
    this.saveLogin = this.saveLogin.bind(this);

  }

  saveLogin = (e) => {
    e.preventDefault();
    let LCredentials = { email: this.state.email, password: this.state.password };
    console.log('LCredentials => ' + JSON.stringify(LCredentials));

    Passenger_Service.checklogin(LCredentials).then(res => {
      this.props.history.push("/")

    });
  }

  changeEmailHandler = (event) => {
    this.setState({ email: event.target.value });
  }

  changePasswordHandler = (event) => {
    this.setState({ password: event.target.value });
  }

  cancel() {
    this.props.history.push("/");

  }


  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              <h2 className="text-center">Add Passenger</h2>
              <div className="card-body">
                <form>
                  <div className="form-group"> <label>First Name</label>
                    <input  style={{width :400,marginLeft:60}} 
                      placeholder="First Name"
                      name="firstName"
                      className="form-control"
                      value={this.state.firstName}
                      onChange={this.changeFirstNameHandler}
                    />
                  </div>

                  <div className="form-group"> <label>Last Name</label>
                    <input  style={{width :400,marginLeft:60}} 
                      placeholder="Last Name"
                      name="lastName"
                      className="form-control"
                      value={this.state.lastName}
                      onChange={this.changeLastNameHandler}
                    />
                  </div>

                  <div className="form-group"> <label>Email Id</label>
                    <input  style={{width :400,marginLeft:60}} 
                      placeholder="Email Id"
                      name="email"
                      className="form-control"
                      value={this.state.email}
                      onChange={this.changeEmailHandler}
                    />
                  </div>

 
                  <div className="form-group">
                    <label>Mobile No</label>
                    <input  style={{width :400,marginLeft:60}}
                      placeholder="Mobile No"
                      name="mobileNo"
                      className="form-control"
                      value={this.state.mobileNo}
                      onChange={this.changeMobileNoHandler}
                    />
                  </div>

                  <button className="btn btn-success" onClick={this.saveLogin}>Add </button>
                  <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }}>Cancel</button>


                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default addpassengers;
