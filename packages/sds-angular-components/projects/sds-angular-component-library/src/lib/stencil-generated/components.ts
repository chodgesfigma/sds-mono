/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, NgZone } from '@angular/core';

import { ProxyCmp, proxyOutputs } from './angular-component-lib/utils';

import { Components } from 'sds-web-components';


@ProxyCmp({
  inputs: ['multiple']
})
@Component({
  selector: 'sds-accordion',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['multiple'],
})
export class SdsAccordion {
  protected el: HTMLSdsAccordionElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsAccordion extends Components.SdsAccordion {}


@ProxyCmp({
  inputs: ['summary'],
  methods: ['collapseAccordion']
})
@Component({
  selector: 'sds-accordion-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['summary'],
})
export class SdsAccordionItem {
  protected el: HTMLSdsAccordionItemElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['sds-accordion-item-expanded', 'sds-accordion-item-collapsed']);
  }
}


import type { SlShowEvent as ISdsAccordionItemSlShowEvent } from 'sds-web-components';
import type { SlHideEvent as ISdsAccordionItemSlHideEvent } from 'sds-web-components';

export declare interface SdsAccordionItem extends Components.SdsAccordionItem {
  /**
   * Emitted when the accordion is expanded
   */
  'sds-accordion-item-expanded': EventEmitter<CustomEvent<ISdsAccordionItemSlShowEvent>>;
  /**
   * Emitted when the accordion is collapsed
   */
  'sds-accordion-item-collapsed': EventEmitter<CustomEvent<ISdsAccordionItemSlHideEvent>>;
}


