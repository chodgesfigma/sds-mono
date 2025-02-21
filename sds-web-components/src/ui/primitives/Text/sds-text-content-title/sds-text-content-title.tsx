import { useMediaQuery } from '../../../hooks/useMediaQuery';
import { Component, Prop, State, h } from '@stencil/core';

@Component({
  tag: 'sds-text-content-title',
  styleUrl: '../sds-text.scss',
  shadow: true,
})
export class SdsTextContentTitle {
  /**
   * Align position
   */
  @Prop() align: 'start' | 'center' = 'start';

  /**
   * Heading
   */
  @Prop() heading: string = '';

  /**
   * Sub Heading
   */
  @Prop() subHeading: string = '';

  @State() isMobile: boolean = true;

  private mediaQueryList: MediaQueryList = useMediaQuery('mobile');

  componentWillLoad() {
    this.updateMatches(this.mediaQueryList); // Initial check for media query
    this.mediaQueryList.addEventListener('change', this.updateMatches);
  }

  disconnectedCallback() {
    this.mediaQueryList.removeEventListener('change', this.updateMatches);
  }

  private updateMatches = (event: MediaQueryListEvent | MediaQueryList) => {
    this.isMobile = event.matches;
  };

  render() {
    const classNames = 'text-content-title';

    // TODO: once Flex component has been integrated, throw it in here
    return (
      //   <Flex direction="column" gap="200" className={classNames} {...props}>
      <div class={classNames}>
        {this.isMobile ? (
          <sds-text-title-page class={`text-align-${this.align}`}>{this.heading}</sds-text-title-page>
        ) : (
          <sds-text-title-hero class={`text-align-${this.align}`}>{this.heading}</sds-text-title-hero>
        )}

        {this.subHeading && <sds-text-subtitle class={`text-align-${this.align}`}>{this.subHeading}</sds-text-subtitle>}
      </div>
      //   </Flex>
    );
  }
}
