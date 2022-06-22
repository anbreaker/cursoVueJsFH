<template>
  <q-page class="flex column q-pa-md">
    <span class="text-h1">Headline 1</span>
    <span class="text-h2">Headline 2</span>
    <span class="text-h3">Headline 3</span>
    <span class="text-h4">Headline 4</span>
    <span class="text-h5">Headline 5</span>
    <span class="text-h6">Headline 6</span>

    <br />
    <q-separator />
    <br />

    <p class="text-body1">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
      perspiciatis maxime esse sunt exercitationem consectetur, ut recusandae
      eum eaque voluptatum.
    </p>
    <p class="text-body2">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
      perspiciatis maxime esse sunt exercitationem consectetur, ut recusandae
      eum eaque voluptatum.
    </p>

    <br />
    <q-separator />
    <br />

    <span class="text-weight-thin">Lorem ipsum dolor sit amet.</span>
    <span class="text-weight-light">Lorem ipsum dolor sit amet.</span>
    <span class="text-weight-regular">Lorem ipsum dolor sit amet.</span>
    <span class="text-weight-medium">Lorem ipsum dolor sit amet.</span>
    <span class="text-weight-bold">Lorem ipsum dolor sit amet.</span>
    <span class="text-weight-bolder">Lorem ipsum dolor sit amet.</span>

    <br />
    <q-separator />
    <br />

    <span class="text-subtitle1">Subtitle 1</span>
    <span class="text-subtitle2">Subtitle 2</span>

    <q-btn
      color="primary"
      :label="sideMenuOpen ? 'Close Lateral Menu' : 'Open Lateral Menu'"
      class="q-mt-md"
      @click="toggleSideMenu"
    />
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

import { useUI } from "../composables/useUI";

export default defineComponent({
  name: "Typography",

  setup() {
    const { sideMenuOpen, toggleSideMenu } = useUI();

    return {
      sideMenuOpen,
      toggleSideMenu,
    };
  },
});
</script>
