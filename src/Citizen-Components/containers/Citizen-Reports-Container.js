import React from 'react'
import {connect} from 'react-redux'
import Report from '../components/Citizen-Profile-Report'

class ReportsContainer extends React.Component {
    render(){
        const descReports = this.props.currentUser.reports.sort( ( a, b ) => { return Date.parse(b.date) - Date.parse(a.date) } )
        // debugger
        return(
            <div>
                <h2>My Reports</h2>
                <div class="accordion" id="accordionExample">
                    {this.props.currentUser ? descReports.map( report => (
                        <Report report={report} key={report.id}/> 
                    )) : null }
                </div>
            </div>

        )
    }
}

const mapStateToProps = (state) => ({
    currentUser: state.currentUser
})

export default connect(mapStateToProps)(ReportsContainer)