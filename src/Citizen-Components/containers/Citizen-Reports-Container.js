import React from 'react'
import {connect} from 'react-redux'
import Report from '../components/Citizen-Profile-Report'

class reportsContainer extends React.Component {
    render(){
        // debugger
        return(
            <div>
                <div>My Reports</div>
                {this.props.currentUser ? this.props.currentUser.reports.map( report => (
                    <Report report={report} key={report.id}/> 
                )) : null }
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    currentUser: state.currentUser
})

export default connect(mapStateToProps)(reportsContainer)