/**
 * Converts a kebab-case string to PascalCase.
 *
 * @param str - The kebab-case string to convert.
 * @returns The converted PascalCase string.
 *
 * @example
 * ```typescript
 * const pascalCaseString = kebabToPascalCase('my-component-name');
 * console.log(pascalCaseString); // Outputs: MyComponentName
 * ```
 */
function kebabToPascalCase(str: string): string {
  return str
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join('');
}

/**
 * Generates Storybook boilerplate for a component under `src/components`
 * @param componentName - the component name
 * @returns component src boilerplate as a string
 */
function generateComponentStory(componentName: string, componentPath: string): string {
  const levelsNested = componentPath.split('/').filter(Boolean);
  const nestedDir = levelsNested.map(() => '../').join('');

  return `import { Components } from '../../${nestedDir}components';
import { spread } from '../../${nestedDir}utils/storybook-helpers';
import { withActions } from '@storybook/addon-actions/decorator';
import type { Meta, StoryObj } from '@storybook/html';

type ComponentArgs = Components.${kebabToPascalCase(componentName)};

const meta = {
  title: 'SDS ${componentPath}${componentName}',
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  component: '${componentName}',
  render: args => \`<${componentName} \${spread(args)}></${componentName}>\`,
  decorators: [withActions],
} satisfies Meta<ComponentArgs>;

export default meta;

type Story = StoryObj<ComponentArgs>;
export const Primary: Story = {
  args: {},
};
`;
}

export default generateComponentStory;
