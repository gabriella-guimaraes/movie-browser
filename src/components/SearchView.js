import { HeroComponent } from "./Hero";

export function SearchViewComponent ({keyword, searchResults}) {
    const tittle = `You are searching for ${keyword}`

    const movieResults = searchResults.map((obj, i) => {
        return <div key={obj.id}>{obj.original_title}</div>
        
    })
    return (
        <div>
            <HeroComponent text={tittle} />
            {movieResults}
        </div>
    );
}