export function HeroComponent ({text, backdrop, subtext}) {
    return (
        <div>
            <header className="bg-dark text-white p-5 hero-container">
                <h1 className="hero-text">{text}</h1>
                <h3 className="hero-subtext">{subtext}</h3>
                {backdrop &&
                    <div className="hero-backdrop" style={{backgroundImage : `url(${backdrop})`}}></div>
                }
            </header>
        </div>
    )
}