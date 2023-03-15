const passwordLength = document.getElementById('length');
const uppercaseToggle = document.getElementById('uppercase');
const lowercaseToggle = document.getElementById('lowercase');
const numbersToggle = document.getElementById('numbers');
const symbolsToggle = document.getElementById('symbols');

let uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let lowercase = 'abcdefghijklmnopqrstuvwxyz';
let numbers = '0123456789';
let symbols = '';

uppercaseToggle.addEventListener('change', () => {
	if (uppercaseToggle.checked) {
		uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	} else {
		uppercase = '';
	}
});

lowercaseToggle.addEventListener('change', () => {
	if (lowercaseToggle.checked) {
		lowercase = 'abcdefghijklmnopqrstuvwxyz';
	} else {
		lowercase = '';
	}
});

numbersToggle.addEventListener('change', () => {
	if (numbersToggle.checked) {
		numbers = '0123456789';
	} else {
		numbers = '';
	}
});

symbolsToggle.addEventListener('change', () => {
	if (symbolsToggle.checked) {
		symbols = '!@#$%^&*()_+:;{}[]~?><';
	} else {
		symbols = '';
	}
});

function generatePassword() {
	let password = '';
	for (let i = 0; i < 10; i++) {
		password += (lowercase + uppercase + numbers + symbols)[
			Math.floor(
				Math.random() * (symbols + numbers + lowercase + uppercase).length
			)
		];
	}
	console.log(password);
}

const btn = document.getElementById('submit');
btn.addEventListener('click', (e) => {
	e.preventDefault();
	generatePassword();
});
