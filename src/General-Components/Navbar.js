import React from 'react'
import {connect} from 'react-redux'
import {logOutUser} from '../redux/actions'
import logo from '../images/YOUnite-still.png'
import { Redirect } from 'react-router-dom'

// import {Link, Redirect} from 'react-router-dom'

//material-ui imports
// import {AppBar, Toolbar, Typography, Menu, MenuItem, IconButton} from '@material-ui/core'
// import MenuIcon from '@material-ui/icons/Menu';

class navbar extends React.Component {
  
    
    render(){
        return (
            <div class='web-nav'>
                    <div class="logo" ><a href='/'><img src={logo} /></a></div>
                <nav>
                    <ul>
                        <li><a href="/community-reports">Community Reports</a></li>

                        <li><a href="/community-feelings">Community Feelings</a></li>

                        {/* <li><a href="#">Weekly News Letter</a></li>

                        <li><a href="#">Department</a></li>

                        <li><a href="#">Resources</a></li> */}

                        <li>{this.props.currentUser !== null && this.props.userType === "citizen" ?
                        <a href="/citizen/profile">Profile</a>
                        :
                        null
                        }</li>
                        <li>{this.props.currentUser !== null && this.props.userType === "oversightAgency" ?
                        <a href="/oversightAgency/profile">Profile</a>
                        :
                        null
                        }</li>
                        <li>{this.props.currentUser !== null && this.props.userType === "police" ?
                            <a href="/report-form">Report Form</a>
                            :
                            null
                        }</li>
                        <li>{this.props.currentUser !== null && this.props.userType === "police" ?
                            <a href="/police/profile">Reports</a>
                            :
                            null
                        }</li>
                       
                        <li>
                        {this.props.currentUser ? 
                            <a href="/login" onClick={
                                () => {
                                    localStorage.clear()
                                }
                            }>Log Out</a>
                        :  
                            <a href="/login">Sign In</a>
                        }
                        </li>
                    </ul>
                </nav>
            </div>
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


// return (
//     <div class='bar rounded'>

//         <header class='blog-header py-3 border-bottom' style={{"background-color": "#071e22"}}>
//             <div class="row flex-nowrap justify-content-between align-items-center">
//                 <div class="col-4 pt-1">
//                 {this.props.userType === "citizen" ?
//                 <a class="p-2 text-muted" href="/citizen/profile">Profile</a>
//                 :
//                 null
//                 }
//                 {this.props.userType === "oversightAgency" ?
//                 <a class="p-2 text-muted" href="/oversightAgency/profile">Profile</a>
//                 :
//                 null
//                 }
//                 {this.props.userType === "police" ?
//                     <a class="p-2 text-muted" href="/report-form">Report Form</a>
//                     :
//                     null
//                 }
//                 {this.props.userType === "police" ?
//                     <a class="p-2 text-muted" href="/police/profile">Reports</a>
//                     :
//                     null
//                 }
//                 </div>

//                 <div class="col-4 text-center">
//                     <a class="blog-header-logo" href='/'><img src={logo} width='60' height='60'/></a>
//                 </div>

//                 <div class="col-4 d-flex justify-content-end align-items-center">
//                 {this.props.currentUser ? 
//                 <a class="p-2 text-muted" href="/login" onClick={
//                     () => {
//                         localStorage.clear()
//                     }
//                 }>Log Out</a>
//                 : 
//                 <a class="p-2 text-muted" href="/login">Sign In</a>}
//                 </div>
//             </div>
//         </header>

//         <div class="nav-scroller py-1 mb-2">
//             {/* <nav class="nav d-flex justify-content-between" > */}
//             <nav class="nav d-flex justify-content-between" >
//                     <div class="logo" href='/'><img src={logo}/></div>
//                     <a class="p-2 text-muted" href="/community-reports">Community Reports</a>
//                     <a class="p-2 text-muted" href="/community-reports">Community Reports</a>

//                     <a class="p-2 text-muted" href="/community-feelings">Community Feelings</a>
//                     <a class="p-2 text-muted" href="/community-feelings">Community Feelings</a>

//                     <a class="p-2 text-muted" href="#">Weekly News Letter</a>
//                     <a class="p-2 text-muted" href="#">Weekly News Letter</a>

//                     <a class="p-2 text-muted" href="#">Department</a>
//                     <a class="p-2 text-muted" href="#">Department</a>

//                     <a class="p-2 text-muted" href="#">Resources</a>
//                     <a class="p-2 text-muted" href="#">Resources</a>

//             </nav>
//         </div>

//     </div>
// )