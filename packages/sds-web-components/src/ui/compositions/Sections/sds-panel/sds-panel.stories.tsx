import { Components } from '../../../../components';
import { hideArgs, spread } from '../../../../utils/storybook-helpers';
import { placeholder } from '../../../images';
import { withActions } from '@storybook/addon-actions/decorator';
import type { Meta, StoryObj } from '@storybook/html';

type ComponentArgs = Components.SdsPanel;

const meta = {
  title: 'SDS compositions/Sections/Panel',
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  component: 'sds-panel',
  argTypes: {
    ...hideArgs<ComponentArgs>(['flexType']),
  },
  render: args => `
  <sds-section padding="1600" >
    <sds-panel ${spread(args)} flex-type="half">
      <sds-flex-item size="half">
        <sds-image
          src=${placeholder}
          alt="Always use image alt"
          aspect-ratio="4-3"
          size="medium"></sds-image>
      </sds-flex-item>
      <sds-flex-item size="half">
        <sds-flex direction="column" gap="600">
          <sds-flex-item>
          <sds-text-heading>Text Heading</sds-text-heading>
          </sds-flex-item>
          <sds-flex-item>
            <sds-text>
              Excepteur efficient emerging, minim veniam anim aute carefully curated Ginza conversation exquisite perfect nostrud nisi intricate Content. Qui  international first-class nulla ut. Punctual adipisicing, essential lovely queen tempor eiusmod irure. Exclusive izakaya charming Scandinavian impeccable aute quality of life soft power pariatur Melbourne occaecat discerning. Qui wardrobe aliquip, et Porter destination Toto remarkable officia Helsinki excepteur Basset hound. Zürich sleepy perfect consectetur.
            </sds-text>
          </sds-flex-item>
        </sds-flex>
      </sds-flex-item>
    </sds-panel>
  </sds-section>`,
  decorators: [withActions],
} satisfies Meta<ComponentArgs>;

export default meta;

type Story = StoryObj<ComponentArgs>;
export const Panel: Story = {
  args: {
    alignPrimary: 'start',
    alignSecondary: 'start',
    direction: 'row',
    gap: '1200',
  },
};
