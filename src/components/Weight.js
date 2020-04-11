import React, { Component } from 'react'
import './weight.css'
import { FaEquals } from 'react-icons/fa';

import TextField from '@material-ui/core/TextField';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import Currency from './Currency'



export default class Weight extends Component {

   constructor(props) {
       super(props)
   
       this.state = {
            HeightInCm:'',
            ConvertedValue:'20'
       }
       this.getValue = this.getValue.bind(this)
       this.ShowHidden = this.ShowHidden.bind(this)
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
 ShowHidden(){
     // document.getElementsById("header").style.display ;
     console.log(document.getElementById("header").style.display ="flex")
     console.log(document.getElementById("header").style.animation = 'dis 5s')
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
               <div className="CenterDiv">
                <ExpansionPanel className="">
                       <ExpansionPanelSummary
                         expandIcon={<ExpandMoreIcon />}
                         aria-controls="panel1a-content"
                         id="panel1a-header"
                       >
                         <Typography ><h2>
                         Weight Converter
                       </h2></Typography>
                       </ExpansionPanelSummary>
                       <ExpansionPanelDetails>
                       <Typography>
                     <div className="Divs"  id="header" >
                                  <div className="EnterValue">
                                 <form  noValidate autoComplete="off" className = "forMain">
                                 <TextField id="outlined-basic" label="Enter Height in Cm" className="ValueSize" variant="outlined" color="primary" margin= "normal"  value={this.state.HeightInCm} onChange={this.getValue} variant="outlined" color="secondary" style={{width:"80%"}} />
                                 </form>
                                </div>
                                 <div className="SignValue">
                                <FaEquals size="2em"/>          
                                </div>
                                 <div className ="GetValue"> 
                                <form  noValidate autoComplete="off" className = "forMain">
                                <TextField value={`${l} Feet`} id="outlined-basic" label="Height in Feet"  className="ValueSize"  margin= "normal"   variant="outlined" color="secondary" style={{width:"80%"}} />
                                </form>
                               </div>
                     </div>
                         </Typography>
                       </ExpansionPanelDetails>
                     </ExpansionPanel>
                     </div>
                     
        )
    }
}
