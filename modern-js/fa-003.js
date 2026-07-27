const exercises = [
    { id: "ex-1", name: "Push Ups", target: "Chest", durationMins: 15, rating: 4.5 },
    { id: "ex-2", name: "Squats", target: "Legs", durationMins: 20, rating: 4.8 },
    { id: "ex-3", name: "Plank", target: "Core", durationMins: 5, rating: 4.2 },
    { id: "ex-4", name: "Bench Press", target: "Chest", durationMins: 25, rating: 4.9 },
    { id: "ex-5", name: "Bicep Curls", target: "Arms", durationMins: 10, rating: 4.0 }
];
// 1. map() - Extract only exercise names (Transformation)
const exerciseNames = exercises.map(ex => ex.name);
console.log("\n1. Exercise Names (map):",exerciseNames);

// 2. filter() - Get exercises targeting 'Chest' (Filtering)
const chestExercise = exercises.filter(ex => ex.target === "Chest");
console.log("\n2. Filtered chest exercise:", chestExercise);

// 3. find() - Find a specific exercise by ID (Searching)
const selectedExercise = exercises.find(ex => ex.id === "ex-3");
console.log("\n3. Found Exercise by ID 'ex-3' (find):", selectedExercise);

// 4. reduce() - Calculate Total Workout Duration in Minutes (Accumulation)
const totalWorkoutTime = exercises.reduce((accumulator, currentEx)=> {
    return accumulator + currentEx.durationMins;
}, 0) // Initial value;
console.log(`\n4. Total Workout Time (reduce): ${totalWorkoutTime} minutes`);

// 5. sort() - Sort exercises by rating High to Low (Sorting)
// We use [...exercises] to create a copy and prevent mutating the original array
const  sortedByRating = [...exercises].sort((a,b)=> b.rating - a.rating);
console.log("\n5. Sorted by Highest Rating (sort):", sortedByRating);