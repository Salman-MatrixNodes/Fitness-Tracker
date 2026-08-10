import { API_BASE_URL } from "./constants.js";

export const fetchExercises = async () => {
    console.log(`Connecting to API...`);

    try {
        // Working public endpoint for testing
        const response = await fetch('https://dummyjson.com/c/fa5d-9b88-4665-9831');
        
        if (!response.ok) {
            throw new Error(`HTTP Error! Status: ${response.status}`);
        }
        
        const textData = await response.text();

        if (!textData || textData.trim() === "") {
            throw new Error("Empty response body received from API!");
        }
        
        const data = JSON.parse(textData);
        let exerciseListing = Array.isArray(data) ? data : data.exercises;

        if (!Array.isArray(exerciseListing)) {
            throw new Error("API response is not an array!");
        }
        
        console.log("✅ Data successfully fetched from REST API!\n");
        return exerciseListing;

    } catch (error) {
        console.error("API Fetch Failed:", error.message);
        console.warn("Falling back to local offline data...\n");

        // Fixed Fallback Data matching UI keys exactly
        return [
            { id: "ex-1", name: "Push Ups", target: "Chest", durationMins: 15, rating: 4.5 },
            { id: "ex-2", name: "Squats", target: "Legs", durationMins: 20, rating: 4.8 },
            { id: "ex-3", name: "Plank", target: "Core", durationMins: 5, rating: 4.2 },
            { id: "ex-4", name: "Bench Press", target: "Chest", durationMins: 25, rating: 4.9 },
            { id: "ex-5", name: "Bicep Curls", target: "Arms", durationMins: 10, rating: 4.0 }
        ];
    }
};