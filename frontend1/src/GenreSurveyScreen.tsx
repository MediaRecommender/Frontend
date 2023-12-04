import { useState } from 'react'

import reactLogo from './assets/react.svg' // temp logo


interface Genre {
    name:string;
}

const GENRES = [
    {name:"pop"},
    {name:"rock"},
    {name:"country"},
    {name:"rap"},
    {name:"blues"},
    {name:"kpop"},
    {name:"kpop 2"},
    {name:"edm"},
    {name:"other"},
]

function GenreSurveyScreen() {
    return(
        <>
            <div>
                
                <img src={reactLogo} className="logo react" alt="Logo"/>
                <p>username</p>
            </div>
            <div>
                <GenresTable genres={GENRES}/>
            </div>
            <button>Confirm</button>
        </>
    )
}

function GenreRow({genre}:{genre:Genre}) {
    return(
        <span>
            <label>
                {genre.name}
                <input type='checkbox'/>
            </label>
        </span>
    )
}

function GenresTable({genres}:{genres:Array<Genre>}) {
    const rows:Array<JSX.Element> = [];
    genres.forEach((genre:Genre)=> {
        rows.push(
            <GenreRow genre={genre}/>
        );
        rows.push(<br/>);
    });

    return(
        <table>
            <tbody>{rows}</tbody>
        </table>
    )
}


export default GenreSurveyScreen