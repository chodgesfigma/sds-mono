import { Components } from '../../../../components';
import { spread } from '../../../../utils/storybook-helpers';
import { withActions } from '@storybook/addon-actions/decorator';
import type { Meta, StoryObj } from '@storybook/html';

type ComponentArgs = Components.SdsTextareaField;

const meta = {
  title: 'SDS primitives/Inputs/Textarea Field',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    actions: {
      handles: ['sds-change', 'sds-input'],
    },
  },
  component: 'sds-textarea-field',
  render: args => `<sds-textarea-field ${spread(args)}></sds-textarea-field>`,
  decorators: [withActions],
} satisfies Meta<ComponentArgs>;

export default meta;

type Story = StoryObj<ComponentArgs>;
export const Primary: Story = {
  args: {
    label: 'I am a field',
    description: 'I am a description',
    disabled: false,
    placeholder: 'Text goes here',
    value:
      'Post-ironic tofu artisan gatekeep YOLO, portland vape meditation polaroid tumeric cardigan shabby chic marfa normcore cupping. Normcore fam flexitarian marxism, selfies lyft before they sold out hexagon YOLO freegan actually. Fixie praxis williamsburg cronut meh forage, big mood vape jawn tattooed crucifix chillwave VHS swag. Intelligentsia big mood fam succulents photo booth. Enamel pin bicycle rights vexillologist tote bag, heirloom quinoa cardigan solarpunk shabby chic gorpcore. Tote bag cred disrupt same, ascot organic kinfolk messenger bag viral twee. Crucifix Brooklyn lo-fi letterpress fingerstache try-hard +1 chillwave scenester DSA tacos pok pok tote bag yes plz tonx. Heirloom four dollar toast schlitz la croix. Marfa offal bespoke williamsburg banh mi tousled celiac twee roof party. Master cleanse chia copper mug, solarpunk disrupt chambray pork belly trust fund succulents VHS bespoke. Ramps small batch retro, green juice messenger bag cray waistcoat skateboard selvage seitan neutra.',
    required: false,
    resizable: true,
  },
};
