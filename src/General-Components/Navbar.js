import React from 'react'
import {connect} from 'react-redux'
import {logOutUser} from '../redux/actions'
import logo from '../images/YOUnite-still.png'

class navbar extends React.Component {
  
    
    render(){
        return (
            <div className='web-nav'>
                    <div className="logo" ><a href='/'><img src={logo} alt='Younite'/></a></div>
                <nav>
                    <ul>
                        <li><a href="/community-reports">Community Reports</a></li>

                        <li><a href="/community-feelings">Community Feelings</a></li>

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

