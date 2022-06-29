const wrapper = document.getElementById('container')
const btn = document.getElementById('change')
const speedInput = document.querySelector('input[name="speed"]')

const text = 'My life is going to be good :) '

let idx = 0
let mode = 'dark'

let speed = 100 / speedInput.value

let interval = setInterval(writeText, speed)

btn.addEventListener('click', () => {
	changeDay()
})

speedInput.addEventListener('change', (e) => {
	clearInterval(interval)
	speed = 100 / e.target.value
	interval = setInterval(writeText, speed)
})

function changeDay() {
	if (mode === 'light') {
		mode = 'dark'
		document.body.classList.add('dark')
		document.body.classList.remove('light')
		return
	}

	if (mode === 'dark') {
		mode = 'light'
		document.body.classList.add('light')
		document.body.classList.remove('dark')
		return
	}
}

function writeText() {
	wrapper.innerText = text.slice(0, idx)
	idx++
	idx === text.length ? (idx = 0) : null
}
