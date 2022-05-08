// parent component
import React, { Component } from "react";
import TextField from "./TextField";

class test11 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          key: Date.now(),
          firstname: "",
          lastname: ""
        }
      ]
    };

    this.pay=this.pay.bind(this);
  }


  pay(){

    let users=this.state.users;
    console.log('nflight => ' + JSON.stringify(users));


  }


  onChange = (inputUser) => {
    this.setState((prevState) => {
      const newUsers = prevState.users.map((element) => {
        if (element.key === inputUser.key) return inputUser;
        return element;
      });

      
      return { users: newUsers };
    });
  };

  addElement = () => {
    const { firstname, lastname} = this.state;
    this.setState((prevState) => ({
      users: prevState.users.concat({
        key: Date.now(),
        firstname,
        lastname
      })
    }));
  };

  removeElement = (id) => {
    this.setState((prevState) => ({
      users: prevState.users.filter((user) => user.key !== id)
    }));
  };

  render() {
    const { users } = this.state;
    return (
        
      <div className="card col-md-6 offset-md-3 offset-md-3">
          <h3 align="center">Passenger Names</h3>
          <button className="btn btn-primary" style={{width:150, marginLeft:400,marginTop:15}} type="button" onClick={this.addElement}>
                Add
            </button>
          
        
        <div className="container">

          {users.map((user) => (
            <React.Fragment key={user.key}>
              <TextField
                value={user}
                onChange={(inputUser) => this.onChange(inputUser)}
              />

            

              <button
                type="button" className="btn btn-danger" style={{width:150, marginLeft:70,marginTop:15}}
                onClick={() => this.removeElement(user.key)}
                disabled={users.length <= 1}
              >
                Remove
              </button>
            </React.Fragment>
          ))}
          <button className="btn btn-success" onClick={this.pay} style={{width:150, marginLeft:70,marginTop:0}}>Make Payment</button>
        
        </div>
      </div>
      
    );
    
  }
  
}


export default test11;