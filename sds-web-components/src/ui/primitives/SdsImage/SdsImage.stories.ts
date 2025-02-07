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
  render: args => `<sds-image ${spread(args)}></sds-image>`,
} satisfies Meta<ComponentArgs>;

export default meta;

type Story = StoryObj<ComponentArgs>;
export const Image: Story = {
  args: {
    size: 'medium',
    src: placeholder,
  },
  render: args => `  
  <div
    style={{
        height: "calc(100vh - 2rem)",
        display: "grid",
        placeItems: "center",
        width: "100%",
    }}><sds-image ${spread(args)}></sds-image></div>`,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
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
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
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
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};
