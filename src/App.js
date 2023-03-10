import { useState } from 'react'
import Expenses from './Components/Expenses/Expenses'
import NewExpense from './Components/NewExpense/NewExpense'

const DUMMY_EXPENSES = [
	{
		id: 'e1',
		title: 'Toilet Paper',
		amount: 94.12,
		date: new Date(2020, 7, 14),
	},
	{ id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
	{
		id: 'e3',
		title: 'Car Insurance',
		amount: 294.67,
		date: new Date(2021, 2, 28),
	},
	{
		id: 'e4',
		title: 'New Desk (Wooden)',
		amount: 450,
		date: new Date(2021, 5, 12),
	},
]
function App() {
	const [expenses, setExpenses] = useState(DUMMY_EXPENSES) //! -------*1-----------

	const addExpenseHandler = (expense) => {
		// setExpenses([expense, ...DUMMY_EXPENSES]) //! We will not get latest snapshot of data like this we have to use functin for this
		setExpenses((prevExpense) => {
			//! prevExpense comming from *1 Dummy_Expenes that we set earlier
			return [expense, ...prevExpense]
		})
	}
	return (
		<div>
			<NewExpense onAddExpense={addExpenseHandler} />
			<Expenses items={expenses} />
		</div>
	)
}

export default App
