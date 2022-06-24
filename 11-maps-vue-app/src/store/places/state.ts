import { Feature } from '@/interfaces/places';

export interface PlacesState {
  isLoading: boolean;
  isLoadingPlaces: boolean;
  places: Feature[];
  userLocation?: [number, number]; // lng, lat
}

function state(): PlacesState {
  return {
    isLoading: true,
    isLoadingPlaces: false,
    places: [],
    userLocation: undefined,
  };
}

export default state;
