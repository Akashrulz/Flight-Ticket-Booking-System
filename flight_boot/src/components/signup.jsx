import React, { Component } from "react";
import Signup_Service from "../services/Signup_Service";

class signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",  
      email: "",
      password: "",
      mobile:"",

    }

    this.changeNameHandler= this.changeNameHandler.bind(this);
    this.changeEmailHandler = this.changeEmailHandler.bind(this);
    this.changePasswordHandler = this.changePasswordHandler.bind(this);
    this.changeMobileHandler=this.changeMobileHandler.bind(this);
    this.saveSignup = this.saveSignup.bind(this);

  }

  saveSignup = (e) => {
    e.preventDefault();
    let scredentials = { name: this.state.name , email: this.state.email, password: this.state.password, mobile: this.state.mobile };
    console.log('SCredentials => ' + JSON.stringify(scredentials));

    Signup_Service.createNewPassenger(scredentials).then(res => {
      this.props.history.push("/login")

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
    this.setState({ mobile: event.target.value });
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
              <h2 className="text-center">Signup</h2>
              <div className="card-body">
                <form>
                <div className="form-group"> <label>Name </label>
                    <input style={{width :400,marginLeft:60}}
                      placeholder="Name"
                      name="name"
                      className="form-control"
                      value={this.state.name}
                      onChange={this.changeNameHandler}
                    />
                  </div>

                  <div className="form-group"> <label>Email Id </label>
                    <input style={{width :400,marginLeft:60}}
                      placeholder="Email Id"
                      name="email"
                      className="form-control"
                      value={this.state.email}
                      onChange={this.changeEmailHandler}
                    />
                  </div>

                  <div className="form-group">
                    <label>Password </label>
                    <input type="password" style={{width :400,marginLeft:60}}
                      placeholder="Password"
                      name="password"
                      className="form-control"
                      value={this.state.password}
                      onChange={this.changePasswordHandler}
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

                  <button className="btn btn-success" onClick={this.saveSignup}>Signup</button>
                  <button className="btn btn-danger" style={{marginLeft:20}} onClick={this.cancel.bind(this)} >Cancel</button>


                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default signup;
