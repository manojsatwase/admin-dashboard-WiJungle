import React from 'react';

import SidebarLinkItem from './SidebarLinkItem';

const SidebarLinkComponent = ({ links, location }) => (
  <div>
    <ul>
      {links.map((link, index) => (
        <SidebarLinkItem key={index} {...link} location={location} />
      ))}
    </ul>
  </div>
);

export default SidebarLinkComponent;