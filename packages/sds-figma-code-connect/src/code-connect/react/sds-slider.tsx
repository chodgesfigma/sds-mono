import React from 'react';
import figma from '@figma/code-connect';
import { SdsSlider } from 'sds-react-components';

import { SLIDER_PROPS } from 'src/props/sds-slider';

figma.connect(SdsSlider, '<FIGMA_INPUTS_SLIDER_FIELD>', {
  props: SLIDER_PROPS,
  example: ({ ...props }) => <SdsSlider {...props}></SdsSlider>,
});
