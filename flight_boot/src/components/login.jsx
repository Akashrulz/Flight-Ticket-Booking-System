import React, { Component } from "react";
import Signup_Service from "../services/Signup_Service";

class login extends Component {
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
    /*let LCredentials = { email: this.state.email, password: this.state.password };
    console.log('LCredentials => ' + JSON.stringify(LCredentials));

    Signup_Service.checklogin(LCredentials).then(res => {*/
      this.props.history.push("/")

    //});
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
              <h2 className="text-center">Login</h2>
              <div className="card-body" style={{textAlign :"center"}}>
                <form>
                  <div className="form-group"> <label>Email Id </label>
                    <input style={{width :400,marginLeft:60,marginTop:20}}
                      placeholder="Email Id"
                      name="email"
                      className="form-control"
                      value={this.state.email}
                      onChange={this.changeEmailHandler}
                    />
                  </div>

                  <div className="form-group">
                    <label style={{marginTop:10}}>Password </label>
                    <input type="password" 
                    style={{width :400,marginLeft:60,marginTop:15}}
                      placeholder="Password"
                      name="password"
                      className="form-control"
                      value={this.state.password}
                      onChange={this.changePasswordHandler}
                    />
                  </div>

                  <button className="btn btn-success" style={{marginTop: 30}} onClick={this.saveLogin}>Login</button>
                  <button className="btn btn-danger" style={{marginTop: 30,marginLeft:20}} onClick={this.cancel.bind(this)} >Cancel</button>


                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default login;
