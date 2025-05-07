import { Component, h } from '@stencil/core';

@Component({
  tag: 'sds-header',
  styleUrl: 'sds-header.scss',
  shadow: true,
})
export class SdsHeader {
  render() {
    return (
      <sds-section class="header" elementType="header" variant="stroke" padding="800">
        <sds-flex container alignPrimary="space-between" alignSecondary="center">
          <sds-flex-item size="minor">
            <sds-logo />
          </sds-flex-item>
          <sds-flex-item size="major">
            <sds-flex gap="600" alignPrimary="end" alignSecondary="center">
              <sds-header-auth />
            </sds-flex>
          </sds-flex-item>
        </sds-flex>
      </sds-section>
    );
  }
}
