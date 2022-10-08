import React from 'react';
import { FixedSizeList as List } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";
import transactionData from './transactions.json';
import styles from './transaction.module.css';

export default function Transactions() {

  const [transactions, setTransactions] = React.useState(transactionData);

  const Row = ({ index, style }) => {
    return (
      <div className={index % 2 ? "ListItemOdd" : "ListItemEven"} style={style}>
        <tr style={{ display: 'inline-table', width: '100%' }}>
          <td>{transactions.data[index].account}</td>
          <td>{transactions.data[index].accountName}</td>
          <td>{transactions.data[index].currencyCode}</td>
          <td>{transactions.data[index].amount}</td>
          <td>{transactions.data[index].transactionType}</td>
        </tr>
      </div>
    )
  };

  return (
    <div className={styles.tableContent}>
      <table style={{ width: '100%' }}>
        <thead>
          <tr>
            <th>ACCOUNT NO.</th>
            <th>ACCOUNT NAME</th>
            <th>CURRENCY</th>
            <th>AMOUNT</th>
            <th>TRANSACTION TYPE</th>
          </tr>
        </thead>
        <AutoSizer>
          {({ height, width }) => (
            <List
              className="List"
              height={height}
              itemCount={transactions.data.length}
              itemSize={30}
              width={width}
            >
              {Row}
            </List>
          )}
        </AutoSizer>
      </table>
    </div>
  )
}
