import { useState } from 'react'
import './ExpenseForm.css'

const ExpenseForm = (props) => {
	const [enteredTitle, setEnteredTitle] = useState('')
	const [enteredAmount, setEnteredAmount] = useState('')
	const [enteredDate, setEnteredDate] = useState('')

	// const [userInput, setUserInput] = useState({
	// 	enteredTitle: '',
	// 	enteredAmount: '',
	// 	enteredDate: '',
	// })

	const titleChangeHandler = (event) => {
		setEnteredTitle(event.target.value)
		// !not good approach
		// setUserInput({
		// 	...userInput, //paste all values
		// 	enteredTitle: event.target.value, //we override again title value
		// })
		//* goood approach
		// setUserInput(prevState => {
		// 	return {...userInput, enteredTitle: event.target.value}
		// })
	}
	const amountChangeHandler = (event) => {
		setEnteredAmount(event.target.value)
		// setUserInput({
		// 	...userInput,
		// 	enteredTitle: event.target.value,
		// })
	}
	const dateChangeHandler = (event) => {
		setEnteredDate(event.target.value)
		// setUserInput({
		// 	...userInput,
		// 	enteredTitle: event.target.value,
		// })
	}

	const submitHandler = (event) => {
		event.preventDefault()

		const expenseData = {
			title: enteredTitle,
			amount: enteredAmount,
			date: new Date(enteredDate),
		}

		setEnteredTitle('')
		setEnteredAmount('')
		setEnteredDate('')

		//! Send data to NewExpense.js
		props.onSaveExpenseData(expenseData)
	}

	return (
		//! (two way binding we use value)
		<form onSubmit={submitHandler}>
			<div className="new-expense__controls">
				<div className="new-expense__control">
					<label>Title</label>
					<input
						type="text"
						value={enteredTitle}
						onChange={titleChangeHandler}
					/>
				</div>
				<div className="new-expense__control">
					<label>Amount</label>
					<input
						type="number"
						min="0.01"
						step="0.01"
						value={enteredAmount}
						onChange={amountChangeHandler}
					/>
				</div>
				<div className="new-expense__control">
					<label>Date</label>
					<input
						type="date"
						min="2019-01-01"
						max="2022-12-31"
						value={enteredDate}
						onChange={dateChangeHandler}
					/>
				</div>
			</div>
			<div className="new-expense__actions">
				<button type="submit" onClick={props.onCancel}>Cancel</button>
				<button type="submit">Add Expense</button>
			</div>
		</form>
	)
}

export default ExpenseForm
