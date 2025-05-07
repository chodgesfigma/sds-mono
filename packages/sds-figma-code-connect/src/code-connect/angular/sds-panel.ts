import figma, { html } from '@figma/code-connect/html';

import {
  PANEL_IMAGE_CONTENT_PROPS,
  PANEL_IMAGE_CONTENT_REVERSE_PROPS,
  PANEL_IMAGE_DOUBLE_PROPS,
  PANEL_IMAGE_PROPS,
} from 'src/props/sds-panel';

figma.connect('<FIGMA_SECTIONS_PANEL_IMAGE_CONTENT>', {
  props: PANEL_IMAGE_CONTENT_PROPS,
  example: ({ padding, gap, children }) => html`
    <sds-section padding=${padding}>
      <sds-panel gap=${gap} flexType="half">
        <sds-flex-item size="half">
          <sds-image
            src="/images/placeholder.svg"
            alt="Always use image alt"
            aspectRatio="4-3"
            size="medium"
          />
        </sds-flex-item>
        <sds-flex-item size="half">
          <sds-flex direction="column" gap="600"> ${children} </sds-flex>
        </sds-flex-item>
      </sds-panel>
    </sds-section>
  `,
});

figma.connect('<FIGMA_SECTIONS_PANEL_IMAGE_CONTENT_REVERSE>', {
  props: PANEL_IMAGE_CONTENT_REVERSE_PROPS,
  example: ({ padding, gap, children }) =>
    html` <sds-section padding=${padding}>
        <sds-panel gap=${gap} flexType="half">
          <sds-flex-item size="half">
            <SdsFlex direction="column" gap="600"> ${children} </SdsFlex>
          </sds-flex-item>
          <sds-flex-item size="half">
            <sds-image
              src="/images/placeholder.svg"
              alt="Always use image alt"
              aspectRatio="4-3"
              size="medium"
            />
          </sds-flex-item>
        </sds-panel>
      </sds-section>
      )`,
});

figma.connect('<FIGMA_SECTIONS_PANEL_IMAGE_DOUBLE>', {
  props: PANEL_IMAGE_DOUBLE_PROPS,
  example: ({ padding, gap }) => html`
    <sds-section padding=${padding}>
      <sds-panel gap=${gap} flexType="half">
        <sds-flex-item size="half">
          <sds-image
            src="/images/placeholder.svg"
            alt="Always use image alt"
            aspectRatio="4-3"
            size="medium"
          />
        </sds-flex-item>
        <sds-flex-item size="half">
          <sds-image
            src="/images/placeholder.svg"
            alt="Always use image alt"
            aspectRatio="4-3"
            size="medium"
          />
        </sds-flex-item>
      </sds-panel>
    </sds-section>
  `,
});

figma.connect('<FIGMA_SECTIONS_PANEL_IMAGE>', {
  props: PANEL_IMAGE_PROPS,
  example: ({ padding }) => html`
    <sds-section padding=${padding}>
      <sds-panel flexType="auto">
        <sds-flex-item size="full">
          <sds-image
            src="/images/placeholder.svg"
            alt="Always use image alt"
            aspectRatio="fill"
            size="medium"
          />
        </sds-flex-item>
      </sds-panel>
    </sds-section>
  `,
});
