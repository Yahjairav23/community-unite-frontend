import React from 'react';
import { Route, Switch, withRouter } from "react-router-dom";
import './App.css';
import Navbar from './component/Navbar'
import CommunityReports from './container/Community-Reports-Container'
import CommunityFeelings from './container/Community-Feelings-Container'
import CitizenProfileContainer from './container/Citizen-Profile-Container'
import {connect} from 'react-redux'
import {fetchingAllReports, fetchingCommunityComments, fetchingAllPDs} from './redux/actions'


class App extends React.Component {

  componentDidMount(){
    this.props.fetchingAllReports();
    this.props.fetchingCommunityComments()
    this.props.fetchingAllPDs()
  }

  render(){
    return (
      <div>
        <Navbar />
        <Switch>
        <Route exact path='/community-reports' component={CommunityReports} />
        <Route exact path='/community-feelings' component={CommunityFeelings} />
      {/* Need to fix profile route to show the right page */}
        <Route exact path='/citizen' component={CitizenProfileContainer} />
        </Switch>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchingAllReports: (reports) => { dispatch( fetchingAllReports() ) },
    fetchingCommunityComments: (comments) => { dispatch( fetchingCommunityComments() ) },
    fetchingAllPDs: (policeDepartments) => { dispatch( fetchingAllPDs() ) }
  }
}

export default withRouter(connect(null, mapDispatchToProps)(App))
