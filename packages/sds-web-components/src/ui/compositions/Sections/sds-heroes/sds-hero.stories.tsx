import { Components } from '../../../../components';
import { spread } from '../../../../utils/storybook-helpers';
import { withActions } from '@storybook/addon-actions/decorator';
import type { Meta, StoryObj } from '@storybook/html';

type ComponentArgs = Components.SdsHero;

/**
 * With how properties are defined within StencilJS, this composition redefines both Flex and Section props
 */
const meta = {
  title: 'SDS compositions/Sections/Hero',
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  component: 'sds-hero',
  argTypes: {
    paddingBottom: {
      control: { type: 'select' },
      options: ['600', '800', '1200', '1600', '4000'],
    },
    paddingTop: {
      control: { type: 'select' },
      options: ['600', '800', '1200', '1600', '4000'],
    },
  },
  render: args => `<sds-hero ${spread(args)}><sds-text-content-title
align="center"
heading="Title"
sub-heading="Subtitle"
></sds-text-content-title></sds-hero>`,
  decorators: [withActions],
} satisfies Meta<ComponentArgs>;

export default meta;

type Story = StoryObj<ComponentArgs>;
export const Hero: Story = {
  args: {
    elementType: 'section',
    padding: '1600',
    variant: 'subtle',
    alignPrimary: 'center',
    alignSecondary: 'center',
    container: true,
    direction: 'column',
    gap: '600',
    flexType: 'auto',
    wrap: false,
  },
};
