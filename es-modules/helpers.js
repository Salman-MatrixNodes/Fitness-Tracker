// Defensive check added: exercises = []
export const filterByTarget = (exercises = [], targetMuscle = "") => {
    if (!Array.isArray(exercises)) return [];
    return exercises.filter(ex => ex.target.toLowerCase() === targetMuscle.toLowerCase());
};

export const calculateTotalTime = (exercises = []) => {
    if (!Array.isArray(exercises)) return 0;
    return exercises.reduce((acc, current) => acc + (current.durationMins || 0), 0);
};

export const sortByRating = (exercises = []) => {
    if (!Array.isArray(exercises)) return [];
    return [...exercises].sort((a, b) => (b.rating || 0) - (a.rating || 0));
};