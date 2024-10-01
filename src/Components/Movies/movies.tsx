import array from './moviesData';
import MovieCard from './movieCard';
import Amazon from './Amazon';
let ifelse: string = "favmovie";

// const Index1: any = () => {
//     return (
//         <MovieCard
//             key={array[0].id}
//             head={array[0].head}
//             imgsrc={array[0].imgsrc}
//         />
//     )
// };
const Fav: any = () => {
    if (ifelse === "favmovie") {
        return (
            <div>
                <h1>sjks</h1>
                <MovieCard
                    key={array[1].id}
                    head={array[1].head}
                    imgsrc={array[1].imgsrc}
                />
            </div>

        )
    }
    else {

    }
};
export default function Movies() {
    let flex: any = {
        display: "flex",
        flex_direction: "row",
        width: "100%",
        // height: "100vh",
        gap: "20px",
        flexWrap: 'wrap',
        justifyContent: "space-around"
    };
    let width: any = {
        width: "%"
    };
    let myhead: any = {
        backgroundColor: "lightgrey",
        color: "darkgrey"
    }
    // return <>
    //     <h1>Amazon peo</h1>
    //     <Fav />
    //     {ifelse === "favmovie" ? <Amazon /> : <Amazon />}
    // </>

    return <>
        <div>
            <center><h1 style={myhead}>Top 6 Netflix Movies List</h1></center>
            <div style={flex}>
                {array.map((item, index) => {
                    console.log(item, index)
                    return (
                        <div style={width}> <center>
                            <MovieCard
                                key={item.id}
                                head={item.head}
                                imgsrc={item.imgsrc}
                            />
                        </center>
                        </div>
                    )
                })}
            </div>
        </div>
    </>
}
