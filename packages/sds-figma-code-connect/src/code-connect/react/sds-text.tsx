import React from 'react';
import figma from '@figma/code-connect';
import {
  SdsTextList,
  SdsTextPrice,
  SdsTextContentHeading,
  SdsTextContentTitle,
  SdsTextLinkList,
  SdsTextListItem,
  SdsText,
  SdsTextTitleHero,
  SdsTextSubtitle,
  SdsTextHeading,
  SdsTextSubheading,
  SdsTextTitlePage,
  SdsTextEmphasis,
  SdsTextLink,
  SdsTextStrong,
  SdsTextCode,
  SdsTextSmall,
} from 'sds-react-components';

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
  example: ({ text }) => <SdsTextTitleHero>{text}</SdsTextTitleHero>,
});

figma.connect('<FIGMA_TEXT_TEXT_TITLE_PAGE>', {
  props: TEXT_TITLE_PAGE_PROPS,
  example: ({ text }) => <SdsTextTitlePage>{text}</SdsTextTitlePage>,
});

figma.connect('<FIGMA_TEXT_TEXT_SUBTITLE>', {
  props: TEXT_SUBTITLE_PROPS,
  example: ({ text }) => <SdsTextSubtitle>{text}</SdsTextSubtitle>,
});

figma.connect('<FIGMA_TEXT_TEXT_HEADING>', {
  props: TEXT_HEADING_PROPS,
  example: ({ text }) => <SdsTextHeading>{text}</SdsTextHeading>,
});

figma.connect('<FIGMA_TEXT_TEXT_SUBHEADING>', {
  props: TEXT_SUBHEADING_PROPS,
  example: ({ text }) => <SdsTextSubheading>{text}</SdsTextSubheading>,
});

figma.connect('<FIGMA_TEXT_TEXT>', {
  props: TEXT_TEXT_PROPS,
  example: ({ text }) => <SdsText>{text}</SdsText>,
});

figma.connect('<FIGMA_TEXT_TEXT_EMPHASIS>', {
  props: TEXT_EMPHASIS_PROPS,
  example: ({ text }) => <SdsTextEmphasis>{text}</SdsTextEmphasis>,
});

figma.connect('<FIGMA_TEXT_TEXT_LINK>', {
  props: TEXT_LINK_PROPS,
  example: ({ text }) => <SdsTextLink>{text}</SdsTextLink>,
});

figma.connect('<FIGMA_TEXT_TEXT_STRONG>', {
  props: TEXT_STRONG_PROPS,
  example: ({ text }) => <SdsTextStrong>{text}</SdsTextStrong>,
});

figma.connect('<FIGMA_TEXT_TEXT_SMALL>', {
  props: TEXT_SMALL_PROPS,
  example: ({ text }) => <SdsTextSmall>{text}</SdsTextSmall>,
});

figma.connect('<FIGMA_TEXT_TEXT_CODE>', {
  props: TEXT_CODE_PROPS,
  example: ({ text }) => <SdsTextCode>{text}</SdsTextCode>,
});

figma.connect('<FIGMA_TEXT_TEXT_LIST>', {
  props: TEXT_LIST_PROPS,
  example: ({ children, title, density }) => (
    <SdsTextList titleElem={title} density={density}>
      {children}
    </SdsTextList>
  ),
});

figma.connect('<FIGMA_TEXT_TEXT_LINK_LIST>', {
  props: TEXT_LINK_LIST_PROPS,
  example: ({ children, title, density }) => (
    <SdsTextLinkList titleElem={title} density={density}>
      {children}
    </SdsTextLinkList>
  ),
});

figma.connect('<FIGMA_TEXT_TEXT_LIST_ITEM>', {
  props: TEXT_LIST_ITEM_PROPS,
  example: ({ text }) => <SdsTextListItem>{text}</SdsTextListItem>,
});

figma.connect('<FIGMA_TEXT_TEXT_LINK_LIST_ITEM>', {
  props: TEXT_LINK_LIST_ITEM_PROPS,
  example: ({ text }) => (
    <SdsTextListItem>
      <SdsTextLink href='#'>{text}</SdsTextLink>
    </SdsTextListItem>
  ),
});

figma.connect('<FIGMA_TEXT_TEXT_PRICE>', {
  props: TEXT_PRICE_PROPS,
  example: ({ label, size, currency, price }) => (
    <SdsTextPrice
      currency={currency}
      price={price}
      label={label}
      size={size}
    ></SdsTextPrice>
  ),
});

figma.connect('<FIGMA_TEXT_TEXT_CONTENT_HEADING>', {
  props: TEXT_CONTENT_HEADING_PROPS,
  example: ({ align, heading, subheading }) => (
    <SdsTextContentHeading
      align={align}
      heading={heading}
      subHeading={subheading}
    ></SdsTextContentHeading>
  ),
});

figma.connect('<FIGMA_TEXT_TEXT_CONTENT_TITLE>', {
  props: TEXT_CONTENT_TITLE_PROPS,
  example: ({ align, title, subtitle }) => (
    <SdsTextContentTitle
      align={align}
      heading={title}
      subHeading={subtitle}
    ></SdsTextContentTitle>
  ),
});
