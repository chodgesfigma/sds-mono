import { Component, h } from '@stencil/core';
import { SdsFieldErrorFunctional } from './sds-field-error-functional';

/**
 * Fieldset Field Error
 */
@Component({
  tag: 'sds-field-error',
  styleUrl: 'sds-field-error.scss',
  shadow: true,
})
export class SdsFieldError {
  render() {
    return (
      <SdsFieldErrorFunctional>
        <slot />
      </SdsFieldErrorFunctional>
    );
  }
}
