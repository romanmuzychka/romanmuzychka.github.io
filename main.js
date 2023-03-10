'use strict'

let rt = document.getElementById('rt')
let ul = document.getElementById('check')
let ulFalse = document.getElementById('falseCheck')
let ulOll = document.getElementById('ollCheck')
let listUp = [{ name: 'css', boolean: true }, { name: 'js', boolean: false }];


document.getElementById('button').addEventListener('click', function () {
	if (rt.value ) {
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
				ul.insertAdjacentHTML("beforeend", ` <li class="li""><input  type="button"  class='but' value="OK">${aList.name}</li>`)
		if (aList.boolean === false)
				ulFalse.insertAdjacentHTML("beforeend", ` <li class="li" "><input  type="button" class='but but1' value="X">${aList.name}</li>`)			
	}
	let lii=document.querySelectorAll('.but');
	lii.forEach(li=>{li.addEventListener('click',deleteLi)});
}

document.getElementById('fals').addEventListener('click', function () {
	document.getElementById('fals').classList.add('fals1');
	document.getElementById('lis1').classList.add('fals1');
	document.getElementById('true').classList.remove('fals1');
	document.getElementById('lis2').classList.remove('fals1');
	
});

document.getElementById('true').addEventListener('click', function () {
	document.getElementById('fals').classList.remove('fals1');
	document.getElementById('lis1').classList.remove('fals1');
	document.getElementById('true').classList.add('fals1');
	document.getElementById('lis2').classList.add('fals1');
	
})