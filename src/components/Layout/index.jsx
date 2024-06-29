import React from 'react';

const Layout = ({ children }) => {
  return (
    <main>
      <nav>
        <ul>
          <li>
            <a href=''>home</a>
          </li>
          <li>
            <a href=''>about</a>
          </li>
          <li>
            <a href=''>about</a>
          </li>
        </ul>
      </nav>
      <div className='container'>{children}</div>
    </main>
  );
};

export default Layout;
