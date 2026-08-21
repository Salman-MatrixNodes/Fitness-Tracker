import { fetchExercises } from "./api.js";
import { filterByTarget, sortByRating, searchByName } from "./helpers.js";
import { exerciseList, renderTitle, renderLoading, renderError, clearStatus } from "./ui.js";

let allExercises = [];

async function initApp() {
    renderTitle();

    renderLoading();

    try {
        allExercises = await fetchExercises();
        
        clearStatus();
        renderDynamicUI();
        setupEventListeners();

    } catch (error) {
        console.error("App Initialization Error:", error.message);
        renderError(error.message, () => {
            console.log("Retrying data fetch...");
            initApp(); // Re-trigger App initialization on Retry
        });
    }
}

function renderDynamicUI() {
    const searchEl = document.getElementById('search-input');
    const filterEl = document.getElementById('filter-select');
    const sortEl = document.getElementById('sort-select');

    const searchTerm = searchEl ? searchEl.value : "";
    const filterValue = filterEl ? filterEl.value : "All";
    const sortValue = sortEl ? sortEl.value : "default";

    let processedData = searchByName(allExercises, searchTerm);
    processedData = filterByTarget(processedData, filterValue);
    processedData = sortByRating(processedData, sortValue);

    exerciseList(processedData);
}

function setupEventListeners() {
    const searchEl = document.getElementById('search-input');
    const filterEl = document.getElementById('filter-select');
    const sortEl = document.getElementById('sort-select');

    if (searchEl) searchEl.addEventListener('input', renderDynamicUI);
    if (filterEl) filterEl.addEventListener('change', renderDynamicUI);
    if (sortEl) sortEl.addEventListener('change', renderDynamicUI);
}

// Start Application
initApp();