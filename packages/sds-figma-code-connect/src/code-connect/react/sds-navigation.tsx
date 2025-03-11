import React from 'react';
import figma from '@figma/code-connect';
import {
  SdsNavigation,
  SdsNavigationButton,
  SdsNavigationPill,
} from 'sds-react-components';
import {
  NAVIGATION_BUTTON_LIST_PROPS,
  NAVIGATION_BUTTON_PROPS,
  NAVIGATION_PILL_PROPS,
  NAVIGATION_PROPS,
} from 'src/props/sds-navigation';

figma.connect(SdsNavigation, '<FIGMA_NAVIGATION_NAVIGATION_PILL_LIST>', {
  props: NAVIGATION_PROPS,
  example: ({ children, ...props }) => (
    <SdsNavigation {...props}>{children}</SdsNavigation>
  ),
});

figma.connect(SdsNavigationPill, '<FIGMA_NAVIGATION_NAVIGATION_PILL>', {
  props: NAVIGATION_PILL_PROPS,
  example: ({ label, ...props }) => (
    <SdsNavigationPill {...props}>{label}</SdsNavigationPill>
  ),
});

figma.connect(SdsNavigation, '<FIGMA_NAVIGATION_NAVIGATION_BUTTON_LIST>', {
  props: NAVIGATION_BUTTON_LIST_PROPS,
  example: ({ children, ...props }) => (
    <SdsNavigation {...props}>{children}</SdsNavigation>
  ),
});

figma.connect(SdsNavigationButton, '<FIGMA_NAVIGATION_NAVIGATION_BUTTON>', {
  props: NAVIGATION_BUTTON_PROPS,
  example: ({ label, ...props }) => (
    <SdsNavigationButton {...props}>{label}</SdsNavigationButton>
  ),
});
