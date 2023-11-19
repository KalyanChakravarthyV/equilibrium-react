import React from 'react';
import {
  Header,
  HeaderContainer,
  HeaderName,
  HeaderNavigation,
  HeaderMenuButton,
  HeaderMenuItem,
  HeaderGlobalBar,
  HeaderGlobalAction,
  SkipToContent,
  SideNav,
  SideNavItems,
  // HeaderSideNavItems,
  SideNavLink,
  SideNavMenuItem,
  SideNavMenu,
} from 'carbon-components-react';
import {
  AppSwitcher20,
  Notification20,
  UserAvatar20,
} from '@carbon/icons-react';
import { Link } from 'react-router-dom';

const Fade16 = () => (
  <svg
    width="16"
    height="16"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    aria-hidden="true">
    <path d="M8.24 25.14L7 26.67a14 14 0 0 0 4.18 2.44l.68-1.88a12 12 0 0 1-3.62-2.09zm-4.05-7.07l-2 .35A13.89 13.89 0 0 0 3.86 23l1.73-1a11.9 11.9 0 0 1-1.4-3.93zm7.63-13.31l-.68-1.88A14 14 0 0 0 7 5.33l1.24 1.53a12 12 0 0 1 3.58-2.1zM5.59 10L3.86 9a13.89 13.89 0 0 0-1.64 4.54l2 .35A11.9 11.9 0 0 1 5.59 10zM16 2v2a12 12 0 0 1 0 24v2a14 14 0 0 0 0-28z" />
  </svg>
);

const GlobalHeader = () => (
  <HeaderContainer
    render={({ isSideNavExpanded, onClickSideNavExpand }) => (
      <Header aria-label="Carbon Tutorial">
        <SkipToContent />
        <HeaderMenuButton
          aria-label="Open menu"
          onClick={onClickSideNavExpand}
          isActive={true}
          isSideNavExpanded={true}
        />
        <HeaderName element={Link} to="/" prefix="~">
          Equilibrium
        </HeaderName>
        <HeaderNavigation aria-label="Carbon Tutorial">
          <HeaderMenuItem element={Link} to="/SQLEditor">
            --$q! Editor
          </HeaderMenuItem>
        </HeaderNavigation>
        <SideNav
          isFixedNav={true}
          isSideNavExpanded={true}
          isChildOfHeader={true}
          aria-label="Side navigation"
          expanded={false}
          isPersistent={true}>
          <SideNavItems>
            <SideNavMenu renderIcon={Fade16} title="Category title">
              <SideNavMenuItem href="">Link</SideNavMenuItem>
              <SideNavMenuItem aria-current="page" href="">
                Link
              </SideNavMenuItem>
              <SideNavMenuItem href="">Link</SideNavMenuItem>
            </SideNavMenu>
            <SideNavMenu renderIcon={Fade16} title="Category title">
              <SideNavMenuItem href="">Link</SideNavMenuItem>
              <SideNavMenuItem aria-current="page" href="">
                Link
              </SideNavMenuItem>
              <SideNavMenuItem href="">Link</SideNavMenuItem>
            </SideNavMenu>
            <SideNavMenu renderIcon={Fade16} title="Category title">
              <SideNavMenuItem href="">Link</SideNavMenuItem>
              <SideNavMenuItem aria-current="page" href="">
                Link
              </SideNavMenuItem>
              <SideNavMenuItem href="">Link</SideNavMenuItem>
            </SideNavMenu>
            <SideNavLink renderIcon={Fade16} href="">
              Link
            </SideNavLink>
            <SideNavLink renderIcon={Fade16} href="">
              Link
            </SideNavLink>
          </SideNavItems>

          {/* <SideNavItems>
            <HeaderSideNavItems>
              <HeaderMenuItem element={Link} to="/repos">
                Repositories
              </HeaderMenuItem>
            </HeaderSideNavItems>
          </SideNavItems> */}
        </SideNav>
        <HeaderGlobalBar>
          <HeaderGlobalAction aria-label="Notifications">
            <Notification20 />
          </HeaderGlobalAction>
          <HeaderGlobalAction aria-label="User Avatar">
            <UserAvatar20 />
          </HeaderGlobalAction>
          <HeaderGlobalAction aria-label="App Switcher">
            <AppSwitcher20 />
          </HeaderGlobalAction>
        </HeaderGlobalBar>
      </Header>
    )}
  />
);

export default GlobalHeader;
