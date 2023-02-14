'use strict'

function add() {
	let ol = document.getElementById('as')
	let li = document.createElement('li')
	let button = document.createElement('button')
	li.appendChild(button)
	li.appendChild(document.createTextNode('a'))
	ol.appendChild(li)
}
function deleteLi() {
	console.log(this.event.target)
	this.event.target.parentNode.remove()
}