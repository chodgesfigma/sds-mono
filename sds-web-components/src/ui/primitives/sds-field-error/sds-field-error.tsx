import { SdsFieldErrorFunctional } from './sds-field-error-functional';
import { Component, h } from '@stencil/core';

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
