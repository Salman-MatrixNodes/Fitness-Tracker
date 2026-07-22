// let/const ka use
const trainerName = "Shuva Malik";
let traineeStatus = "Learning";

// Dummy data object
const exerciseData = {
    id: "ex-001",
    name: "Push Ups",
    target: "Chest",
    equipment: "Body weight",
    metrics: {
        sets: 3,
        reps: 12
    }
};
// Arrow Function
const printExerciseDetails = (exercise)=> {
    // Destructuring (Object se data nikalna)
    const {name,target,metrics: {sets,reps}} = exercise;
    // Template Literal (` `) ka use karke console print
    console.log(`Exercise: ${name} targets the ${target} muscle. Do ${sets} sets of ${reps} reps.`);
}
printExerciseDetails(exerciseData);

const updatedExerciseData = {
    ...exerciseData, // Using spread (...) operator exercise data ko new object me copy kar dia
    difficulty : "Beginner" // Naya property add kiya spread karke
}
console.log(updatedExerciseData)

// Rest Operator (...) function parameters mein
// Jab hum function call karte waqt uncertain/multiple values bhejte hain, toh parameter mein ...
// lagane par yeh un sabhy values ko ek Array ([ ]) mein pack (rest) kar leta hai.
const listAdditionalEquipments = (...equipments) => {
    console.log("Additional items needed:", equipments);
}

const coachName = exerciseData.instructor?.name ?? "Assigned Academy Coach";
// --- Execution / Output ---
console.log(`--- Training Status: ${traineeStatus} under ${trainerName} ---`); // let const ka use
printExerciseDetails(updatedExerciseData);
listAdditionalEquipments("Yoga Mat", "Resistance Band", "Water Bottle");
//listAdditionalEquipments output : [ "Yoga Mat", "Resistance Band", "Water Bottle" ]
console.log(`Coach for this session: ${coachName}`);