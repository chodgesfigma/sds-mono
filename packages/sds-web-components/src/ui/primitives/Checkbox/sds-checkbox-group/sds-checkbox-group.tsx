import { SdsDescriptionFunctional } from '../../fieldset-temp/sds-description/sds-description-functional';
import { SdsFieldErrorFunctional } from '../../fieldset-temp/sds-field-error/sds-field-error-functional';
import { SdsLabelFunctional } from '../../fieldset-temp/sds-label/sds-label-functional';
import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'sds-checkbox-group',
  styleUrl: 'sds-checkbox-group.scss',
  shadow: true,
})
export class SdsCheckboxGroup {
  /**
   * The checkbox label
   */
  @Prop() label = '';

  /**
   * A secondary label below the checkbox
   */
  @Prop() description = '';

  /**
   * An error message that appears below the checkbox
   */
  @Prop() error = '';

  render() {
    return (
      <div class="checkbox-group" role="group" aria-describedby="description" aria-labelledby="label">
        {this.label && <SdsLabelFunctional id="label">{this.label}</SdsLabelFunctional>}
        {this.description && <SdsDescriptionFunctional id="description">{this.description}</SdsDescriptionFunctional>}
        {this.error && <SdsFieldErrorFunctional id="error">{this.error}</SdsFieldErrorFunctional>}
        <slot />
      </div>
    );
  }
}
