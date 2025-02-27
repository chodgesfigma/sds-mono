import { angularOutputTarget } from '@stencil/angular-output-target';
import { Config } from '@stencil/core';
import { reactOutputTarget } from '@stencil/react-output-target';
import { sass } from '@stencil/sass';
import { vueOutputTarget } from '@stencil/vue-output-target';

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
    vueOutputTarget({
      componentCorePackage: 'sds-web-components',
      proxiesFile: '../sds-vue-components/lib/components.ts',
    }),
    reactOutputTarget({
      outDir: '../sds-react-components/src',
      stencilPackageName: 'sds-web-components',
    }),
    angularOutputTarget({
      componentCorePackage: 'sds-web-components',
      outputType: 'component',
      directivesProxyFile: '../sds-angular-components/projects/sds-angular-component-library/src/lib/stencil-generated/components.ts',
      directivesArrayFile: '../sds-angular-components/projects/sds-angular-component-library/src/lib/stencil-generated/index.ts',
    }),
  ],
  testing: {
    browserHeadless: 'shell',
  },
};
