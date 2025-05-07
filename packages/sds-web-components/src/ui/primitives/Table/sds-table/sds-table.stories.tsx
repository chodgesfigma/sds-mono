import { Components } from '../../../../components';
import { spread } from '../../../../utils/storybook-helpers';
import { withActions } from '@storybook/addon-actions/decorator';
import type { Meta, StoryObj } from '@storybook/html';

type ComponentArgs = Components.SdsTable;

/**
 * This is a wrapper component that doesn't use the shadow-dom and just applies styles to any table within
 */
const meta = {
  title: 'SDS primitives/Table/Simple',
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  component: 'sds-table',
  render: args => `
    <sds-table ${spread(args)}>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Date Modified</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Games</td>
            <td>File folder</td>
            <td>6/7/2020</td>
          </tr>
          <tr>
            <td>Program Files</td>
            <td>File folder</td>
            <td>4/7/2021</td>
          </tr>
          <tr>
            <td>bootmgr</td>
            <td>System file</td>
            <td>11/20/2010</td>
          </tr>
        </tbody>
      </table>
    </sds-table>
  `,
  decorators: [withActions],
} satisfies Meta<ComponentArgs>;

export default meta;

type Story = StoryObj<ComponentArgs>;
export const Table: Story = {
  args: {},
};
