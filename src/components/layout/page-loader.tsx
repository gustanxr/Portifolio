"use client";

import { useEffect, useState } from "react";
import styles from "./page-loader.module.css";

export function PageLoader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(false), 1500);
    return () => window.clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className={styles.loader} role="status" aria-label="Carregando portfólio">
      <div className={styles.brand} aria-hidden="true">
        <div className={styles.monogram}>g<span>.</span></div>
        <span className={styles.name}>gustanxr</span>
        <div className={styles.track}><span /></div>
      </div>
    </div>
  );
}
