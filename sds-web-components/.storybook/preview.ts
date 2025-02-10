import type { Preview } from '@storybook/html';
import { defineCustomElements } from './../loader';
import { setStencilDocJson } from '@pxtrn/storybook-addon-docs-stencil';
import docJson from './../dist/docs.json';

defineCustomElements();

if (docJson) setStencilDocJson(docJson);

import './../dist/sds/sds.css';
import '../src/index.css';

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
