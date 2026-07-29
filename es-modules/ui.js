// import { APP_NAME } from "./constants.js";

export const exerciseList = (title, exercises) => {
    console.log(`--- ${title} ---`);
    exercises.forEach(ex => {
        console.log(`• ${ex.name} | Target: ${ex.target} | Duration: ${ex.durationMins}m | Rating: ${ex.rating}`);
        console.log("\n");
    });
}