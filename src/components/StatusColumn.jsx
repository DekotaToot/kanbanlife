import { useState } from 'react'
import useStore from '../utils/store.js'
import Card from './Card.jsx'
import CardContent from './CardContent.jsx'
import MinCardContent from './MinCardContent.jsx'


export default function StatusColumn({status, ...props}) {
	const cards = useStore(state => state.cards)
	const [active, setActive] = useState()


	return <>
		<section>
			<div className='flex flex-col space-y-2 p-1'>
				{cards.filter(card => card.status === status).map(card => {
					if (active === card.title) {
						return (
							<Card key={card.title}>
								<CardContent {...card} />
							</Card>
						)
					}
					else {
						return (
							<Card key={card.title} onClick={() => setActive(card.title)}>
								<MinCardContent {...card} />
							</Card>
						)
					}
				})}
			</div>
		</section>
	</>
}