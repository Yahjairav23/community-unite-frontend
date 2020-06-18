import React from 'react'

class ReportCommentForm extends React.Component {
    constructor(){
        super()
        this.state={

        }
    }

    handleForm = (event) => {
        this.setState({
            [event.target.name]: event.target.value 
        })
    }

    render(){
        return (
            <div class='report-comment-form-container'>
                <form onSubmit={(e) => {
                    e.preventDefault()
                    this.props.updateComment(this.state)
                    e.target.reset()
                }}>
                    <div class='report-comment-form'>
                        <svg class="svg-icon" viewBox="0 0 20 20">
                            <path fill='#F5B700' d="M14.999,8.543c0,0.229-0.188,0.417-0.416,0.417H5.417C5.187,8.959,5,8.772,5,8.543s0.188-0.417,0.417-0.417h9.167C14.812,8.126,14.999,8.314,14.999,8.543 M12.037,10.213H5.417C5.187,10.213,5,10.4,5,10.63c0,0.229,0.188,0.416,0.417,0.416h6.621c0.229,0,0.416-0.188,0.416-0.416C12.453,10.4,12.266,10.213,12.037,10.213 M14.583,6.046H5.417C5.187,6.046,5,6.233,5,6.463c0,0.229,0.188,0.417,0.417,0.417h9.167c0.229,0,0.416-0.188,0.416-0.417C14.999,6.233,14.812,6.046,14.583,6.046 M17.916,3.542v10c0,0.229-0.188,0.417-0.417,0.417H9.373l-2.829,2.796c-0.117,0.116-0.71,0.297-0.71-0.296v-2.5H2.5c-0.229,0-0.417-0.188-0.417-0.417v-10c0-0.229,0.188-0.417,0.417-0.417h15C17.729,3.126,17.916,3.313,17.916,3.542 M17.083,3.959H2.917v9.167H6.25c0.229,0,0.417,0.187,0.417,0.416v1.919l2.242-2.215c0.079-0.077,0.184-0.12,0.294-0.12h7.881V3.959z"></path>
                        </svg>
                        <input class='text-field-report-comment' onChange={this.handleForm} type='text' name='comment'/>
                    <input class='submit-field-report-comment' type='submit' value='Submit'/>
                    </div>
                </form>
            </div>
        )
    }
}

export default ReportCommentForm