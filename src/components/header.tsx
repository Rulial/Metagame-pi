
import Head from 'next/head';
import Link from 'next/link';
import ExtLink from './ext-link';
import { useRouter } from 'next/router';
import styles from '../styles/header.module.css';
import React from 'react';

const navItems = [
  { label: 'SURFBOARD/', link: 'https://pathintegral0.notion.site/SURFBOARD-9ac7252efb2a4b43a7411fc26f5d1a50?pvs=24' }, // Add a 'page' property here
];

const ogImageUrl = '';

const Header = () => {
  const { pathname } = useRouter();

  return (
    <header className={styles.header}>
      <Head>
        <title>AI Native Game Engine </title>
        <meta
          name="description"
          content="ANNA+SOLO"
        />

        <meta name="og:title" content="imagintion>0" />
       
      </Head>

      <ul>
        {navItems.map(({ label, link }) => (
          <li key={label}>
             {link ? (
             <Link href={link}>
                <a className={pathname === link ? 'active' : undefined}>
                  {label}
                </a>
              </Link> 
            ) : (
              <ExtLink href={link}>{label}</ExtLink>
            )}
          </li>
        ))}
      </ul>

    </header>
  );
};

export default Header;

