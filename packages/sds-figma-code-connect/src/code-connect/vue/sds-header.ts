import figma, { html } from '@figma/code-connect/html';
import { HEADER_AUTH_PROPS, HEADER_PROPS } from 'src/props/sds-header';

figma.connect('<FIGMA_SECTIONS_HEADER>', {
  props: HEADER_PROPS,
  example: () => html`<SdsHeader></SdsHeader>`,
});

figma.connect('<FIGMA_SECTIONS_HEADER_AUTH>', {
  props: HEADER_AUTH_PROPS,
  example: () => html`<SdsHeaderAuth></SdsHeaderAuth>`,
});
