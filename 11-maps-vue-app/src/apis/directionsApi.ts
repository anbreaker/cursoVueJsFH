import axios from 'axios';

export const directionsApi = axios.create({
  baseURL: 'https://api.mapbox.com/directions/v5/mapbox/driving',
  params: {
    access_token: process.env.VUE_APP_MAPBOXGL_TOKEN,
    alternatives: false,
    geometries: 'geojson',
    language: 'en',
    overview: 'simplified',
    steps: false,
  },
});
