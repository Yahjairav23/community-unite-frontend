import React from 'react'
import {connect} from 'react-redux'
import ReportsList from '../../General-Components/Report-List-Item'
import report from '../../Citizen-Components/components/Citizen-Profile-Report'

class AgencyProfileContainer extends React.Component {

  
    render(){
        return(
            <div>
                <h1>All Reports</h1> 
                {this.props.reports.map(report => <ReportsList report={report} key={report.id}/> )}
                
                <h1>Reports In Escalation</h1>
                {this.props.escalatedReports.length > 0 ?
                this.props.escalatedReports.map(escalation => <ReportsList report={escalation} key={escalation.id}/>)
                : 
                null}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    currentUser: state.currentUser,
    reports: state.allReports,
    escalatedReports: state.escalatedReports
})

export default connect(mapStateToProps)(AgencyProfileContainer)