import { Components } from '../../../components';
import { spread } from '../../../utils/storybook-helpers';
import { placeholder } from '../../images';
import { withActions } from '@storybook/addon-actions/decorator';
import type { Meta, StoryObj } from '@storybook/html';

type ComponentArgs = Components.SdsSection;

const meta = {
  title: 'SDS layout/sds-section',
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  component: 'sds-section',
  argTypes: {
    paddingBottom: { control: { type: 'select' }, options: ['800', '1600', '4000'] },
    paddingTop: { control: { type: 'select' }, options: ['800', '1600', '4000'] },
  },
  render: args => `
<sds-section ${spread(args)}>
  <sds-flex container align-primary="center" gap="600">
    Hello there
  </sds-flex>
</sds-section>
<sds-section ${spread(args)}>
  <sds-flex container align-primary="center" gap="600">
    Hello there
  </sds-flex>
</sds-section>
<sds-section ${spread(args)}>
  <sds-flex container align-primary="center" gap="600">
    Hello there
  </sds-flex>
</sds-section>
<sds-section variant="image" src=${placeholder} padding="4000">
  <sds-flex container align-primary="center" gap="600">
    <sds-text-content-title align="center" heading="Title" sub-heading="Subtitle"></sds-text-content-title>
  </sds-flex>
</sds-section>
  `,
  decorators: [withActions],
} satisfies Meta<ComponentArgs>;

export default meta;

type Story = StoryObj<ComponentArgs>;
export const Primary: Story = {
  args: {
    padding: '1600',
    variant: 'subtle',
  },
};
