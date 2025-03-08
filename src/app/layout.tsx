import React from 'react';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import AppHeader from '@/app/components/header/AppHeader'
import  AppFooter from '@/app/components/footer/AppFooter'
const RootLayout = ({ children }: React.PropsWithChildren) => (
  <html lang="en">
    <body>
      <AppHeader />
      <main>
        <div className="App">
        <AntdRegistry>{children}</AntdRegistry>
        </div>
      </main>
      <AppFooter />

    </body>
  </html>
);

export default RootLayout;  