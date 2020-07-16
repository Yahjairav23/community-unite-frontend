import React from 'react'
import logo from '../images/YOUnite-gif.png'


class home extends React.Component {
    render(){
        return(
            <div className='home-container'>
                <div className='content-row'>


                    <div className='left-col'>
                        <h1 className='title'>YOU<span>NITE</span></h1>
                        <p className='content'>
                            Where your vioce is heard and your complaints are taken serious!<br/>
                            Together we can regulate the system.
                        </p>
                        {/* This button triggers the modal */}
                        <a href='#' className='btn animated-btn' data-toggle="modal" data-target="#staticBackdrop">Learn More</a>

                        {/* The modal being triggered */}
                        <div class="modal fade" id="staticBackdrop" data-keyboard="false" tabindex="-1" role="dialog" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-lg">
                            <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="staticBackdropLabel">About Younite</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            {/* <div class="modal-dialog modal-dialog-scrollable"> */}
                                <div className='modal-body'>
                                <p style={{fontWeight: 'bold'}}>Younite was built with hopes to provide a solution to help with the on going problem of police brutality.</p> 
                                <p>Younite requires officers to complete a report for every encounter had with a citizen, good or bad.
                                Officers are required to disclose certain details about the encounter and disclose whether or not force was used. 
                                The reports and it's details are made viewable by the citizens involved, as well as the third party agency that 
                                deals with escalation requests.</p>
                                <p>Citizens can make comments (good or bad) on these reports regarding how they felt they were treated. 
                                Citizens can also choose to escalate reports to be further investigated by the third party agency in any instance they felt
                                they may have been treated wrongly. </p>
                                <p>The third party agency can view these reports, take investigative actions to resolve the escalation, and mark escalations as resolved.</p>
                                <p>To promote transparency in the system and allow citizen's voices to be heard, 
                                all reports, with limited information, are posted for all to view.
                                There is also a feelings board, where citizens can comment on how they feel their police department has been performing.</p>
                                <br/>
                                <hr/>
                                <br/>
                                <p>
                                <h5 style={{fontStyle: 'italic'}}>To log in to the application through the varies user types, please review login information below:</h5>
                                <br/>
                                <span style={{fontWeight: 'bold', fontSize: '18px'}}>Citizen: </span><br/>
                                <p style={{margin: '10px'}}><span style={{fontWeight: 'bold'}}>Username:</span> demo@demo.com <br/>
                                <span style={{fontWeight: 'bold'}}>Password:</span> demo<br/></p>
                                <br/>
                                <span style={{fontWeight: 'bold', fontSize: '18px'}}>Police Officer:</span><br/>
                                <p style={{margin: '10px'}}><span style={{fontWeight: 'bold'}}>Badge#:</span> 104183<br/>
                                <span style={{fontWeight: 'bold'}}>Password:</span> password <br/></p>
                                <br/>
                                <span style={{fontWeight: 'bold', fontSize: '18px'}}>Third Party Agency:</span><br/>
                                <p style={{margin: '10px'}}><span style={{fontWeight: 'bold'}}>Username:</span> citizenguard@demo.com<br/>
                                <span style={{fontWeight: 'bold'}}>Password:</span> password<br/></p>
                                <br/>
                                </p>
                                </div>
                            {/* </div> */}
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            </div>
                            </div>
                        </div>
                        </div>

                    </div>
                    <div className='right-col'>
                        <div className="home-logo"><img src={logo} className="img-fluid" alt="Responsive image"/></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default home
