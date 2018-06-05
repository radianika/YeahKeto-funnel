import React from 'react';
import { withRouter } from 'next/router';

const Link = ({
  children, router, href, as,
}) => {
  const className = router.pathname === href ? 'active' : '';

  const handleClick = e => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <a href={href} as={as} onClick={handleClick} className={className}>
      {children}
    </a>
  );
};

const ActiveLink = withRouter(Link);

export { ActiveLink };
