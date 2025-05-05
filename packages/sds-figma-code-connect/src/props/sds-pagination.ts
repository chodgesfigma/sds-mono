import figma from '@figma/code-connect';

// props for sds-pagination
// read more about prop definitions at [https://www.figma.com/code-connect-docs/html/#the-figma-import]
// make sure to update "PROPS" to be a unique name for this set of props
export const PROPS = {
  label: figma.string('label'),
};

export const PAGINATION_PAGE_PROPS = {
  pageNumber: figma.string('Number'),
  current: figma.enum('State', {
    Current: true,
    'Current Hover': true,
  }),
  href: figma.string('Number'),
};

export const PAGINATION_GAP_PROPS = {};

export const PAGINATION_PREVIOUS_PROPS = {
  href: figma.enum('State', { Default: '?previous', Hover: '?previous' }),
};

export const PAGINATION_NEXT_PROPS = {
  href: figma.enum('State', { Default: '?next', Hover: '?next' }),
};

export const PAGINATION_LIST_PROPS = {
  children: figma.children(['Pagination Page', 'Pagination Gap']),
};

export const PAGINATION_PROPS = {
  children: figma.children([
    'Pagination Previous',
    'Pagination List',
    'Pagination Next',
  ]),
};
