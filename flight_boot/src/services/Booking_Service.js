import axios from 'axios';
const NEW_TOTAL_API_BASE_URL="http://localhost:8080/ticketbookinghistory/newseats";
const NEW_PASSENGER_SAVE_API_BASE_URL="http://localhost:8080/passengerdetails/newpassenger";
const GET_BOOKINGS_API_BASE_URL="http://localhost:8080/ticketbookinghistory";
const GET_PASSENGER_API_BASE_URL="http://localhost:8080/passengerdetails";


class Booking_Service {

    savenewtotal(Tseats){
        return axios.post(NEW_TOTAL_API_BASE_URL,Tseats);
    }

    saveperson(np){
        return axios.post(NEW_PASSENGER_SAVE_API_BASE_URL,np);

    }

    getBookingById(bid){
        return axios.get(GET_BOOKINGS_API_BASE_URL + '/'+ bid);

    }

    getPassengersById(bid){
        return axios.get(GET_PASSENGER_API_BASE_URL + '/'+ bid);

    }




    


}


export default new Booking_Service()