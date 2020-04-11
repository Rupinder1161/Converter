import React from "react";
import axios from "axios";
import "./currency.css";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';



// const useStyles = makeStyles((theme) => ({
//   root: {
//     width: '100%',
//   },
//   heading: {
//     fontSize: theme.typography.pxToRem(15),
//     fontWeight: theme.typography.fontWeightRegular,
//   },
// }));
class Converter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: null,
      fromCurrency: "USD",
      toCurrency: "GBP",
      amount: 1,
      currencies: []
    };
  }
  componentDidMount() {
    axios
      .get("http://api.openrates.io/latest")
      .then(response => {
        const currencyAr = ["EUR"];
        for (const key in response.data.rates) {
          currencyAr.push(key);
        }
        this.setState({ currencies: currencyAr });
      })
      .catch(err => {
        console.log("oppps", err);
      });
  }
  convertHandler = () => {
    if (this.state.fromCurrency !== this.state.toCurrency) {
      axios
        .get(
          `http://api.openrates.io/latest?base=${
            this.state.fromCurrency
          }&symbols=${this.state.toCurrency}`
        )
        .then(response => {
          const result =
            this.state.amount * response.data.rates[this.state.toCurrency];
          this.setState({ result: result.toFixed(5) });
        })
        .catch(error => {
          console.log("Opps", error.message);
        });
    } else {
      this.setState({ result: "You cant convert the same currency!" });
    }
  };
  selectHandler = event => {
    if (event.target.name === "from") {
      this.setState({ fromCurrency: event.target.value });
    } else {
      if (event.target.name === "to") {
        this.setState({ toCurrency: event.target.value });
      }
    }
  };
  render() {

    //   console.log(this.state.currencies)
    return (
      <div className="CenterDiv">
                    <ExpansionPanel>
                       <ExpansionPanelSummary
                         expandIcon={<ExpandMoreIcon />}
                         aria-controls="panel1a-content"
                         id="panel1a-header"
                       >
                         <Typography  ><h2>
                         <span>Currency</span>Converter
                         <span role="img" aria-label="money">
                           &#x1f4b5;
                         </span>
                       </h2></Typography>
                       </ExpansionPanelSummary>
                       <ExpansionPanelDetails>
                       <Typography>
                         <input
                           name="amount"
                           type="text"
                           value={this.state.amount}
                           onChange={event => this.setState({ amount: event.target.value })}
                         />
                         <select
                           name="from"
                           onChange={event => this.selectHandler(event)}
                           value={this.state.fromCurrency}
                         >
                           {this.state.currencies.map(cur => (
                             <option key={cur}>{cur}</option>
                           ))}
                         </select>
                         <select
                           name="to"
                           onChange={event => this.selectHandler(event)}
                           value={this.state.toCurrency}
                         >
                           {this.state.currencies.map(cur => (
                             <option key={cur}>{cur}</option>
                           ))}
                         </select>
                         <button onClick={this.convertHandler}>Convert</button>
                         {this.state.result && <h3>{this.state.result}</h3>}
                         </Typography>
                       </ExpansionPanelDetails>
                     </ExpansionPanel>
                     
                     </div>
            
    );
  }
}
export default Converter;