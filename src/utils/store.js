import { create } from 'zustand'
import { persist } from 'zustand/middleware'


const useStore = create(persist(
	set => ({
		statuses: ['to do', 'in progress', 'complete'],
		addStatus: status => set(state => ({statuses: [...state.statuses, status]})),
		cards: [
			{
				title: 'example',
				labels: ['a label', 'another'],
				description: 'a card, and nothing more.',
				points: 2,
				status: 'to do',
				other: {}
			}
		],
		createCard: title => set(state => ({cards: [...state.cards, {
			title,
			labels: [],
			description: '',
			points: 0,
			status: 'to do',
			other: {}
		}]})),
		updateCard: card => set(state => ({
			cards: state.cards.map(item => {
				if (item.title === card.title) {
					return card
				}
				return item
			})
		})),
		deleteCard: title => set(state => ({cards: state.cards.filter(card => title !== card.title)}))
	}),
	{
		name: 'kanbanlife'
	}
))

export default useStore