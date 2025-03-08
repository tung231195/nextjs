
import Image from "next/image";
import styles from "./page.module.css";
import HeaderApp from './components/header/AppHeader'
import AppFooter from './components/footer/AppFooter'

import React from 'react';
import { Button } from 'antd';
import { SignIn } from "./components/auth/signin";
export default function Home() {

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className="App">
            <SignIn />
        </div>
      </main>
      <AppFooter />
    </div>
  );
}
