import styles from "../css/hero.module.css";

export function HeroComponent({ text, backdrop, subtext, darkTheme }) {
  function renderBackground() {
    if (darkTheme === true) {
      return (
        <div>
          <header className="bg-dark text-light p-5" id={styles.heroContainer}>
            <h1 className={styles.heroText}>{text}</h1>
            <h3 className={styles.heroSubtext}>{subtext}</h3>
            {backdrop && (
              <div
                className={styles.heroBackdrop}
                style={{ backgroundImage: `url(${backdrop})` }}
              ></div>
            )}
          </header>
        </div>
      );
    } else {
      return(
        <div>
        <header className=" p-5" id={styles.heroContainer}>
          <h1 className={styles.heroText}>{text}</h1>
          <h3 className={styles.heroSubtext}>{subtext}</h3>
          {backdrop && (
            <div
            className={styles.heroBackdrop}
              style={{ backgroundImage: `url(${backdrop})` }}
            ></div>
          )}
        </header>
      </div>
      )
    }
  }
  return <div className="HeroComponent-Wrapper">{renderBackground()}</div>;
}
