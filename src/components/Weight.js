import React, { Component } from 'react'
import './weight.css'
import { FaEquals } from 'react-icons/fa';

import TextField from '@material-ui/core/TextField';

export default class Weight extends Component {

   constructor(props) {
       super(props)
   
       this.state = {
            
       }
   }
   



    render() {
        return (
            <div className="MainDiv">
                
                 <div className="CenterDiv">
                     <h1>Weight Converter</h1>
                     <div className="Divs">
                                  <div className="EnterValue">
                                                 <form  noValidate autoComplete="off" className = "forMain">
                                                 <TextField id="outlined-basic" label="Your Name"  type="month" margin= "normal"   variant="outlined" color="secondary" style={{width:"80%"}} />
                                                  </form>
                                                        
                                                   
                                
                                 </div>
                                 <div className="SignValue">
                                                 
                                              <FaEquals size="2em"/>          
                                                   
                                
                                 </div>
                                 <div className ="GetValue"> 
                                                 <form  noValidate autoComplete="off" className = "forMain">
                                                 <TextField  id="outlined-basic" label="Your Name"  type="month" margin= "normal"   variant="outlined" color="secondary" style={{width:"80%"}} />
                                                  </form>
                                              

                                 </div>


                     </div>

                 </div>



            </div>
        )
    }
}
