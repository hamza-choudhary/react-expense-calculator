import ExpenseItem from './ExpenseItem'
import './ExpensesList.css'

const ExpensesList = (props) => {
	if (props.items.length === 0) {
		return <h2 className="expenses-list__fallback">Found no expenses.</h2>
	}

	return (
		<ul className="expenses-list">
			{props.items.map((expense) => (
				//we use map bcz we need an array in jsx{} like this [<Card>, <Card>]
				//! Always use key which is built-in prop and set with unique id other wise you'll face error
				<ExpenseItem
					key={expense.id}
					title={expense.title}
					amount={expense.amount}
					date={expense.date}
				/>
			))}
		</ul>
	)
}

export default ExpensesList
