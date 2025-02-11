import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'sds',
  // Styles that will be compiled into `./build/sds.css`
  globalStyle: 'src/styles/app.scss',
  plugins: [
    // refer to https://www.npmjs.com/package/@stencil/sass for options
    sass({
      includePaths: ['./src/styles/'],
    }),
  ],
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
      customElementsExportBehavior: 'auto-define-custom-elements',
      externalRuntime: false,
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
    {
      type: 'docs-json',
      file: './dist/docs.json',
    },
  ],
  testing: {
    browserHeadless: 'shell',
  },
};
