import { useState } from 'react'
import Card from '../UI/Card'
import ExpenseFilter from './ExpensesFilter'
import ExpensesChart from './ExpensesChart'
import ExpensesList from './ExpensesList'
import './Expenses.css'

const Expenses = (props) => {
	const [filteredYear, setFilteredYear] = useState('2020')

	const changeFilterHandler = (selectedYear) => {
		setFilteredYear(selectedYear)
	}

	const filteredExpenses = props.items.filter((expense) => {
		return expense.date.getFullYear().toString() === filteredYear
	})

	return (
		<Card className="expenses">
			<ExpenseFilter
				selected={filteredYear}
				onChangeFilter={changeFilterHandler}
			/>
			<ExpensesChart expenses={filteredExpenses} />
			<ExpensesList items={filteredExpenses} />
		</Card>
	)
}

export default Expenses
