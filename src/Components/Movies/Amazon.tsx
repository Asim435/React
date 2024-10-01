import MovieCard from "./movieCard";
import array from "./moviesData";
const Amazon: any = () => {
    return (
        <MovieCard
            key={array[0].id}
            head={array[0].head}
            imgsrc={array[0].imgsrc}
        />
    )
};
export default Amazon;