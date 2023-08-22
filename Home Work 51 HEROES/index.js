const API = 'https://64dfcf5f71c3335b25831634.mockapi.io/api/v1/';

const METHODS = {
	POST: 'POST',
	GET: 'GET',
	PUT: 'PUT',
	DELETE: 'DELETE',
};

const comics = document.querySelector('#select-comics');
const addHeroButton = document.querySelector('#add-hero');	

async function addOptionToSelect() {
	const universes = await controller('universes');
	universes.forEach(univers => {
	let newOption = new Option(`${univers.name}`);
	comics.append(newOption);	
	});
}

addOptionToSelect();

async function controller(action, method = METHODS.GET, body) {
	const URL = `${API}${action}`;
	const params = {
		method,
		headers: {
			'Content-Type': 'application/json',
		},
	};

	if (body) params.body = JSON.stringify(body);

	try {
		const response = await fetch(URL, params);
		if (!response.ok) {
			throw new Error(response.statusText);
		};
		const data = await response.json();

		return data;

	} catch (err) {
		console.log(err);
	}
}

function renderHero(hero) {
	const heroeList = document.querySelector('tbody');
	const heroeTr = document.createElement('tr');

	const heroeSurname = document.createElement('td');
	const heroeComics = document.createElement('td');

	const heroeFavorite = document.createElement('td');
	const labelFavorite = document.createElement('label');
	const inputCheckBoxFavourite = document.createElement('input') ;

	const heroeDeleteTd = document.createElement('td');
	const deleteHeroButton = document.createElement('button');
	
	labelFavorite.classList.add('.heroFavouriteInput');
	inputCheckBoxFavourite.type = 'checkbox';

	heroeSurname.innerText = hero.name;
	heroeComics.innerText = hero.comics;
	labelFavorite.innerText = 'Favourite:';

	if (hero.favourite) {
	  inputCheckBoxFavourite.setAttribute('checked', 'checked')
	}

	deleteHeroButton.innerText = 'Delete';
	heroeTr.setAttribute('id', hero.id)

	heroeFavorite.append(labelFavorite);
	labelFavorite.append(inputCheckBoxFavourite);
	heroeDeleteTd.append(deleteHeroButton);

	heroeTr.append(heroeSurname, heroeComics, heroeFavorite, heroeDeleteTd);
	heroeList.prepend(heroeTr);

	deleteHeroButton.addEventListener('click', async() => {
		const heroID = heroeTr.getAttribute('id');

		await controller(`heroes/${heroID}`, METHODS.DELETE);

		if (heroeTr.id === hero.id) heroeTr.remove();
	});

	inputCheckBoxFavourite.addEventListener('click', async() => {
		const bodyTrue = { favourite: true };
		const bodyFalse = { favourite: false };

		inputCheckBoxFavourite.checked	
		? await controller(`heroes/${heroeTr.id}`, METHODS.PUT, bodyTrue)
		: await controller(`heroes/${heroeTr.id}`, METHODS.PUT, bodyFalse);
	}); 
}

addHeroButton.addEventListener('click', async () => {
	const name = document.querySelector('#surename').value;
	const selectedComix = comics.options[comics.selectedIndex].text;
	const favourite = document.querySelector('#favourite').checked;

	const heroesData = await controller('heroes');
	const checkHero = heroesData.find((user) => user.name.toLowerCase() === name.toLowerCase());
	
	if (checkHero) {
		console.log(`User with that name ${name} already exists in the database`);
		return;
	}

	const body = { name, comics: selectedComix, favourite };
	
	const newHero = await controller('heroes', METHODS.POST, body);
	renderHero(newHero);
});
