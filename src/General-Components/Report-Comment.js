import React from 'react'

const ReportComment = (props) => {
    return(
        <div className='report-comment'>
            <strong>{props.comment}</strong>
            <div className="dropdown-divider"></div>
        </div>
    )
} 

export default ReportComment