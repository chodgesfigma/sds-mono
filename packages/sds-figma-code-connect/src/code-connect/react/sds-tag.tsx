import React from 'react';
import figma from '@figma/code-connect';
import { SdsTag, SdsToggleTag, SdsToggleTagGroup } from 'sds-react-components';

import {
  TAG_PROPS,
  TAG_TOGGLE_PROPS,
  TAG_TOGGLE_GROUP_PROPS,
} from 'src/props/sds-tag';

figma.connect(SdsTag, '<FIGMA_TAGS_TAG>', {
  props: TAG_PROPS,
  example: ({ label, ...props }) => <SdsTag {...props}>{label}</SdsTag>,
});

figma.connect('<FIGMA_TAGS_TAG_TOGGLE>', {
  props: TAG_TOGGLE_PROPS,
  example: ({ label, iconStart, selected }) => (
    <SdsToggleTag selected={selected}>
      {iconStart}
      {label}
    </SdsToggleTag>
  ),
});

figma.connect('<FIGMA_TAGS_TAG_TOGGLE_GROUP>', {
  props: TAG_TOGGLE_GROUP_PROPS,
  example: ({ children }) => <SdsToggleTagGroup>{children}</SdsToggleTagGroup>,
});
