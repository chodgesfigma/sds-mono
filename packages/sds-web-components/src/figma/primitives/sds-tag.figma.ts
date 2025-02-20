import figma, { html } from '@figma/code-connect/html';

figma.connect('<FIGMA_TAGS_TAG>', {
  props: {
    onRemove: figma.boolean('Removable'),
    label: figma.string('Label'),
    variant: figma.enum('Variant', {
      Secondary: 'secondary',
    }),
    scheme: figma.enum('Scheme', {
      Danger: 'danger',
      Positive: 'positive',
      Warning: 'warning',
      Neutral: 'neutral',
    }),
    state: figma.enum('State', {
      Hover: 'hover',
      Default: 'default',
    }),
  },
  example: ({ label, onRemove, variant, scheme }) => html`<sds-tag scheme=${scheme} variant=${variant} removable=${onRemove}>${label}</sds-tag>`,
});

figma.connect('<FIGMA_TAGS_TAG_TOGGLE>', {
  props: {
    label: figma.string('Label'),
    iconStart: figma.instance('Icon'),
    selected: figma.boolean('State'),
  },
  example: ({ label, iconStart, selected }) => html`<sds-toggle-tag selected=${selected}>${iconStart}${label}</sds-toggle-tag>`,
});

figma.connect('<FIGMA_TAGS_TAG_TOGGLE_GROUP>', {
  props: {
    children: figma.children('Tag Toggle'),
  },
  example: ({ children }) =>
    html`<sds-toggle-tag-group>
      <p slot="label">Label this!</p>
      <sds-toggle-tag-list> ${children} </sds-toggle-tag-list>
    </sds-toggle-tag-group>`,
});
