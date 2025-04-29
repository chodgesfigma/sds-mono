import { placeholder } from '../../../images';
import { login, User } from '../AuthContext';
import { Component, Host, State, h } from '@stencil/core';
import { useMediaQuery } from 'src/ui/hooks/useMediaQuery';

@Component({
  tag: 'sds-header-auth',
  styleUrl: 'sds-header-auth.scss',
  shadow: true,
})
export class SdsHeaderAuth {
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
      <sds-button-group align="center">
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
      </sds-button-group>
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
                <sds-dialog-button label="Open Navigation menu" useIcon>
                  <sds-icon-menu slot="icon" />
                  <sds-dialog-close></sds-dialog-close>
                  <sds-flex direction="column" alignPrimary="space-between" alignSecondary="center" class="navigation-dialog">
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
                      userButtons
                    )}
                  </sds-flex>
                </sds-dialog-button>
              </sds-flex>
            ) : (
              <sds-flex gap="400" alignSecondary="center">
                {navigation}
                {this.currentUser ? (
                  <sds-menu-button placement="bottom-end" variant="subtle">
                    <div class="header-auth-avatar-button" slot="icon">
                      <sds-avatar src={this.currentUser.avatar} initials={this.currentUser.name.charAt(0)} />
                      <sds-icon-chevron-down />
                    </div>
                    <sds-menu-item>
                      <sds-avatar-block avatarTitle={this.currentUser.name} description="View profile">
                        <sds-avatar src={this.currentUser.avatar} initials={this.currentUser.name.charAt(0)} />
                      </sds-avatar-block>
                    </sds-menu-item>
                    <sds-menu-item onClick={this.handleLogout}>Log out</sds-menu-item>
                  </sds-menu-button>
                ) : (
                  userButtons
                )}
              </sds-flex>
            )}
          </sds-flex-item>
        </sds-flex>
      </Host>
    );
  }
}
