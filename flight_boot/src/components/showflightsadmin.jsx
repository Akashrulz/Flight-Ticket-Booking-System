import React, { Component } from "react";
import Flight_Service from "../services/Flight_Service";

class showflightadmin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      adminflights: [],
    };

    this.addFlight=this.addFlight.bind(this);
    this.deleteflight=this.deleteflight.bind(this);
    this.editflight=this.editflight.bind(this);
    


  }

  componentDidMount() {
    Flight_Service.getFlights().then((res) => {
      this.setState({ adminflights: res.data });
    });
  }

  addFlight(){
    this.props.history.push("/newflight");
  }
  deleteflight(fid){
    Flight_Service.deleteflight(fid).then(res => {
      this.setState({adminflights:this.state.adminflights.filter(adminflight =>adminflight.fid !== fid)});

    });


  }
 
  editflight(fid){
    
    
      this.props.history.push(`/editflight/${fid}`);

    



}

  render() {
    return (
      <div>
        <h2 className="text-center" style={{marginTop:10}}>All Flights Details </h2>
        <button className="btn btn-primary" onClick={this.addFlight} style={{width:150, marginLeft:970,marginTop:0}}>Add Flight</button>
        
        <div className="row">
          <table className="table table-striped table-bordered table-hover" style={{marginTop:0}} >
            <thead className="text-center">
              <tr>
                <th style={{width:105}}>Airline Name</th>
                <th style={{width:40}}>From</th>
                <th style={{width:40}}>To</th>
                <th style={{width:40}}>Takeoff Time</th>
                <th style={{width:40}}>Landing Time</th>
                <th style={{width:40}}>Fare FC</th>
                <th style={{width:40}}>Fare EC</th>
                <th style={{width:80}}>Date</th>
                <th style={{width:40}}>Notification</th>
                <th style={{width:40}}>Delete</th>
                <th style={{width:40}}>Update</th>               
                
                
              </tr>              
            </thead>

            <tbody>
              {this.state.adminflights.map((adminflight) => (
                <tr key={adminflight.fid}>
                  <td>{adminflight.airlineName}</td>
                  <td>{adminflight.source}</td>
                  <td>{adminflight.destination}</td>
                  <td>{adminflight.startTime.substring(0,5)}</td>
                  <td>{adminflight.endTime.substring(0,5)}</td>
                  <td>{adminflight.fareFirst}</td>
                  <td>{adminflight.fareEconomy}</td>
                  <td>{adminflight.date.substring(0,10)}</td>
                  <td>{adminflight.notification}</td>                  
                  <td><button value={adminflight.fid} onClick={ () => this.deleteflight(adminflight.fid)} className="btn btn-danger" style={{marginTop:2}} >Delete</button></td>
                  <td><button value={adminflight.fid} onClick={ () => this.editflight(adminflight.fid)} className="btn btn-danger" style={{marginTop:2}} >Edit</button></td>
                
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default showflightadmin;
