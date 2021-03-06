import React from 'react';
import { connect } from 'react-redux';

import ExpenseForm from './ExpenseForm';
import {
	editExpense,
	startEditExpense,
	removeExpense,
	startRemoveExpense
} from '../actions/expenses';

export class EditExpensePage extends React.Component {
	onSubmit = (expense) => {
		// console.log('updated', expense);
		// props.dispatch(editExpense(props.expense.id, expense));
		this.props.startEditExpense(this.props.expense.id, expense);
		this.props.history.push('/');
	};

	onRemove = () => {
		// dispatch(removeExpense({ id: id }));
		// props.dispatch(removeExpense({ id: props.expense.id })); // object defintion shorthand
		this.props.startRemoveExpense({ id: this.props.expense.id });
		this.props.history.push('/');
	};

	render() {
		// console.log(props);
		// return <div>Editing the expense with id of {props.match.params.id}</div>;
		return (
			<div>
				<div className="page-header">
					<div className="content-container">
						<h1 className="page-header__title">Edit Expense</h1>
					</div>
				</div>
				<div className="content-container">
					<ExpenseForm expense={this.props.expense} onSubmit={this.onSubmit} />
					<button className="button button--secondary" onClick={this.onRemove}>
						Remove Expense
					</button>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state, props) => ({
	expense: state.expenses.find(
		(expense) => expense.id === props.match.params.id
	)
});

const mapDispatchToProps = (dispatch, props) => ({
	startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
	startRemoveExpense: (data) => dispatch(startRemoveExpense(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);
