import { spread } from '../../../utils/storybook-helpers';
import { SdsButtonBaseProps } from './sds-button-base';
import { withActions } from '@storybook/addon-actions/decorator';
import type { Meta, StoryObj } from '@storybook/html';

type ComponentArgs = SdsButtonBaseProps;

const meta: Meta<ComponentArgs> = {
  title: 'SDS Primitives/Buttons',
  tags: ['autodocs'],
  args: {
    variant: 'primary',
  },
  parameters: {
    layout: 'centered',
    actions: {
      handles: ['click'],
    },
  },
  render: args => `
  <sds-button ${spread(args)}>
    <sds-icon-arrow-left></sds-icon-arrow-left>Hello world!<sds-icon-activity></sds-icon-activity>
  </sds-button>
`,
  decorators: [withActions],
  component: 'sds-button',
} satisfies Meta<ComponentArgs>;

export default meta;

export const Button: StoryObj<ComponentArgs> = {
  args: {},
};

export const ButtonDanger: StoryObj<ComponentArgs> = {
  args: {
    type: 'button',
    size: 'small',
    variant: 'danger-primary',
  },
  render: args => `
  <sds-button-danger ${spread(args)}>
    <sds-icon-arrow-left></sds-icon-arrow-left>Hello world!<sds-icon-activity></sds-icon-activity>
  </sds-button-danger>
`,
};

export const ButtonGroup: StoryObj<ComponentArgs> = {
  args: {
    variant: 'primary',
  },
  render: args => `<sds-button-group><sds-button variant="neutral">Cancel</sds-button><sds-button ${spread(args)}>Submit</sds-button></sds-button-group>`,
};

export const IconButton: StoryObj<ComponentArgs> = {
  args: {
    type: 'submit',
  },
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
  render: args => `<sds-button ${spread(args)} ><sds-icon-activity></sds-icon-activity></sds-button>`,
};

export const DestructiveIconButton: StoryObj<ComponentArgs> = {
  args: {
    type: 'submit',
    variant: 'danger-primary',
  },
  render: args => `<sds-button-danger ${spread(args)} ><sds-icon-activity></sds-icon-activity></sds-button-danger>`,
};
