import { SdsDescriptionFunctional } from './sds-description-functional';
import { Component, h } from '@stencil/core';

/**
 * Fieldset Description
 */
@Component({
  tag: 'sds-description',
  styleUrl: 'sds-description.scss',
  shadow: true,
})
export class SdsDescription {
  render() {
    return (
      <SdsDescriptionFunctional>
        <slot />
      </SdsDescriptionFunctional>
    );
  }
}
