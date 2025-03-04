import figma from '@figma/code-connect';

// props for sds-checkbox
// read more about prop definitions at [https://www.figma.com/code-connect-docs/html/#the-figma-import]
// make sure to update "PROPS" to be a unique name for this set of props
export const CHECKBOX_PROPS = {
  label: figma.string('Label'),
  description: figma.boolean('Has Description', {
    true: figma.string('Description'),
    false: undefined,
  }),
  selected: figma.enum('Value Type', {
    Checked: true,
  }),
  indeterminate: figma.enum('Value Type', {
    Indeterminate: true,
  }),
  isDisabled: figma.enum('State', {
    Disabled: true,
  }),
};

export const CHECKBOX_GROUP_PROPS = {
  children: figma.children(['Checkbox Field']),
};
