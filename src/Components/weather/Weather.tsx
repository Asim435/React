
import { useState, useEffect } from "react"
import { Loader } from "./Loader";
export function Weather() {
    let cityName: any = "";
    const [city, setCity] = useState<string>("");
    const [getWeather, setWeather] = useState<any>(null);
    const [loadingState, setLoadingState] = useState<boolean>(false);



    useEffect(() => {
        const fetchApi = async () => {
            // console.log(getLocation);
            console.log(loadingState)
            setLoadingState(true);
            const url: any = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a3bf021317a74427b0f8d5907b0b2291`
            const response: any = await fetch(url);
            setLoadingState(false);
            console.log(loadingState)
            const resJson: any = await response.json();
            console.log(resJson);
            setWeather(resJson);


        }

        city && fetchApi();


    }, [city])

    return <>


        <div className="weatherReport">
            <h1 >Search Location for weather details</h1>
            <p className="result">
                <input type="text" id="searchBar" onChange={(e: any) => {
                    cityName = e.target.value;
                }} />


                <i className="fa-solid fa-magnifying-glass" onClick={() => {

                    setCity(cityName);
                }}></i>

                {loadingState && <Loader />}


                <br />
            </p>
            {(getWeather && getWeather?.cod == "404") && <p>{getWeather?.message}</p>}
            {(getWeather && getWeather?.weather?.[0]?.main) &&
                <div>
                    <h2>{city}</h2>
                    <h2>{cityName}</h2>
                    <h2>Weather : {getWeather?.weather?.[0]?.main}</h2>
                    <h2>temperature : {getWeather?.main.temp_max}</h2>
                </div>
            }

        </div>


    </>


}
