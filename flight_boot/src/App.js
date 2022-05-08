import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import HeaderComponent from "./components/HeaderComponent";
import home from "./components/home";
import login from "./components/login";
import newflight from "./components/newflight";
import signup from "./components/signup";
import 'bootstrap/dist/css/bootstrap.min.css';

import showpassengers from "./components/showpassengers";
import FooterComponent from "./components/FooterComponent";
import showflightsadmin from "./components/showflightsadmin";
import showflightspass from "./components/showflightspass";
import editflight from "./components/editflight";
import totalseats from "./components/totalseats";
import test11 from "./components/test11";
import addnames from "./components/addnames";
import ticketnew from "./components/ticketnew";



function App() {
  return (
    <div>
      <Router>
      
      <HeaderComponent/>
        <div className="container">
          <Switch>
            <Route path="/" exact component={home}></Route>    
            <Route path="/login" exact component={login}></Route> 
            <Route path="/signup" exact component={signup}></Route>      
            <Route path="/showflightspass/:source/:destination" exact component={showflightspass}></Route> 
            <Route path="/showflightspass/:source/:destination/totalseats/:fid" exact component={totalseats}></Route> 
            <Route path="/showflightspass/:source/:destination/totalseats/:fid/hihow/:numberofFirst/:numberofEconomy" exact component={test11}></Route> 
            <Route path="/newflight" exact component={newflight}></Route> 
            <Route path="/showpassengers" exact component={showpassengers}></Route> 
            <Route path="/flightdetailsadmin/showflightsadmin" exact component={showflightsadmin}></Route> 
            <Route path="/editflight/:fid" exact component={editflight}></Route>
            <Route path="/:numberofFirst/addpass/:numberofEconomy/:fid" exact component={addnames}></Route>
            <Route path="/mic" exact component={test11}></Route>
            <Route path="/tickets/:fid" exact component={ticketnew}></Route>

            
                   
          </Switch>
        </div>
        <FooterComponent/>
        
      </Router>
    </div>
  )
  }

  export default App;
