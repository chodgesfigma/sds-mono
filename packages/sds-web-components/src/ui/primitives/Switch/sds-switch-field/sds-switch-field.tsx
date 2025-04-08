import { SdsDescriptionFunctional } from '../../fieldset/sds-description/sds-description-functional';
import { SdsFieldErrorFunctional } from '../../fieldset/sds-field-error/sds-field-error-functional';
import { SdsLabelFunctional } from '../../fieldset/sds-label/sds-label-functional';
import { SdsSwitchFunctional } from '../sds-switch/sds-switch-functional';
import { Component, Element, Event, EventEmitter, Prop, State, Watch, h } from '@stencil/core';

@Component({
  tag: 'sds-switch-field',
  styleUrl: 'sds-switch-field.scss',
  shadow: true,
})
export class SdsSwitchField {
  switchElement!: HTMLInputElement;
  @Element() el!: HTMLElement;

  @State() labelText?: string;

  @Prop({ reflect: true, mutable: true }) checked = false;

  /**
   * Disables the switch input
   */
  @Prop({ reflect: true }) disabled = false;

  /**
   * A secondary label below the input
   */
  @Prop() description = '';

  /**
   * An error message that appears below the input
   */
  @Prop() error = '';

  /**
   * The switch label
   */
  @Prop({ mutable: true }) label = '';

  /**
   * Marks the switch as required
   */
  @Prop({ reflect: true }) required = false;

  /**
   * The value of the switch
   */
  @Prop() value = '';

  /**
   * Emitted when the switch is toggled
   */
  @Event({
    eventName: 'sds-change',
  })
  change!: EventEmitter<{ checked: boolean; value: string }>;

  @Watch('checked')
  handleChange() {
    this.change.emit({ checked: this.checked, value: this.value });
  }

  componentWillLoad() {
    this.labelText = this.label || (this.el.innerHTML !== '' ? this.el.innerHTML : undefined);
  }

  handleOnChange = () => {
    this.checked = this.switchElement.checked;
  };

  render() {
    return (
      <div class="switch-field" data-disabled={this.disabled}>
        <SdsLabelFunctional htmlFor="input" id="label">
          {this.labelText}
        </SdsLabelFunctional>
        <SdsSwitchFunctional
          id="input"
          ref={el => (this.switchElement = el as HTMLInputElement)}
          required={this.required}
          disabled={this.disabled}
          value={this.value}
          aria-describedby={`description${this.error ? ' error' : ''}`}
          aria-labelledby="label"
          checked={this.checked}
          onChange={this.handleOnChange}
        />
        {this.description && <SdsDescriptionFunctional id="description">{this.description}</SdsDescriptionFunctional>}
        {this.error && <SdsFieldErrorFunctional id="error">{this.error}</SdsFieldErrorFunctional>}
        <slot data-hidden={`${this.el.innerHTML === this.labelText}`} />
      </div>
    );
  }
}

// export type SwitchFieldProps = RACSwitchProps & SharedFieldProps;
// export function SwitchField({
//   children,
//   className,
//   label,
//   description,
//   errorMessage,
//   ...props
// }: SwitchFieldProps) {
//   const classNames = clsx(className, "switch-field");
//   const labelText: string | undefined =
//     label || (typeof children === "string" ? children : undefined);
//   return (
//     <RACSwitch className={classNames} {...props}>
//       <>
//         <Label>{labelText}</Label>
//         <Switch />
//         {description && <Description>{description}</Description>}
//         <FieldError>{errorMessage}</FieldError>
//         {labelText !== children && children}
//       </>
//     </RACSwitch>
//   );
// }
