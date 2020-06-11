import React from 'react'
import {connect} from 'react-redux'
import ReportListItem from '../../General-Components/Report-List-Item'

const communityReportsList = (props) => {
    
    return (
        <div class="list-group">
            {props.reports.map(report => (
                <ReportListItem report={report} key={report.id}/>
            ))}
        </div>
    )
}

const mapStateToProps = (state) => {
    
    return {
        reports: state.allReports
    }
}


export default connect(mapStateToProps)(communityReportsList)