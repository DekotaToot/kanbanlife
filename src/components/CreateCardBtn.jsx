import '@material/web/fab/fab.js'
import '@material/web/dialog/dialog.js'
import useStore from '../utils/store.js'
import { useRef } from 'react'


export default function CreateCardBtn() {
	const createCard = useStore(state => state.createCard)

	const addCardDialog = useRef()
	const addCardField = useRef()

	return <>
		<md-fab onClick={() => addCardDialog.current.show()}>
			<svg
				slot="icon"
				xmlns="http://www.w3.org/2000/svg"
				height="24"
				viewBox="0 -960 960 960"
				width="24"
			>
				<path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"/>
			</svg>
		</md-fab>
		<md-dialog ref={addCardDialog}>
			<div slot='headline'>add a new card</div>
			<form slot='content' id='newCardForm' method='dialog'>
				<md-outlined-text-field
					label="title"
					ref={addCardField}
				></md-outlined-text-field>
			</form>
			<div slot='actions'>
				<md-filled-tonal-button form='newCardForm'>cancel</md-filled-tonal-button>
				<md-outlined-button
					form='newCardForm'
					onClick={ev => {
						createCard(addCardField.current.value)
						addCardField.current.value = ''
					}}
				>create</md-outlined-button>
			</div>
		</md-dialog>
	</>
}