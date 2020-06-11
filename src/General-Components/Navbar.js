import React from 'react'
import {connect} from 'react-redux'
import {logOutUser} from '../redux/actions'
// import {Link, Redirect} from 'react-router-dom'

//material-ui imports
// import {AppBar, Toolbar, Typography, Menu, MenuItem, IconButton} from '@material-ui/core'
// import MenuIcon from '@material-ui/icons/Menu';

class navbar extends React.Component {
  
    
    render(){
        return (
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="/">Logo</a>
                <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                       
                        <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Community</a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a class="dropdown-item" href="/community-reports">Community Reports</a>
                                <a class="dropdown-item" href="/community-feelings">Community Feelings</a>
                            </div>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Weekly News Letter</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Department</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Resources</a>
                        </li>
                    </ul>

                    <ul class="navbar-nav mr-auto my-2 my-lg-0">  
                        
                    
                        {this.props.userType === "citizen" ?
                            <li class="nav-item"> 
                            <a class="nav-link" href="/citizen/profile">Profile</a>
                            </li>
                            :
                            null
                        }
                        {this.props.userType === "police" ?
                            <li class="nav-item"> 
                            <a class="nav-link" href="/report-form">Report Form</a>
                            </li>
                            :
                            null
                        }
                        {this.props.userType === "police" ?
                            <li class="nav-item"> 
                            <a class="nav-link" href="/police/reports">Reports</a>
                            </li>
                            :
                            null
                        }

                    <li class="nav-item">
                        {this.props.currentUser ? 
                            <a class="nav-link" href="/login" onClick={
                                () => {
                                    localStorage.clear()
                                }
                            }>Log Out</a>
                            : 
                            <a class="nav-link" href="/login">Sign In</a>}
                        </li> 
                    </ul>
                </div>
            
            </nav>
        )
    }
}

const mapStateToProps = (state) => ({
    userType: state.userType,
    currentUser: state.currentUser
})

const mapDispatchToProps = (dispatch) => {
    return {
        logOutUser: () => {dispatch(logOutUser)}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(navbar)