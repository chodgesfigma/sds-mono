import figma from '@figma/code-connect';

// props for sds-switch
// read more about prop definitions at [https://www.figma.com/code-connect-docs/html/#the-figma-import]
// make sure to update "PROPS" to be a unique name for this set of props
export const SWITCH_PROPS = {
  label: figma.string('Label'),
  description: figma.boolean('Has Description', {
    true: figma.string('Description'),
    false: undefined,
  }),
  checked: figma.enum('Value Type', {
    Checked: true,
  }),
  disabled: figma.enum('State', {
    Disabled: true,
  }),
};
