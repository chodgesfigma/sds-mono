import figma, { html } from '@figma/code-connect/html';
import {
  TEXT_TITLE_HERO_PROPS,
  TEXT_TITLE_PAGE_PROPS,
  TEXT_SUBTITLE_PROPS,
  TEXT_HEADING_PROPS,
  TEXT_SUBHEADING_PROPS,
  TEXT_TEXT_PROPS,
  TEXT_EMPHASIS_PROPS,
  TEXT_LINK_PROPS,
  TEXT_STRONG_PROPS,
  TEXT_SMALL_PROPS,
  TEXT_CODE_PROPS,
  TEXT_LIST_PROPS,
  TEXT_LINK_LIST_PROPS,
  TEXT_LIST_ITEM_PROPS,
  TEXT_LINK_LIST_ITEM_PROPS,
  TEXT_PRICE_PROPS,
  TEXT_CONTENT_HEADING_PROPS,
  TEXT_CONTENT_TITLE_PROPS,
} from 'src/props/sds-text';

figma.connect('<FIGMA_TEXT_TEXT_TITLE_HERO>', {
  props: TEXT_TITLE_HERO_PROPS,
  example: ({ text }) =>
    html`<sds-text-title-hero>${text}</sds-text-title-hero>`,
});

figma.connect('<FIGMA_TEXT_TEXT_TITLE_PAGE>', {
  props: TEXT_TITLE_PAGE_PROPS,
  example: ({ text }) =>
    html`<sds-text-title-page>${text}</sds-text-title-page>`,
});

figma.connect('<FIGMA_TEXT_TEXT_SUBTITLE>', {
  props: TEXT_SUBTITLE_PROPS,
  example: ({ text }) => html`<sds-text-subtitle>${text}</sds-text-subtitle>`,
});

figma.connect('<FIGMA_TEXT_TEXT_HEADING>', {
  props: TEXT_HEADING_PROPS,
  example: ({ text }) => html`<sds-text-heading>${text}</sds-text-heading>`,
});

figma.connect('<FIGMA_TEXT_TEXT_SUBHEADING>', {
  props: TEXT_SUBHEADING_PROPS,
  example: ({ text }) =>
    html`<sds-text-subheading>${text}</sds-text-subheading>`,
});

figma.connect('<FIGMA_TEXT_TEXT>', {
  props: TEXT_TEXT_PROPS,
  example: ({ text }) => html`<sds-text>${text}</sds-text>`,
});

figma.connect('<FIGMA_TEXT_TEXT_EMPHASIS>', {
  props: TEXT_EMPHASIS_PROPS,
  example: ({ text }) => html`<sds-text-emphasis>${text}</sds-text-emphasis>`,
});

figma.connect('<FIGMA_TEXT_TEXT_LINK>', {
  props: TEXT_LINK_PROPS,
  example: ({ text }) => html`<sds-text-link>${text}</sds-text-link>`,
});

figma.connect('<FIGMA_TEXT_TEXT_STRONG>', {
  props: TEXT_STRONG_PROPS,
  example: ({ text }) => html`<sds-text-strong>${text}</sds-text-strong>`,
});

figma.connect('<FIGMA_TEXT_TEXT_SMALL>', {
  props: TEXT_SMALL_PROPS,
  example: ({ text }) => html`<sds-text-small>${text}</sds-text-small>`,
});

figma.connect('<FIGMA_TEXT_TEXT_CODE>', {
  props: TEXT_CODE_PROPS,
  example: ({ text }) => html`<sds-text-code>${text}</sds-text-code>`,
});

figma.connect('<FIGMA_TEXT_TEXT_LIST>', {
  props: TEXT_LIST_PROPS,
  example: ({ children, title, density }) =>
    html`<sds-text-list title-elem=${title} density=${density}
      >${children}</sds-text-list
    >`,
});

figma.connect('<FIGMA_TEXT_TEXT_LINK_LIST>', {
  props: TEXT_LINK_LIST_PROPS,
  example: ({ children, title, density }) =>
    html`<sds-text-link-list title-elem=${title} density=${density}
      >${children}</sds-text-link-list
    >`,
});

figma.connect('<FIGMA_TEXT_TEXT_LIST_ITEM>', {
  props: TEXT_LIST_ITEM_PROPS,
  example: ({ text }) => html`<sds-text-list-item>${text}</sds-text-list-item>`,
});

figma.connect('<FIGMA_TEXT_TEXT_LINK_LIST_ITEM>', {
  props: TEXT_LINK_LIST_ITEM_PROPS,
  example: ({ text }) =>
    html`<sds-text-list-item>
      <sds-text-link href="#">${text}</sds-text-link>
    </sds-text-list-item>`,
});

figma.connect('<FIGMA_TEXT_TEXT_PRICE>', {
  props: TEXT_PRICE_PROPS,
  example: ({ label, size, currency, price }) =>
    html`<sds-text-price
      currency=${currency}
      price=${price}
      label=${label}
      size=${size}
    ></sds-text-price>`,
});

figma.connect('<FIGMA_TEXT_TEXT_CONTENT_HEADING>', {
  props: TEXT_CONTENT_HEADING_PROPS,
  example: ({ align, heading, subheading }) =>
    html`<sds-text-content-heading
      align=${align}
      heading=${heading}
      sub-heading=${subheading}
    ></sds-text-content-heading>`,
});

figma.connect('<FIGMA_TEXT_TEXT_CONTENT_TITLE>', {
  props: TEXT_CONTENT_TITLE_PROPS,
  example: ({ align, title, subtitle }) =>
    html`<sds-text-content-title
      align=${align}
      heading=${title}
      sub-heading=${subtitle}
    ></sds-text-content-title>`,
});
