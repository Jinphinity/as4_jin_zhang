// StAuth10222: I Jin Zhang, 000878821 certify that this material is my original work. No other person's work has been used without due acknowledgement. I have not made my work available to anyone else.

'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './SubNavigation.module.css';

export default function SubNavigation() {
  const pathname = usePathname();
  const normalizedPath =
    pathname !== '/' && pathname.endsWith('/') ? pathname.slice(0, -1) : pathname;

  const navItems = [
    { href: '/profile', label: 'details' },
    { href: '/profile/settings', label: 'settings' },
    { href: '/profile/posts', label: 'posts' }
  ];

  const isActive = (href) => {
    if (href === '/profile') {
      return normalizedPath === href;
    }
    return normalizedPath === href || normalizedPath.startsWith(`${href}/`);
  };

  return (
    <nav className={styles.subNav}>
      <ul className={styles.subNavList}>
        {navItems.map((item) => (
          <li key={item.href} className={styles.subNavItem}>
            <Link 
              href={item.href}
              className={`${styles.subNavLink} ${isActive(item.href) ? styles.active : ''}`}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
