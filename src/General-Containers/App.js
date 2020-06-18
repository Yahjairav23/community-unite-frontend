import React from 'react';
import { Route, Switch, withRouter, Redirect } from "react-router-dom";
import {connect} from 'react-redux'
import {fetchingAllActions, fetchingAllReports, fetchingCommunityComments, fetchingAllPDs, fetchingCurrentUser, fetchingAllEscalatedReports, fetchingAllEscalations} from '../redux/actions'
import '../App.css';

import '../images/YOUnite-still.png'


//Component Imports
import Navbar from '../General-Components/Navbar'
import HomePage from './Home-Page-Container'
import LoginContainer from './Login-Container'
import ReportForm from '../Police-Components/components/Report-Form'
import PoliceReports from '../Police-Components/containers/Reports-Container'
import CommunityReports from '../Community-Components/containers/Community-Reports-Container'
import CommunityFeelings from '../Community-Components/containers/Community-Feelings-Container'
import CitizenProfileContainer from '../Citizen-Components/containers/Citizen-Profile-Container'
import ReportDetails from '../General-Components/Report-Details';
import AgencyProfileContainer from '../Oversight-Agency/containers/Agency-Profile-Container'


class App extends React.Component {

  componentDidMount(){
    // debugger
    this.props.fetchingAllReports();
    this.props.fetchingCommunityComments()
    this.props.fetchingAllPDs()
    this.props.fetchingAllActions()
    this.props.fetchingEscalatedReports()
    this.props.fetchingAllEscalations()
    
    const token = localStorage.getItem("token")
    const userType = localStorage.getItem('userType')
    if(token && userType){
      this.props.fetchingCurrentUser(token, userType)
    }
  }

  render(){
    const userType = localStorage.getItem('userType')

    return (
      <div>
        <Navbar />
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route exact path='/community-reports' component={CommunityReports} />
          <Route exact path='/community-feelings' component={CommunityFeelings} />
          <Route exact path='/login' render={(routerProps) => {
            // const user=routerProps.match.params.user
            return userType === null ? <LoginContainer /> : <Redirect to={`/${userType}/profile`}/>
          }
          }/>
          <Route exact path='/reports/:id' render={(routerProps) =>{ 
            const id = routerProps.match.params.id 
            return <ReportDetails reportId={id}/>
            }
          }/>
        <Route exact path='/police/profile' render={() => (
          userType === "police" ? <PoliceReports/> : <Redirect to='/login'/> )}/>
        <Route exact path='/report-form' render={() => (
          userType === "police" ? <ReportForm/> : userType === "citizen" ? <Redirect to="/citizen/profile"/> : <Redirect to='/login'/>
        )} />
      {/* Need to fix profile route to show the right page */}
        <Route exact path='/citizen/profile' render={() => (
          userType === "citizen" ? <CitizenProfileContainer /> : userType === "police" ? <Redirect to='/report-form'/> : <Redirect to='/agency/profile'/>
        )}/>
        <Route exact path='/oversightAgency/profile' render={() => (
          userType === "oversightAgency" ? <AgencyProfileContainer /> : userType === "/" 
        )}/>
        
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.currentUser,
  userType: state.userType
})
const mapDispatchToProps = (dispatch) => {
  return {
    fetchingAllReports: (reports) => { dispatch( fetchingAllReports() ) },
    fetchingCommunityComments: (comments) => { dispatch( fetchingCommunityComments() ) },
    fetchingAllPDs: (policeDepartments) => { dispatch( fetchingAllPDs() ) },
    fetchingCurrentUser: (token, userType) => { dispatch( fetchingCurrentUser(token, userType) ) },
    fetchingAllActions: (actionTaken) => { dispatch( fetchingAllActions() )},
    fetchingEscalatedReports: (actionTaken) => { dispatch( fetchingAllEscalatedReports() )},
    fetchingAllEscalations: (escalations) => { dispatch( fetchingAllEscalations() ) }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))
