import styles from '../css/banner.module.css';
import DarkVeil from "./DarkVeil";

export function BannerComponent({ text, subtext }) {
  return (
    <div className={styles.banner}>
        <DarkVeil />
        <div className={styles.bannerContent}>
            <h1 className={styles.bannerText}>{text}</h1>
            <h3 className={styles.bannerSubtext}>{subtext}</h3>
        </div>
    </div>
  );
}