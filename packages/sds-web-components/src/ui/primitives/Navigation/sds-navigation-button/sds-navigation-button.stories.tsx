import { Components } from '../../../../components';
import { spread } from '../../../../utils/storybook-helpers';
import { withActions } from '@storybook/addon-actions/decorator';
import type { Meta, StoryObj } from '@storybook/html';

type ComponentArgs = Components.SdsNavigationButton;

const meta = {
  title: 'SDS primitives/Navigation/Navigation Button',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    actions: {
      handles: ['sds-navigation-selected'],
    },
  },
  component: 'sds-navigation-button',
  render: args => `<sds-navigation>
    <sds-navigation-button data-value="1" is-selected ${spread(args)}>
      <sds-icon-star size="24 slot="icon"></sds-icon-star>
      Item 1
    </sds-navigation-button>
    <sds-navigation-button data-value="2"${spread(args)}>
      <sds-icon-star size="24 slot="icon"></sds-icon-star>
      Item 2
    </sds-navigation-button>
    <sds-navigation-button data-value="3"${spread(args)}>
      <sds-icon-star size="24 slot="icon"></sds-icon-star>
      Item 3
    </sds-navigation-button>
    <sds-navigation-button data-value="4"${spread(args)}>
      <sds-icon-star size="24 slot="icon"></sds-icon-star>
      Item 4
    </sds-navigation-button>
    <sds-navigation-button data-value="5"${spread(args)}>
      <sds-icon-star size="24 slot="icon"></sds-icon-star>
      Item 5
    </sds-navigation-button>
  </sds-navigation>

  <script>
    (function() {
      let selectedValue = "1";
      const buttons = document.querySelectorAll('sds-navigation-button');
      const updateSelectedValue = (event) => {
        selectedValue = event.currentTarget.dataset['value'];
        buttons.forEach(el => el.isSelected = el.dataset['value'] === selectedValue);
      }
      buttons.forEach(el => el.addEventListener('sds-navigation-selected', updateSelectedValue));
    })()
  </script>`,
  decorators: [withActions],
} satisfies Meta<ComponentArgs>;

export default meta;

type Story = StoryObj<ComponentArgs>;
export const Primary: Story = {
  args: {
    direction: 'row',
  },
};
