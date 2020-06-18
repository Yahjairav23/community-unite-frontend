import React from 'react'

const ReportComment = (props) => {
    return(
        <div class='report-comment'>
            <strong>{props.comment}</strong>
            <div class="dropdown-divider"></div>
        </div>
    )
} 

export default ReportComment