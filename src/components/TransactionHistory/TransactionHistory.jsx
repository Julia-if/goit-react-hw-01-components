import s from './TransactionHistory.module.css'
import PropTypes from 'prop-types';

export const TransactionHistory = ({items})=>{
    return (
<table className={s.transaction_history}>
  <thead>
    <tr  className={s.row}>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
      {items.map(({id, type, amount, currency})=>{
          return (<tr key={id}> 
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
          )
      })}
       
  </tbody>
</table>

    )
}
TransactionHistory.protoTypes ={
    items: PropTypes.shape({
        type: PropTypes.string,
        amount: PropTypes.number,
        currency: PropTypes.string
    })
}

