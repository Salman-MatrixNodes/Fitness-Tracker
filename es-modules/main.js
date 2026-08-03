import { DEFAULT_TARGET_MUSCLE } from "./constants.js";
import { fetchExercises } from "./api.js";
import { filterByTarget,calculateTotalTime,sortByRating } from "./helpers.js";
import { exerciseList, renderTitle } from "./ui.js";

async function FitnessApp() {

    renderTitle();

    // 1. Fetch Data
    const exercises = await fetchExercises();

    // 2. Render all exercises  
    exerciseList(exercises);

    // 3. Filter Chest Exercises
    // const chestWorkouts = filterByTarget(exercises, DEFAULT_TARGET_MUSCLE);
    // exerciseList(`Filtered: ${DEFAULT_TARGET_MUSCLE} workouts`,chestWorkouts);

    // 4. Calculate Total Time
    // const totalMins = calculateTotalTime(exercises);
    // console.log(`Total Workout Duration: ${totalMins} Mins\n`);

    // 5. Sorted by Rating
    // const sorted = sortByRating(exercises);
    // exerciseList("Top Rated Workouts", sorted);

}
// Execute the application
FitnessApp();