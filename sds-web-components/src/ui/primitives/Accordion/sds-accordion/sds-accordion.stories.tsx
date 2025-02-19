import { Components } from '../../../../components';
import { spread } from '../../../../utils/storybook-helpers';
import { withActions } from '@storybook/addon-actions/decorator';
import type { Meta, StoryObj } from '@storybook/html';

type ComponentArgs = Components.SdsAccordion;

const meta = {
  title: 'SDS primitives/Accordion/sds-accordion',
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  component: 'sds-accordion',
  render: args => `<sds-accordion ${spread(args)}>
  <sds-accordion-item summary="Item 1">Answer the frequently asked question in a simple sentence, a longish paragraph, or even in a list.</sds-accordion-item>
  <sds-accordion-item summary="Item 2">Answer the frequently asked question in a simple sentence, a longish paragraph, or even in a list.</sds-accordion-item>
  <sds-accordion-item summary="Item 3">Answer the frequently asked question in a simple sentence, a longish paragraph, or even in a list.</sds-accordion-item>
</sds-accordion>`,
  decorators: [withActions],
} satisfies Meta<ComponentArgs>;

export default meta;

type Story = StoryObj<ComponentArgs>;
export const MultipleCanBeOpen: Story = {
  args: {},
};

export const OnlyOneCanBeOpen: Story = {
  args: {
    multiple: false,
  },
};
