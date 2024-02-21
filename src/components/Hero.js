export function HeroComponent ({text}) {
    return (
        <div>
            <header className="bg-dark text-white p-5">
                <h1>{text}</h1>
            </header>
        </div>
    )
}