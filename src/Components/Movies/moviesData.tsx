
export interface IMovies {
    id?: number,
    head: string,
    imgsrc: string,
}
const array: Array<IMovies> = [
    { id: 1, head: "MOVIES1", imgsrc: "/images/1stMovie.jpg" },
    { id: 2, head: "MOVIES2", imgsrc: "/images/2ndMovie.jpg" },
    { id: 3, head: "MOVIES3", imgsrc: "/images/3rdMovie.jpg" },
    { id: 4, head: "MOVIES1", imgsrc: "/images/1stMovie.jpg" },
    { id: 5, head: "MOVIES2", imgsrc: "/images/2ndMovie.jpg" },
    { id: 6, head: "MOVIES3", imgsrc: "/images/3rdMovie.jpg" }
];
export default array;