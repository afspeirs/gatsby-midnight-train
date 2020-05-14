import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

const pages = [
  {
    slug: '/',
    title: 'home',
  },
  {
    slug: '/blog',
    title: 'blog',
  },
  {
    slug: '/events',
    title: 'events',
  },
  {
    slug: '/videos',
    title: 'videos',
  },
  {
    slug: '/band-members',
    title: 'band members',
  },
  {
    slug: '/contact-us',
    title: 'contact us',
  },
];

const Nav = ({ pathname }) => (
  <nav>
    <Link to="/">LOGO</Link>

    <ul>
      {pages.map((page) => (
        <li key={page.slug}>
          <Link to={page.slug} className={pathname === page.slug ? 'current-page' : ''}>{page.title}</Link>
        </li>
      ))}
    </ul>
  </nav>
);

Nav.propTypes = {
  pathname: PropTypes.string.isRequired,
};

export default Nav;
