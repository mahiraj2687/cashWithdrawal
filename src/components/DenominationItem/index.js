// Write your code here

import './index.css'

const DenominationItem = props => {
  const {denominations, remove} = props
  const {value} = denominations

  const updateBalance = () => {
    remove(value)
  }

  return (
    <li className="list_item">
      <button className="buttons" type="button" onClick={updateBalance}>
        {value}
      </button>
    </li>
  )
}
export default DenominationItem
