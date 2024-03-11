import React from 'react'
import AccordionWrapper from './components/AccordionWrapper'

const tempData = [
	{
		id: '1',
		title: 'This is title one',
		content: 'This is content of title one',
	},
	{
		id: '2',
		title: 'This is title two',
		content: 'This is content of title two',
	},
	{
		id: '3',
		title: 'This is title three',
		content: 'This is content of title three',
	},
	{
		id: '4',
		title: 'This is title four',
		content: 'This is content of title four',
	},
]

const App = () => {
	return (
		<div className='p-10'>
			<AccordionWrapper items={tempData} isMultipleAccordionOpen={true} />
			<AccordionWrapper items={tempData} isMultipleAccordionOpen={false} />
		</div>
	)
}

export default App
