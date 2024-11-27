import React from "react";
import { useState, useEffect } from "react";
import "./CustomScrollIndicator.css";

const CustomScrollIndicator = ({ url }) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");
    const [scrollPercentage, setScrollPercentage] = useState(0);

    async function fetchData(getUrl) {
        try {
            setLoading(true);
            const response = await fetch(getUrl);
            const data = await response.json();
            // console.log(data)
            if (data && data.products && data.products.length > 0) {
                setData(data.products);
                setLoading(false);
            }
        } catch (error) {
            console.error("Error:", error);
            setErrorMsg(error.message);
        }
        setLoading(false);
    }

    useEffect(() => {
        fetchData(url);
    }, [url]);

    const handleScroll = () => {
        const totalHeight =
            document.documentElement.scrollHeight - window.innerHeight;
        const scrollHeight = window.scrollY;
        const percentage = (scrollHeight / totalHeight) * 100;
        setScrollPercentage(percentage);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", () => {
                console.log("scroll event removed");
            });
        };
    }, [scrollPercentage]);

    // if(loading && !data) {
    //     return <h1>Loading data...</h1>
    // }

    return (
        <div className=" bg-slate-900 text-slate-50 ">
            <div className="text-center flex flex-col">
                <div className="fixed w-full">
                    <h1 className="text-5xl p-8 font-bold font-sans bg-green-400 ">
                        Custom Scroll Indicator
                    </h1>

                    <div className="scroll-progress-tracking-container">
                        <div
                            className="scroll-progress-bar"
                            style={{ width: `${scrollPercentage}%` }}
                        ></div>
                    </div>
                </div>

                <div className="data-container space-y-4 mt-32">
                    {loading && <h1>Loading...</h1>}
                    {errorMsg && <h1>{errorMsg}</h1>}
                    {data &&
                        data.length > 0 &&
                        data.map((item, index) => {
                            return (
                                <div key={index} className="data-item">
                                    <p>{item.title}</p>
                                </div>
                            );
                        })}
                </div>
            </div>
        </div>
    );
};

export default CustomScrollIndicator;
