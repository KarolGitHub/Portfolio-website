import React, { useEffect, useRef } from 'react';
import { Link } from 'gatsby';

import NavigationItems from '../NavigationItems/NavigationItems';
import Menu from '../Sidedrawer/Menu/Menu';
import { Wrapper, Navigation, Logo } from './Navbar.styles';
import ModeButton from '../../UI/ModeButton/ModeButton';
import withConfig from '../../Hoc/withConfig';

type Props = {
  openMenu: () => void;
  title: string;
  logo: string;
  menu: [];
};

const Navbar: React.FC<Props> = ({ openMenu, title = ``, logo, menu }) => {
  const navbarRef = useRef<HTMLDivElement>();

  let hideScroll = typeof window !== 'undefined' ? window.pageYOffset : 0;

  const scrollHandler = (entries: IntersectionObserverEntry[]) => {
    if (navbarRef.current) {
      if (entries[0].isIntersecting) {
        navbarRef.current.style.setProperty('background-color', 'transparent');
      } else {
        navbarRef.current.style.setProperty('background-color', 'var(--menu-background)');
      }
    }
  };

  useEffect(() => {
    const observer = new window.IntersectionObserver(scrollHandler, {
      root: document.body,
      rootMargin: '0px 0px -100% 0px',
      threshold: 0,
    });
    if (navbarRef.current) {
      observer.observe(navbarRef.current);
    }

    window.onscroll = () => {
      const currentScrollPos = window.pageYOffset;

      if (hideScroll > window.pageYOffset) {
        navbarRef.current?.style.setProperty('top', '0');
      } else {
        navbarRef.current?.style.setProperty('top', '-70px');
      }

      hideScroll = currentScrollPos;
    };

    return () => {
      observer.disconnect();
      window.onscroll = null;
    };
  }, []);

  return (
    <Wrapper ref={(el: HTMLDivElement) => (navbarRef.current = el)}>
      <Menu clicked={openMenu} />
      <Navigation>
        <Link to="/">
          <Logo src={logo} alt={title} />
        </Link>
        <NavigationItems items={menu} />
      </Navigation>
      <ModeButton />
    </Wrapper>
  );
};

export default withConfig(Navbar);
