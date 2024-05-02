import {getProfileData, getSensorData} from "@/util/database";
import {getWeatherForecast} from "@/util/weather";
import {Key} from "react";

export default async function Home() {
    const profileData = await getProfileData()
    const sensorData = await getSensorData()
    const weatherForecastData = await getWeatherForecast({
        lat: profileData.fieldLocation._lat,
        lon: profileData.fieldLocation._long
    })

    const soilConditionText = () => {
        const value = parseInt(sensorData.Spool_raw_Data)

        if (value < 370) {
            return "Highly Humid"
        } else if (value > 370 && value <= 600) {
            return "Perfectly Humid"
        } else if (value > 600 && value <= 1000) {
            return "Dry"
        } else {
            return "Severely Dehydrated"
        }
    }

    return (
        <main className="bg-base-100">
            {/*greeting section*/}
            <section className={"container flex justify-center lg:justify-start items-end mx-auto h-[20vh] pb-2"}
                     id={"greeting"}>
                <h1 className={"text-base-content text-4xl font-bold mb-5"}>{`Welcome, ${profileData.name}`}</h1>
            </section>


            {/*dashboard section*/}
            <section
                className={"container mx-auto lg:rounded-b-3xl rounded-t-3xl p-8 bg-base-300 gap-8 grid grid-cols-1 grid-rows-4 xl:grid-cols-2 xl:grid-rows-2"}>

                {/*live details card*/}
                <div className="bg-base-200 p-5 rounded-3xl flex flex-col justify-between min-h-58">
                    <h2 className={"text-base-content font-bold text-xl"}>
                        Live Measurements
                    </h2>
                    <div className={"grid md:grid-cols-3 gap-5 h-[80%]"}>
                        <div className="data-card">
                            <h3 className={"text-5xl font-bold"}>{`${parseInt(sensorData.Temperature)}°C`}</h3>
                            <p className={"opacity-80"}>temperature</p>
                        </div>
                        <div className="data-card">
                            <h3 className={"text-5xl font-bold"}>{`${parseInt(sensorData.Humidity)}%`}</h3>
                            <p className={"opacity-80"}>humidity</p>
                        </div>
                        <div className="data-card">
                            <h3 className={"text-5xl font-bold"}>{parseInt(sensorData.RainData) ? "🌧️" : "☀️"}</h3>
                            <p className={"opacity-80"}>precipitation</p>
                        </div>
                    </div>
                </div>

                {/*soil card*/}
                <div className="bg-base-200 flex flex-col justify-between p-5 rounded-3xl min-h-58" id={"soil"}>
                    <h2 className={"text-base-content font-bold text-xl"}>
                        Soil Measurements
                    </h2>

                    <div className="grid md:grid-cols-2 h-[80%] gap-5">
                        {/*soil humidity card*/}
                        <div
                            className="data-card">
                            <h4 className={"text-5xl font-bold"}>
                                {`${parseInt(sensorData.SoilData)}%`}
                            </h4>
                            <p className={"opacity-80"}>soil humidity</p>
                        </div>

                        <div
                            className="data-card">
                            <p className={"font-bold text-xl"}>{`soil is ${soilConditionText().toLocaleLowerCase()}`}</p>
                        </div>
                    </div>
                </div>

                {/*weather warning card*/}
                <div
                    className={"bg-base-200 p-5 rounded-3xl row-span-2 xl:row-span-1 xl:col-span-2 grid xl:grid-cols-5 gap-5"}>
                    {
                        weatherForecastData["DailyForecasts"].map(
                            (dailyData: any, index: number) => {
                                return <div key={index} className={"data-card px-2 max-h-40"}>
                                    <h3 className={"text-3xl font-bold"}>{`${parseInt(dailyData["Temperature"]["Maximum"]["Value"])}°C / ${parseInt(dailyData["Temperature"]["Minimum"]["Value"])}°C`}</h3>
                                    <p className={"opacity-80 text-center"}>{`${dailyData["Day"]["IconPhrase"]} during day, ${dailyData["Night"]["IconPhrase"]} during Night.`.toLowerCase()}</p>
                                </div>
                            })
                    }
                </div>
            </section>
        </main>
    );
}
