import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const form = document.querySelector('[data-form]');
const queryParamsContainer = document.querySelector('[data-query-params]');
const requestHeadersContainer = document.querySelector(
	'[data-request-headers]'
);
const keyValueTemplate = document.querySelector('[data-key-value-template]');
const responseHeadersContainer = document.querySelector(
	'[data-response-headers]'
);

// Will add query params element on click
document
	.querySelector('[data-add-query-param-btn]')
	.addEventListener('click', () => {
		queryParamsContainer.append(createKeyValuePair());
	});

// Will add request headers element on click
document
	.querySelector('[data-add-request-header-btn]')
	.addEventListener('click', () => {
		requestHeadersContainer.append(createKeyValuePair());
	});

// Append a new key/value pair
queryParamsContainer.append(createKeyValuePair());
requestHeadersContainer.append(createKeyValuePair());

function createKeyValuePair() {
	const element = keyValueTemplate.content.cloneNode(true);

	// Remove element on click
	element.querySelector('[data-remove-btn').addEventListener('click', (e) => {
		e.target.closest('[data-key-value-pair]').remove();
	});

	return element;
}

// for testing: set up an event listner for the form
form.addEventListener('submit', (e) => {
	e.preventDefault();
	axios({
		url: document.querySelector('[data-url').value,
		method: document.querySelector('[data-method').value,
		params: keyValuePairsToObjects(queryParamsContainer),
		headers: keyValuePairsToObjects(requestHeadersContainer),
	}).then((response) => {
		console.log(response);
	});
});

// Converts key value pairs to objects
function keyValuePairsToObjects(container) {
	const pairs = container.querySelectorAll('[data-key-value-pair]');
	return [...pairs].reduce((data, pair) => {
		const key = pair.querySelector('[data-key]').value;
		const value = pair.querySelector('[data-value]').value;

		if (key === '') return data;
		return { ...data, [key]: value };
	}, {});
}
