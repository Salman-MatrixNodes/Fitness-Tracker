export const searchByName = (exercises = [], searchTerm = "") => {
    if (!searchTerm) return exercises;
    // FIX 1: Changed toLowerCase (Capital C)
    return exercises.filter(ex => ex.name.toLowerCase().includes(searchTerm.toLowerCase()));
};

export const filterByTarget = (exercises = [], targetMuscle = "All") => {
    if (targetMuscle === "All") return exercises;
    if (!Array.isArray(exercises)) return [];
    return exercises.filter(ex => ex.target.toLowerCase() === targetMuscle.toLowerCase());
};

export const calculateTotalTime = (exercises = []) => {
    if (!Array.isArray(exercises)) return 0;
    return exercises.reduce((acc, current) => acc + (current.durationMins || 0), 0);
};

export const sortByRating = (exercises = [], sortType = "default") => {
    if (!Array.isArray(exercises)) return [];
    let sorted = [...exercises];

    if (sortType === "rating-high") {
        sorted.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    }
    // FIX 2: Changed "duration low" to "duration-low" (with hyphen)
    else if (sortType === "duration-low") {
        sorted.sort((a, b) => (a.durationMins || 0) - (b.durationMins || 0));
    }
    return sorted;
};