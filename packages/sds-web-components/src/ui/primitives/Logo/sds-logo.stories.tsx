import { spread } from '../../../utils/storybook-helpers';
import { SdsLogo } from './sds-logo';
import type { Meta, StoryObj } from '@storybook/html';

type ComponentArgs = SdsLogo;

/**
    This is a scenario in which porting over a web component from a React component can get tricky. 
    Because of the nature of how declarative web components are, if we wanted to properly port
    this component into a web component, we have a couple of options. 
    
    1. Explicitly declare all possible props (which would all possible props of AnchorOrButton),
    feel free to reference 'AnchorOrButtonProps' for more info. This would have been a couple hundred
    props, and not an ideal dev implementation for a component that is seemingly simple. 

    2. Deviate from original implementation, and abstract the logo from the wrapping AnchorOrButton 
    component. This is likely the ideal approach. 

    3. The option that we landed on for this component, was to create a typed object prop, which would 
    allow us to seemingly port over the correct type to this class component, however now we have no 
    IntelliSense when implementing said component in a html environment, and instead need to inject any attributes / props via 
    a method similar to the following one below.

    We wouldn't normally take this route for a solution, but to demonstrate a potential solution for other 
    similar issues, we thought it worthy to use this as an opportunity for a conceptual example of a possible 
    solution for other components, facing with similar issues when ported over from a pre-existing code base. 
*/
const meta = {
  title: 'Web Component Limitations / Logo',
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  component: 'sds-logo',
  render: args => `<sds-logo ${spread(args)}></sds-logo>
        <script>
          const el = document.querySelector('sds-logo');
          if (el) {
            el.logoOptions = { href: "https://www.figma.com/" };
          }
        </script>
  `,
} satisfies Meta<ComponentArgs>;

export default meta;

type Story = StoryObj<ComponentArgs>;
export const Primary: Story = {};
