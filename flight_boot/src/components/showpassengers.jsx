import React, { Component } from "react";
import Passenger_Service from "../services/Passenger_Service";

class showpassengers extends Component {
  constructor(props) {
    super(props);

    this.state = {
      passengers: [],
    };
    this.addFlight = this.addFlight.bind(this);
  }

  componentDidMount() {
    Passenger_Service.getPassengers().then((res) => {
      this.setState({ passengers: res.data });
    });
  }

  addFlight() {
    this.props.history.push("/newflight");
  }

  render() {
    return (
      <div>
        <h2 className="text-center">Passenger Details</h2>
        
        <div className="row">
          <table className="table table-striped table-bordered">
            <thead className="text-center">
              <tr>
                <th> First Name</th>
                <th> Last Name</th>
                <th> Mobile No.</th>
                <th>Email Id</th>
                <th>Delete</th>
                <th>Update</th>
              </tr>
            </thead>

            <tbody>
              {this.state.passengers.map((passenger) => (
                <tr key={passenger.pid}>
                  <td>{passenger.first_name}</td>
                  <td>{passenger.last_name}</td>
                  <td>{passenger.mobile}</td>
                  <td><button className="btn btn-primary" onClick={this.addFlight}>Edit</button></td>
                  <td><button className="btn btn-danger" onClick={this.addFlight}>Delete</button></td>  
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default showpassengers;
