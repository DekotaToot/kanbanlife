import useStore from '../utils/store.js'
import { useRef, useState } from 'react'
import '@material/web/chips/chip-set.js'
import '@material/web/chips/assist-chip.js'
import '@material/web/textfield/outlined-text-field.js'
import '@material/web/button/filled-tonal-button.js'
import '@material/web/button/outlined-button.js'
import '@material/web/dialog/dialog.js'
import '@material/web/select/outlined-select.js'
import '@material/web/select/select-option.js'

export default function CardContent({title, status, labels, description, points, other, ...props}) {
	const updateCard = useStore(state => state.updateCard)
	const statuses = useStore(state => state.statuses)
	const deleteCard = useStore(state => state.deleteCard)

	const addLabelDialog = useRef()
	const addLabelField = useRef()
	const removeLabelDialog = useRef()

	const [currentLabel, setCurrentLabel] = useState()

	const handlerCrafter = (prop, coercer) => {
		return ev => {
			const card = {title, status, labels, description, points, other}
			card[prop] =  coercer ? coercer(ev.target.value) : ev.target.value
			updateCard(card)
		}
	}

	return <>
		<h2>{title}</h2>
		<md-chip-set>
			{labels.map((label, index) => <md-assist-chip label={label} key={index} onClick={() => {
				setCurrentLabel(label)
				removeLabelDialog.current.show()
			}}></md-assist-chip>)}
			<md-assist-chip 
				label="+"
				onClick={() => addLabelDialog.current.show()}
			></md-assist-chip>
		</md-chip-set>
		<md-outlined-select
			value={status}
			label='status'
			onInput={handlerCrafter('status')}
		>
			{statuses.map((value, index) => (
				<md-select-option value={value} key={index}>
					<div slot='headline'>{value}</div>
				</md-select-option>
			))}
		</md-outlined-select>
		<md-outlined-text-field
			label="points"
			type="number"
			value={points}
			onInput={handlerCrafter('points', Number)}
		></md-outlined-text-field>
		<md-outlined-text-field
			label="description"
			type="textarea"
			rows="5"
			value={description}
			onInput={handlerCrafter('description')}
		></md-outlined-text-field>
		{Object.keys(other).map(key => (
			<p>{key}: {other[key]}</p>
		))}
		{status === 'complete' && 
			<md-outlined-button onClick={() => deleteCard(title)}>delete</md-outlined-button>
		}
		<md-dialog ref={addLabelDialog}>
			<form slot='content' id={`newLabelForm${title}`} method='dialog'>
				<md-outlined-text-field
					label="name"
					ref={addLabelField}
				></md-outlined-text-field>
			</form>
			<div slot='actions'>
				<md-filled-tonal-button form={`newLabelForm${title}`}>cancel</md-filled-tonal-button>
				<md-outlined-button
					form={`newLabelForm${title}`}
					onClick={ev => {
						const card = {title, status, labels, description, points, other}
						card.labels = [...card.labels, addLabelField.current.value]
						updateCard(card)
						addLabelField.current.value = ''
					}}
				>submit</md-outlined-button>
			</div>
		</md-dialog>
		<md-dialog ref={removeLabelDialog}>
			<div slot='headline'>remove label</div>
			<form slot='content' id={`removeLabelForm${title}`} method='dialog'>
				<span>would you like to remove this label?</span>
			</form>
			<div slot='actions'>
				<md-filled-tonal-button form={`removeLabelForm${title}`}>cancel</md-filled-tonal-button>
				<md-outlined-button
					form={`removeLabelForm${title}`}
					onClick={ev => {
						const card = {title, status, labels, description, points, other}
						card.labels = card.labels.filter(label => label !== currentLabel)
						updateCard(card)
						setCurrentLabel(null)
					}}
				>confirm</md-outlined-button>
			</div>
		</md-dialog>
	</>
}