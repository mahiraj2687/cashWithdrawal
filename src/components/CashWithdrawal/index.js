import {Component} from 'react'

import './index.css'

import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {amount: 2000}

  remove = value => {
    this.setState(prevState => ({amount: prevState.amount - value}))
  }

  render() {
    const {denominationsList} = this.props
    const {amount} = this.state
    return (
      <div className="bg_container">
        <div className="container">
          <div className="profile">
            <p className="heading">S</p>
            <p className="heading2">Sarah Williams</p>
          </div>
          <div className="yourBalanceContainer">
            <p className="yourBalanceHeading">Your Balance</p>
            <p className="amount">
              {amount}
              <br />
              <span className="amountHeading">in amount</span>
            </p>
          </div>
          <p className="WithdrawalHeading">Withdraw</p>
          <p className="withdrawalPara">CHOOSE SUM (IN RUPEES)</p>
          <ul className="amountContainer">
            {denominationsList.map(eachDenomination => (
              <DenominationItem
                denominations={eachDenomination}
                remove={this.remove}
                key={eachDenomination.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default CashWithdrawal
