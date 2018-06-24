const API_KEY = '6e09d27a856f863c8c169b51030111d7';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
	const url = `${ROOT_URL}&q=${city}`;
	console.log(url);
	return (dispatch, getState) =>
		fetch(url, {
			method: 'GET'
		})
			.then(resp => resp.json())
			.then(data => {
				dispatch({ type: FETCH_WEATHER, payload: data });
			})
			.catch(err => err);
}
