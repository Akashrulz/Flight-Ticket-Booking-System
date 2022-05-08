import React, { Component } from "react";
import Passenger_Service from "../services/Passenger_Service";

class editpassenger extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",  
      email: "",
      password: "",
      mobile:"",

    }
    this.changeEmailHandler = this.changeEmailHandler.bind(this);
    this.changePasswordHandler = this.changePasswordHandler.bind(this);
    this.saveSignup = this.saveSignup.bind(this);

  }

  saveSignup = (e) => {
    e.preventDefault();
    let SCredentials = { name: this.state.name , email: this.state.email, password: this.state.password, mobile: this.state.mobile };
    console.log('SCredentials => ' + JSON.stringify(SCredentials));

    Passenger_Service.checklogin(SCredentials).then(res => {
      this.props.history.push("/")

    });
  }

  changeNameHandler = (event) => {
    this.setState({ name: event.target.value });
  }
  changeEmailHandler = (event) => {
    this.setState({ email: event.target.value });
  }

  changePasswordHandler = (event) => {
    this.setState({ password: event.target.value });
  }

  changeMobileHandler = (event) => {
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
              <h2 className="text-center">Update Passenger Details</h2>
              <div className="card-body">
                <form>
                <div className="form-group"> <label>First Name</label>
                    <input style={{width :400,marginLeft:60}}
                      placeholder="First Name"
                      name="firstname"
                      className="form-control"
                      value={this.state.firstname}
                      onChange={this.changeFirstNameHandler}
                    />
                  </div>

                  <div className="form-group"> <label>Last Name</label>
                    <input style={{width :400,marginLeft:60}}
                      placeholder="Last Name"
                      name="lastname"
                      className="form-control"
                      value={this.state.lastname}
                      onChange={this.changeLastNameHandler}
                    />
                  </div>

                  <div className="form-group">
                    <label>Email</label>
                    <input style={{width :400,marginLeft:60}}
                      placeholder="Email"
                      name="email"
                      className="form-control"
                      value={this.state.email}
                      onChange={this.changeEmailHandler}
                    />
                  </div>

                  <div className="form-group"> <label>Mobile No </label>
                    <input style={{width :400,marginLeft:60}}
                      placeholder="Mobile No"
                      name="mobile"
                      className="form-control"
                      value={this.state.mobile}
                      onChange={this.changeMobileHandler}
                    />
                  </div>

                  <button className="btn btn-success" onClick={this.updatepassenger}>Update</button>
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

export default editpassenger;
