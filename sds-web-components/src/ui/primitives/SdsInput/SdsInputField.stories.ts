import type { Meta, StoryObj } from '@storybook/html';

import { Components } from '../../../components';
import { spread } from '../../../utils/storybook-helpers';

type ComponentArgs = Components.SdsInputField;

const meta = {
  title: 'SDS Primitives/Inputs/Input Field',
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  component: 'sds-input-field',
  render: args => `<sds-input-field ${spread(args)}></sds-input-field>`,
} satisfies Meta<ComponentArgs>;

export default meta;

type Story = StoryObj<ComponentArgs>;
export const Primary: Story = {
  args: {
    label: 'I am a field',
    description: 'I am a description',
    disabled: false,
    placeholder: 'I am a placeholder',
    required: false,
    type: 'email',
    error: '',
  },
};
