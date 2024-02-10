import { Config } from '@stencil/core';
import { reactOutputTarget } from '@stencil/react-output-target';
import { vueOutputTarget } from '@stencil/vue-output-target';

export const config: Config = {
  namespace: 'core',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
    reactOutputTarget({
      componentCorePackage: '@crownelements/core',
      proxiesFile: '../react/lib/components.ts',
    }),
    vueOutputTarget({
      componentCorePackage: '@crownelements/core',
      proxiesFile: '../vue/lib/components.ts',
    }),
  ],
  testing: {
    browserHeadless: 'new',
  },
};
