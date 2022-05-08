import axios from 'axios';

const NEW_FLIGHT_API_BASE_URL="http://localhost:8080/flightdetailsadmin/newflight";
const GET_FLIGHTS_API_BASE_URL="http://localhost:8080/flightdetailsadmin/showflightsadmin";
const UPDATE_FLIGHTS_API_BASE_URL="http://localhost:8080/flightdetailsadmin/updateflight";
const SEARCH_FLIGHTS_URL="http://localhost:8080/flightdetailsadmin/searchflightpass?source=";
const DCR_FLIGHTS_URL="http://localhost:8080/flightdetailsadmin/testkl";
const GET_SINGLE_FLIGHT_URL="http://localhost:8080/flightdetailsadmin/testmickl";


class Flight_Service {

  

    getFlights(){
        return axios.get(GET_FLIGHTS_API_BASE_URL);
    }

    getSearchFlights(source,destination){
        
        return axios.get(SEARCH_FLIGHTS_URL + source +'&destination=' + destination);
    }

    createNewFlight(nflight){
        return axios.post(NEW_FLIGHT_API_BASE_URL,nflight);
    }

    getFlightById(fid){
        return axios.get(GET_FLIGHTS_API_BASE_URL + '/'+ fid);

    }

    updateFlight(nflight){
        return axios.put(UPDATE_FLIGHTS_API_BASE_URL,nflight);
    }

    deleteflight(fid){
        return axios.delete(GET_FLIGHTS_API_BASE_URL +'/'+ fid);
    }

    dcrseats(fid){
        return axios.get(DCR_FLIGHTS_URL,fid);

    }

    findFlightByFid(fid){
        return axios.get(GET_SINGLE_FLIGHT_URL + '/'+ fid);
    }



    
    
}


export default new Flight_Service()