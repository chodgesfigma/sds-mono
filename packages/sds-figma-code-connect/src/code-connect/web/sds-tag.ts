import figma, { html } from '@figma/code-connect/html';
import {
  TAG_PROPS,
  TAG_TOGGLE_PROPS,
  TAG_TOGGLE_GROUP_PROPS,
} from 'src/props/sds-tag';

figma.connect('<FIGMA_TAGS_TAG>', {
  props: TAG_PROPS,
  example: ({ label, scheme, variant, removable }) =>
    html`<sds-tag scheme=${scheme} variant=${variant} removable=${removable}
      >${label}</sds-tag
    >`,
});

figma.connect('<FIGMA_TAGS_TAG_TOGGLE>', {
  props: TAG_TOGGLE_PROPS,
  example: ({ label, iconStart, selected }) =>
    html`<sds-toggle-tag selected=${selected}
      >${iconStart}${label}</sds-toggle-tag
    >`,
});

figma.connect('<FIGMA_TAGS_TAG_TOGGLE_GROUP>', {
  props: TAG_TOGGLE_GROUP_PROPS,
  example: ({ children }) =>
    html`<sds-toggle-tag-group>
      <p slot="label">Label this!</p>
      <sds-toggle-tag-list> ${children} </sds-toggle-tag-list>
    </sds-toggle-tag-group>`,
});
