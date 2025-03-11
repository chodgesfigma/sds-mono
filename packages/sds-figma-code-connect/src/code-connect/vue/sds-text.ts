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
  example: ({ text }) => html`<SdsTextTitleHero>${text}</SdsTextTitleHero>`,
});

figma.connect('<FIGMA_TEXT_TEXT_TITLE_PAGE>', {
  props: TEXT_TITLE_PAGE_PROPS,
  example: ({ text }) => html`<SdsTextTitlePage>${text}</SdsTextTitlePage>`,
});

figma.connect('<FIGMA_TEXT_TEXT_SUBTITLE>', {
  props: TEXT_SUBTITLE_PROPS,
  example: ({ text }) => html`<SdsTextSubtitle>${text}</SdsTextSubtitle>`,
});

figma.connect('<FIGMA_TEXT_TEXT_HEADING>', {
  props: TEXT_HEADING_PROPS,
  example: ({ text }) => html`<SdsTextHeading>${text}</SdsTextHeading>`,
});

figma.connect('<FIGMA_TEXT_TEXT_SUBHEADING>', {
  props: TEXT_SUBHEADING_PROPS,
  example: ({ text }) => html`<SdsTextSubheading>${text}</SdsTextSubheading>`,
});

figma.connect('<FIGMA_TEXT_TEXT>', {
  props: TEXT_TEXT_PROPS,
  example: ({ text }) => html`<SdsText>${text}</SdsText>`,
});

figma.connect('<FIGMA_TEXT_TEXT_EMPHASIS>', {
  props: TEXT_EMPHASIS_PROPS,
  example: ({ text }) => html`<SdsTextEmphasis>${text}</SdsTextEmphasis>`,
});

figma.connect('<FIGMA_TEXT_TEXT_LINK>', {
  props: TEXT_LINK_PROPS,
  example: ({ text }) => html`<SdsTextLink>${text}</SdsTextLink>`,
});

figma.connect('<FIGMA_TEXT_TEXT_STRONG>', {
  props: TEXT_STRONG_PROPS,
  example: ({ text }) => html`<SdsTextStrong>${text}</SdsTextStrong>`,
});

figma.connect('<FIGMA_TEXT_TEXT_SMALL>', {
  props: TEXT_SMALL_PROPS,
  example: ({ text }) => html`<SdsTextSmall>${text}</SdsTextSmall>`,
});

figma.connect('<FIGMA_TEXT_TEXT_CODE>', {
  props: TEXT_CODE_PROPS,
  example: ({ text }) => html`<SdsTextCode>${text}</SdsTextCode>`,
});

figma.connect('<FIGMA_TEXT_TEXT_LIST>', {
  props: TEXT_LIST_PROPS,
  example: ({ children, title, density }) =>
    html`<SdsTextList density=${density}>${title}${children}</SdsTextList>`,
});

figma.connect('<FIGMA_TEXT_TEXT_LINK_LIST>', {
  props: TEXT_LINK_LIST_PROPS,
  example: ({ children, title, density }) =>
    html`<SdsTextLinkList density=${density}
      >${title}${children}</SdsTextLinkList
    >`,
});

figma.connect('<FIGMA_TEXT_TEXT_LIST_ITEM>', {
  props: TEXT_LIST_ITEM_PROPS,
  example: ({ text }) => html`<SdsTextListItem>${text}</SdsTextListItem>`,
});

figma.connect('<FIGMA_TEXT_TEXT_LINK_LIST_ITEM>', {
  props: TEXT_LINK_LIST_ITEM_PROPS,
  example: ({ text }) =>
    html`<SdsTextListItem>
      <SdsTextLink href="#">${text}</SdsTextLink>
    </SdsTextListItem>`,
});

figma.connect('<FIGMA_TEXT_TEXT_PRICE>', {
  props: TEXT_PRICE_PROPS,
  example: ({ label, size, currency, price }) =>
    html`<SdsTextPrice
      currency=${currency}
      price=${price}
      label=${label}
      size=${size}
    ></SdsTextPrice>`,
});

figma.connect('<FIGMA_TEXT_TEXT_CONTENT_HEADING>', {
  props: TEXT_CONTENT_HEADING_PROPS,
  example: ({ align, heading, subheading }) =>
    html`<SdsTextContentHeading
      align=${align}
      heading=${heading}
      subHeading=${subheading}
    ></SdsTextContentHeading>`,
});

figma.connect('<FIGMA_TEXT_TEXT_CONTENT_TITLE>', {
  props: TEXT_CONTENT_TITLE_PROPS,
  example: ({ align, title, subtitle }) =>
    html`<SdsTextContentTitle
      align=${align}
      heading=${title}
      subHeading=${subtitle}
    ></SdsTextContentTitle>`,
});
