import { Components } from '../../../../components';
import { spread } from '../../../../utils/storybook-helpers';
import { withActions } from '@storybook/addon-actions/decorator';
import type { Meta, StoryObj } from '@storybook/html';

type ComponentArgs = Components.SdsPagination;

/**
 * In the base SDS setup, these elements use `href`s to navigate. In this Stencil setup, the util AnchorOrButton can't be easily translated
 * over. This results in transforming the `Button` components into anchor tags via an `href` prop not work. One solution is to create
 * a new "link that shares styles with the button" type component that can be used for cases like this.
 */
const meta = {
  title: 'SDS primitives/Pagination',
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  component: 'sds-pagination',
  render: args => `
  <sds-pagination ${spread(args)}>
      <sds-pagination-previous></sds-pagination-previous>
      <sds-pagination-list>
        <sds-pagination-page href="?page=1" page-number=1></sds-pagination-page>
        <sds-pagination-page href="?page=2" page-number=2></sds-pagination-page>
        <sds-pagination-page href="?page=3" page-number=3 current></sds-pagination-page>
        <sds-pagination-page href="?page=4" page-number=4></sds-pagination-page>
        <sds-pagination-gap></sds-pagination-gap>
        <sds-pagination-page href="?page=65" page-number=65></sds-pagination-page>
        <sds-pagination-page href="?page=66" page-number=66></sds-pagination-page>
      </sds-pagination-list>
      <sds-pagination-next href="?page=4"></sds-pagination-next>
    </sds-pagination>`,
  decorators: [withActions],
} satisfies Meta<ComponentArgs>;

export default meta;

type Story = StoryObj<ComponentArgs>;
export const Primary: Story = {
  args: {
    ariaLabel: 'Page navigation',
  },
};
