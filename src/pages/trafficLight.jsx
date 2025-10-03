
import { useEffect, useRef, useState } from "react";
import Light from "../components/light";


export default function TrafficLight() {
    const [activeLight, setActiveLight] = useState("red");

    const colorRef = useRef(null);

    useEffect(() => {
        startLightIndicator();
        return () => {
            clearInterval(colorRef.current);
        };
    }, []);

    const startLightIndicator = () => {
        clearInterval(colorRef.current);
        colorRef.current = setInterval(() => {
            setActiveLight((prev) => {
                if (prev === "red") return "orange";
                if (prev === "orange") return "green";
                return "red";
            });
        }, 3000);
    };

    const handleEmergencyClicks = (col) => {
        clearInterval(colorRef.current);
        setActiveLight(col);
    };

    return (
        <div className="grid gap-4">
            <div className="grid gap-2">
                <Light color={"red"} isActive={activeLight === "red"} />
                <Light color={"orange"} isActive={activeLight === "orange"} />
                <Light color={"green"} isActive={activeLight === "green"} />
            </div>
            <div className="flex gap-4">
                <button className="border rounded-md px-2 py-1" onClick={() => handleEmergencyClicks("red")}>
                    Activate Red
                </button>
                <button className="border rounded-md px-2 py-1" onClick={() => handleEmergencyClicks("orange")}>
                    Activate Orange
                </button>
                <button className="border rounded-md px-2 py-1" onClick={() => handleEmergencyClicks("green")}>
                    Activate Green
                </button>
                <button className="border rounded-md px-2 py-1" onClick={() => startLightIndicator()}>Reset</button>
            </div>
        </div>
    );
}
