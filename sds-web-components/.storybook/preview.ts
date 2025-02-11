import '../src/index.css';
import docJson from './../dist/docs.json';
import './../dist/sds/sds.css';
import { defineCustomElements } from './../loader';
import { setStencilDocJson } from '@pxtrn/storybook-addon-docs-stencil';
import type { Preview } from '@storybook/html';

defineCustomElements();

if (docJson) setStencilDocJson(docJson);

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
