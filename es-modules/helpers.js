// Filter exercises by target muscle
export const filterByTarget = (exercises, targetMuscle) => {
    return exercises.filter(ex => ex.target.toLowerCase()===targetMuscle.toLowerCase());
}

// Calculate total workout time
export const calculateTotalTime = (exercises) => {
    return exercises.reduce((acc, current) => acc + current.durationMins, 0);
}

// Sort exercises by rating
export const sortByRating = (exercises) => {
    return [...exercises].sort((a,b)=> b.rating-a.rating);
}