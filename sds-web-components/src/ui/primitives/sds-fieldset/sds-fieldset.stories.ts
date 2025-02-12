import { Components } from '../../../components';
import { hideArgs, spread } from '../../../utils/storybook-helpers';
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
        />
        <!-- <SelectField
          isRequired
          name="country"
          defaultSelectedKey="us"
          label="Country"
          description="I am a select description"
        >
          <SelectItem id="ca">Canada</SelectItem>
          <SelectItem id="mx">Mexico</SelectItem>
          <SelectItem id="us">United States</SelectItem>
        </SelectField> -->
        <!-- <SliderField
          name="range"
          label="Slide here"
          description="i love this for us"
          defaultValue={[0, 40]}
          showOutput
        /> -->
        <!-- <TextareaField
          isRequired
          defaultValue="Watch out"
          name="notes"
          label="Delivery notes"
          isResizable={false}
          description="If you have a tiger, we'd like to know about it."
        /> -->
        <!-- <CheckboxGroup name="checkboxes">
          <CheckboxField value="one" label="One" />
          <CheckboxField value="two" label="Two" />
        </CheckboxGroup> -->
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
      <!-- <sds-button-group>
        <sds-button type="submit">Submit</sds-button>
      </sds-button-group> -->
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
