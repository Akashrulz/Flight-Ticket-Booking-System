import axios from 'axios';


const SIGNUP_API_BASE_URL="http://localhost:8080/signupdetails/createuser";


class Signup_Service {


    
    createNewPassenger(npassenger){
        return axios.post(SIGNUP_API_BASE_URL,npassenger)
    }
}


export default new Signup_Service()