export function HeroComponent({ text, backdrop, subtext, darkTheme }) {
  function renderBackground() {
    if (darkTheme === true) {
      return (
        <div>
          <header className="bg-dark text-light p-5 hero-container">
            <h1 className="hero-text">{text}</h1>
            <h3 className="hero-subtext">{subtext}</h3>
            {backdrop && (
              <div
                className="hero-backdrop"
                style={{ backgroundImage: `url(${backdrop})` }}
              ></div>
            )}
          </header>
        </div>
      );
    } else {
      return(
        <div>
        <header className=" p-5 hero-container">
          <h1 className="hero-text">{text}</h1>
          <h3 className="hero-subtext">{subtext}</h3>
          {backdrop && (
            <div
              className="hero-backdrop"
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
