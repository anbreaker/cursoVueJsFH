import { MutationTree } from 'vuex';
import Mapboxgl from 'mapbox-gl';

import { MapState } from './state';

const mutation: MutationTree<MapState> = {
  setMap(state, map: Mapboxgl.Map) {
    state.map = map;
  },
};

export default mutation;
