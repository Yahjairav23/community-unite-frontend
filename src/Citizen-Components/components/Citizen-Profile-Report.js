import React from 'react'

const report = (props) => {
    return(
        <a href={`/reports/${props.report.id}`} className="list-group-item list-group-item-action" >{props.report.date} - {props.report.address}  {props.report.city}, {props.report.state} - Report ID#: {props.report.id}</a>
        
    )
}
export default report