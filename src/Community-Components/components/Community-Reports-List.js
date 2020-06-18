import React from 'react'
import {connect} from 'react-redux'
import ReportListItem from '../../General-Components/Report-List-Item'

const communityReportsList = (props) => {
    const descReports = props.reports.sort( ( a, b ) => { return Date.parse(b.date) - Date.parse(a.date) } )
    return (
        <div class="list-group" style={{margin: '10px'}}>
            {descReports.map(report => (
                <ReportListItem report={report} path='communityReports' key={report.id}/>
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