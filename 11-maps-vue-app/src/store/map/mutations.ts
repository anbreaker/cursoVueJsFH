import { MutationTree } from 'vuex';
import Mapboxgl from 'mapbox-gl';

import { MapState } from './state';
import { Feature } from '@/interfaces/places';

const mutation: MutationTree<MapState> = {
  setMap(state, map: Mapboxgl.Map) {
    state.map = map;
  },

  setPlacesMarkers(state, places: Feature[]) {
    state.markers.forEach((marker) => marker.remove());

    state.markers = [];

    if (!state.map) return;

    for (const place of places) {
      const [lng, lat] = place.center;

      const popup = new Mapboxgl.Popup({ offset: [0, -35] }).setLngLat([lng, lat])
        .setHTML(`
        <h4>${place.text}</h4> 
        <p>${place.place_name}</p> 
      `);

      const customMarker = new Mapboxgl.Marker({ color: 'crimson' })
        .setLngLat([lng, lat])
        .setPopup(popup)
        .addTo(state.map);

      state.markers.push(customMarker);
    }
  },
};

export default mutation;
