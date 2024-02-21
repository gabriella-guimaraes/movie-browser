import { HeroComponent } from "./Hero";

export function HomeComponent () {
    return (
        <div className="Home-Component">
            <HeroComponent text="Welcome to Movie Browser"/>
            <h2>Home component works!</h2>
        </div>
    );
}