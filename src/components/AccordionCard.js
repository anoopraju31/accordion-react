import React from 'react'

const AccordionCard = ({ title, content, isOpen, changeCurrentAccordion }) => {
	return (
		<div className='p-4 border'>
			<div className='p-4' onClick={changeCurrentAccordion}>
				{title}
			</div>

			<div className={`bg-slate-300 p-4 ${isOpen ? 'block' : 'hidden'}`}>
				{content}
			</div>
		</div>
	)
}

export default AccordionCard
