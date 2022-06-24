import { ActionTree } from 'vuex';

import { PlacesState } from './state';
import { StateInterface } from '../index';
import { searchApi } from '@/apis';
import { Feature, PlacesResponse } from '@/interfaces/places';

const actions: ActionTree<PlacesState, StateInterface> = {
  getInitialLocation({ commit }) {
    // TODO put loading
    navigator.geolocation.getCurrentPosition(
      ({ coords }) =>
        commit('setLngLat', { lng: coords.longitude, lat: coords.latitude }),
      (error) => {
        console.error(error);
        throw new Error('No geolocation :(');
      }
    );
  },

  searchPlacesByTerm: async ({ commit, state }, query: string): Promise<Feature[]> => {
    if (query.length === 0) {
      commit('setPlaces', []);

      return [];
    }

    if (!state.userLocation) {
      throw new Error('Without geolocation.');
    }

    commit('setIsLoadingPlaces');

    const { data } = await searchApi.get<PlacesResponse>(`/${query}.json`, {
      params: {
        proximity: state.userLocation?.join(','),
      },
    });

    commit('setPlaces', data.features);

    return data.features;
  },
};

export default actions;
