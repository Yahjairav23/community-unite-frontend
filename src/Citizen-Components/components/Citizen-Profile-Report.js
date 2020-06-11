import React from 'react'
// import {Link} from 'react-router-dom'

const report = (props) => {
    return(
    
        <button type="button" class="list-group-item list-group-item-action">{props.report.date} - {props.report.address}  {props.report.city}, {props.report.state} - Report ID#: {props.report.id}</button>
        
    )
}

export default report