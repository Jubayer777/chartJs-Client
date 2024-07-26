import "./App.css";
import BarGraph from "./components/BarGraph";
import LineGraph from "./components/LineGraph";
import PieGraph from "./components/PieGraph";

function App() {
    return (
        <div className="App">
            <LineGraph />
            <BarGraph />
            <div style={{ width: "50%" }}>
                <PieGraph />
            </div>
        </div>
    );
}

export default App;
