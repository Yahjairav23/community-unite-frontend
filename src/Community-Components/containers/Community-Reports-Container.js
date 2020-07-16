import React from 'react'
import CommunityReportsList from '../components/Community-Reports-List'

const communityReports = (props) => {
    return (
        <div>
            <div className='first-header'>Community</div><div className='second-header'>Reports</div>
            <CommunityReportsList />
        </div>
    )
}


export default communityReports