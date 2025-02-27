import { Components } from '../../../../components';
import { spread } from '../../../../utils/storybook-helpers';
import { withActions } from '@storybook/addon-actions/decorator';
import type { Meta, StoryObj } from '@storybook/html';

type ComponentArgs = Components.SdsListBox;

const meta = {
  title: 'SDS primitives/ListBox/sds-list-box',
  tags: ['autodocs'],
  parameters: { layout: 'centered', actions: { handles: ['sds-select'] } },
  component: 'sds-list-box',
  render: args => `<sds-list-box ${spread(args)}>
  <sds-list-box-item value="aardvark">Aardvark</sds-list-box-item>
  <sds-list-box-item value="cat">Cat</sds-list-box-item>
  <sds-list-box-item value="dog">Dog</sds-list-box-item>
  <sds-list-box-item value="kangaroo">Kangaroo</sds-list-box-item>
  <sds-list-box-item value="koala">Koala</sds-list-box-item>
  <sds-list-box-item value="penguine">Penguin</sds-list-box-item>
  <sds-list-box-item value="snake" disabled="true">Snake</sds-list-box-item>
  <sds-list-box-item value="turtle">
    <sds-label>Turtle</sds-label>
  </sds-list-box-item>
  <sds-list-box-item value="Admin">
    <img slot="image" src="https://placehold.co/1200x1200?text=SDS" />
    <sds-label slot="label">Admin</sds-label>
    <sds-description slot="description">Full access</sds-description>
  </sds-list-box-item>
</sds-list-box>`,
  decorators: [withActions],
} satisfies Meta<ComponentArgs>;

export default meta;

type Story = StoryObj<ComponentArgs>;
export const Primary: Story = {
  args: {},
};
