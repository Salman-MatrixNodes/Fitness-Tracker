import { fetchExercises } from "./api.js";
import { filterByTarget, calculateTotalTime, sortByRating, searchByName } from "./helpers.js";
import { exerciseList, renderTitle } from "./ui.js";

let allExercises = [];

async function FitnessApp() {
    renderTitle();

    // 1. Fetch Data
    allExercises = await fetchExercises();

    // 2. Initial Render
    renderDynamicUI();

    // 3. Set Event Listeners
    setupEventListeners();
}

function renderDynamicUI() {
    const searchEl = document.getElementById('search-input');
    const filterEl = document.getElementById('filter-select');
    const sortEl = document.getElementById('sort-select');

    // Safe extraction of values
    const searchTerm = searchEl ? searchEl.value : "";
    const filterValue = filterEl ? filterEl.value : "All";
    const sortValue = sortEl ? sortEl.value : "default";

    // Data Processing Pipeline
    let processedData = searchByName(allExercises, searchTerm);
    processedData = filterByTarget(processedData, filterValue);
    processedData = sortByRating(processedData, sortValue);

    // Clear previous elements
    const container = document.getElementById('workout-container');
    if (container) container.innerHTML = '';

    // FIX 3: Added render call to actually display cards on DOM
    exerciseList("Live Search Results", processedData);
}

function setupEventListeners() {
    const searchEl = document.getElementById('search-input');
    const filterEl = document.getElementById('filter-select');
    const sortEl = document.getElementById('sort-select');

    if (searchEl) searchEl.addEventListener('input', renderDynamicUI);
    if (filterEl) filterEl.addEventListener('change', renderDynamicUI);
    if (sortEl) sortEl.addEventListener('change', renderDynamicUI);
}

// Execute application
FitnessApp();