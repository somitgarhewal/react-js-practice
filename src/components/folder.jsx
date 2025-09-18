import { useState } from 'react'
import Down from '../assets/down.svg'

function Folder({ section, level }) {
	const [isOpen, setIsOpen] = useState(true)
	console.log('section', section, isOpen);

	return (
		section.isFolder ?
			<div className={`pl-4 ${level && 'border-l border-dotted'}`}>
				<div className='flex items-center cursor-pointer' onClick={() => setIsOpen(!isOpen)}>
					{section.name} <span className=''>{isOpen ? <img className='h-4 w-4 -mb-1' src={Down} /> : <img className='h-4 w-4 rotate-180 -mb-1' src={Down} />}</span>
				</div>
				{isOpen && section.children ?
					<div>
						{section.children.map(item => <Folder section={item} level={level+1} />)}
					</div>
					: null}
			</div>
			:
			<div className={`pl-4 ${level && 'border-l border-dotted'}`}>
				{section.name}
			</div>
	)
}

export default Folder
