import React from "react";

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const BarGraph = () => {
    const options = {};
    const data = {
        labels: [
            "Rent",
            "Groceries",
            "Utilities",
            "Entertainment",
            "Transportation",
        ],
        datasets: [
            {
                label: "Expenses",
                data: [1000, 300, 150, 180, 100],
                backgroundColor: [
                    "rgba(255, 99, 132, 0.2)",
                    "rgba(255, 159, 64, 0.2)",
                    "rgba(255, 205, 86, 0.2)",
                    "rgba(75, 192, 192, 0.2)",
                    "rgba(54, 162, 235, 0.2)",
                ],
                borderColor: [
                    "rgb(255, 99, 132)",
                    "rgb(255, 159, 64)",
                    "rgb(255, 205, 86)",
                    "rgb(75, 192, 192)",
                    "rgb(54, 162, 235)",
                ],
                borderWidth: 1,
            },
        ],
    };
    return (
        <div
            style={{
                width: "70%",
                margin: "auto",
                marginTop: "50px",
            }}
        >
            <Bar options={options} data={data} />
        </div>
    );
};

export default BarGraph;
