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
'use strict'

let rt = document.getElementById('rt')
let ul = document.getElementById('check')
let ulFalse = document.getElementById('falseCheck')
let ulOll = document.getElementById('ollCheck')
let listUp = [{ name: 'css', boolean: true }, { name: 'js', boolean: false }];

document.getElementById('button').addEventListener('click', function () {
	if (rt.value !== '') {
		listUp.push({ name: `${rt.value}`, boolean: true })
		createList()
	}
})

function deleteLi(event) {
	let check = event.target.parentNode.innerText
	for (let aList of listUp) {
		if (aList.name === check) { aList.boolean = !aList.boolean }
	}
	createList()
}	

function createList() {	
	rt.value = '';
	document.querySelectorAll('li').forEach(li => li.remove())
	for (let aList of listUp) {
		if (aList.boolean === true)
				ul.insertAdjacentHTML("beforeend", ` <li class="li""><input  type="button"  class='but'>${aList.name}</li>`)
		if (aList.boolean === false)
				ulFalse.insertAdjacentHTML("beforeend", ` <li class="li" "><input  type="button" class='but'>${aList.name}</li>`)			
	}
	let lii=document.querySelectorAll('.but');
	lii.forEach(li=>{li.addEventListener('click',deleteLi)});
}








