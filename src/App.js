import React, { Component } from "react" ;
import { Route, Switch } from 'react-router-dom';
import Home from './components/home';
import AboutUs from './components/aboutUs';
import Services from './components/services';
import Profile from './components/profile';
import StudentsForm from './components/studentsForm';
import PlacementDashBoard from './components/pages/placementdashBoard';
import PlacementAbstractReport from './components/pages/placementabstractreport';
import JobSeekersReport from './components/pages/jobseekersreport';
import Placementopen from './components/pages/placementopen';
import NavBar from "./components/navBar";
import Footer from "./components/Footer";
import './App.css';
import employmentForm from "./components/employmentForm";


class App extends Component {
  render() {
    return (
      <React.Fragment>
      <NavBar />
      <main  >
        <Switch>
        <Route path="/placementdashBoard" component={PlacementDashBoard}></Route>
        <Route path="/studentsform" component={StudentsForm}></Route>
        <Route path="/employmentForm" component={employmentForm}></Route>
        <Route path="/placementabstractreport" component={PlacementAbstractReport}></Route>
        <Route path="/jobseekersreport" component={JobSeekersReport}></Route>
        <Route path="/placementopen" component={Placementopen}></Route>
        <Route path="/profile" component={Profile}></Route>
        <Route path="/services" component={Services}></Route>
        <Route path="/aboutUs" component={AboutUs}></Route>
        <Route path="/home" component={Home}></Route>
	      <Route path="/" component={Home}></Route> 
        </Switch>
      </main>
     <Footer />
      </React.Fragment>
     );
  }
}
export default App;
