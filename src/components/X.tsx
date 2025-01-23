'use client';

import React from 'react';
import Cookies from 'js-cookie';

const X: React.FC<React.PropsWithChildren> = ({ children }) => {
  Cookies.get('foobar');
  return <div>{children}</div>;
}

export default X;