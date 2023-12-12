import { useState } from 'react'

import reactLogo from './assets/react.svg' // temp logo

import { useNavigate } from "react-router-dom";

interface Genre {
    name:string;
}

const GENRES = [
    {name:"Pop"},
    {name:"Rock"},
    {name:"Jazz"},
    {name:"Hip-Hop"},
    {name:"Indie"},
    {name:"EDM"},
    {name:"Country"},
    {name:"Classical"},
    {name:"R&B"},
    {name:"Metal"},
]

const rowCount = 3;

function GenreSurveyScreen() {
    const navigate = useNavigate();

    return(
        <>
            <h1>Genre Survey</h1>
            <div className='panel'>
                <p>Please indicate which genres you are interested in:</p>
                <GenresTable genres={GENRES}/>
                <button onClick={()=>navigate("/app/songsurvey")}>Confirm</button>
            </div>
        </>
    )
}

function GenreRow({genre}:{genre:Genre}) {
    return(
        <span>
            <label>
                <input type='checkbox'/>
                {genre.name}
            </label>
        </span>
    )
}

function GenresTable({genres}:{genres:Array<Genre>}) {
    const rows:Array<JSX.Element> = [];
    var counter = 0;
    genres.forEach((genre:Genre)=> {
        counter++;
        rows.push(
            <GenreRow genre={genre}/>
        );
        if(counter >= rowCount) {
            rows.push(<br/>);
            counter = 0;
        }
    });

    return(
        <div className='centertext'>{rows}</div>
    )
}


export default GenreSurveyScreen