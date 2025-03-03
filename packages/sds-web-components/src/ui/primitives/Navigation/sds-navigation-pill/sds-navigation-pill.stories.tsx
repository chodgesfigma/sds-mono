import { Components } from '../../../../components';
import { spread } from '../../../../utils/storybook-helpers';
import { withActions } from '@storybook/addon-actions/decorator';
import type { Meta, StoryObj } from '@storybook/html';

type ComponentArgs = Components.SdsNavigation;

const meta = {
  title: 'SDS primitives/Navigation/Navigation Pill',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    actions: {
      handles: ['sds-navigation-selected'],
    },
  },
  component: 'sds-navigation',
  render: args => `<sds-navigation ${spread(args)}>
    <sds-navigation-pill data-value="1" is-selected>Item 1</sds-navigation-pill>
    <sds-navigation-pill data-value="2">Item 2</sds-navigation-pill>
    <sds-navigation-pill data-value="3">Item 3</sds-navigation-pill>
    <sds-navigation-pill data-value="4">Item 4</sds-navigation-pill>
    <sds-navigation-pill data-value="5">Item 5</sds-navigation-pill>
  </sds-navigation>

  <script>
    (function () {
      let selectedValue = "1";
      const pills = document.querySelectorAll('sds-navigation-pill');
      const updateSelectedValue = (event) => {
        selectedValue = event.currentTarget.dataset['value'];
        pills.forEach(el => el.isSelected = el.dataset['value'] === selectedValue);
      }
      pills.forEach(el => el.addEventListener('sds-navigation-selected', updateSelectedValue));
    })()
  </script>
  `,
  decorators: [withActions],
} satisfies Meta<ComponentArgs>;

export default meta;

type Story = StoryObj<ComponentArgs>;
export const Primary: Story = {
  args: {},
};