@ProxyCmp({
  inputs: ['alt', 'initials', 'size', 'square', 'src']
})
@Component({
  selector: 'sds-avatar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['alt', 'initials', 'size', 'square', 'src'],
})
export class SdsAvatar {
  protected el: HTMLSdsAvatarElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsAvatar extends Components.SdsAvatar {}


@ProxyCmp({
  inputs: ['avatarTitle', 'description']
})
@Component({
  selector: 'sds-avatar-block',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['avatarTitle', 'description'],
})
export class SdsAvatarBlock {
  protected el: HTMLSdsAvatarBlockElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsAvatarBlock extends Components.SdsAvatarBlock {}


@ProxyCmp({
  inputs: ['alt', 'initials', 'options', 'size', 'square', 'src']
})
@Component({
  selector: 'sds-avatar-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['alt', 'initials', 'options', 'size', 'square', 'src'],
})
export class SdsAvatarButton {
  protected el: HTMLSdsAvatarButtonElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsAvatarButton extends Components.SdsAvatarButton {}


@ProxyCmp({
  inputs: ['max', 'spacing']
})
@Component({
  selector: 'sds-avatar-group',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['max', 'spacing'],
})
export class SdsAvatarGroup {
  protected el: HTMLSdsAvatarGroupElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsAvatarGroup extends Components.SdsAvatarGroup {}


@ProxyCmp({
  inputs: ['disabled', 'size', 'type', 'variant']
})
@Component({
  selector: 'sds-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['disabled', 'size', 'type', 'variant'],
})
export class SdsButton {
  protected el: HTMLSdsButtonElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsButton extends Components.SdsButton {}


@ProxyCmp({
  inputs: ['disabled', 'size', 'type', 'variant']
})
@Component({
  selector: 'sds-button-danger',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['disabled', 'size', 'type', 'variant'],
})
export class SdsButtonDanger {
  protected el: HTMLSdsButtonDangerElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsButtonDanger extends Components.SdsButtonDanger {}


@ProxyCmp({
  inputs: ['align']
})
@Component({
  selector: 'sds-button-group',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['align'],
})
export class SdsButtonGroup {
  protected el: HTMLSdsButtonGroupElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsButtonGroup extends Components.SdsButtonGroup {}


@ProxyCmp({
  inputs: ['disabled', 'indeterminate', 'selected', 'value']
})
@Component({
  selector: 'sds-checkbox',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['disabled', 'indeterminate', 'selected', 'value'],
})
export class SdsCheckbox {
  protected el: HTMLSdsCheckboxElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['sds-change']);
  }
}


export declare interface SdsCheckbox extends Components.SdsCheckbox {
  /**
   * Emitted when the checkbox is toggled
   */
  'sds-change': EventEmitter<CustomEvent<{ checked: boolean; value: string }>>;
}


@ProxyCmp({
  inputs: ['description', 'disabled', 'indeterminate', 'label', 'selected', 'value']
})
@Component({
  selector: 'sds-checkbox-field',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['description', 'disabled', 'indeterminate', 'label', 'selected', 'value'],
})
export class SdsCheckboxField {
  protected el: HTMLSdsCheckboxFieldElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['sds-change']);
  }
}


export declare interface SdsCheckboxField extends Components.SdsCheckboxField {
  /**
   * Emitted when the checkbox is toggled
   */
  'sds-change': EventEmitter<CustomEvent<{ checked: boolean; value: string }>>;
}


@ProxyCmp({
  inputs: ['description', 'error', 'label']
})
@Component({
  selector: 'sds-checkbox-group',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['description', 'error', 'label'],
})
export class SdsCheckboxGroup {
  protected el: HTMLSdsCheckboxGroupElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsCheckboxGroup extends Components.SdsCheckboxGroup {}


@ProxyCmp({
})
@Component({
  selector: 'sds-description',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
})
export class SdsDescription {
  protected el: HTMLSdsDescriptionElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsDescription extends Components.SdsDescription {}


@ProxyCmp({
  inputs: ['disabled']
})
@Component({
  selector: 'sds-field',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['disabled'],
})
export class SdsField {
  protected el: HTMLSdsFieldElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsField extends Components.SdsField {}


@ProxyCmp({
})
@Component({
  selector: 'sds-field-error',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
})
export class SdsFieldError {
  protected el: HTMLSdsFieldErrorElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsFieldError extends Components.SdsFieldError {}


@ProxyCmp({
})
@Component({
  selector: 'sds-field-group',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
})
export class SdsFieldGroup {
  protected el: HTMLSdsFieldGroupElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsFieldGroup extends Components.SdsFieldGroup {}


@ProxyCmp({
  inputs: ['disabled', 'form', 'name']
})
@Component({
  selector: 'sds-fieldset',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['disabled', 'form', 'name'],
})
export class SdsFieldset {
  protected el: HTMLSdsFieldsetElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsFieldset extends Components.SdsFieldset {}


@ProxyCmp({
  inputs: ['alignPrimary', 'alignSecondary', 'container', 'direction', 'flexType', 'gap', 'wrap']
})
@Component({
  selector: 'sds-flex',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['alignPrimary', 'alignSecondary', 'container', 'direction', 'flexType', 'gap', 'wrap'],
})
export class SdsFlex {
  protected el: HTMLSdsFlexElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsFlex extends Components.SdsFlex {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-flex-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsFlexItem {
  protected el: HTMLSdsFlexItemElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsFlexItem extends Components.SdsFlexItem {}


@ProxyCmp({
  inputs: ['singleLine']
})
@Component({
  selector: 'sds-form',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['singleLine'],
})
export class SdsForm {
  protected el: HTMLSdsFormElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsForm extends Components.SdsForm {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-activity',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconActivity {
  protected el: HTMLSdsIconActivityElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconActivity extends Components.SdsIconActivity {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-airplay',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconAirplay {
  protected el: HTMLSdsIconAirplayElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconAirplay extends Components.SdsIconAirplay {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-alert-circle',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconAlertCircle {
  protected el: HTMLSdsIconAlertCircleElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconAlertCircle extends Components.SdsIconAlertCircle {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-alert-octagon',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconAlertOctagon {
  protected el: HTMLSdsIconAlertOctagonElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconAlertOctagon extends Components.SdsIconAlertOctagon {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-alert-triangle',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconAlertTriangle {
  protected el: HTMLSdsIconAlertTriangleElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconAlertTriangle extends Components.SdsIconAlertTriangle {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-align-center',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconAlignCenter {
  protected el: HTMLSdsIconAlignCenterElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconAlignCenter extends Components.SdsIconAlignCenter {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-align-justify',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconAlignJustify {
  protected el: HTMLSdsIconAlignJustifyElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconAlignJustify extends Components.SdsIconAlignJustify {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-align-left',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconAlignLeft {
  protected el: HTMLSdsIconAlignLeftElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconAlignLeft extends Components.SdsIconAlignLeft {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-align-right',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconAlignRight {
  protected el: HTMLSdsIconAlignRightElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconAlignRight extends Components.SdsIconAlignRight {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-anchor',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconAnchor {
  protected el: HTMLSdsIconAnchorElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconAnchor extends Components.SdsIconAnchor {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-aperture',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconAperture {
  protected el: HTMLSdsIconApertureElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconAperture extends Components.SdsIconAperture {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-archive',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconArchive {
  protected el: HTMLSdsIconArchiveElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconArchive extends Components.SdsIconArchive {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-arrow-down',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconArrowDown {
  protected el: HTMLSdsIconArrowDownElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconArrowDown extends Components.SdsIconArrowDown {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-arrow-down-circle',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconArrowDownCircle {
  protected el: HTMLSdsIconArrowDownCircleElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconArrowDownCircle extends Components.SdsIconArrowDownCircle {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-arrow-down-left',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconArrowDownLeft {
  protected el: HTMLSdsIconArrowDownLeftElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconArrowDownLeft extends Components.SdsIconArrowDownLeft {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-arrow-down-right',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconArrowDownRight {
  protected el: HTMLSdsIconArrowDownRightElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconArrowDownRight extends Components.SdsIconArrowDownRight {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-arrow-left',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconArrowLeft {
  protected el: HTMLSdsIconArrowLeftElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconArrowLeft extends Components.SdsIconArrowLeft {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-arrow-left-circle',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconArrowLeftCircle {
  protected el: HTMLSdsIconArrowLeftCircleElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconArrowLeftCircle extends Components.SdsIconArrowLeftCircle {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-arrow-right',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconArrowRight {
  protected el: HTMLSdsIconArrowRightElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconArrowRight extends Components.SdsIconArrowRight {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-arrow-right-circle',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconArrowRightCircle {
  protected el: HTMLSdsIconArrowRightCircleElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconArrowRightCircle extends Components.SdsIconArrowRightCircle {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-arrow-up',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconArrowUp {
  protected el: HTMLSdsIconArrowUpElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconArrowUp extends Components.SdsIconArrowUp {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-arrow-up-circle',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconArrowUpCircle {
  protected el: HTMLSdsIconArrowUpCircleElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconArrowUpCircle extends Components.SdsIconArrowUpCircle {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-arrow-up-left',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconArrowUpLeft {
  protected el: HTMLSdsIconArrowUpLeftElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconArrowUpLeft extends Components.SdsIconArrowUpLeft {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-arrow-up-right',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconArrowUpRight {
  protected el: HTMLSdsIconArrowUpRightElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconArrowUpRight extends Components.SdsIconArrowUpRight {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-at-sign',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconAtSign {
  protected el: HTMLSdsIconAtSignElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconAtSign extends Components.SdsIconAtSign {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-award',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconAward {
  protected el: HTMLSdsIconAwardElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconAward extends Components.SdsIconAward {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-bar-chart',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconBarChart {
  protected el: HTMLSdsIconBarChartElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconBarChart extends Components.SdsIconBarChart {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-bar-chart-2',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconBarChart2 {
  protected el: HTMLSdsIconBarChart2Element;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconBarChart2 extends Components.SdsIconBarChart2 {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-battery',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconBattery {
  protected el: HTMLSdsIconBatteryElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconBattery extends Components.SdsIconBattery {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-battery-charging',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconBatteryCharging {
  protected el: HTMLSdsIconBatteryChargingElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconBatteryCharging extends Components.SdsIconBatteryCharging {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-bell',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconBell {
  protected el: HTMLSdsIconBellElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconBell extends Components.SdsIconBell {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-bell-off',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconBellOff {
  protected el: HTMLSdsIconBellOffElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconBellOff extends Components.SdsIconBellOff {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-bluetooth',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconBluetooth {
  protected el: HTMLSdsIconBluetoothElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconBluetooth extends Components.SdsIconBluetooth {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-bold',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconBold {
  protected el: HTMLSdsIconBoldElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconBold extends Components.SdsIconBold {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-book',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconBook {
  protected el: HTMLSdsIconBookElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconBook extends Components.SdsIconBook {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-book-open',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconBookOpen {
  protected el: HTMLSdsIconBookOpenElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconBookOpen extends Components.SdsIconBookOpen {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-bookmark',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconBookmark {
  protected el: HTMLSdsIconBookmarkElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconBookmark extends Components.SdsIconBookmark {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-box',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconBox {
  protected el: HTMLSdsIconBoxElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconBox extends Components.SdsIconBox {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-briefcase',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconBriefcase {
  protected el: HTMLSdsIconBriefcaseElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconBriefcase extends Components.SdsIconBriefcase {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-calendar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconCalendar {
  protected el: HTMLSdsIconCalendarElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconCalendar extends Components.SdsIconCalendar {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-camera',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconCamera {
  protected el: HTMLSdsIconCameraElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconCamera extends Components.SdsIconCamera {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-camera-off',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconCameraOff {
  protected el: HTMLSdsIconCameraOffElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconCameraOff extends Components.SdsIconCameraOff {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-cast',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconCast {
  protected el: HTMLSdsIconCastElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconCast extends Components.SdsIconCast {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-check',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconCheck {
  protected el: HTMLSdsIconCheckElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconCheck extends Components.SdsIconCheck {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-check-circle',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconCheckCircle {
  protected el: HTMLSdsIconCheckCircleElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconCheckCircle extends Components.SdsIconCheckCircle {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-check-square',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconCheckSquare {
  protected el: HTMLSdsIconCheckSquareElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconCheckSquare extends Components.SdsIconCheckSquare {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-chevron-down',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconChevronDown {
  protected el: HTMLSdsIconChevronDownElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconChevronDown extends Components.SdsIconChevronDown {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-chevron-left',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconChevronLeft {
  protected el: HTMLSdsIconChevronLeftElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconChevronLeft extends Components.SdsIconChevronLeft {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-chevron-right',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconChevronRight {
  protected el: HTMLSdsIconChevronRightElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconChevronRight extends Components.SdsIconChevronRight {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-chevron-up',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconChevronUp {
  protected el: HTMLSdsIconChevronUpElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconChevronUp extends Components.SdsIconChevronUp {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-chevrons-down',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconChevronsDown {
  protected el: HTMLSdsIconChevronsDownElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconChevronsDown extends Components.SdsIconChevronsDown {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-chevrons-left',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconChevronsLeft {
  protected el: HTMLSdsIconChevronsLeftElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconChevronsLeft extends Components.SdsIconChevronsLeft {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-chevrons-right',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconChevronsRight {
  protected el: HTMLSdsIconChevronsRightElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconChevronsRight extends Components.SdsIconChevronsRight {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-chevrons-up',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconChevronsUp {
  protected el: HTMLSdsIconChevronsUpElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconChevronsUp extends Components.SdsIconChevronsUp {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-chrome',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconChrome {
  protected el: HTMLSdsIconChromeElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconChrome extends Components.SdsIconChrome {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-circle',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconCircle {
  protected el: HTMLSdsIconCircleElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconCircle extends Components.SdsIconCircle {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-clipboard',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconClipboard {
  protected el: HTMLSdsIconClipboardElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconClipboard extends Components.SdsIconClipboard {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-clock',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconClock {
  protected el: HTMLSdsIconClockElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconClock extends Components.SdsIconClock {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-cloud',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconCloud {
  protected el: HTMLSdsIconCloudElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconCloud extends Components.SdsIconCloud {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-cloud-drizzle',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconCloudDrizzle {
  protected el: HTMLSdsIconCloudDrizzleElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconCloudDrizzle extends Components.SdsIconCloudDrizzle {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-cloud-lightning',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconCloudLightning {
  protected el: HTMLSdsIconCloudLightningElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconCloudLightning extends Components.SdsIconCloudLightning {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-cloud-off',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconCloudOff {
  protected el: HTMLSdsIconCloudOffElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconCloudOff extends Components.SdsIconCloudOff {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-cloud-rain',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconCloudRain {
  protected el: HTMLSdsIconCloudRainElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconCloudRain extends Components.SdsIconCloudRain {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-cloud-snow',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconCloudSnow {
  protected el: HTMLSdsIconCloudSnowElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconCloudSnow extends Components.SdsIconCloudSnow {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-code',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconCode {
  protected el: HTMLSdsIconCodeElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconCode extends Components.SdsIconCode {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-codepen',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconCodepen {
  protected el: HTMLSdsIconCodepenElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconCodepen extends Components.SdsIconCodepen {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-codesandbox',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconCodesandbox {
  protected el: HTMLSdsIconCodesandboxElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconCodesandbox extends Components.SdsIconCodesandbox {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-coffee',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconCoffee {
  protected el: HTMLSdsIconCoffeeElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconCoffee extends Components.SdsIconCoffee {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-columns',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconColumns {
  protected el: HTMLSdsIconColumnsElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconColumns extends Components.SdsIconColumns {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-command',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconCommand {
  protected el: HTMLSdsIconCommandElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconCommand extends Components.SdsIconCommand {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-compass',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconCompass {
  protected el: HTMLSdsIconCompassElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconCompass extends Components.SdsIconCompass {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-copy',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconCopy {
  protected el: HTMLSdsIconCopyElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconCopy extends Components.SdsIconCopy {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-corner-down-left',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconCornerDownLeft {
  protected el: HTMLSdsIconCornerDownLeftElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconCornerDownLeft extends Components.SdsIconCornerDownLeft {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-corner-down-right',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconCornerDownRight {
  protected el: HTMLSdsIconCornerDownRightElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconCornerDownRight extends Components.SdsIconCornerDownRight {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-corner-left-down',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconCornerLeftDown {
  protected el: HTMLSdsIconCornerLeftDownElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconCornerLeftDown extends Components.SdsIconCornerLeftDown {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-corner-left-up',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconCornerLeftUp {
  protected el: HTMLSdsIconCornerLeftUpElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconCornerLeftUp extends Components.SdsIconCornerLeftUp {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-corner-right-down',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconCornerRightDown {
  protected el: HTMLSdsIconCornerRightDownElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconCornerRightDown extends Components.SdsIconCornerRightDown {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-corner-right-up',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconCornerRightUp {
  protected el: HTMLSdsIconCornerRightUpElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconCornerRightUp extends Components.SdsIconCornerRightUp {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-corner-up-left',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconCornerUpLeft {
  protected el: HTMLSdsIconCornerUpLeftElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconCornerUpLeft extends Components.SdsIconCornerUpLeft {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-corner-up-right',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconCornerUpRight {
  protected el: HTMLSdsIconCornerUpRightElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconCornerUpRight extends Components.SdsIconCornerUpRight {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-cpu',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconCpu {
  protected el: HTMLSdsIconCpuElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconCpu extends Components.SdsIconCpu {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-credit-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconCreditCard {
  protected el: HTMLSdsIconCreditCardElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconCreditCard extends Components.SdsIconCreditCard {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-crop',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconCrop {
  protected el: HTMLSdsIconCropElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconCrop extends Components.SdsIconCrop {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-crosshair',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconCrosshair {
  protected el: HTMLSdsIconCrosshairElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconCrosshair extends Components.SdsIconCrosshair {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-database',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconDatabase {
  protected el: HTMLSdsIconDatabaseElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconDatabase extends Components.SdsIconDatabase {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-delete',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconDelete {
  protected el: HTMLSdsIconDeleteElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconDelete extends Components.SdsIconDelete {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-disc',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconDisc {
  protected el: HTMLSdsIconDiscElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconDisc extends Components.SdsIconDisc {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-divide',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconDivide {
  protected el: HTMLSdsIconDivideElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconDivide extends Components.SdsIconDivide {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-divide-circle',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconDivideCircle {
  protected el: HTMLSdsIconDivideCircleElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconDivideCircle extends Components.SdsIconDivideCircle {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-divide-square',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconDivideSquare {
  protected el: HTMLSdsIconDivideSquareElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconDivideSquare extends Components.SdsIconDivideSquare {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-dollar-sign',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconDollarSign {
  protected el: HTMLSdsIconDollarSignElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconDollarSign extends Components.SdsIconDollarSign {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-download',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconDownload {
  protected el: HTMLSdsIconDownloadElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconDownload extends Components.SdsIconDownload {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-download-cloud',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconDownloadCloud {
  protected el: HTMLSdsIconDownloadCloudElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconDownloadCloud extends Components.SdsIconDownloadCloud {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-dribbble',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconDribbble {
  protected el: HTMLSdsIconDribbbleElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconDribbble extends Components.SdsIconDribbble {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-droplet',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconDroplet {
  protected el: HTMLSdsIconDropletElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconDroplet extends Components.SdsIconDroplet {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-edit',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconEdit {
  protected el: HTMLSdsIconEditElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconEdit extends Components.SdsIconEdit {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-edit-2',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconEdit2 {
  protected el: HTMLSdsIconEdit2Element;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconEdit2 extends Components.SdsIconEdit2 {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-edit-3',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconEdit3 {
  protected el: HTMLSdsIconEdit3Element;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconEdit3 extends Components.SdsIconEdit3 {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-external-link',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconExternalLink {
  protected el: HTMLSdsIconExternalLinkElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconExternalLink extends Components.SdsIconExternalLink {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-eye',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconEye {
  protected el: HTMLSdsIconEyeElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconEye extends Components.SdsIconEye {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-eye-off',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconEyeOff {
  protected el: HTMLSdsIconEyeOffElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconEyeOff extends Components.SdsIconEyeOff {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-facebook',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconFacebook {
  protected el: HTMLSdsIconFacebookElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconFacebook extends Components.SdsIconFacebook {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-fast-forward',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconFastForward {
  protected el: HTMLSdsIconFastForwardElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconFastForward extends Components.SdsIconFastForward {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-feather',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconFeather {
  protected el: HTMLSdsIconFeatherElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconFeather extends Components.SdsIconFeather {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-figma',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconFigma {
  protected el: HTMLSdsIconFigmaElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconFigma extends Components.SdsIconFigma {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-file',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconFile {
  protected el: HTMLSdsIconFileElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconFile extends Components.SdsIconFile {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-file-minus',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconFileMinus {
  protected el: HTMLSdsIconFileMinusElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconFileMinus extends Components.SdsIconFileMinus {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-file-plus',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconFilePlus {
  protected el: HTMLSdsIconFilePlusElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconFilePlus extends Components.SdsIconFilePlus {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-file-text',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconFileText {
  protected el: HTMLSdsIconFileTextElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconFileText extends Components.SdsIconFileText {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-film',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconFilm {
  protected el: HTMLSdsIconFilmElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconFilm extends Components.SdsIconFilm {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-filter',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconFilter {
  protected el: HTMLSdsIconFilterElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconFilter extends Components.SdsIconFilter {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-flag',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconFlag {
  protected el: HTMLSdsIconFlagElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconFlag extends Components.SdsIconFlag {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-folder',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconFolder {
  protected el: HTMLSdsIconFolderElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconFolder extends Components.SdsIconFolder {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-folder-minus',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconFolderMinus {
  protected el: HTMLSdsIconFolderMinusElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconFolderMinus extends Components.SdsIconFolderMinus {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-folder-plus',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconFolderPlus {
  protected el: HTMLSdsIconFolderPlusElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconFolderPlus extends Components.SdsIconFolderPlus {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-framer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconFramer {
  protected el: HTMLSdsIconFramerElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconFramer extends Components.SdsIconFramer {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-frown',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconFrown {
  protected el: HTMLSdsIconFrownElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconFrown extends Components.SdsIconFrown {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-gift',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconGift {
  protected el: HTMLSdsIconGiftElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconGift extends Components.SdsIconGift {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-git-branch',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconGitBranch {
  protected el: HTMLSdsIconGitBranchElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconGitBranch extends Components.SdsIconGitBranch {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-git-commit',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconGitCommit {
  protected el: HTMLSdsIconGitCommitElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconGitCommit extends Components.SdsIconGitCommit {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-git-merge',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconGitMerge {
  protected el: HTMLSdsIconGitMergeElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconGitMerge extends Components.SdsIconGitMerge {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-git-pull-request',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconGitPullRequest {
  protected el: HTMLSdsIconGitPullRequestElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconGitPullRequest extends Components.SdsIconGitPullRequest {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-github',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconGithub {
  protected el: HTMLSdsIconGithubElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconGithub extends Components.SdsIconGithub {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-gitlab',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconGitlab {
  protected el: HTMLSdsIconGitlabElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconGitlab extends Components.SdsIconGitlab {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-globe',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconGlobe {
  protected el: HTMLSdsIconGlobeElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconGlobe extends Components.SdsIconGlobe {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-grid',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconGrid {
  protected el: HTMLSdsIconGridElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconGrid extends Components.SdsIconGrid {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-hard-drive',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconHardDrive {
  protected el: HTMLSdsIconHardDriveElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconHardDrive extends Components.SdsIconHardDrive {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-hash',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconHash {
  protected el: HTMLSdsIconHashElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconHash extends Components.SdsIconHash {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-headphones',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconHeadphones {
  protected el: HTMLSdsIconHeadphonesElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconHeadphones extends Components.SdsIconHeadphones {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-heart',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconHeart {
  protected el: HTMLSdsIconHeartElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconHeart extends Components.SdsIconHeart {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-help-circle',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconHelpCircle {
  protected el: HTMLSdsIconHelpCircleElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconHelpCircle extends Components.SdsIconHelpCircle {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-hexagon',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconHexagon {
  protected el: HTMLSdsIconHexagonElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconHexagon extends Components.SdsIconHexagon {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-home',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconHome {
  protected el: HTMLSdsIconHomeElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconHome extends Components.SdsIconHome {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-image',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconImage {
  protected el: HTMLSdsIconImageElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconImage extends Components.SdsIconImage {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-inbox',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconInbox {
  protected el: HTMLSdsIconInboxElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconInbox extends Components.SdsIconInbox {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-info',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconInfo {
  protected el: HTMLSdsIconInfoElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconInfo extends Components.SdsIconInfo {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-instagram',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconInstagram {
  protected el: HTMLSdsIconInstagramElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconInstagram extends Components.SdsIconInstagram {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-italic',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconItalic {
  protected el: HTMLSdsIconItalicElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconItalic extends Components.SdsIconItalic {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-key',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconKey {
  protected el: HTMLSdsIconKeyElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconKey extends Components.SdsIconKey {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-layers',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconLayers {
  protected el: HTMLSdsIconLayersElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconLayers extends Components.SdsIconLayers {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-layout',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconLayout {
  protected el: HTMLSdsIconLayoutElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconLayout extends Components.SdsIconLayout {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-life-buoy',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconLifeBuoy {
  protected el: HTMLSdsIconLifeBuoyElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconLifeBuoy extends Components.SdsIconLifeBuoy {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-link',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconLink {
  protected el: HTMLSdsIconLinkElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconLink extends Components.SdsIconLink {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-link-2',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconLink2 {
  protected el: HTMLSdsIconLink2Element;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconLink2 extends Components.SdsIconLink2 {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-linkedin',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconLinkedin {
  protected el: HTMLSdsIconLinkedinElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconLinkedin extends Components.SdsIconLinkedin {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconList {
  protected el: HTMLSdsIconListElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconList extends Components.SdsIconList {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-loader',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconLoader {
  protected el: HTMLSdsIconLoaderElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconLoader extends Components.SdsIconLoader {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-lock',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconLock {
  protected el: HTMLSdsIconLockElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconLock extends Components.SdsIconLock {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-log-in',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconLogIn {
  protected el: HTMLSdsIconLogInElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconLogIn extends Components.SdsIconLogIn {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-log-out',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconLogOut {
  protected el: HTMLSdsIconLogOutElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconLogOut extends Components.SdsIconLogOut {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-mail',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconMail {
  protected el: HTMLSdsIconMailElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconMail extends Components.SdsIconMail {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-map',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconMap {
  protected el: HTMLSdsIconMapElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconMap extends Components.SdsIconMap {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-map-pin',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconMapPin {
  protected el: HTMLSdsIconMapPinElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconMapPin extends Components.SdsIconMapPin {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-maximize',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconMaximize {
  protected el: HTMLSdsIconMaximizeElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconMaximize extends Components.SdsIconMaximize {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-maximize-2',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconMaximize2 {
  protected el: HTMLSdsIconMaximize2Element;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconMaximize2 extends Components.SdsIconMaximize2 {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-meh',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconMeh {
  protected el: HTMLSdsIconMehElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconMeh extends Components.SdsIconMeh {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-menu',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconMenu {
  protected el: HTMLSdsIconMenuElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconMenu extends Components.SdsIconMenu {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-message-circle',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconMessageCircle {
  protected el: HTMLSdsIconMessageCircleElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconMessageCircle extends Components.SdsIconMessageCircle {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-message-square',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconMessageSquare {
  protected el: HTMLSdsIconMessageSquareElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconMessageSquare extends Components.SdsIconMessageSquare {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-mic',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconMic {
  protected el: HTMLSdsIconMicElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconMic extends Components.SdsIconMic {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-mic-off',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconMicOff {
  protected el: HTMLSdsIconMicOffElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconMicOff extends Components.SdsIconMicOff {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-minimize',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconMinimize {
  protected el: HTMLSdsIconMinimizeElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconMinimize extends Components.SdsIconMinimize {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-minimize-2',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconMinimize2 {
  protected el: HTMLSdsIconMinimize2Element;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconMinimize2 extends Components.SdsIconMinimize2 {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-minus',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconMinus {
  protected el: HTMLSdsIconMinusElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconMinus extends Components.SdsIconMinus {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-minus-circle',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconMinusCircle {
  protected el: HTMLSdsIconMinusCircleElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconMinusCircle extends Components.SdsIconMinusCircle {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-minus-square',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconMinusSquare {
  protected el: HTMLSdsIconMinusSquareElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconMinusSquare extends Components.SdsIconMinusSquare {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-monitor',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconMonitor {
  protected el: HTMLSdsIconMonitorElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconMonitor extends Components.SdsIconMonitor {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-moon',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconMoon {
  protected el: HTMLSdsIconMoonElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconMoon extends Components.SdsIconMoon {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-more-horizontal',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconMoreHorizontal {
  protected el: HTMLSdsIconMoreHorizontalElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconMoreHorizontal extends Components.SdsIconMoreHorizontal {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-more-vertical',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconMoreVertical {
  protected el: HTMLSdsIconMoreVerticalElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconMoreVertical extends Components.SdsIconMoreVertical {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-mouse-pointer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconMousePointer {
  protected el: HTMLSdsIconMousePointerElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconMousePointer extends Components.SdsIconMousePointer {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-move',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconMove {
  protected el: HTMLSdsIconMoveElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconMove extends Components.SdsIconMove {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-music',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconMusic {
  protected el: HTMLSdsIconMusicElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconMusic extends Components.SdsIconMusic {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-navigation',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconNavigation {
  protected el: HTMLSdsIconNavigationElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconNavigation extends Components.SdsIconNavigation {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-navigation-2',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconNavigation2 {
  protected el: HTMLSdsIconNavigation2Element;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconNavigation2 extends Components.SdsIconNavigation2 {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-octagon',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconOctagon {
  protected el: HTMLSdsIconOctagonElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconOctagon extends Components.SdsIconOctagon {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-package',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconPackage {
  protected el: HTMLSdsIconPackageElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconPackage extends Components.SdsIconPackage {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-paperclip',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconPaperclip {
  protected el: HTMLSdsIconPaperclipElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconPaperclip extends Components.SdsIconPaperclip {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-pause',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconPause {
  protected el: HTMLSdsIconPauseElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconPause extends Components.SdsIconPause {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-pause-circle',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconPauseCircle {
  protected el: HTMLSdsIconPauseCircleElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconPauseCircle extends Components.SdsIconPauseCircle {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-pen-tool',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconPenTool {
  protected el: HTMLSdsIconPenToolElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconPenTool extends Components.SdsIconPenTool {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-percent',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconPercent {
  protected el: HTMLSdsIconPercentElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconPercent extends Components.SdsIconPercent {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-phone',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconPhone {
  protected el: HTMLSdsIconPhoneElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconPhone extends Components.SdsIconPhone {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-phone-call',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconPhoneCall {
  protected el: HTMLSdsIconPhoneCallElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconPhoneCall extends Components.SdsIconPhoneCall {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-phone-forwarded',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconPhoneForwarded {
  protected el: HTMLSdsIconPhoneForwardedElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconPhoneForwarded extends Components.SdsIconPhoneForwarded {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-phone-incoming',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconPhoneIncoming {
  protected el: HTMLSdsIconPhoneIncomingElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconPhoneIncoming extends Components.SdsIconPhoneIncoming {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-phone-missed',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconPhoneMissed {
  protected el: HTMLSdsIconPhoneMissedElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconPhoneMissed extends Components.SdsIconPhoneMissed {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-phone-off',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconPhoneOff {
  protected el: HTMLSdsIconPhoneOffElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconPhoneOff extends Components.SdsIconPhoneOff {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-phone-outgoing',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconPhoneOutgoing {
  protected el: HTMLSdsIconPhoneOutgoingElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconPhoneOutgoing extends Components.SdsIconPhoneOutgoing {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-pie-chart',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconPieChart {
  protected el: HTMLSdsIconPieChartElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconPieChart extends Components.SdsIconPieChart {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-play',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconPlay {
  protected el: HTMLSdsIconPlayElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconPlay extends Components.SdsIconPlay {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-play-circle',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconPlayCircle {
  protected el: HTMLSdsIconPlayCircleElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconPlayCircle extends Components.SdsIconPlayCircle {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-plus',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconPlus {
  protected el: HTMLSdsIconPlusElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconPlus extends Components.SdsIconPlus {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-plus-circle',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconPlusCircle {
  protected el: HTMLSdsIconPlusCircleElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconPlusCircle extends Components.SdsIconPlusCircle {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-plus-square',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconPlusSquare {
  protected el: HTMLSdsIconPlusSquareElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconPlusSquare extends Components.SdsIconPlusSquare {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-pocket',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconPocket {
  protected el: HTMLSdsIconPocketElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconPocket extends Components.SdsIconPocket {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-power',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconPower {
  protected el: HTMLSdsIconPowerElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconPower extends Components.SdsIconPower {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-printer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconPrinter {
  protected el: HTMLSdsIconPrinterElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconPrinter extends Components.SdsIconPrinter {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-radio',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconRadio {
  protected el: HTMLSdsIconRadioElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconRadio extends Components.SdsIconRadio {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-refresh-ccw',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconRefreshCcw {
  protected el: HTMLSdsIconRefreshCcwElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconRefreshCcw extends Components.SdsIconRefreshCcw {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-refresh-cw',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconRefreshCw {
  protected el: HTMLSdsIconRefreshCwElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconRefreshCw extends Components.SdsIconRefreshCw {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-repeat',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconRepeat {
  protected el: HTMLSdsIconRepeatElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconRepeat extends Components.SdsIconRepeat {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-rewind',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconRewind {
  protected el: HTMLSdsIconRewindElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconRewind extends Components.SdsIconRewind {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-rotate-ccw',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconRotateCcw {
  protected el: HTMLSdsIconRotateCcwElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconRotateCcw extends Components.SdsIconRotateCcw {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-rotate-cw',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconRotateCw {
  protected el: HTMLSdsIconRotateCwElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconRotateCw extends Components.SdsIconRotateCw {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-rss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconRss {
  protected el: HTMLSdsIconRssElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconRss extends Components.SdsIconRss {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-save',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconSave {
  protected el: HTMLSdsIconSaveElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconSave extends Components.SdsIconSave {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-scissors',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconScissors {
  protected el: HTMLSdsIconScissorsElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconScissors extends Components.SdsIconScissors {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-search',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconSearch {
  protected el: HTMLSdsIconSearchElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconSearch extends Components.SdsIconSearch {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-send',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconSend {
  protected el: HTMLSdsIconSendElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconSend extends Components.SdsIconSend {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-server',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconServer {
  protected el: HTMLSdsIconServerElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconServer extends Components.SdsIconServer {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-settings',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconSettings {
  protected el: HTMLSdsIconSettingsElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconSettings extends Components.SdsIconSettings {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-share',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconShare {
  protected el: HTMLSdsIconShareElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconShare extends Components.SdsIconShare {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-share-2',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconShare2 {
  protected el: HTMLSdsIconShare2Element;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconShare2 extends Components.SdsIconShare2 {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-shield',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconShield {
  protected el: HTMLSdsIconShieldElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconShield extends Components.SdsIconShield {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-shield-off',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconShieldOff {
  protected el: HTMLSdsIconShieldOffElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconShieldOff extends Components.SdsIconShieldOff {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-shopping-bag',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconShoppingBag {
  protected el: HTMLSdsIconShoppingBagElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconShoppingBag extends Components.SdsIconShoppingBag {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-shopping-cart',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconShoppingCart {
  protected el: HTMLSdsIconShoppingCartElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconShoppingCart extends Components.SdsIconShoppingCart {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-shuffle',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconShuffle {
  protected el: HTMLSdsIconShuffleElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconShuffle extends Components.SdsIconShuffle {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-sidebar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconSidebar {
  protected el: HTMLSdsIconSidebarElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconSidebar extends Components.SdsIconSidebar {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-skip-back',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconSkipBack {
  protected el: HTMLSdsIconSkipBackElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconSkipBack extends Components.SdsIconSkipBack {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-skip-forward',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconSkipForward {
  protected el: HTMLSdsIconSkipForwardElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconSkipForward extends Components.SdsIconSkipForward {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-slack',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconSlack {
  protected el: HTMLSdsIconSlackElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconSlack extends Components.SdsIconSlack {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-slash',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconSlash {
  protected el: HTMLSdsIconSlashElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconSlash extends Components.SdsIconSlash {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-sliders',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconSliders {
  protected el: HTMLSdsIconSlidersElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconSliders extends Components.SdsIconSliders {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-smartphone',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconSmartphone {
  protected el: HTMLSdsIconSmartphoneElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconSmartphone extends Components.SdsIconSmartphone {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-smile',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconSmile {
  protected el: HTMLSdsIconSmileElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconSmile extends Components.SdsIconSmile {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-speaker',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconSpeaker {
  protected el: HTMLSdsIconSpeakerElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconSpeaker extends Components.SdsIconSpeaker {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-square',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconSquare {
  protected el: HTMLSdsIconSquareElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconSquare extends Components.SdsIconSquare {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-star',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconStar {
  protected el: HTMLSdsIconStarElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconStar extends Components.SdsIconStar {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-stop-circle',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconStopCircle {
  protected el: HTMLSdsIconStopCircleElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconStopCircle extends Components.SdsIconStopCircle {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-sun',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconSun {
  protected el: HTMLSdsIconSunElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconSun extends Components.SdsIconSun {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-sunrise',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconSunrise {
  protected el: HTMLSdsIconSunriseElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconSunrise extends Components.SdsIconSunrise {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-sunset',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconSunset {
  protected el: HTMLSdsIconSunsetElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconSunset extends Components.SdsIconSunset {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-table',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconTable {
  protected el: HTMLSdsIconTableElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconTable extends Components.SdsIconTable {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-tablet',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconTablet {
  protected el: HTMLSdsIconTabletElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconTablet extends Components.SdsIconTablet {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-tag',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconTag {
  protected el: HTMLSdsIconTagElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconTag extends Components.SdsIconTag {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-target',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconTarget {
  protected el: HTMLSdsIconTargetElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconTarget extends Components.SdsIconTarget {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-terminal',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconTerminal {
  protected el: HTMLSdsIconTerminalElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconTerminal extends Components.SdsIconTerminal {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-thermometer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconThermometer {
  protected el: HTMLSdsIconThermometerElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconThermometer extends Components.SdsIconThermometer {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-thumbs-down',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconThumbsDown {
  protected el: HTMLSdsIconThumbsDownElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconThumbsDown extends Components.SdsIconThumbsDown {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-thumbs-up',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconThumbsUp {
  protected el: HTMLSdsIconThumbsUpElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconThumbsUp extends Components.SdsIconThumbsUp {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-toggle-left',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconToggleLeft {
  protected el: HTMLSdsIconToggleLeftElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconToggleLeft extends Components.SdsIconToggleLeft {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-toggle-right',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconToggleRight {
  protected el: HTMLSdsIconToggleRightElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconToggleRight extends Components.SdsIconToggleRight {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-tool',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconTool {
  protected el: HTMLSdsIconToolElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconTool extends Components.SdsIconTool {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-trash',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconTrash {
  protected el: HTMLSdsIconTrashElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconTrash extends Components.SdsIconTrash {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-trash-2',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconTrash2 {
  protected el: HTMLSdsIconTrash2Element;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconTrash2 extends Components.SdsIconTrash2 {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-trello',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconTrello {
  protected el: HTMLSdsIconTrelloElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconTrello extends Components.SdsIconTrello {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-trending-down',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconTrendingDown {
  protected el: HTMLSdsIconTrendingDownElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconTrendingDown extends Components.SdsIconTrendingDown {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-trending-up',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconTrendingUp {
  protected el: HTMLSdsIconTrendingUpElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconTrendingUp extends Components.SdsIconTrendingUp {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-triangle',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconTriangle {
  protected el: HTMLSdsIconTriangleElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconTriangle extends Components.SdsIconTriangle {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-truck',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconTruck {
  protected el: HTMLSdsIconTruckElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconTruck extends Components.SdsIconTruck {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-tv',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconTv {
  protected el: HTMLSdsIconTvElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconTv extends Components.SdsIconTv {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-twitch',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconTwitch {
  protected el: HTMLSdsIconTwitchElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconTwitch extends Components.SdsIconTwitch {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-twitter',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconTwitter {
  protected el: HTMLSdsIconTwitterElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconTwitter extends Components.SdsIconTwitter {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-type',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconType {
  protected el: HTMLSdsIconTypeElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconType extends Components.SdsIconType {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-umbrella',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconUmbrella {
  protected el: HTMLSdsIconUmbrellaElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconUmbrella extends Components.SdsIconUmbrella {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-underline',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconUnderline {
  protected el: HTMLSdsIconUnderlineElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconUnderline extends Components.SdsIconUnderline {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-unlock',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconUnlock {
  protected el: HTMLSdsIconUnlockElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconUnlock extends Components.SdsIconUnlock {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-upload',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconUpload {
  protected el: HTMLSdsIconUploadElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconUpload extends Components.SdsIconUpload {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-upload-cloud',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconUploadCloud {
  protected el: HTMLSdsIconUploadCloudElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconUploadCloud extends Components.SdsIconUploadCloud {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-user',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconUser {
  protected el: HTMLSdsIconUserElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconUser extends Components.SdsIconUser {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-user-check',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconUserCheck {
  protected el: HTMLSdsIconUserCheckElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconUserCheck extends Components.SdsIconUserCheck {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-user-minus',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconUserMinus {
  protected el: HTMLSdsIconUserMinusElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconUserMinus extends Components.SdsIconUserMinus {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-user-plus',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconUserPlus {
  protected el: HTMLSdsIconUserPlusElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconUserPlus extends Components.SdsIconUserPlus {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-user-x',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconUserX {
  protected el: HTMLSdsIconUserXElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconUserX extends Components.SdsIconUserX {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-users',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconUsers {
  protected el: HTMLSdsIconUsersElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconUsers extends Components.SdsIconUsers {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-video',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconVideo {
  protected el: HTMLSdsIconVideoElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconVideo extends Components.SdsIconVideo {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-video-off',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconVideoOff {
  protected el: HTMLSdsIconVideoOffElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconVideoOff extends Components.SdsIconVideoOff {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-voicemail',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconVoicemail {
  protected el: HTMLSdsIconVoicemailElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconVoicemail extends Components.SdsIconVoicemail {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-volume',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconVolume {
  protected el: HTMLSdsIconVolumeElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconVolume extends Components.SdsIconVolume {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-volume-1',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconVolume1 {
  protected el: HTMLSdsIconVolume1Element;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconVolume1 extends Components.SdsIconVolume1 {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-volume-2',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconVolume2 {
  protected el: HTMLSdsIconVolume2Element;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconVolume2 extends Components.SdsIconVolume2 {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-volume-x',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconVolumeX {
  protected el: HTMLSdsIconVolumeXElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconVolumeX extends Components.SdsIconVolumeX {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-watch',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconWatch {
  protected el: HTMLSdsIconWatchElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconWatch extends Components.SdsIconWatch {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-wifi',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconWifi {
  protected el: HTMLSdsIconWifiElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconWifi extends Components.SdsIconWifi {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-wifi-off',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconWifiOff {
  protected el: HTMLSdsIconWifiOffElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconWifiOff extends Components.SdsIconWifiOff {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-wind',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconWind {
  protected el: HTMLSdsIconWindElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconWind extends Components.SdsIconWind {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-x',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconX {
  protected el: HTMLSdsIconXElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconX extends Components.SdsIconX {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-x-circle',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconXCircle {
  protected el: HTMLSdsIconXCircleElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconXCircle extends Components.SdsIconXCircle {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-x-octagon',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconXOctagon {
  protected el: HTMLSdsIconXOctagonElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconXOctagon extends Components.SdsIconXOctagon {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-x-square',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconXSquare {
  protected el: HTMLSdsIconXSquareElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconXSquare extends Components.SdsIconXSquare {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-youtube',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconYoutube {
  protected el: HTMLSdsIconYoutubeElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconYoutube extends Components.SdsIconYoutube {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-zap',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconZap {
  protected el: HTMLSdsIconZapElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconZap extends Components.SdsIconZap {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-zap-off',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconZapOff {
  protected el: HTMLSdsIconZapOffElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconZapOff extends Components.SdsIconZapOff {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-zoom-in',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconZoomIn {
  protected el: HTMLSdsIconZoomInElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconZoomIn extends Components.SdsIconZoomIn {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'sds-icon-zoom-out',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class SdsIconZoomOut {
  protected el: HTMLSdsIconZoomOutElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsIconZoomOut extends Components.SdsIconZoomOut {}


@ProxyCmp({
  inputs: ['alt', 'aspectRatio', 'crossorigin', 'decoding', 'height', 'loading', 'size', 'sizes', 'src', 'srcset', 'usemap', 'variant', 'width']
})
@Component({
  selector: 'sds-image',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['alt', 'aspectRatio', 'crossorigin', 'decoding', 'height', 'loading', 'size', 'sizes', 'src', 'srcset', 'usemap', 'variant', 'width'],
})
export class SdsImage {
  protected el: HTMLSdsImageElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsImage extends Components.SdsImage {}


@ProxyCmp({
  inputs: ['defaultValue', 'disabled', 'placeholder', 'required', 'type', 'value']
})
@Component({
  selector: 'sds-input',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['defaultValue', 'disabled', 'placeholder', 'required', 'type', 'value'],
})
export class SdsInput {
  protected el: HTMLSdsInputElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsInput extends Components.SdsInput {}


@ProxyCmp({
  inputs: ['defaultValue', 'description', 'disabled', 'error', 'label', 'placeholder', 'required', 'type']
})
@Component({
  selector: 'sds-input-field',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['defaultValue', 'description', 'disabled', 'error', 'label', 'placeholder', 'required', 'type'],
})
export class SdsInputField {
  protected el: HTMLSdsInputFieldElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsInputField extends Components.SdsInputField {}


@ProxyCmp({
})
@Component({
  selector: 'sds-keyboard',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
})
export class SdsKeyboard {
  protected el: HTMLSdsKeyboardElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsKeyboard extends Components.SdsKeyboard {}


@ProxyCmp({
})
@Component({
  selector: 'sds-label',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
})
export class SdsLabel {
  protected el: HTMLSdsLabelElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsLabel extends Components.SdsLabel {}


@ProxyCmp({
})
@Component({
  selector: 'sds-legend',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
})
export class SdsLegend {
  protected el: HTMLSdsLegendElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsLegend extends Components.SdsLegend {}


@ProxyCmp({
  inputs: ['download', 'href', 'hreflang', 'media', 'ping', 'rel', 'target', 'variant']
})
@Component({
  selector: 'sds-link',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['download', 'href', 'hreflang', 'media', 'ping', 'rel', 'target', 'variant'],
})
export class SdsLink {
  protected el: HTMLSdsLinkElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsLink extends Components.SdsLink {}


@ProxyCmp({
  inputs: ['layout', 'orientation']
})
@Component({
  selector: 'sds-list-box',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['layout', 'orientation'],
})
export class SdsListBox {
  protected el: HTMLSdsListBoxElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['sds-select']);
  }
}


import type { SlMenuItem as ISdsListBoxSlMenuItem } from 'sds-web-components';

export declare interface SdsListBox extends Components.SdsListBox {
  /**
   * Emitted when an sds-list-box-item is selected
   */
  'sds-select': EventEmitter<CustomEvent<{ item: ISdsListBoxSlMenuItem }>>;
}


@ProxyCmp({
  inputs: ['checked', 'disabled', 'loading', 'type', 'value'],
  methods: ['deselect']
})
@Component({
  selector: 'sds-list-box-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['checked', 'disabled', 'loading', 'type', 'value'],
})
export class SdsListBoxItem {
  protected el: HTMLSdsListBoxItemElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsListBoxItem extends Components.SdsListBoxItem {}


@ProxyCmp({
  inputs: ['logoOptions']
})
@Component({
  selector: 'sds-logo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['logoOptions'],
})
export class SdsLogo {
  protected el: HTMLSdsLogoElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsLogo extends Components.SdsLogo {}


@ProxyCmp({
  inputs: ['direction']
})
@Component({
  selector: 'sds-navigation',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['direction'],
})
export class SdsNavigation {
  protected el: HTMLSdsNavigationElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsNavigation extends Components.SdsNavigation {}


@ProxyCmp({
  inputs: ['direction', 'isSelected', 'options', 'size']
})
@Component({
  selector: 'sds-navigation-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['direction', 'isSelected', 'options', 'size'],
})
export class SdsNavigationButton {
  protected el: HTMLSdsNavigationButtonElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['sds-navigation-selected']);
  }
}


export declare interface SdsNavigationButton extends Components.SdsNavigationButton {
  /**
   * Event emitted when selected
   */
  'sds-navigation-selected': EventEmitter<CustomEvent<MouseEvent>>;
}


@ProxyCmp({
  inputs: ['isSelected', 'options']
})
@Component({
  selector: 'sds-navigation-pill',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['isSelected', 'options'],
})
export class SdsNavigationPill {
  protected el: HTMLSdsNavigationPillElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['sds-navigation-selected']);
  }
}


export declare interface SdsNavigationPill extends Components.SdsNavigationPill {
  /**
   * Event emitted when selected
   */
  'sds-navigation-selected': EventEmitter<CustomEvent<MouseEvent>>;
}


@ProxyCmp({
})
@Component({
  selector: 'sds-picture',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
})
export class SdsPicture {
  protected el: HTMLSdsPictureElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsPicture extends Components.SdsPicture {}


@ProxyCmp({
  inputs: ['elementType', 'padding', 'paddingBottom', 'paddingTop', 'src', 'variant']
})
@Component({
  selector: 'sds-section',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['elementType', 'padding', 'paddingBottom', 'paddingTop', 'src', 'variant'],
})
export class SdsSection {
  protected el: HTMLSdsSectionElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsSection extends Components.SdsSection {}


@ProxyCmp({
  inputs: ['disabled', 'placeholder']
})
@Component({
  selector: 'sds-select',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['disabled', 'placeholder'],
})
export class SdsSelect {
  protected el: HTMLSdsSelectElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsSelect extends Components.SdsSelect {}


@ProxyCmp({
  inputs: ['description', 'disabled', 'error', 'label', 'placeholder']
})
@Component({
  selector: 'sds-select-field',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['description', 'disabled', 'error', 'label', 'placeholder'],
})
export class SdsSelectField {
  protected el: HTMLSdsSelectFieldElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsSelectField extends Components.SdsSelectField {}


@ProxyCmp({
  inputs: ['disabled', 'selected']
})
@Component({
  selector: 'sds-select-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['disabled', 'selected'],
})
export class SdsSelectItem {
  protected el: HTMLSdsSelectItemElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsSelectItem extends Components.SdsSelectItem {}


@ProxyCmp({
  inputs: ['defaultValue', 'description', 'disabled', 'label', 'name', 'showOutput']
})
@Component({
  selector: 'sds-slider',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['defaultValue', 'description', 'disabled', 'label', 'name', 'showOutput'],
})
export class SdsSlider {
  protected el: HTMLSdsSliderElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['sds-change', 'sds-input']);
  }
}


import type { SlRange as ISdsSliderSlRange } from 'sds-web-components';

export declare interface SdsSlider extends Components.SdsSlider {
  /**
   * Emitted when the input value is changed
   */
  'sds-change': EventEmitter<CustomEvent<{ value: ISdsSliderSlRange['value'] }>>;
  /**
   * Emitted when input is detected
   */
  'sds-input': EventEmitter<CustomEvent<{ value: ISdsSliderSlRange['value'] }>>;
}


@ProxyCmp({
  inputs: ['active', 'panelId']
})
@Component({
  selector: 'sds-tab',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['active', 'panelId'],
})
export class SdsTab {
  protected el: HTMLSdsTabElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['sds-tab-click', 'sds-tab-next', 'sds-tab-previous']);
  }
}


export declare interface SdsTab extends Components.SdsTab {
  /**
   * Event emitted when tab is clicked on
   */
  'sds-tab-click': EventEmitter<CustomEvent<{ panelId: string }>>;
  /**
   * Event emitted when using right arrow key to navigate
   */
  'sds-tab-next': EventEmitter<CustomEvent<{ panelId: string }>>;
  /**
   * Event emitted when using left arrow key to navigate
   */
  'sds-tab-previous': EventEmitter<CustomEvent<{ panelId: string }>>;
}


@ProxyCmp({
  inputs: ['active', 'panelId']
})
@Component({
  selector: 'sds-tab-panel',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['active', 'panelId'],
})
export class SdsTabPanel {
  protected el: HTMLSdsTabPanelElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsTabPanel extends Components.SdsTabPanel {}


@ProxyCmp({
  methods: ['show']
})
@Component({
  selector: 'sds-tabs',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
})
export class SdsTabs {
  protected el: HTMLSdsTabsElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['sds-tabs-selected']);
  }
}


export declare interface SdsTabs extends Components.SdsTabs {
  /**
   * Event emitted a tab is selected
   */
  'sds-tabs-selected': EventEmitter<CustomEvent<{ panelId: string }>>;
}


@ProxyCmp({
  inputs: ['removable', 'scheme', 'variant']
})
@Component({
  selector: 'sds-tag',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['removable', 'scheme', 'variant'],
})
export class SdsTag {
  protected el: HTMLSdsTagElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['removed']);
  }
}


export declare interface SdsTag extends Components.SdsTag {
  /**
   * Fires when the `x` icon button is clicked
   */
  removed: EventEmitter<CustomEvent<null>>;
}


@ProxyCmp({
  inputs: ['scheme', 'variant']
})
@Component({
  selector: 'sds-tag-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['scheme', 'variant'],
})
export class SdsTagButton {
  protected el: HTMLSdsTagButtonElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsTagButton extends Components.SdsTagButton {}


@ProxyCmp({
  inputs: ['elementType', 'lineHeight']
})
@Component({
  selector: 'sds-text',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['elementType', 'lineHeight'],
})
export class SdsText {
  protected el: HTMLSdsTextElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsText extends Components.SdsText {}


@ProxyCmp({
  inputs: ['elementType']
})
@Component({
  selector: 'sds-text-code',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['elementType'],
})
export class SdsTextCode {
  protected el: HTMLSdsTextCodeElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsTextCode extends Components.SdsTextCode {}


@ProxyCmp({
  inputs: ['align', 'heading', 'subHeading']
})
@Component({
  selector: 'sds-text-content-heading',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['align', 'heading', 'subHeading'],
})
export class SdsTextContentHeading {
  protected el: HTMLSdsTextContentHeadingElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsTextContentHeading extends Components.SdsTextContentHeading {}


@ProxyCmp({
  inputs: ['align', 'heading', 'subHeading']
})
@Component({
  selector: 'sds-text-content-title',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['align', 'heading', 'subHeading'],
})
export class SdsTextContentTitle {
  protected el: HTMLSdsTextContentTitleElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsTextContentTitle extends Components.SdsTextContentTitle {}


@ProxyCmp({
  inputs: ['elementType']
})
@Component({
  selector: 'sds-text-emphasis',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['elementType'],
})
export class SdsTextEmphasis {
  protected el: HTMLSdsTextEmphasisElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsTextEmphasis extends Components.SdsTextEmphasis {}


@ProxyCmp({
  inputs: ['elementType']
})
@Component({
  selector: 'sds-text-heading',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['elementType'],
})
export class SdsTextHeading {
  protected el: HTMLSdsTextHeadingElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsTextHeading extends Components.SdsTextHeading {}


@ProxyCmp({
  inputs: ['elementType']
})
@Component({
  selector: 'sds-text-input',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['elementType'],
})
export class SdsTextInput {
  protected el: HTMLSdsTextInputElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsTextInput extends Components.SdsTextInput {}


@ProxyCmp({
  inputs: ['download', 'href', 'hreflang', 'media', 'ping', 'rel', 'target']
})
@Component({
  selector: 'sds-text-link',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['download', 'href', 'hreflang', 'media', 'ping', 'rel', 'target'],
})
export class SdsTextLink {
  protected el: HTMLSdsTextLinkElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsTextLink extends Components.SdsTextLink {}


@ProxyCmp({
  inputs: ['density', 'titleElem']
})
@Component({
  selector: 'sds-text-link-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['density', 'titleElem'],
})
export class SdsTextLinkList {
  protected el: HTMLSdsTextLinkListElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsTextLinkList extends Components.SdsTextLinkList {}


@ProxyCmp({
  inputs: ['class', 'density', 'titleElem']
})
@Component({
  selector: 'sds-text-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['class', 'density', 'titleElem'],
})
export class SdsTextList {
  protected el: HTMLSdsTextListElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsTextList extends Components.SdsTextList {}


@ProxyCmp({
})
@Component({
  selector: 'sds-text-list-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
})
export class SdsTextListItem {
  protected el: HTMLSdsTextListItemElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsTextListItem extends Components.SdsTextListItem {}


@ProxyCmp({
  inputs: ['currency', 'elementType', 'label', 'price', 'size']
})
@Component({
  selector: 'sds-text-price',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['currency', 'elementType', 'label', 'price', 'size'],
})
export class SdsTextPrice {
  protected el: HTMLSdsTextPriceElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsTextPrice extends Components.SdsTextPrice {}


@ProxyCmp({
  inputs: ['elementType', 'lineHeight']
})
@Component({
  selector: 'sds-text-small',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['elementType', 'lineHeight'],
})
export class SdsTextSmall {
  protected el: HTMLSdsTextSmallElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsTextSmall extends Components.SdsTextSmall {}


@ProxyCmp({
  inputs: ['elementType', 'lineHeight']
})
@Component({
  selector: 'sds-text-small-strong',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['elementType', 'lineHeight'],
})
export class SdsTextSmallStrong {
  protected el: HTMLSdsTextSmallStrongElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsTextSmallStrong extends Components.SdsTextSmallStrong {}


@ProxyCmp({
  inputs: ['elementType']
})
@Component({
  selector: 'sds-text-strong',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['elementType'],
})
export class SdsTextStrong {
  protected el: HTMLSdsTextStrongElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsTextStrong extends Components.SdsTextStrong {}


@ProxyCmp({
  inputs: ['elementType']
})
@Component({
  selector: 'sds-text-subheading',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['elementType'],
})
export class SdsTextSubheading {
  protected el: HTMLSdsTextSubheadingElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsTextSubheading extends Components.SdsTextSubheading {}


@ProxyCmp({
  inputs: ['elementType']
})
@Component({
  selector: 'sds-text-subtitle',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['elementType'],
})
export class SdsTextSubtitle {
  protected el: HTMLSdsTextSubtitleElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsTextSubtitle extends Components.SdsTextSubtitle {}


@ProxyCmp({
  inputs: ['elementType']
})
@Component({
  selector: 'sds-text-title-hero',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['elementType'],
})
export class SdsTextTitleHero {
  protected el: HTMLSdsTextTitleHeroElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsTextTitleHero extends Components.SdsTextTitleHero {}


@ProxyCmp({
  inputs: ['elementType']
})
@Component({
  selector: 'sds-text-title-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['elementType'],
})
export class SdsTextTitlePage {
  protected el: HTMLSdsTextTitlePageElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsTextTitlePage extends Components.SdsTextTitlePage {}


@ProxyCmp({
  inputs: ['disabled', 'placeholder', 'required', 'resizable', 'value']
})
@Component({
  selector: 'sds-textarea',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['disabled', 'placeholder', 'required', 'resizable', 'value'],
})
export class SdsTextarea {
  protected el: HTMLSdsTextareaElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsTextarea extends Components.SdsTextarea {}


@ProxyCmp({
  inputs: ['description', 'disabled', 'error', 'label', 'placeholder', 'required', 'resizable', 'value']
})
@Component({
  selector: 'sds-textarea-field',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['description', 'disabled', 'error', 'label', 'placeholder', 'required', 'resizable', 'value'],
})
export class SdsTextareaField {
  protected el: HTMLSdsTextareaFieldElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['sds-change', 'sds-input']);
  }
}


export declare interface SdsTextareaField extends Components.SdsTextareaField {
  /**
   * Emitted when the textarea's value is changed
   */
  'sds-change': EventEmitter<CustomEvent<{ value: string }>>;
  /**
   * Emitted when the textarea's has input
   */
  'sds-input': EventEmitter<CustomEvent<{ value: string }>>;
}


@ProxyCmp({
  inputs: ['allowSelfToggle', 'selected']
})
@Component({
  selector: 'sds-toggle-tag',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['allowSelfToggle', 'selected'],
})
export class SdsToggleTag {
  protected el: HTMLSdsToggleTagElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['toggle']);
  }
}


import type { TagToggle as ISdsToggleTagTagToggle } from 'sds-web-components';

export declare interface SdsToggleTag extends Components.SdsToggleTag {

  toggle: EventEmitter<CustomEvent<ISdsToggleTagTagToggle>>;
}


@ProxyCmp({
})
@Component({
  selector: 'sds-toggle-tag-group',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
})
export class SdsToggleTagGroup {
  protected el: HTMLSdsToggleTagGroupElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface SdsToggleTagGroup extends Components.SdsToggleTagGroup {}


@ProxyCmp({
  inputs: ['selectionMode']
})
@Component({
  selector: 'sds-toggle-tag-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['selectionMode'],
})
export class SdsToggleTagList {
  protected el: HTMLSdsToggleTagListElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['togglesUpdated']);
  }
}


export declare interface SdsToggleTagList extends Components.SdsToggleTagList {

  togglesUpdated: EventEmitter<CustomEvent<Selection>>;
}


