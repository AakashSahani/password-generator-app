// DOM Element Variables
const copyBtn = document.getElementById('copybtn');
const btn = document.getElementById('submit');
const passwordGen = document.getElementById('password');
const passwordLength = document.getElementById('length');
const numbersToggle = document.getElementById('numbers');
const symbolsToggle = document.getElementById('symbols');
const lowercaseToggle = document.getElementById('lowercase');
const uppercaseToggle = document.getElementById('uppercase');
const strength = document.getElementById('strength');
const copied = document.getElementById('copied');
const barStrength = document.querySelector('.bar_strength_container');

// Password generator variables
let symbols = '';
let numbers = '0123456789';
let lowercase = 'abcdefghijklmnopqrstuvwxyz';
let uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

// Event Listeners

// Call on window load to populate initial value
window.addEventListener('load', () => {
	uppercaseToggle.checked = true;
	lowercaseToggle.checked = true;
	numbersToggle.checked = true;
	symbolsToggle.checked = false;
	passwordLength.value = 10;
});

const copyToClipboard = async (text) => {
	try {
		await navigator.clipboard.writeText(text.value);
		copied.classList.remove('copied');
	} catch (error) {
		alert('Failed to Copy');
	}
};

// Copy to Clipboard
copyBtn.addEventListener('click', () => {
	copyToClipboard(passwordGen);
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

// Password Strength Regex
const strongRegEx = new RegExp('.{10,}', '');
const mediumRegEx = new RegExp('.{8,}', '');
const weakRegEx = new RegExp('.{6,}', '');

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
	passwordGen.value = password.includes('undefined') ? '' : password;
	let pwStrength = '';
	strongRegEx.test(password)
		? (pwStrength = 'STRONG' && barStrengthClass('strong'))
		: mediumRegEx.test(password)
		? (pwStrength = 'MEDIUM' && barStrengthClass('medium'))
		: weakRegEx.test(password)
		? (pwStrength = 'WEAK' && barStrengthClass('weak'))
		: (pwStrength = 'VERY WEAK' && barStrengthClass('too_weak'));
	console.log(pwStrength);
	strength.innerHTML = pwStrength;
	copied.classList.add('copied');
}

function barStrengthClass(styleClass) {
	const classesArray = ['strong', 'medium', 'weak', 'too_weak'];
	classesArray.map((styles) =>
		styles === styleClass
			? barStrength.classList.add(styles)
			: barStrength.classList.remove(styles)
	);
}
