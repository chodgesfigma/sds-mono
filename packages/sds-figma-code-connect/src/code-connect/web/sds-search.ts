import figma, { html } from '@figma/code-connect/html';
import { SEARCH_PROPS } from 'src/props/sds-search';

figma.connect('<FIGMA_INPUTS_SEARCH>', {
  props: SEARCH_PROPS,
  example: ({ disabled, placeholder, defaultValue }) =>
    html`<sds-search
      default-value=${defaultValue}
      placeholder=${placeholder}
      disabled=${disabled}
    ></sds-search>`,
});
