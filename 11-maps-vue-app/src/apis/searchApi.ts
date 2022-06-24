import axios from 'axios';

export const searchApi = axios.create({
  baseURL: 'https://api.mapbox.com/geocoding/v5/mapbox.places',
  params: {
    limit: 5,
    access_token: process.env.VUE_APP_MAPBOXGL_TOKEN,
  },
});
