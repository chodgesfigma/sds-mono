import { Component, h } from '@stencil/core';
import { SdsLabelFunctional } from './sds-label-functional';

/**
 * Fieldset Label
 */
@Component({
  tag: 'sds-label',
  styleUrl: 'sds-label.scss',
  shadow: true,
})
export class SdsLabel {
  render() {
    return (
      <SdsLabelFunctional>
        <slot />
      </SdsLabelFunctional>
    );
  }
}
