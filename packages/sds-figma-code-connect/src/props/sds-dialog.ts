import figma from '@figma/code-connect';
import { DialogType } from 'sds-web-components';

export const DIALOG_BODY_PROPS = {
  dialogType: figma.enum<DialogType>('Type', { Card: 'card', Sheet: 'sheet' }),
  body: figma.string('Body'),
  heading: figma.string('Heading'),
  buttons: figma.children('Button Group'),
};

export const DIALOG_PROPS = {
  children: figma.children('Dialog Body'),
};
