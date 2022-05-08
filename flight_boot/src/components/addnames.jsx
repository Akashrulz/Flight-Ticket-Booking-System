import React, { Component } from 'react';
import Booking_Service from '../services/Booking_Service';
import Flight_Service from '../services/Flight_Service';

class addnames extends Component {   

    

    state = {
        names: [{firstName:"",lastName:"",email:"",mobile:"",seatNumber:""},],
        
    }


    handleAddPassengers= (e)=> {

        this.setState((prevState) => ({
            names:[...prevState.names,{firstName:"",lastName:"",email:"",mobile:""}],

        }));
    }

    handleChangeFirst(e, index) {
        this.state.names[index][e.target.name] = e.target.value

        this.setState([{ firstName: this.state.names.firstName }])

    }

    handleChangeLast(e, index) {
        this.state.names[index][e.target.name] = e.target.value

        this.setState([{ lastName: this.state.names.lastName }])

    }

    handleChangeEmail(e, index) {
        this.state.names[index][e.target.name] = e.target.value

        this.setState([{ email: this.state.names.email }])

    }

    handleChangeMobile(e, index) {
        this.state.names[index][e.target.name] = e.target.value

        this.setState([{ mobile: this.state.names.mobile }])
}


    handleRemove(index) {
        this.state.names.splice(index, 1)

        console.log(this.state.names, "$$$$");

        this.setState([{ names: this.state.names }])
    }

    handleSubmit(e) {
        console.log(this.state, "$$$$");
        console.log("hi in addnames component")
        let bid=this.props.location.statekl.employee;
        let fid=this.props.match.params.fid;
        
        console.log(fid);

        console.log(bid);
        let np;
        

        {this.state.names.map((kl)=> (

            np={bid:bid,firstName:kl.firstName,lastName:kl.lastName,email:kl.email,mobile:kl.mobile},


                        console.log(JSON.stringify(np)),
            
            Booking_Service.saveperson(np).then(res => {

                this.props.history.push({
                    pathname:`/tickets/${fid}`,
                    statekll:{employeee:bid}
                  });

                //this.props.history.push(`/tickets/${fid}`)

             })
            

        ))

        }

    }


    render() {
        return (
            <div className="card col-md-9 offset-md-1 offset-md-2">
            <div className='card-body' align="center">
                <h1>Add Passengers</h1>


                {
                    this.state.names.map((person, index) => {
                        return (
                            <div key={index}>
                                
                                <input name="firstName" placeholder="FirstName" className="btn btn-warning" onChange={(e) => this.handleChangeFirst(e, index)} value={person.firstName}/>

                                <input style={{marginLeft:5}} name="lastName" placeholder="LastName" className="btn btn-warning" onChange={(e) => this.handleChangeLast(e, index)} value={person.lastName} />

                                <input style={{marginLeft:5}} name="email" placeholder="Email" className="btn btn-warning" onChange={(e) => this.handleChangeEmail(e, index)} value={person.email}/>

                                <input name="mobile" placeholder="Mobile" className="btn btn-warning" onChange={(e) => this.handleChangeMobile(e, index)} value={person.mobile}/>

                                <button className="btn btn-danger" style={{ marginLeft:20}} onClick={() => this.handleRemove(index)}>Remove</button>
                            </div>
                        )
                    })
                }

                <button className="btn btn-primary" onClick={(e) => this.handleAddPassengers(e)}>Add Passenger</button>
                <button className="btn btn-success" style={{ marginLeft:20}} onClick={(e) => this.handleSubmit(e)}>Make Payment</button>


                

            </div>
            </div>









        );
    }
}

export default addnames;