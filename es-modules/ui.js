import { APP_NAME } from "./constants.js";

export const renderTitle = () => {
    const titleEl = document.getElementById('app-title');
    if (titleEl) {
        titleEl.textContent = `${APP_NAME.toUpperCase()}`;
    }
};
export const renderLoading = () => {
    const statusContainer = document.getElementById('status-container');
    const workoutContainer = document.getElementById('workout-container');
    if (workoutContainer) workoutContainer.innerHTML = '';
    if (statusContainer) {
        statusContainer.innerHTML = `<div class="status-box">
                <div class="spinner"></div>
                <p>Fetching workout data from API, please wait...</p>
            </div>`
    }
}
export const renderError = (errorMessage, onRetry) => {
    const statusContainer = document.getElementById('status-container');
    const workoutContainer = document.getElementById('workout-container');
    if (workoutContainer) workoutContainer.innerHTML = '';
    if (statusContainer) {
        statusContainer.innerHTML = `<div class="status-box" style="border-left: 6px solid #f44336;">
                <h3 style="color: #f44336; margin-top:0;">Failed to Load Data</h3>
                <p>${errorMessage}</p>
                <button id="retry-btn" class="retry-btn">Retry Connection</button>
            </div>`;
        const retryBtn = document.getElementById('retry-btn');
        if (retryBtn && typeof onRetry === 'function') {
            retryBtn.addEventListener('click', onRetry);
        }    
    }
}
export const clearStatus = () => {
    const statusContainer = document.getElementById('status-container');
    if (statusContainer) statusContainer.innerHTML = '';
};

export const exerciseList = (exercises = []) => {
    const container = document.getElementById('workout-container');
    if (!container) return;
    container.innerHTML = '';
    
    if (!Array.isArray(exercises) || exercises.length === 0) {
        container.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 20px; color: #777;">
                 No workouts found matching your search or filter.
            </div>
        `;
        return;
    }

    exercises.forEach(ex => {
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