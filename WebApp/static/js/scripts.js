const draggables = document.querySelectorAll('.draggable')
const containers = document.querySelectorAll('.container')

draggables.forEach(draggable => {
	draggable.addEventListener('dragstart', () => {
		draggable.classList.add("dragging")
	})

	draggable.addEventListener('dragend', () => {
		draggable.classList.remove("dragging")
	})
})

containers.forEach(container => {
	container.addEventListener('dragover', e => {
		e.preventDefault()
		const afterElement = getDragAfterElement(container, e.clientY)
		const draggable = document.querySelector('.dragging')
		console.log(afterElement)
		if (afterElement == null){
			container.appendChild(draggable)
		} else {
			container.insertBefore(draggable, afterElement)
		}
	})
})

// Handles finding position of draggable element in relation to the nearest element's vertical center
// to determine if the draggable element will be placed above it or below it.
function getDragAfterElement(container, y) {
	const draggableElements = [...container.querySelectorAll('.draggable:not(.dragging)')]

	return draggableElements.reduce((closest, child) => {
		const box = child.getBoundingClientRect()
		const offset = y - box.top - box.height / 2
		console.log(offset)
		if (offset < 0 && offset > closest.offset){
			return { offset: offset, element: child}
		} else {
			return closest
		}
	}, {offset: Number.NEGATIVE_INFINITY}).element
}