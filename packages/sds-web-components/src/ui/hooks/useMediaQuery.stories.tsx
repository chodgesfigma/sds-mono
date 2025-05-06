import { useMediaQuery } from './';
import type { Meta, StoryObj } from '@storybook/html';

function Example() {
  const desktop = useMediaQuery('desktop');
  const tablet = useMediaQuery('tablet');
  const mobile = useMediaQuery('mobile');
  return `
  <sds-flex direction="column" gap="400">
    <sds-text-content-title heading="Media Queries:" sub-heading="This heading will resize, but the below values aren't actively re-rendered"></sds-text-content-title>
    <sds-text-small style="display: flex">
      Open in a new tab using the <sds-icon-external-link size="14" style="display: inline-block"></sds-icon-external-link> icon in the top right, then resize and reload to see different values.
    </sds-text-small>
    <sds-text-list>
      <sds-text-list-item>desktop: ${desktop.matches}</sds-text-list-item>
      <sds-text-list-item>tablet: ${tablet.matches}</sds-text-list-item>
      <sds-text-list-item>mobile: ${mobile.matches}</sds-text-list-item>
    </sds-text-list>
  </sds-flex>
`;
}

const meta: Meta<typeof Example> = {
  title: 'SDS Hooks/useMediaQuery',
  parameters: { layout: 'centered' },
};
export default meta;

export const StoryUseMediaQuery: StoryObj<typeof Example> = {
  name: 'useMediaQuery',
  render: () => Example(),
};
