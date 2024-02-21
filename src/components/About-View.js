import { HeroComponent } from "./Hero";

export function AboutViewComponent () {
    return (
        <div className = "About-Component">
            <HeroComponent text="About us"/>
            <h2>About us</h2>
        </div>
    );
}