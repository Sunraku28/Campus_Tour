// importing all individual scenes
import { gateScenes } from './scenes/gate_scenes.js';
import { centerScenes } from './scenes/center_scenes.js';
import { cafeScenes } from './scenes/canteen_scenes.js';
import { treeScenes } from './scenes/tree_scenes.js';

// merging them into an object for pannellum
const allCampusScenes = {
    ...gateScenes,
    ...centerScenes,
    ...cafeScenes,
    ...treeScenes
};

// initializing the Viewer
const viewer = pannellum.viewer('campus-map', {
    "default": {
        "firstScene": "main_gate_day", 
        "sceneFadeDuration": 1500, 
        "autoLoad": true , 
        "autoRotate" : -2,
        "autoRotateInactivityDelay": 7000,
        "touchPanSpeedCoeffFactor": 0.7, 
        "friction": 0.4,
        // "hotSpotDebug": true
    },
    "scenes": allCampusScenes // <-- We feed the merged object here!
});

// start tour button
window.startTour = function() {
    const overlay = document.getElementById('hero-layer');
    const nightBtn = document.getElementById('toggle-time');
    
    overlay.classList.add('hidden');
    nightBtn.style.display = 'block';
};

// Handle the Day/Night Toggle
let isNight = false;
const toggleBtn = document.getElementById('toggle-time');

toggleBtn.addEventListener('click', () => {
    const currentScene = viewer.getScene();
    const currentPitch = viewer.getPitch();
    const currentYaw   = viewer.getYaw();

    let nextScene;

    if(isNight) {
        nextScene = currentScene.replace("_night", "_day");
        toggleBtn.innerHTML = "🌙";
        toggleBtn.classList.remove("day-mode");
        isNight = false;
    } else {
        nextScene = currentScene.replace("_day", "_night");
        toggleBtn.innerHTML = "☀️";
        toggleBtn.classList.add("day-mode");
        isNight = true;
    }

    viewer.loadScene(nextScene, currentPitch, currentYaw);
});