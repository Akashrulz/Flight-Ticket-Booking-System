import React, { Component } from "react";
import Flight_Service from "../services/Flight_Service";

class newflight extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fid:"",
      source:"",
      destination:"",
      airlineName:"",
      date:"",
      fcode:"",
      fareFirst: "",
      fareEconomy:"",
      startTime:"",
      endTime:"",
      seatFirst:"",
      seatEconomy:"",
      notification:"",
    }

    this.changeSourceHandler=this.changeSourceHandler.bind(this);
    this.changeDestinationHandler=this.changeDestinationHandler.bind(this);
    this.changeAirlineNameHandler=this.changeAirlineNameHandler.bind(this);
    this.changeDateHandler=this.changeDateHandler.bind(this);
    this.changeFlightCodeHandler=this.changeFlightCodeHandler.bind(this);
    this.changeFareFCHandler=this.changeFareFCHandler.bind(this);
    this.changeFareECHandler=this.changeFareECHandler.bind(this);
    this.changeStartTimeHandler=this.changeStartTimeHandler.bind(this);
    this.changeEndTimeHandler=this.changeEndTimeHandler.bind(this);
    this.changeSeatFirstHandler=this.changeSeatFirstHandler.bind(this);
    this.changeSeatEconomyHandler=this.changeSeatEconomyHandler.bind(this);
    this.changeNotificationHandler=this.changeNotificationHandler.bind(this);
    this.save=this.save.bind(this);

  } 

  

  save=(e)=>{
    e.preventDefault();
    let nflight={ 
      source:this.state.source,
    destination:this.state.destination,
    airlineName:this.state.airlineName,
    date:this.state.date,
    fcode:this.state.fcode,
    fareFirst:this.state.fareFirst,
    fareEconomy:this.state.fareEconomy,
    startTime:this.state.startTime,
    endTime:this.state.endTime,
    seatFirst:this.state.seatFirst,
    seatEconomy:this.state.seatEconomy,
    notification:this.state.notification
      };

    console.log('nflight => ' + JSON.stringify(nflight));

      Flight_Service.createNewFlight(nflight).then(res => {
        this.props.history.push("/flightdetailsadmin/showflightsadmin")
  
      });

    }

  changeSourceHandler = (event) => {
    this.setState({ source: event.target.value });
  }

  changeDestinationHandler = (event) => {
    this.setState({ destination: event.target.value });
  }

  changeAirlineNameHandler = (event) => {
    this.setState({ airlineName: event.target.value });
  }

  changeDateHandler = (event) => {
    this.setState({ date: event.target.value });
  }

  changeFlightCodeHandler = (event) => {
    this.setState({ fcode: event.target.value });
  }

  changeFareFCHandler = (event) => {
    this.setState({ fareFirst: event.target.value });
  }

  changeFareECHandler = (event) => {
    this.setState({ fareEconomy: event.target.value });
  }

  changeStartTimeHandler = (event) => {
    this.setState({startTime: event.target.value+":00" });
  }

  changeEndTimeHandler = (event) => {
    this.setState({ endTime: event.target.value+":00" });
  }

  
  changeSeatFirstHandler = (event) => {
    this.setState({ seatFirst: event.target.value });
  }

  changeSeatEconomyHandler = (event) => {
    this.setState({ seatEconomy: event.target.value });
  }

  changeNotificationHandler = (event) => {
    this.setState({ notification: event.target.value });
  }


  cancel(){
    this.props.history.push("/flightdetailsadmin/showflightsadmin");

  }

  render() {
    return (
      <div>
         
        <div className="container">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              <h3 className="text-center">Add New Flight</h3>
              <div className="card-body">
                <form>
                
                
                  <div className="form-group" style={{marginTop: 30, marginLeft:30}}>
                    <label style={{marginRight: 20}}>   Source  </label>
                    <select  id="dropdown" name="source" value={this.state.source} 
                    style={{width: 170, height:30}} onChange={this.changeSourceHandler}>
                      <option> </option>
                      <option>Mumbai</option>
                      <option>Delhi</option>
                      <option>Banglore</option>
                      <option>kolkata</option>
                    </select>
                  </div>

                  <div className="form-group" style={{marginTop: 30, marginLeft:0}}>
                    <label style={{marginRight: 20}}>   Destination  </label>
                    <select  id="dropdown" name="destination" value={this.state.destination}
                     style={{width: 170, height:30}} onChange={this.changeDestinationHandler}>
                      <option> </option>
                      <option>Mumbai</option>
                      <option>Delhi</option>
                      <option>Banglore</option>
                      <option>kolkata</option>
                    </select>
                  </div>

                  <div className="form-group" style={{marginTop: 30, marginLeft:5}}>
                    <label style={{marginRight: 15}}>Airline Name</label>
                    <select  id="dropdown" name="airlineName" value={this.state.airlineName}
                     style={{width: 170, height:30}} onChange={this.changeAirlineNameHandler}>
                      <option> </option>
                      <option>Emirates</option>
                      <option>Qantas Airways</option>
                      <option>Singapore Air</option>
                      <option>Qatar Airways</option>
                      
                    </select>
                  </div>

                  <div className="form-group" style={{marginTop: 30}}>
                    <label style={{marginLeft:40}}>Date</label>
                    <input type="date" style={{width :170,marginLeft:20}}
                      name="date"
                      
                      value={this.state.date}
                      onChange={this.changeDateHandler}
                    />
                  </div>

                  <div className="form-group">
                    <label>Flight Code</label>
                    <input style={{width :400,marginLeft:60}}
                      placeholder="Flight Code"
                      name="fcode"
                      className="form-control"
                      value={this.state.fcode}
                      onChange={this.changeFlightCodeHandler}
                    />
                  </div>              
                  

                  <div className="form-group">
                    <label>Fare First Class</label>
                    <input type="number" style={{width :400,marginLeft:60}}
                      placeholder="Fare First Class"
                      name="fareFirst"
                      className="form-control"
                      value={this.state.fareFirst}
                      onChange={this.changeFareFCHandler}
                    />
                  </div>

                  

                  <div className="form-group">
                    <label>Fare Economy Class</label>
                    <input type="number"
                    style={{width :400,marginLeft:60}}
                      placeholder="Fare Economy Class"
                      name="fareEconomy"
                      className="form-control"
                      value={this.state.fareEconomy}
                      onChange={this.changeFareECHandler}
                    />
                  </div>

                  

                  <div className="form-group">
                    <label>Start Time</label>
                    <input type="time" 
                    style={{width :400,marginLeft:60}}
                      
                      placeholder="Start Time"
                      name="startTime"
                      className="form-control"
                      value={this.state.startTime}
                      onChange={this.changeStartTimeHandler}
                    />
                  </div>

                  <div className="form-group">
                    <label>End Time</label>
                    <input type="time"
                     style={{width :400,marginLeft:60}}
                      placeholder="End Time"
                      name="endTime"
                      className="form-control"
                      value={this.state.endTime}
                      onChange={this.changeEndTimeHandler}
                    />
                  </div>

                  <div className="form-group">
                    <label>Seat First</label>
                    <input style={{width :400,marginLeft:60}}
                      type="number"
                      placeholder="Seat First"
                      name="seatFirst"
                      className="form-control"
                      value={this.state.seatFirst}
                      onChange={this.changeSeatFirstHandler}
                    />
                  </div>
                  
                  <div className="form-group">
                    <label>Seat Economy</label>
                    <input style={{width :400,marginLeft:60}}
                      type="number"
                      placeholder="Seat Economy"
                      name="seatEconomy"
                      className="form-control"
                      value={this.state.seatEconomy}
                      onChange={this.changeSeatEconomyHandler}
                    />
                  </div>

                  

                  <div className="form-group">
                    <label>Notification</label>
                    <input style={{width :400,marginLeft:60}}
                      placeholder="Notification"
                      name="notification"
                      className="form-control"
                      value={this.state.notification}
                      onChange={this.changeNotificationHandler}
                    />
                  </div>


                  <button className="btn btn-success" onClick={this.save}>Add</button>
                  <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft:"10px"}}>Cancel</button>
                  

                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default newflight;
