'use client';

import { Content, Theme } from '@carbon/react';

import GlobalHeader from '@/components/GlobalHeader/GlobalHeader';

export function Providers({ children }) {
  return (
    <Theme theme="g100">
      <div>
        <GlobalHeader />
        <Content>{children}</Content>
      </div>
    </Theme>
  );
}
