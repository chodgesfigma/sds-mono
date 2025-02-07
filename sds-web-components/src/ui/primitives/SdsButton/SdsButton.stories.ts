import type { Meta, StoryObj } from '@storybook/html';
import { SdsButtonBaseProps } from './SdsButtonBase';
import { spread } from '../../../utils/storybook-helpers';
import { withActions } from '@storybook/addon-actions/decorator';

type ComponentArgs = SdsButtonBaseProps;

const meta: Meta<ComponentArgs> = {
  title: 'SDS Primitives/Buttons',
  tags: ['autodocs'],
  args: {
    variant: 'primary',
  },
  argTypes: {
    size: {
      control: { type: 'select' },
    },
    variant: {
      control: { type: 'select' },
      options: ['primary', 'neutral', 'subtle'],
    },
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
