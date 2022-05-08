import React, { Component } from "react";
import Flight_Service from "../services/Flight_Service";

class showflightspass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      avalflights: [],
    };

    this.bookflight = this.bookflight.bind(this);
  }

  componentDidMount() {
    let source=this.props.match.params.source;
    let destination=this.props.match.params.destination;    
    Flight_Service.getSearchFlights(source,destination).then((res) => {
      this.setState({ avalflights: res.data });
    });
  }

  bookflight(fid) {
    console.log("hi");
    //this.props.history.push(`showflightspass/totalseats/${fid}`);
    let source=this.props.match.params.source;
    let destination=this.props.match.params.destination;
    
    this.props.history.push(`/showflightspass/${source}/${destination}/totalseats/${fid}`);

   // this.props.history.push(`/editflight/${fid}`);
   

  }

  render() {
    return (
      <div>
        <h2 className="text-center" style={{marginTop:10}}>Available Flights</h2>
        <div className="row">
          <table className="table table-striped table-bordered table-hover" style={{marginTop:5}} >
            <thead className="text-center">
              <tr>
                <th style={{width:40}}>Airline Name</th>
                <th style={{width:40}}>From</th>
                <th style={{width:40}}>To</th>
                <th style={{width:40}}>Takeoff Time</th>
                <th style={{width:40}}>Landing Time</th>
                <th style={{width:40}}>Fare FC</th>
                <th style={{width:40}}>Fare EC</th>
                <th style={{width:40}}>Date</th>
                <th style={{width:40}}>Book Flight</th>
                
                
              </tr>
            </thead>

            <tbody>
              {this.state.avalflights.map((avalflight) => (<tr key={avalflight.fid}>
                  <td>{avalflight.airlineName}</td>
                  <td>{avalflight.source}</td>
                  <td>{avalflight.destination}</td>
                  <td>{avalflight.startTime.substring(0,5)}</td>
                  <td>{avalflight.endTime.substring(0,5)}</td>
                  <td>{avalflight.fareFirst}</td>
                  <td>{avalflight.fareEconomy}</td>
                  <td>{avalflight.date.substring(0,10)}</td>
                  <td><button value={avalflight.fid} onClick={ () => this.bookflight(avalflight.fid)} className="btn btn-primary" style={{marginTop:0}} >Book</button></td>
                
                </tr>
              ))}           
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default showflightspass;
