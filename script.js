// URLs
const base_URL =
	'https://data.cityofnewyork.us/resource/erm2-nwe9.json?agency=NYPD&';

// buttons
const manhattanBtn = document.querySelector('#manhattan');
const brooklynBtn = document.querySelector('#brooklyn');
const queensBtn = document.querySelector('#queens');
const statenIslandBtn = document.querySelector('#staten-island');
const bronxBtn = document.querySelector('#bronx');

// constants
const ulEl = document.querySelector('.complaints-list');

// input
const input = document.querySelector('#number-complaints');

// function
function getData(city, limit) {
	if (limit === '') {
		limit = 10;
	}
	fetch(base_URL + `borough=${city}&$limit=${limit}`)
		.then(function (res) {
			return res.json();
		})
		.then(function (data) {
			ulEl.innerHTML = '';
			for (let i = 0; i < data.length; i++) {
				const newDiv = document.createElement('div');
				newDiv.classList.add('container');
				
                const newList = document.createElement('li');
				newList.classList.add('wrapper');
				
                const newBtn = document.createElement('button');
                newBtn.classList.add('red-button');
				
                newBtn.innerText = 'WHAT DID THE POLICE DO?';
				
                newList.innerText = `🚨 ${data[i].complaint_type}`;
				
                ulEl.appendChild(newDiv);
				newDiv.appendChild(newList);
                newDiv.appendChild(newBtn);

                const policeAction = document.createElement('p');
                policeAction.classList.add('police-action')
                policeAction.innerText = data[i].resolution_description;
                newDiv.appendChild(policeAction);
                newBtn.addEventListener('click', function() {
                policeAction.classList.toggle('activate');
                })
			}
		});
}

// event listeners
manhattanBtn.addEventListener('click', function (event) {
	event.preventDefault();
	getData('MANHATTAN', input.value);
});

brooklynBtn.addEventListener('click', function (event) {
	event.preventDefault();
	getData('BROOKLYN', input.value);
});

queensBtn.addEventListener('click', function (event) {
	event.preventDefault();
	getData('QUEENS', input.value);
});

statenIslandBtn.addEventListener('click', function (event) {
	event.preventDefault();
	getData('STATEN ISLAND', input.value);
});

bronxBtn.addEventListener('click', function (event) {
	event.preventDefault();
	getData('BRONX', input.value);
});
