import PropTypes from "prop-types";
import {Table, Header, Row, Column} from './TransactionHistory.style';

const TransactionsHistiory = ({transactions}) => {
  return (
    <Table> 
      <thead>
        <Column>
          <Header>Type</Header>
          <Header>Amount</Header>
          <Header>Currency</Header>
        </Column>
      </thead>
      <tbody>
        {transactions.map(({id, type, amount, currency}) => (
          <Column key={id}>
            <Row>{type}</Row>
            <Row>{amount}</Row>
            <Row>{currency}</Row>
          </Column>
        ))}  
      </tbody> 
    </Table>
  )
}

TransactionsHistiory.propTypes = {
    transactions: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency:PropTypes.string.isRequired,
    })),
}  

export default TransactionsHistiory;