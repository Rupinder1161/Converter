import React, { Component } from 'react'
import './weight.css'
import { FaEquals } from 'react-icons/fa';

import TextField from '@material-ui/core/TextField';

export default class Weight extends Component {

   constructor(props) {
       super(props)
   
       this.state = {
            HeightInCm:'',
            ConvertedValue:'20'
       }
       this.getValue = this.getValue.bind(this)
   }
   

 getValue(e){
     this.setState({
         HeightInCm:e.target.value,
         convertedValue:finalValue,
     })
     console.log(this.state.HeightInCm)
     var heightInCm = this.state.HeightInCm;
     var converter = 0.03280;
     var finalValue = (heightInCm * converter);
     console.log(finalValue)
     console.log(this.state.ConvertedValue)
 }

//  convertValue(){
//      var heightInCm = this.state.HeightInCm;
//      var finalValue = (heightInCm *  0.03280);
//      console.log.log()
//  }
    render() {
        console.log(this.state.HeightInCm)
        var l = (this.state.HeightInCm * 0.03280).toFixed(2)
        return (
            <div className="MainDiv">
                
                 <div className="CenterDiv">
                     <h1>Weight Converter</h1>
                     <div className="Divs">
                                  <div className="EnterValue">
                                                 <form  noValidate autoComplete="off" className = "forMain">
                                                 <TextField id="outlined-basic" label="Enter Height in Cm"  type="Number" margin= "normal"  value={this.state.HeightInCm} onChange={this.getValue} variant="outlined" color="secondary" style={{width:"80%"}} />
                                                  </form>
                                                        
                                                   
                                
                                 </div>
                                 <div className="SignValue">
                                                 
                                              <FaEquals size="2em"/>          
                                                   
                                
                                 </div>
                                 <div className ="GetValue"> 
                                                 <form  noValidate autoComplete="off" className = "forMain">
                                                 <TextField value={`${l} Feet`} id="outlined-basic" label="Height in Feet"   margin= "normal"   variant="outlined" color="secondary" style={{width:"80%"}} />
                                                  </form>
                                              

                                 </div>


                     </div>

                 </div>



            </div>
        )
    }
}
