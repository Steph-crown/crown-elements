import tailwind, { PluginOpts, tailwindHMR } from 'stencil-tailwind-plugin';

import { Config } from '@stencil/core';
import cfg from './tailwind.config';
import { reactOutputTarget } from '@stencil/react-output-target';
import { vueOutputTarget } from '@stencil/vue-output-target';

const tailwindOpts = {
  ...PluginOpts.DEFAULT,
  debug: false,
  stripComments: true,
  tailwindConf: cfg,
};

export const config: Config = {
  namespace: 'core',
  plugins: [tailwind(tailwindOpts), tailwindHMR(tailwindOpts)],

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
