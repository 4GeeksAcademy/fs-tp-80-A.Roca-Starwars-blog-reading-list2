const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			url: 'https://www.swapi.tech/api',
			people: [],
			person: {},
			ships: [],
			infoShips: {},
			planets: [],
			infoPlanets: {},
			favorites: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			addFavorite: (name) => {
				const store = getStore();
				if (!store.favorites.includes(name)) {
					setStore({
						favorites: [...store.favorites, name]

					});
				}
			},
			removeFavorite: (name) => {
				const store = getStore();
				setStore({ favorites: store.favorites.filter((item) => item !== name) });
			},
			loadInPeople: async () => {
				try {
					const resp = await fetch(getStore().url + '/people');
					const data = await resp.json();
					if (!resp.ok) throw new Error('Error loading data');
					setStore({ people: data.results })
				} catch (error) {
					console.error(error);
				}
			},
			loadInfoPerson: async (uid) => {
				try {
					const resp = await fetch(getStore().url + '/people/' + uid);
					const data = await resp.json();
					if (resp === 404) throw new Error('Error loading info person data');
					setStore({ person: data.result })
				} catch (error) {
					console.error(error, '----------');
				}
			},
			loadInfoShips: async (uid) => {
				try {
					const resp = await fetch(`https://www.swapi.tech/api/starships/${uid}`);
					const data = await resp.json();
					if (resp === 404) throw new Error('Error loading info ships data');
					setStore({ infoShips: data.result })
				} catch (error) {
					console.error(error, "-----");
				}
			},
			loadInfoPlanets: async (uid) => {
				try {
				
					const resp = await fetch(`https://www.swapi.tech/api/planets/${uid}`);
					const data = await resp.json();
					if (resp === 404) throw new Error('Error loading info planets data');
					setStore({ infoPlanets: data.result })
				} catch (error) {
					console.error(error, "---");
				}
			},
			loadInStarships: async () => {
				try {
					const resp = await fetch('https://www.swapi.tech/api/starships');
					const data = await resp.json();
					if (!resp.ok) throw new Error('Error loading data');
					setStore({ ships: data.results })
				} catch (error) {
					console.error(error);

				}
			},
			loadInPlanets: async () => {
				try {
					const resp = await fetch('https://www.swapi.tech/api/planets');
					const data = await resp.json();
					if (!resp.ok) throw new Error('Error loading data');
					setStore({ planets: data.results })
					
				} catch (error) {
					console.error(error);

				}
			},
		}
	};
};

export default getState;



