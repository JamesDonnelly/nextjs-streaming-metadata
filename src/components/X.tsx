'use client';

import React from 'react';
import Cookies from 'js-cookie';

const X: React.FC<React.PropsWithChildren> = ({ children }) => {
  Cookies.set('foobar', 'barfoo');
  return <div>{children}</div>;
}

export default X;