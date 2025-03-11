import figma, { html } from '@figma/code-connect/html';
import {
  NAVIGATION_BUTTON_LIST_PROPS,
  NAVIGATION_BUTTON_PROPS,
  NAVIGATION_PILL_PROPS,
  NAVIGATION_PROPS,
} from 'src/props/sds-navigation';

figma.connect('<FIGMA_NAVIGATION_NAVIGATION_PILL_LIST>', {
  props: NAVIGATION_PROPS,
  example: ({ children, direction }) =>
    html`<SdsNavigation direction=${direction}>${children}</SdsNavigation>`,
});

figma.connect('<FIGMA_NAVIGATION_NAVIGATION_PILL>', {
  props: NAVIGATION_PILL_PROPS,
  example: ({ label, isSelected }) =>
    html`<SdsNavigationPill isSelected=${isSelected}
      >${label}</SdsNavigationPill
    >`,
});

figma.connect('<FIGMA_NAVIGATION_NAVIGATION_BUTTON_LIST>', {
  props: NAVIGATION_BUTTON_LIST_PROPS,
  example: ({ children, direction }) =>
    html`<SdsNavigation direction=${direction}>${children}</SdsNavigation>`,
});

figma.connect('<FIGMA_NAVIGATION_NAVIGATION_BUTTON>', {
  props: NAVIGATION_BUTTON_PROPS,
  example: ({ label, isSelected, icon }) =>
    html`<SdsNavigationButton isSelected=${isSelected}
      >${icon}${label}</SdsNavigationButton
    >`,
});
