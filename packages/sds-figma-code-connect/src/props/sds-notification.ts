import figma from '@figma/code-connect';
import { NotificationVariant } from 'sds-web-components';

// props for sds-notification
// read more about prop definitions at [https://www.figma.com/code-connect-docs/html/#the-figma-import]
// make sure to update "PROPS" to be a unique name for this set of props
export const NOTIFICATION_PROPS = {
  title: figma.string('Title'),
  icon: figma.boolean('Has Icon', {
    true: figma.instance('Icon'),
    false: undefined,
  }),
  isDismissible: figma.boolean('Dismissible'),
  button: figma.children('Button'),
  body: figma.string('Body'),
  variant: figma.enum<NotificationVariant>('Variant', {
    Alert: 'alert',
  }),
};
