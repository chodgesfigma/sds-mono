import { placeholder } from '../../../images';
import { login, User } from '../AuthContext';
import { Component, Host, State, h } from '@stencil/core';
import clsx from 'clsx';
import { useMediaQuery } from 'src/ui/hooks/useMediaQuery';

@Component({
  tag: 'sds-header-auth',
  styleUrl: 'sds-header-auth.scss',
  shadow: true,
})
export class SdsHeaderAuth {
  @State() open = false;

  @State() isTabletDown = false;

  @State() currentUser: User | null = null;

  private mediaQueryList: MediaQueryList = useMediaQuery('tabletDown');

  componentWillLoad() {
    this.updateMatches(this.mediaQueryList); // Initial check for media query
    this.mediaQueryList.addEventListener('change', this.updateMatches);
  }

  disconnectedCallback() {
    this.mediaQueryList.removeEventListener('change', this.updateMatches);
  }

  private updateMatches = (event: MediaQueryListEvent | MediaQueryList) => {
    this.isTabletDown = event.matches;
  };

  handleLogin = (user: User) => {
    this.currentUser = login(user);
  };

  handleLogout = () => {
    this.currentUser = null;
  };

  render() {
    const userButtons = (
      <div>
        <sds-button
          variant="subtle"
          size="small"
          onClick={() =>
            this.handleLogin({
              avatar: placeholder,
              name: 'Charlie Brown',
              username: 'snooptroupe',
            })
          }
        >
          Log in
        </sds-button>
        <sds-button
          size="small"
          onClick={() =>
            this.handleLogin({
              avatar: placeholder,
              name: 'Charlie Brown',
              username: 'snooptroupe',
            })
          }
        >
          Register
        </sds-button>
      </div>
    );

    const navigation = (
      <sds-navigation direction={this.isTabletDown ? 'column' : 'row'}>
        <sds-navigation-pill isSelected>Pricing</sds-navigation-pill>
        <sds-navigation-pill>Solutions</sds-navigation-pill>
        <sds-navigation-pill>Community</sds-navigation-pill>
        <sds-navigation-pill>Resources</sds-navigation-pill>
        <sds-navigation-pill>Pricing</sds-navigation-pill>
        <sds-navigation-pill>Contact</sds-navigation-pill>
      </sds-navigation>
    );

    return (
      <Host>
        <sds-flex direction="column" gap="300" alignPrimary="center" alignSecondary="center">
          <sds-flex-item>
            {this.isTabletDown ? (
              <sds-flex alignPrimary="center">
                <sds-icon-button variant="subtle" aria-label="Toggle navigation menu" onPress={() => (this.open = true)}>
                  <sds-icon-menu />
                </sds-icon-button>
                <sds-dialog-modal isOpen={open}>
                  <sds-dialog className={clsx('navigation-dialog')}>
                    <sds-icon-button className={clsx('navigation-dialog-close')} variant="subtle" aria-label="Close navigation menu" onPress={() => (this.open = false)}>
                      <sds-icon-x />
                    </sds-icon-button>
                    <sds-flex direction="column" alignPrimary="space-between" alignSecondary="center">
                      {navigation}
                      {this.currentUser ? (
                        <sds-flex alignSecondary="center" gap="200" direction="column">
                          <sds-flex-item>
                            <sds-flex alignPrimary="center">
                              <sds-avatar src={this.currentUser.avatar} initials={this.currentUser.name.charAt(0)} />
                            </sds-flex>
                          </sds-flex-item>
                          <sds-flex-item>
                            <sds-flex alignPrimary="center">
                              <sds-label>{this.currentUser.name}</sds-label>
                            </sds-flex>
                          </sds-flex-item>
                          <sds-flex-item>
                            <sds-flex alignPrimary="center">
                              <sds-button variant="subtle" size="small" onClick={this.handleLogout}>
                                Log out
                              </sds-button>
                            </sds-flex>
                          </sds-flex-item>
                        </sds-flex>
                      ) : (
                        <sds-button-group align="center">{userButtons}</sds-button-group>
                      )}
                    </sds-flex>
                  </sds-dialog>
                </sds-dialog-modal>
              </sds-flex>
            ) : (
              <sds-flex gap="400" alignSecondary="center">
                {navigation}
                {this.currentUser ? (
                  <sds-menu-trigger>
                    <sds-anchor-or-button className={clsx('header-auth-avatar-button')}>
                      <sds-avatar src={this.currentUser.avatar} initials={this.currentUser.name.charAt(0)} />
                      <sds-icon-chevron-down />
                    </sds-anchor-or-button>
                    <sds-menu-popover placement="bottom right">
                      <sds-menu>
                        <sds-menu-item>
                          <sds-avatar-block title={this.currentUser.name} description="View profile">
                            <sds-avatar src={this.currentUser.avatar} initials={this.currentUser.name.charAt(0)} />
                          </sds-avatar-block>
                        </sds-menu-item>
                        <sds-menu-item onAction={this.handleLogout}>Log out</sds-menu-item>
                      </sds-menu>
                    </sds-menu-popover>
                  </sds-menu-trigger>
                ) : (
                  <sds-button-group>{userButtons}</sds-button-group>
                )}
              </sds-flex>
            )}
          </sds-flex-item>
        </sds-flex>
      </Host>
    );
  }
}
