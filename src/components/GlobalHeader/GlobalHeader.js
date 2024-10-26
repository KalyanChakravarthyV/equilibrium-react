'use client';

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
  HeaderSideNavItems,
} from '@carbon/react';

import { Switcher, Notification, UserAvatar } from '@carbon/icons-react';

import Link from 'next/link';
import { Popover, PopoverContent } from '@carbon/react';

import React from 'react';

function GlobalHeader() {
  const [isSideNavExpanded, setSideNavExpanded] = React.useState(false);

  return (
    <HeaderContainer
      render={({ isSideNavExpanded, onClickSideNavExpand }) => (
        <Header aria-label="Equilibrium">
          <SkipToContent />
          <HeaderMenuButton
            aria-label="Open menu"
            onClick={onClickSideNavExpand}
            isActive={isSideNavExpanded}
          />
          <Link href="/" passHref legacyBehavior>
            <HeaderName prefix="~">Equilibrium</HeaderName>
          </Link>
          <HeaderNavigation aria-label="Equilibrium">
            <Link href="/finder" passHref legacyBehavior>
              <HeaderMenuItem>Finder</HeaderMenuItem>
            </Link>
            <Link href="/sql" passHref legacyBehavior>
              <HeaderMenuItem>$QL Editor</HeaderMenuItem>
            </Link>
            <Link href="/script" passHref legacyBehavior>
              <HeaderMenuItem>$Krypton</HeaderMenuItem>
            </Link>
          </HeaderNavigation>
          <SideNav
            aria-label="Side navigation"
            expanded={isSideNavExpanded}
            isPersistent={false}>
            <SideNavItems>
              <HeaderSideNavItems>
                <Link href="/finder" passHref legacyBehavior>
                  <HeaderMenuItem onClick={onClickSideNavExpand}>
                    Finder
                  </HeaderMenuItem>
                </Link>
              </HeaderSideNavItems>
              <HeaderSideNavItems>
                <Link href="/sql" passHref legacyBehavior>
                  <HeaderMenuItem onClick={onClickSideNavExpand}>
                    {' '}
                    $QL
                  </HeaderMenuItem>
                </Link>
              </HeaderSideNavItems>
              <HeaderSideNavItems>
                <Link href="/script" passHref legacyBehavior>
                  <HeaderMenuItem onClick={onClickSideNavExpand}>
                    $Krypton
                  </HeaderMenuItem>
                </Link>
              </HeaderSideNavItems>
            </SideNavItems>
          </SideNav>
          <HeaderGlobalBar>
            <HeaderGlobalAction
              aria-label="Notifications - Under Dev"
              tooltipAlignment="center">
              <Notification size={20} />
            </HeaderGlobalAction>
            <HeaderGlobalAction
              aria-label="User Avatar - Under Dev"
              tooltipAlignment="center">
              <UserAvatar size={20} />
            </HeaderGlobalAction>
            <HeaderGlobalAction
              aria-label="App Switcher - Under Dev"
              tooltipAlignment="end">
              <Switcher size={20} />
            </HeaderGlobalAction>
          </HeaderGlobalBar>
        </Header>
      )}
    />
  );
}

export default GlobalHeader;
