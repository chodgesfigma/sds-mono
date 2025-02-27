import { Components } from '../../../../components';
import { spread } from '../../../../utils/storybook-helpers';
import { withActions } from '@storybook/addon-actions/decorator';
import type { Meta, StoryObj } from '@storybook/html';

type ComponentArgs = Components.SdsAccordionItem & {
  children: string;
};

const meta = {
  title: 'SDS primitives/Accordion/sds-accordion-item',
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  component: 'sds-accordion-item',
  render: args => `<sds-accordion>
  <sds-accordion-item ${spread(args, { exclude: ['children'] })}>
    ${args.children}
  </sds-accordion-item>
</sds-accordion>`,
  decorators: [withActions],
} satisfies Meta<ComponentArgs>;

export default meta;

type Story = StoryObj<ComponentArgs>;
export const Primary: Story = {
  args: {
    summary: 'Complex Content',
    children: `<sds-text-heading>Heading</sds-text-heading>
<sds-text>Answer the frequently asked question in a simple sentence, a longish paragraph, or even in a list.</sds-text>`,
  },
};
