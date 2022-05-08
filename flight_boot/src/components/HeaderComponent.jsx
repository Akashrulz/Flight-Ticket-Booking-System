import React, { Component } from 'react';
import { Link } from "react-router-dom";


class HeaderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }


    }
    render() {
        return (
            <div>
                <header>

                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                        <div><a className="navbar-brand" >  Flight Ticket Booking System</a></div>
                        
                        <ul className="navbar-nav" >

                        <li className="nav-item " style={{marginLeft:630}}>

                            <Link to="/flightdetailsadmin/showflightsadmin" style={{ textDecoration: 'none',color:'white' }}>Flights</Link>
                        </li>

                        
                        
                        <li className="nav-item ">

                            <Link to="/" style={{ textDecoration: 'none',color:'white' }}>Search Flights</Link>
                        </li>

                        <li className="nav-item ">

                            <Link to="/signup" style={{ textDecoration: 'none',color:'white' }}>Signup</Link>
                        </li>

                        <li className="nav-item " >
                            <Link to="/login" style={{ textDecoration: 'none',color:'white' }}>Login</Link>
                        </li>

                        
                        
                        </ul>
                        

                    </nav>



                </header>
            </div>



        );
    }
}

export default HeaderComponent;