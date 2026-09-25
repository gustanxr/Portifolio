"use client";

import { useState } from "react";
import styles from "./animated-background.module.css";

const circuits = [
  "M-80 160H200L320 280H560L680 160H960L1080 280H1440L1580 140H1700",
  "M-80 440H120L260 300H420L620 500H900L1080 320H1320L1520 520H1700",
  "M-80 720H240L440 520H620L840 740H1140L1320 560H1700",
  "M-80 940H120L320 740H540L700 900H1020L1180 740H1420L1580 900H1700",
  "M160-80V100L380 320V580L160 800V1080",
  "M800-80V120L1000 320V580L800 780V1080",
  "M1400-80V120L1200 320V460L1440 700V1080",
];
const nodes = [[320, 280], [680, 160], [1080, 280], [260, 300], [620, 500], [1080, 320], [440, 520], [840, 740], [1320, 560], [320, 740], [1180, 740]];

export function AnimatedBackground() {
  const [paused, setPaused] = useState(false);

  return (
    <>
      <div aria-hidden="true" className={`${styles.background} ${paused ? styles.paused : ""}`}>
        <div className={styles.glow} />
        <svg className={styles.circuits} viewBox="0 0 1600 1000" fill="none" preserveAspectRatio="xMidYMid slice" focusable="false">
          <g stroke="currentColor" strokeWidth="1">
            {circuits.map((path) => <path key={path} d={path} />)}
          </g>
          <g className={styles.signals} stroke="#c4a0ff" strokeWidth="2" strokeLinecap="round" strokeDasharray="5 320">
            {circuits.map((path) => <path key={path} d={path} />)}
          </g>
          <g className={styles.nodes} fill="#c4a0ff">
            {nodes.map(([x, y]) => <circle key={`${x}-${y}`} cx={x} cy={y} r="3" />)}
          </g>
        </svg>
        <div className={styles.shade} />
      </div>
      <button
        type="button"
        className={styles.toggle}
        onClick={() => setPaused((value) => !value)}
        aria-pressed={paused}
        aria-label={paused ? "Retomar animação de fundo" : "Pausar animação de fundo"}
      >
        <span aria-hidden="true">{paused ? "▶" : "Ⅱ"}</span>
        {paused ? "Animar fundo" : "Pausar fundo"}
      </button>
    </>
  );
}
