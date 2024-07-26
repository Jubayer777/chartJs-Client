import React from "react";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieGraph = () => {
    const options = {};
    const data = {
        labels: ["Facebook", "Instagram", "Twitter", "YouTube", "LinkedIn"],
        datasets: [
            {
                label: "Time Spent",
                data: [120, 60, 30, 90, 45],
                backgroundColor: [
                    "rgba(255, 99, 132, 0.8)",
                    "rgba(255, 159, 64, 0.8)",
                    "rgba(255, 205, 86, 0.8)",
                    "rgba(75, 192, 192, 0.8)",
                    "rgba(54, 162, 235, 0.8)",
                ],
                hoverOffset: 4,
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
            <Pie options={options} data={data} />
        </div>
    );
};

export default PieGraph;
