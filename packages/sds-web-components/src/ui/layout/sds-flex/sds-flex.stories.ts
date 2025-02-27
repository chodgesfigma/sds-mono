import { spread } from '../../../utils/storybook-helpers';
import { SdsFlex } from './sds-flex';
import type { Meta, StoryObj } from '@storybook/html';

type ComponentArgs = SdsFlex;

const meta = {
  title: 'SDS Layout/Flex',
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  component: 'sds-flex',
  render: args => `<sds-flex ${spread(args)}></sds-flex>`,
} satisfies Meta<ComponentArgs>;

export default meta;

const renderChild = (text: string) =>
  `<div
      style="
        display: grid;
        place-items: center;
        padding: 0.5rem 1rem;
        background: var(--sds-color-background-brand-default);
        color: var(--sds-color-text-brand-on-brand);
      "
    >
      ${text}
    </div>`;

type Story = StoryObj<ComponentArgs>;
export const StoryFlex: Story = {
  args: {
    gap: '200',
    wrap: true,
  },
  render: args => `
      <sds-flex direction="column" gap="600" >
        <sds-flex
        ${spread(args)}
        container="true"
        flex-type="quarter"
        >
          <sds-flex-item size="full"> ${renderChild('full')}</sds-flex-item>
          <sds-flex-item size="major"> ${renderChild('major')}</sds-flex-item>
          <sds-flex-item size="minor"> ${renderChild('minor')}</sds-flex-item>
          <sds-flex-item size="minor"> ${renderChild('minor')}</sds-flex-item>
          <sds-flex-item size="major"> ${renderChild('major')}</sds-flex-item>
          <sds-flex-item size="half"> ${renderChild('half')}</sds-flex-item>
          <sds-flex-item size="half"> ${renderChild('half')}</sds-flex-item>
          <sds-flex-item size="minor"> ${renderChild('minor')}</sds-flex-item>
          <sds-flex-item size="minor"> ${renderChild('minor')}</sds-flex-item>
          <sds-flex-item size="minor"> ${renderChild('minor')}</sds-flex-item>
          <sds-flex-item size="minor"> ${renderChild('minor')}</sds-flex-item>
          <sds-flex-item size="half"> ${renderChild('half')}</sds-flex-item>
          <sds-flex-item size="minor"> ${renderChild('minor')}</sds-flex-item>
          <sds-flex-item size="minor"> ${renderChild('minor')}</sds-flex-item>
          <sds-flex-item size="minor"> ${renderChild('minor')}</sds-flex-item>
          <sds-flex-item size="minor"> ${renderChild('minor')}</sds-flex-item>
          <sds-flex-item size="half"> ${renderChild('half')}</sds-flex-item>
        </sds-flex>
        <sds-flex
          ${spread(args)}
          container="true"
          flex-type="third"
        >
            <sds-flex-item size="full"> ${renderChild('full')}</sds-flex-item>
            <sds-flex-item size="major"> ${renderChild('major')}</sds-flex-item>
            <sds-flex-item size="minor"> ${renderChild('minor')}</sds-flex-item>
            <sds-flex-item size="minor"> ${renderChild('minor')}</sds-flex-item>
            <sds-flex-item size="major"> ${renderChild('major')}</sds-flex-item>
            <sds-flex-item size="half"> ${renderChild('half')}</sds-flex-item>
            <sds-flex-item size="half"> ${renderChild('half')}</sds-flex-item>
            <sds-flex-item size="minor"> ${renderChild('minor')}</sds-flex-item>
            <sds-flex-item size="minor"> ${renderChild('minor')}</sds-flex-item>
            <sds-flex-item size="minor"> ${renderChild('minor')}</sds-flex-item>
        </sds-flex>
        <sds-flex
          ${spread(args)}
          container="true"
          flex-type="quarter"
        >
            ${Array.from({ length: 15 }, () => renderChild('span')).join('')}
        </sds-flex>
      </sds-flex>`,
};
