import { SdsSwitchFunctional } from './sds-switch-functional';
import { Component, h } from '@stencil/core';

@Component({
  tag: 'sds-switch',
  styleUrl: 'sds-switch.scss',
  shadow: true,
})
export class SdsSwitch {
  render() {
    return <SdsSwitchFunctional />;
  }
}
