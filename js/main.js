let headingFirst = document.querySelector('.heading-first')
let headingSecond = document.querySelector('.heading-second')
let headingThird = document.querySelector('.heading-third')
let btnFirst = document.querySelector('#btn-first-en')
let btnFirstFr = document.querySelector('#btn-first-fr')
let btnSecond = document.querySelector('#btn-second-en')
let btnSecondFr = document.querySelector('#btn-second-fr')
let btnThird = document.querySelector('#btn-third-en')
let btnThirdFr = document.querySelector('#btn-third-fr')

btnFirst.addEventListener('click' , function (event) {
	headingFirst.textContent = 'My first photo'
})
btnFirstFr.addEventListener('click' , function (even) {
	headingFirst.textContent = `Ma première photo d'enfance`
})
btnSecond.addEventListener('click' , function (event) {
	headingSecond.textContent = 'My first party'
})
btnSecondFr.addEventListener('click' , function (even) {
	headingSecond.textContent = `Ma première fête`
})
btnThird.addEventListener('click' , function (event) {
	headingThird.textContent = 'My first year at school'
})
btnThirdFr.addEventListener('click' , function (even) {
	headingThird.textContent = `Ma première année à l'école`
})
 
