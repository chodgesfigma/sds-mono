import { spread } from '../../../utils/storybook-helpers';
import { SdsTextBaseProps } from './sds-text-base';
import { SdsTextContentTitle } from './sds-text-content-title/sds-text-content-title';
import type { Meta, StoryObj } from '@storybook/html';

type ComponentArgs = SdsTextBaseProps | SdsTextContentTitle;

const meta = {
  title: 'SDS Primitives/Text',
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  component: 'sds-text',
  render: args => `<sds-text ${spread(args)}>Hello World!</sds-text>`,
} satisfies Meta<ComponentArgs>;

export default meta;

type Story = StoryObj<ComponentArgs>;

export const Primary: Story = {
  args: {},
  render: args => `
    <sds-flex container direction="column" gap="400">
      <sds-text-title-hero ${spread(args)}>Text Title Hero</sds-text-title-hero>
      <sds-text-title-page ${spread(args)}>Text Title Page</sds-text-title-page>
      <sds-text-subtitle>Text Subtitle</sds-text-subtitle>
      <sds-text-heading>Text Heading</sds-text-heading>
      <sds-text-subheading>Text Subheading</sds-text-subheading>
      <sds-text>Text</sds-text>
      <sds-text-emphasis>Text Emphasis</sds-text-emphasis>
      <sds-text-link href="#" >Text Link</sds-text-link>
      <sds-text-strong>Text Strong</sds-text-strong>
      <sds-text-small>Text Small</sds-text-small>
      <sds-text-small-strong>Text Small Strong</sds-text-small-strong>
      <sds-text-code>Text Code</sds-text-code>
      <sds-text-list>
        <sds-text-list-item>Text List Item 1</sds-text-list-item>
        <sds-text-list-item>Text List Item 2</sds-text-list-item>
        <sds-text-list-item>Text List Item 3</sds-text-list-item>
      </sds-text-list>
      <sds-text-link-list>
        <sds-list-item>
          <sds-text-link href="#" >Text Link List Item 1</sds-text-link>
        </sds-list-item>
        <sds-list-item>
          <sds-text-link href="#" >Text Link List Item 2</sds-text-link>
        </sds-list-item>
        <sds-list-item>
          <sds-text-link href="#" >Text Link List Item 3</sds-text-link>
        </sds-list-item>
      </sds-text-link-list>
      <sds-text-price currency="$" price="50.99" label="/ mo" ></sds-text-price>
      <sds-text-price currency="$" price="50.99" label="/ mo" size="small" ></sds-text-price>
      <sds-text>
        This feature is only available to users on the${' '}
        <sds-text-strong>Business Plan</sds-text-strong>. To upgrade, visit your${' '}<sds-text-link href="#" >billing settings</sds-text-link>. your api key is${' '}<sds-text-code>fig_123456789</sds-text-code> .
      </sds-text>
    </sds-flex>
    `,
};
