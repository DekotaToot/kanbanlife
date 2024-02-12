function persistBoard(state) {
	const preppedState = readyForStore(state)
	localStorage.setItem('board', preppedState)
}

function retrieveBoard() {
	const json = localStorage.getItem('board')
	if (!json) return json
	return readyForUse(json)
}

function readyForStore(object) {
	const result = JSON.stringify(object)
	return result
}

function readyForUse(json) {
	const result = JSON.parse(json)
	return result
}

export {persistBoard, retrieveBoard, readyForStore, readyForUse}
