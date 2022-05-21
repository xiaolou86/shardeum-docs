import React from 'react';
import axios from 'axios';

export default class transactionList extends React.Component {
  state = {
    transactions: [],
    cycle: [],
    cycleFrom: [],
    cycleTo: [],
  }

  componentWillReceiveProps() {
    axios.get(`https://explorer.liberty10.shardeum.org/api/cycleinfo?count=1`).then(res => {
      const cycle = res.data;
      this.setState({cycle});
      const currentCycle = this.state.cycle.cycles[0].counter;
      const cycleFrom = Math.max(0,currentCycle - this.props.timestampFrom);
      const cycleTo = currentCycle - this.props.timestampTo;
      this.setState({cycleFrom});
      this.setState({cycleTo});
      axios.get(`https://explorer.liberty10.shardeum.org/api/transaction?startCycle=${cycleFrom}&endCycle=${cycleTo}&address=0x1f1545Eb7EE5C3C1c4784ee9ddE5D26A9f76F77C`).then(res => {
        const transactions = res.data.transactions;
        this.setState({transactions});
      })
    })
  }

  render() {
    if(this.state.transactions === undefined){
    return (<div>Faucet Claims: 0 </div>)
  }
  else {
    return (<div>
      <p>Faucet Claims: {this.state.transactions.length}</p>
      <p>SHM Issued: {this.state.transactions.length *100} </p>
      <p>Cycle Range: {this.state.cycleFrom} - {this.state.cycleTo}  </p>

    </div>)
  }
}
}
