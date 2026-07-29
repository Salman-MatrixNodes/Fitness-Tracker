import { API_BASE_URL } from "./constants.js";

const mockExercises = [
    { id: "ex-1", name: "Push Ups", target: "Chest", durationMins: 15, rating: 4.5 },
    { id: "ex-2", name: "Squats", target: "Legs", durationMins: 20, rating: 4.8 },
    { id: "ex-3", name: "Plank", target: "Core", durationMins: 5, rating: 4.2 },
    { id: "ex-4", name: "Bench Press", target: "Chest", durationMins: 25, rating: 4.9 },
    { id: "ex-5", name: "Bicep Curls", target: "Arms", durationMins: 10, rating: 4.0 }
];

export const fetchExercises = () => {
    console.log(`Fetching exercises from ${API_BASE_URL}...`);
    return mockExercises;
}