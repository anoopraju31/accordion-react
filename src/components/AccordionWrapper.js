import React, { useState } from 'react'
import AccordionCard from './AccordionCard'

const getInitialState = (items) => {
	const initialState = {}

	for (let i = 0; i < items.length; i++) {
		initialState[items[i].id] = i === 0 ? true : false
	}

	return initialState
}

const AccordionWrapper = ({ items, isMultipleAccordionOpen }) => {
	const [currentOpenAccordion, setCurrentOpenAccordion] = useState(items[0].id)
	const [accordions, setAccordions] = useState(getInitialState(items))

	if (isMultipleAccordionOpen)
		return (
			<div className='py-4'>
				{items.map((item) => (
					<AccordionCard
						key={item.id}
						isOpen={accordions[item.id]}
						{...item}
						changeCurrentAccordion={() =>
							setAccordions((prev) => ({
								...prev,
								[item.id]: !prev[item.id],
							}))
						}
					/>
				))}
			</div>
		)

	return (
		<div className='py-4'>
			{items.map((item) => (
				<AccordionCard
					key={item.id}
					isOpen={item.id === currentOpenAccordion}
					{...item}
					changeCurrentAccordion={() => setCurrentOpenAccordion(item.id)}
				/>
			))}
		</div>
	)
}

export default AccordionWrapper
