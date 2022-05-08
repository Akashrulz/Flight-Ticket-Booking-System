import React, { Component } from "react";
import Booking_Service from "../services/Booking_Service";


class totalseats extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fareTotal:"",
      numberofFirst: "",
      numberofEconomy: ""
    }

    this.changeFirstClassHandler = this.changeFirstClassHandler.bind(this);
    this.changeTotalFareHandler=this.changeTotalFareHandler.bind(this);
    this.changeEconomyClassHandler = this.changeEconomyClassHandler.bind(this);
    this.saveSeats = this.saveSeats.bind(this);

  }

  saveSeats(){
    

    
    let numberofFirst=this.state.numberofFirst;
    let numberofEconomy=this.state.numberofEconomy;
    let fid=this.props.match.params.fid;
    console.log(fid);
    let destination=this.props.match.params.destination;
    let source=this.props.match.params.source;
    

    let Tseats = { fid: this.props.match.params.fid,numberofFirst: this.state.numberofFirst, numberofEconomy: this.state.numberofEconomy ,fareTotal:this.state.fareTotal };
    console.log('Tseats => ' + JSON.stringify(Tseats));

    Booking_Service.savenewtotal(Tseats).then( res => { 
      let bid=res.data.bid;
     console.log(bid);
     console.log("hi how are you");

     console.log("out out");
    console.log(bid);
      this.props.history.push({
        pathname:`/${numberofFirst}/addpass/${numberofEconomy}/${fid}`,
        statekl:{employee:bid}
      });


      
    });
          
     this.props.history.push(`/${numberofFirst}/addpass/${numberofEconomy}/${fid}`);
      //this.props.history.push(`/showflightspass/${source}/${destination}/totalseats/${fid}/hihow/${numberofFirst}/${numberofEconomy}`);
      //this.props.history.push(`/showflightspass/totalseats/addpassengers/${fid}/${numberofFirst}/${numberofEconomy}`);

    
  }

  changeFirstClassHandler = (event) => {
    this.setState({ numberofFirst: event.target.value });
  }

  changeTotalFareHandler = (event) => {
    this.setState({ fareTotal: event.target.value });
  }

  changeEconomyClassHandler = (event) => {
    this.setState({ numberofEconomy: event.target.value });
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
              <h2 className="text-center">Total Seats</h2>
              <div className="card-body">
                <form>
                  
                  <div className="form-group" style={{marginTop: 30, marginLeft:30}}>
                    <label style={{marginRight: 20}}>   First Class  </label>
                    <select  id="dropdown" name="numberofFirst" 
                     value={this.state.numberofFirst} 
                    style={{marginLeft:20 ,width: 170, height:36}} onChange={this.changeFirstClassHandler}>
                      <option>0</option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                    </select>
                  </div>

                  <div className="form-group" style={{marginTop: 30, marginLeft:30}}>
                    <label style={{marginRight: 0}}>Economy Class  </label>
                    <select  id="dropdown" name="numberofEconomy" 
                     value={this.state.numberofEconomy} 
                    style={{marginLeft:13 ,width: 170, height:36}} onChange={this.changeEconomyClassHandler}>
                       <option>0</option> 
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                    </select>
                  </div>

                 
                  <div className="form-group">
                    <label style={{marginRight:1}}> Total Fare </label>
                    <input style={{width :170,marginLeft:20,marginTop:10}}
                      placeholder="Total Fare"
                      name="fareTotal"
                      //className="form-control"
                      value={this.state.fareTotal}
                      onChange={this.changeTotalFareHandler}
                    />
                  </div>

                  <button className="btn btn-primary" onClick={this.saveSeats} style={{marginTop:"25px"}}>Proceed</button>
        

                 
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

export default totalseats;
