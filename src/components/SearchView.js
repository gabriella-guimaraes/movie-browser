import { HeroComponent } from "./Hero";

export function SearchViewComponent ({keyword, searchResults}) {
    const tittle = `You are searching for ${keyword}`
    console.log(searchResults, "are the search results");
    return (
        <div>
            <HeroComponent text={tittle} />
        </div>
    );
}