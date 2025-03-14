import figma, { html } from '@figma/code-connect/html';
import {
  TAG_PROPS,
  TAG_TOGGLE_PROPS,
  TAG_TOGGLE_GROUP_PROPS,
} from 'src/props/sds-tag';

figma.connect('<FIGMA_TAGS_TAG>', {
  props: TAG_PROPS,
  example: ({ label, scheme, variant, removable }) =>
    html`<SdsTag scheme=${scheme} variant=${variant} removable=${removable}
      >${label}</SdsTag
    >`,
});

figma.connect('<FIGMA_TAGS_TAG_TOGGLE>', {
  props: TAG_TOGGLE_PROPS,
  example: ({ label, iconStart, selected }) =>
    html`<SdsToggleTag selected=${selected}
      >${iconStart}${label}</SdsToggleTag
    >`,
});

figma.connect('<FIGMA_TAGS_TAG_TOGGLE_GROUP>', {
  props: TAG_TOGGLE_GROUP_PROPS,
  example: ({ children }) =>
    html`<SdsToggleTagGroup>
      <p slot="label">Label this!</p>
      <SdsToggleTagList> ${children} </SdsToggleTagList>
    </SdsToggleTagGroup>`,
});
