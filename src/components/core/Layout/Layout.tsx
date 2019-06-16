import React from 'react';

import './Layout.scss';

interface PropTypes {
  children: Array<JSX.Element> | JSX.Element,
};

const Layout = ({ children }: PropTypes) => (
  <main>
    { children }
  </main>
);

export default Layout;
