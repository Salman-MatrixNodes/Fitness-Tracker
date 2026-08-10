import { APP_NAME } from "./constants.js";

export const renderTitle = () => {
    const titleEl = document.getElementById('app-title');
    if (titleEl) {
        titleEl.textContent = `${APP_NAME.toUpperCase()}`;
    }
};

export const exerciseList = (title = "Workouts", exercises = []) => {
    const container = document.getElementById('workout-container');
    if (!container) return;

    // Direct assignment if title is passed as first param or handled array
    let actualList = exercises;
    if (Array.isArray(title)) {
        actualList = title;
    }

    if (!Array.isArray(actualList) || actualList.length === 0) {
        container.innerHTML = '<p>No exercises found.</p>';
        return;
    }

    actualList.forEach(ex => {
        const card = document.createElement('div');
        card.className = 'workout-card';
        card.innerHTML = `
            <h3>${ex.name || 'Exercise'}</h3>
            <p><strong>Target Muscle:</strong> <span class="badge">${ex.target || 'General'}</span></p>
            <p><strong>Duration:</strong> ⏱️ ${ex.durationMins || 10} Mins</p>
            <p><strong>Rating:</strong> ⭐ ${ex.rating || 4.0}</p>
        `;
        container.appendChild(card);
    });
};