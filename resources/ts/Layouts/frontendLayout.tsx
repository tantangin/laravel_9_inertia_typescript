import React from 'react';
import Footer from './frontend/footer';
import NavbarTop from '@ts/Layouts/frontend/navbar';
import { PropsInertiaBaseInterface } from '@ts/utils/interfaces/inertia.interfaces';

export default function FrontendLayout({ component, ...props }: any) {
  const { settings_app }: PropsInertiaBaseInterface = props;

  return (
    <div>
      <NavbarTop setting={settings_app} />
      <main className="px-2 md:px-0 min-h-[80vh]">{component}</main>
      <Footer setting={settings_app} />
    </div>
  );
}
