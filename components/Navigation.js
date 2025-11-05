// StAuth10222: I Jin Zhang, 000878821 certify that this material is my original work. No other person's work has been used without due acknowledgement. I have not made my work available to anyone else.

'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Navigation.module.css';

export default function Navigation() {
  const pathname = usePathname();
  const normalizedPath =
    pathname !== '/' && pathname.endsWith('/') ? pathname.slice(0, -1) : pathname;

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/feed', label: 'Feed' },
    { href: '/profile', label: 'Profile' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' }
  ];

  const isActive = (href) => {
    if (href === '/') {
      return normalizedPath === '/';
    }
    return normalizedPath === href || normalizedPath.startsWith(`${href}/`);
  };

  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        {navItems.map((item) => (
          <li key={item.href} className={styles.navItem}>
            <Link
              href={item.href}
              className={`${styles.navLink} ${isActive(item.href) ? styles.active : ''}`}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
