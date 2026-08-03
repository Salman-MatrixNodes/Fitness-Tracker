import { APP_NAME } from "./constants.js";

export const renderTitle = () => {
    const titleEl = document.getElementById('app-title');
    if (titleEl) {
        titleEl.textContent = `${APP_NAME.toUpperCase()}`;
    }
};

export const exerciseList = (exercises = []) => {
    const container = document.getElementById('workout-container');
    if (!container) return;
    
    container.innerHTML = '';

    if (!Array.isArray(exercises) || exercises.length === 0) {
        container.innerHTML = '<p>No exercises found.</p>';
        return;
    }

    exercises.forEach(ex => {
        const card = document.createElement('div');
        card.className = 'workout-card';
        card.innerHTML = `
            <h3>${ex.name}</h3>
            <p><strong>Target Muscle:</strong> <span class="badge">${ex.target}</span></p>
            <p><strong>Duration:</strong> ⏱️ ${ex.durationMins} Mins</p>
            <p><strong>Rating:</strong> ⭐ ${ex.rating}</p>  
        `;
        container.appendChild(card);
    });
};