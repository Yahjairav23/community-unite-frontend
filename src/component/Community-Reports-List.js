import React from 'react'
import {connect} from 'react-redux'
import ReportListItem from './Report-List-Item'

const communityReportsList = (props) => {
    
    return (
        <div>
            {props.reports.map(report => (
                <ReportListItem report={report} key={report.id}/>
            ))}
        </div>
    )
}

const mapDispatchToProps = (state) => {
    
    return {
        reports: state.allReports
    }
}


export default connect(null, mapDispatchToProps)(communityReportsList)