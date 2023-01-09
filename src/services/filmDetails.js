import axios from 'axios';

const API_KEY = 'e20dc8db2a19ccc0feaf13905c82de4b';
const baseURL = 'https://api.themoviedb.org/3/movie';

export const gettingFilmDetails = async movieId => {
  const filmSearch = axios.create({
    baseURL: baseURL,
    params: {
      api_key: API_KEY,
    },
  });

  const response = await filmSearch(`/${movieId}`);
  const film = response.data;
  return film;
};
