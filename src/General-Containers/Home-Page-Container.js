import React from 'react'
import logo from '../images/YOUnite-gif.png'


class home extends React.Component {
    render(){
        return(
            <div class='home-container'>
            {/* <div class='jumbo-box'> */}
            {/* <div class="jumbotron p-4 p-md-5 rounded"> */}
                <div class='content-row'>


                    <div class='left-col'>
                        {/* <div class="row no-gutters rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-right"> */}
                            <h1 class='title'>YOU<span>NITE</span></h1>
                            <p class='content'>
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                            </p>
                            <a href='#' class='btn animated-btn'>Fancy Button</a>
                        {/* </div> */}
                    </div>
                    <div class='right-col'>
                        <div class="home-logo"><img src={logo} class="img-fluid" alt="Responsive image"/></div>
                    </div>
                </div>
            {/* </div> */}
            </div>
        )
    }
}

export default home


// render(){
//     return(
//         <div class='home-container'>
//         {/* <div class='jumbo-box'> */}
//         {/* <div class="jumbotron p-4 p-md-5 rounded"> */}
//             <div class='home row mb-2'>


//                 <div class='col-md-6'>
//                     {/* <div class="row no-gutters rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-right"> */}
//                         <h1 class='title'>YOU<span>NITE</span></h1>
//                         <p class='content'>
//                             "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
//                         </p>
//                         <a href='#' class='btn animated-btn'>Fancy Button</a>
//                     {/* </div> */}
//                 </div>
//                 <div class="col-md-6"><img src={logo} class="img-fluid" alt="Responsive image"/></div>
//             </div>
//         {/* </div> */}
//         </div>
//     )
// }