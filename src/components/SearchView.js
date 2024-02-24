import { HeroComponent } from "./Hero";

export function SearchViewComponent ({keyword, searchResults}) {
    const tittle = `You are searching for ${keyword}`
    return (
        <div>
            <HeroComponent text={tittle} />
        </div>
    );
}