/*** Pet Pics ***/

/*
    Some practice on using fetch - utilizing two different public APIs (linked below)
*/

const result = document.getElementById('result');

// Event delegation - listen for click on entire document, then check id of target
document.addEventListener('click', function (event) {
	// RANDOM DOG PIC courtesy of https://dog.ceo/dog-api/
	// Use the API documentation to look up the correct endpoint for a random photo
	if (event.target.id === 'dog-button') {
		fetch('https://dog.ceo/api/breeds/image/random').then(function (response) {
			response.json().then(function (data) {
				console.log(data);
				result.innerHTML = `
              <img src="${data.message}" width="300px" />
            `;
			});
		});
	}

	// Challenge! Use async/await syntax for this one.
	// RANDOM CAT PIC courtesy of https://thecatapi.com/
	// You will need to request a free key
	// Use the API documentation to look up the correct endpoint for a random photo
	// Note: a header will be required!
	if (event.target.id === 'cat-button') {
		async function getCatPic() {
			let response = await fetch('https://api.thecatapi.com/v1/images/search', {
				headers: {
					'x-api-key':
						'live_OGxGd4Qnu16oAEBlonS9roxlp8vKLHd0CNZ7KHIE67CqGGGBPJdg8FSbWEgMMoNA',
				},
			});
			let data = await response.json();

			console.log(data);

			result.innerHTML = `
            <img src="${data[0].url}" width="300px" />
          `;
		}

		// Call your async function to execute the fetch
		getCatPic();
	}
});
