import React, { Component} from "react";
import Flight_Service from "../services/Flight_Service";


class home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      source: "",
      destination: "",
      date:""
    }

    this.handleDropdownSChange=this.handleDropdownSChange.bind(this);
    this.changeDateHandler=this.changeDateHandler.bind(this);
    this.searchFlight=this.searchFlight.bind(this,false);
    this.handleDropdownDChange = this.handleDropdownDChange.bind(this);
  }
    
  searchFlight(){
    
    let source=this.state.source;
    let destination=this.state.destination;
    //console.log('data => ' + JSON.stringify(source));
  
    this.props.history.push(`/showflightspass/${source}/${destination}`);
  }

  handleDropdownSChange = (event) => {
    this.setState({ source: event.target.value });
  }

  handleDropdownDChange  = (event) => {
    this.setState({ destination: event.target.value });
  }

  changeDateHandler  = (event) => {
    this.setState({ date: event.target.value });
  }

  cancel(){
    this.props.history.push("/");

  }


  render() {
    return (
      <div>
        
        <div className="container">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              <h2 className="text-center">Flights</h2>
              <div className="card-body" style={{textAlign :"center"}}>
                <form>

                  <div className="form-group" style={{marginTop: 10}} >
                    <label style={{marginRight: 20}}>From     </label>
                    <select  id="dropdownfrom" name="source" style={{width: 170, height:30}} onChange={this.handleDropdownSChange}>
                      <option> </option>
                      <option>Mumbai</option>
                      <option>Delhi</option>
                      <option>Banglore</option>
                      <option>kolkata</option>
                    </select>                    
                  </div>
                  

                  <div className="form-group" style={{marginTop: 30, marginLeft:20}}>
                    <label style={{marginRight: 20}}>   To   </label>
                    <select  id="dropdownto" name="destination" style={{width: 170, height:30}} onChange={this.handleDropdownDChange}>
                      <option> </option>
                      <option>Mumbai</option>
                      <option>Delhi</option>
                      <option>Banglore</option>
                      <option>kolkata</option>
                    </select>
                  </div>

                  
                  <div className="form-group" style={{marginTop: 30}}>
                    <label>Date</label>
                    <input type="date" style={{width :230,marginLeft:150}}
                      name="date"
                      className="form-control"
                      value={this.state.date}
                      onChange={this.changeDateHandler}
                    />
                  </div>

                  <button className="btn btn-success" style={{marginTop: 30}} onClick={this.searchFlight}>Search Flights</button>
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

export default home;
