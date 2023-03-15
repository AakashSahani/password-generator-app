// DOM Element Variables
const btn = document.getElementById('submit');
const passwordGen = document.getElementById('password');
const passwordLength = document.getElementById('length');
const numbersToggle = document.getElementById('numbers');
const symbolsToggle = document.getElementById('symbols');
const lowercaseToggle = document.getElementById('lowercase');
const uppercaseToggle = document.getElementById('uppercase');

// Password generator variables
let symbols = '';
let numbers = '0123456789';
let lowercase = 'abcdefghijklmnopqrstuvwxyz';
let uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

// Event Listeners

// Call on window load to populate initial value
window.addEventListener('load', () => {
	generatePassword();
});

// Displays selected password length and generates password
passwordLength.addEventListener('change', () => {
	document.getElementById('lengthValue').innerHTML = passwordLength.value;
	generatePassword();
});

// Changes uppercase array based on checkbox
uppercaseToggle.addEventListener('change', () => {
	if (uppercaseToggle.checked) {
		uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	} else {
		uppercase = '';
	}
});

// Changes lowercase array based on checkbox
lowercaseToggle.addEventListener('change', () => {
	if (lowercaseToggle.checked) {
		lowercase = 'abcdefghijklmnopqrstuvwxyz';
	} else {
		lowercase = '';
	}
});

// Changes numbers array based on selection
numbersToggle.addEventListener('change', () => {
	if (numbersToggle.checked) {
		numbers = '0123456789';
	} else {
		numbers = '';
	}
});

// Changes symbols array based on selection
symbolsToggle.addEventListener('change', () => {
	if (symbolsToggle.checked) {
		symbols = '!@#$%^&*()_+:;{}[]~?><';
	} else {
		symbols = '';
	}
});

// Call function on button press
btn.addEventListener('click', (e) => {
	e.preventDefault();
	generatePassword();
});

// Functions
// Password Generator functions
// password is randomly selected from selected arrays and updated
function generatePassword() {
	let password = '';

	for (let i = 0; i < passwordLength.value; i++) {
		password += (lowercase + uppercase + numbers + symbols)[
			Math.floor(
				Math.random() * (symbols + numbers + lowercase + uppercase).length
			)
		];
	}
	// Checking if at least one checkbox is selected
	passwordGen.value = password.includes('undefined')
		? 'Please select a checkbox'
		: password;
}
