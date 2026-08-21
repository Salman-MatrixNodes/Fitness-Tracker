import { API_BASE_URL } from "./constants.js";

export const fetchExercises = async () => {
    console.log(`Connecting to API...`);

    // Artificial delay to demonstrate Loading Spinner (1 second)
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Try fetching real API data
    const response = await fetch('https://dummyjson.com/c/fa5d-9b88-4665-9831');
    
    if (!response.ok) {
        throw new Error(`Server returned HTTP ${response.status}`);
    }
    
    const textData = await response.text();
    if (!textData || textData.trim() === "") {
        throw new Error("Empty response body received from API!");
    }

    const data = JSON.parse(textData);
    let exerciseListing = Array.isArray(data) ? data : data.exercises;

    if (!Array.isArray(exerciseListing)) {
        throw new Error("API response is not a valid array!");
    }

    return exerciseListing;
};