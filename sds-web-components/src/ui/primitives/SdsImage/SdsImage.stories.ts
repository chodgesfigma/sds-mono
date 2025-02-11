import type { Meta, StoryObj } from '@storybook/html';
import { SdsImage } from './SdsImage';
import { spread } from '../../../utils/storybook-helpers';
import { placeholder } from '../../images';

type ComponentArgs = SdsImage;

const meta = {
  title: 'SDS Primitives/Image',
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  component: 'sds-image',
  args: {
    alt: 'SDS Image',
  },
  render: args => `<sds-image ${spread(args)}></sds-image>`,
  argTypes: {
    size: {
      control: { type: 'radio' },
    },
    aspectRatio: {
      control: { type: 'radio' },
    },
    variant: {
      control: { type: 'radio' },
    },
  },
} satisfies Meta<ComponentArgs>;

export default meta;

type Story = StoryObj<ComponentArgs>;
export const Image: Story = {
  args: {
    size: 'medium',
    src: placeholder,
  },
  render: args => `  
   <div><sds-image ${spread(args)}></sds-image></div>`,
};

export const ImageSrcSet: Story = {
  args: {
    src: placeholder,
    srcset: `${placeholder} 500w, ${placeholder} 1001w`,
    sizes: '(max-width: 700px) 500w, 1000w',
  },
  render: args => `
    <sds-image
      ${spread(args)}
    ></sds-image>`,
};

export const Picture: Story = {
  args: {
    size: 'medium',
  },
  render: args => `
      <picture>
        <SdsPictureSource srcset="${placeholder} media="(max-width: 600px)" />
        <SdsPictureSource srcset="${placeholder} media="(min-width: 601px)" />
        <sds-image ${spread(args)} src="${placeholder}" />
      </picture>
`,
};
