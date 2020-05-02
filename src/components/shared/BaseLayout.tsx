import React from 'react';
import { Header } from './Header';

export const BaseLayout: React.FC = props => {
  const { children } = props;
  return (
    <section>
      <Header />
      <div>{children}</div>
    </section>
  );
};
