import {
  applyPolyfills,
  defineCustomElements,
} from "@crownelements/core/loader";

import { Plugin } from "vue";

export const ComponentLibrary: Plugin = {
  async install() {
    applyPolyfills().then(() => {
      defineCustomElements();
    });
  },
};
