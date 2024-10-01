import React from 'react';
import { IMovies } from './moviesData';
let heading1: any = {
    backgroundColor: "lightgrey", color: 'darkgrey', width: "50%"
}
let image: any = {
    width: "50%",
    height: "50vh",
    border: "1px solidblack"
}
function MovieCard(props: IMovies) {
    return <div >
        <h1 style={heading1}>{props.head}</h1>
        <img style={image} src={props.imgsrc} alt='gjhjh' />
    </div>
}
export default MovieCard;