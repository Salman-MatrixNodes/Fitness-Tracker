// import { APP_NAME } from "./constants.js";

export const exerciseList = (title, exercises = []) => {
    console.log(`--- ${title} ---`);
    // Check kiya ki array hai ya nahi
    if (!Array.isArray(exercises)) {
        console.log("No valid exercises array provided.");
        return;
    }
    exercises.forEach(ex => {
        console.log(`• ${ex.name} | Target: ${ex.target} | Duration: ${ex.durationMins}m | Rating: ${ex.rating}`);
        console.log("\n");
    });
}