import React, { Component } from 'react';
import Booking_Service from '../services/Booking_Service';
import Flight_Service from "../services/Flight_Service";

class ticketnew extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
          adminflightsnew: [],
          bookings:[],
          passengers:[],

        };
        
      }
    
      componentDidMount() {
        let fid=this.props.match.params.fid;
        let bid=this.props.location.statekll.employeee;
        console.log("in ticketnew ");
        console.log(fid);
        
        Flight_Service.getFlightById(fid).then((res) => {
          this.setState({ adminflightsnew: res.data });
        });

        Booking_Service.getBookingById(bid).then((res) => {
            this.setState({bookings : res.data });
        });

        Booking_Service.getPassengersById(bid).then((res) => {
            this.setState({passengers : res.data });
        });


      }
    
      
    

  render() {
    return (
      <div>
        <h6 className="text-left" style={{marginTop:10}}>Payment is Successful</h6>
        <h4 className="text-center" style={{marginTop:10}}>Booked Ticket Details</h4>
        
        
        <div>
          <table className="table table-borderless table-sm" style={{marginTop:0}} >
            
              <tr>
              <th>Airline Name</th>
                <th>From</th>
                <th>To</th>
                
                <th>Takeoff Time</th>
                <th>Landing Time</th>                
                <th>Date</th> 
                      
                                
              </tr>              
            

            <tbody>
                <tr>
                  <td>{this.state.adminflightsnew.airlineName}</td>
                  <td>{this.state.adminflightsnew.source}</td>
                  <td>{this.state.adminflightsnew.destination}</td>
                  <td>{this.state.adminflightsnew.startTime}</td>
                  <td>{this.state.adminflightsnew.endTime}</td>
                  <td>{this.state.adminflightsnew.date}</td>        
                </tr>

                <tr>
                <td></td>
                      <td></td>
                  <th>FirstName</th>
                  <th>LastName</th>
                  <th>Email</th>
                  <th>Mobile</th>
                </tr>

                  
                  {this.state.passengers.map((pass) => (
                  <tr key={pass.pid}>
                      <td></td>
                      <td></td>
                  <td>{pass.firstName}</td>
                  <td>{pass.lastName}</td>
                  <td>{pass.email}</td>
                  <td>{pass.mobile}</td>                
                                  
                </tr>
              ))}


                  <tr>
                  <td></td>
                  <td></td>
                  
                  <td></td>
                  <th>First Class</th>
                  <th>Economy Class</th>    
                  <th>Total Fare</th>    
                  </tr>


                 <tr>
                 
                 <td></td>
                  
                  <td></td>
                  <td></td>
                  <td>{this.state.bookings.numberofFirst}</td>
                 <td>{this.state.bookings.numberofEconomy}</td>
                  
                 <td>{this.state.bookings.fareTotal}</td>
                 </tr>

                
              
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ticketnew;
