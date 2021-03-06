import React from 'react';
import { connect } from 'react-redux';

import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

export const ExpenseList = (props) => (
	<div className="content-container">
		<div className="list-header">
			<div className="show-for-mobile">Expenses</div>
			<div className="show-for-desktop">Expense</div>
			<div className="show-for-desktop">Amount</div>
		</div>
		<div className="list-body">
			{props.expenses.length === 0 ? (
				<div className="list-item list-item--message">
					<span>No expenses</span>
				</div>
			) : (
				props.expenses.map((expense) => {
					return (
						<ExpenseListItem key={expense.id} {...expense} />
						// <ExpenseListItem
						// 	key={i}
						// 	description={expense.description}
						// 	amount={expense.amount}
						//   createdAt={expense.createdAt}
						//   expense={expense}
						// />
					);
				})
			)}
		</div>
	</div>
);

const mapStateToProps = (state) => {
	return {
		name: 'mrT',
		expenses: selectExpenses(state.expenses, state.filters)
		// expenses: state.expenses
		// filters: state.filters
	};
};

export default connect(mapStateToProps)(ExpenseList);

// create HOC
// const ConnectedExpenseList = connect((state) => {
// 	return {
// 		name: 'mrT',
// 		expenses: state.expenses
// 	};
// })(ExpenseList);

// export default ConnectedExpenseList;
