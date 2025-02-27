import { Components } from '../../../../components';
import { hideArgs, spread } from '../../../../utils/storybook-helpers';
import type { Meta, StoryObj } from '@storybook/html';

type ComponentArgs = Components.SdsFieldset;

// TODO: update this story when more components are done

const meta = {
  title: 'SDS Primitives/Inputs/Fieldset',
  parameters: { layout: 'centered' },
  argTypes: {
    ...hideArgs<ComponentArgs>(['form', 'name']),
  },
  tags: ['autodocs'],
  component: 'sds-fieldset',
  render: ({ disabled }) => `
    <sds-fieldset ${spread({ disabled })}>
      <sds-legend>Shipping details</sds-legend>
      <!-- <sds-text>Without this your odds of getting your order are low.</sds-text> -->
      <sds-field-group>
        <sds-input-field
          required
          name="address"
          default-value="123 Example Ln."
          label="Street address"
          description="Hello there"
          ${disabled ? 'disabled' : ''}
        ></sds-input-field>
        <sds-select-field
          required
          name="country"
          label="Country"
          description="I am a select description"
          ${disabled ? 'disabled' : ''}
        >
          <sds-select-item id="ca">Canada</sds-select-item>
          <sds-select-item id="mx">Mexico</sds-select-item>
          <sds-select-item id="us" selected>United States</sds-select-item>
        </sds-select-field>
        <sds-slider
          name="range"
          label="Slide here"
          description="i love this for us"
          default-value=40
          show-output
          ${disabled ? 'disabled' : ''}
        ></sds-slider>
        <!-- <TextareaField
          isRequired
          defaultValue="Watch out"
          name="notes"
          label="Delivery notes"
          isResizable={false}
          description="If you have a tiger, we'd like to know about it."
        /> -->
        <sds-checkbox-group name="checkboxes">
          <sds-checkbox-field value="one" label="One" />
          <sds-checkbox-field value="two" label="Two" />
        </sds-checkbox-group>
        <!-- <RadioGroup name="radios">
          <RadioField value="one" label="One" />
          <RadioField value="two" label="Two" />
        </RadioGroup> -->
        <!-- <CheckboxField
          isRequired
          name="agree"
          label="Do you agreee?"
          description="We hope you do"
        /> -->
      </sds-field-group>
      <sds-button-group>
        <sds-button ${disabled ? 'disabled' : ''} type="submit">Submit</sds-button>
      </sds-button-group>
    </sds-fieldset>
  `,
} satisfies Meta<ComponentArgs>;

export default meta;

type Story = StoryObj<ComponentArgs>;
export const Primary: Story = {
  args: {
    disabled: false,
  },
};
