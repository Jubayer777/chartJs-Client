import React from "react";

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const options = {
    responsive: true,
    plugins: {
        customCanvasBackgroundColor: {
            color: "lightGreen",
        },
        legend: {
            position: "right",
        },
        title: {
            display: true,
            text: "Daily step report",
        },
        tooltip: {
            backgroundColor: "red",
            titleColor: "green",
            bodyColor: "blue",
            caretSize: 5,
            callback:{
                labelPointStyle: function(context) {
                    return {
                        pointStyle: 'triangle',
                        rotation: 0
                    };
                }
            }
        },
    },
};


const LineGraph = () => {
    const data = {
        labels: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
        ],
        datasets: [
            {
                label: "steps by man 1",
                data: [3000, 5000, 4500, 6000, 8000, 7000, 9000],
                borderColor: "rgb(75, 192, 192)",
            },
            {
                label: "steps by man 2",
                data: [3000, 5500, 6500, 7200, 8100, 7300, 10000],
                borderColor: "red",
            },
        ],
    };

    // useEffect(() => {
    //     const canvas = document.createElement("canvas");
    //     const offscreenCanvas = canvas.transferControlToOffscreen();

    //     const worker = loadWebWorker(LineGraphWorker);
    //     worker.postMessage({ canvas: offscreenCanvas, options }, [
    //         offscreenCanvas,
    //     ]);
    // }, []);
    return (
        <div
            style={{
                width: "70%",
                margin: "auto",
                marginTop: "50px",
            }}
        >
            <Line options={options} data={data} />
        </div>
    );
};

export default LineGraph;
