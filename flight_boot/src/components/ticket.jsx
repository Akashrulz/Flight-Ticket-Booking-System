import React from 'react';
import jsPDF from 'jspdf';

import Flight_Service from "../services/Flight_Service";


class ticket extends React.Component {
   
    constructor(props) {
        super(props)
        this.state ={
            adminflights: []
        }
    };

    componentDidMount() {
        Flight_Service.getFlights().then((res) => {
          this.setState({ adminflights: res.data });
        });
      }
    
    
    generatePDF = () => {
      var doc = new jsPDF('p', 'pt');
      
      doc.text(20, 20, 'This is the first title.')
      doc.addFont('helvetica', 'normal')
      doc.text(20, 60, 'This is the second title.')
      doc.text(20, 100, `JSON.stringify(this.adminflights)`)      
      
      doc.save('demo.pdf')
    }   
    
   render() {
      return (
         <div>
            <button onClick={this.generatePDF} type="primary">Download PDF</button> 
         </div>
      );
   }
}
export default ticket;