import React from 'react';
import figma from '@figma/code-connect';
import {
  SdsFlex,
  SdsFlexItem,
  SdsImage,
  SdsPanel,
  SdsSection,
} from 'sds-react-components';

import {
  PANEL_IMAGE_CONTENT_PROPS,
  PANEL_IMAGE_CONTENT_REVERSE_PROPS,
  PANEL_IMAGE_DOUBLE_PROPS,
  PANEL_IMAGE_PROPS,
} from 'src/props/sds-panel';

figma.connect(SdsPanel, '<FIGMA_SECTIONS_PANEL_IMAGE_CONTENT>', {
  props: PANEL_IMAGE_CONTENT_PROPS,
  example: ({ padding, gap, children }) => (
    <SdsSection padding={padding}>
      <SdsPanel gap={gap} flexType='half'>
        <SdsFlexItem size='half'>
          <SdsImage
            src='/images/placeholder.svg'
            alt='Always use image alt'
            aspectRatio='4-3'
            size='medium'
          />
        </SdsFlexItem>
        <SdsFlexItem size='half'>
          <SdsFlex direction='column' gap='600'>
            {children}
          </SdsFlex>
        </SdsFlexItem>
      </SdsPanel>
    </SdsSection>
  ),
});

figma.connect(SdsPanel, '<FIGMA_SECTIONS_PANEL_IMAGE_CONTENT_REVERSE>', {
  props: PANEL_IMAGE_CONTENT_REVERSE_PROPS,
  example: ({ padding, gap, children }) => (
    <SdsSection padding={padding}>
      <SdsPanel gap={gap} flexType='half'>
        <SdsFlexItem size='half'>
          <SdsFlex direction='column' gap='600'>
            {children}
          </SdsFlex>
        </SdsFlexItem>
        <SdsFlexItem size='half'>
          <SdsImage
            src='/images/placeholder.svg'
            alt='Always use image alt'
            aspectRatio='4-3'
            size='medium'
          />
        </SdsFlexItem>
      </SdsPanel>
    </SdsSection>
  ),
});

figma.connect(SdsPanel, '<FIGMA_SECTIONS_PANEL_IMAGE_DOUBLE>', {
  props: PANEL_IMAGE_DOUBLE_PROPS,
  example: ({ padding, gap }) => (
    <SdsSection padding={padding}>
      <SdsPanel gap={gap} flexType='half'>
        <SdsFlexItem size='half'>
          <SdsImage
            src='/images/placeholder.svg'
            alt='Always use image alt'
            aspectRatio='4-3'
            size='medium'
          />
        </SdsFlexItem>
        <SdsFlexItem size='half'>
          <SdsImage
            src='/images/placeholder.svg'
            alt='Always use image alt'
            aspectRatio='4-3'
            size='medium'
          />
        </SdsFlexItem>
      </SdsPanel>
    </SdsSection>
  ),
});

figma.connect(SdsPanel, '<FIGMA_SECTIONS_PANEL_IMAGE>', {
  props: PANEL_IMAGE_PROPS,
  example: ({ padding }) => (
    <SdsSection padding={padding}>
      <SdsPanel flexType='auto'>
        <SdsFlexItem size='full'>
          <SdsImage
            src='/images/placeholder.svg'
            alt='Always use image alt'
            aspectRatio='fill'
            size='medium'
          />
        </SdsFlexItem>
      </SdsPanel>
    </SdsSection>
  ),
});
