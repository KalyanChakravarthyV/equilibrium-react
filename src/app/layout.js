import './globals.scss';

import { Providers } from './providers';

export const metadata = {
  title: 'Equilibrium',
  description: 'Project Equilibrium - Open Source Tools for TRIRIGA',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
