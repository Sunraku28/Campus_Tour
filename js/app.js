// import { paninigateScenes } from './scenes/panini/panini_gate.js';
// import { paninicanteenScenes } from './scenes/panini/panini_canteen.js';
// import { paninitreeScenes } from './scenes/panini/panini_tree.js';
// import { H3H4junctionScenes } from './scenes/Junctions/H3H4junc.js';
// import { H3gateScenes } from './scenes/junctions/H3H4junc.js';
// import { H3canteenScenes } from './scenes/junctions/H3H4junc.js';
// import { H3centerScenes } from './scenes/junctions/H3H4junc.js';
// import { H3entryScenes } from './scenes/junctions/H3H4junc.js';
// import { H4gateScenes } from './scenes/junctions/H3H4junc.js';
// import { H4canteenScenes } from './scenes/junctions/H3H4junc.js';
// import { H4centerScenes } from './scenes/junctions/H3H4junc.js';
// import { H4entryScenes } from './scenes/junctions/H3H4junc.js';
// import { saazScenes } from './scenes/junctions/H3H4junc.js';
// import { ttScenes } from './scenes/junctions/H3H4junc.js';
     
import { DSAcenterScenes } from './scenes/DSA/DSA_center.js';
import { conferenceScenes } from './scenes/DSA/conference_room.js';
import { DSAgateScenes } from './scenes/DSA/DSA_gate.js';
import { afcScenes } from './scenes/H1/afc.js';
import { ersScenes } from './scenes/H1/ers.js';
import { H1canteenScenes } from './scenes/H1/H1_canteen.js';
import { H1centerScenes } from './scenes/H1/H1_center.js';
import { H1gateScenes } from './scenes/H1/H1_gate.js';
import { H3canteenScenes } from './scenes/H3/H3_canteen.js';
import { H3centerScenes } from './scenes/H3/H3_center.js';
import { H3entryScenes } from './scenes/H3/H3_entry.js';
import { H3gateScenes } from './scenes/H3/H3_gate.js';
import { H4canteenScenes } from './scenes/H4/H4_canteen.js';
import { H4centerScenes } from './scenes/H4/H4_center.js';
import { H4entryScenes } from './scenes/H4/H4_entry.js';
import { H4gateScenes } from './scenes/H4/H4_gate.js';
import { HexagongateScenes } from './scenes/Hexagon/hexagon_gate.js';
import { HexagonScenes } from './scenes/Hexagon/hexagon.js';
import { CrossroadsScenes } from './scenes/junctions/crossroads.js';
import { H3H4junctionScenes } from './scenes/junctions/H3H4junc.js';
import { trisectionScenes } from './scenes/junctions/Trisection.js';
import { electronicslabScenes } from './scenes/labcomplex.js/electronics.js';
import { labgateScenes } from './scenes/labcomplex.js/lab_complex_gate.js';
import { manufacturinglabScenes } from './scenes/labcomplex.js/manufacturing.js';
import { mechanicallabScenes } from './scenes/labcomplex.js/mechanical.js';
import { mechatronicslabScenes } from './scenes/labcomplex.js/mechatronics.js';
import { LHTC102Scenes } from './scenes/LHTC/LHTC_102.js';
import { LHTC103Scenes } from './scenes/LHTC/LHTC_103.js';
import { LHTC104Scenes } from './scenes/LHTC/LHTC_104.js';
import { LHTCBACKGATEScenes } from './scenes/LHTC/LHTC_back.js';
import { LHTCCRScenes } from './scenes/LHTC/LHTC_cr.js';
import { LHTCDESIGN1Scenes } from './scenes/LHTC/LHTC_design1.js';
import { LHTCDESIGN2Scenes } from './scenes/LHTC/LHTC_design2.js';
import { LHTCDESIGN3Scenes } from './scenes/LHTC/LHTC_design3.js';
import { LHTCFRONTGATEScenes } from './scenes/LHTC/LHTC_front.js';
import { RacingScenes } from './scenes/LHTC/racing.js';
import { lab1Scenes } from './scenes/library/lab1.js';
import { lab2Scenes } from './scenes/library/lab2.js';
import { lab3Scenes } from './scenes/library/lab3.js';
import { librarycenterScenes } from './scenes/library/library_center.js';
import { librarygateScenes } from './scenes/library/library_gate.js';
import { libraryScenes } from './scenes/library/library.js';
import { readingroomScenes } from './scenes/library/reading_room.js';
import { messgateScenes } from './scenes/mess/mess_gate.js';
import { messScenes } from './scenes/mess/mess.js';
import { msgateScenes } from './scenes/Ms/ms_gate.js';
import { nescafeScenes } from './scenes/nescafe/nescafe.js';
import { OatScenes } from './scenes/oat/oat.js';
import { paninicanteenScenes } from './scenes/panini/panini_canteen.js';
import { paninigateScenes } from './scenes/panini/panini_gate.js';
import { paninicenterScenes } from './scenes/panini/panini_center.js';
import { PHCScenes } from './scenes/PHC/PHC.js';
import { narmadaScenes } from './scenes/residency/narmada.js';
import { rewaScenes } from './scenes/residency/rewa.js';
import { badmintonScenes } from './scenes/sac/badminton.js';
import { groundScenes } from './scenes/sac/ground.js';
import { gymScenes } from './scenes/sac/gym.js';
import { saazScenes } from './scenes/sac/saaz.js';
import { sacgateScenes } from './scenes/sac/sac_gate.js';
import { ttScenes } from './scenes/sac/tt.js';
import { visitorhostelScenes } from './scenes/visitor_hostel/visitor_hostel.js';
import { Racing2Scenes } from './scenes/LHTC/racing2.js';
import { courtScenes } from './scenes/sac/court.js';
import { vcourtScenes } from './scenes/sac/vcourt.js';
import { physicslabScenes } from './scenes/labcomplex.js/physics.js';
import { vlsilabScenes } from './scenes/labcomplex.js/vlsi.js';
import { powerandcontrollabScenes } from './scenes/labcomplex.js/powerandcontrol.js';
import { kabaddiScenes } from './scenes/sac/kabaddi.js';




const allCampusScenes = {
    // ...paninigateScenes,
    // ...paninicanteenScenes,
    // ...paninitreeScenes,
    // ...H3H4junctionScenes,
    // ...H3gateScenes,
    // ...H3entryScenes,
    // ...H3canteenScenes,
    // ...H3centerScenes,
    // ...H4gateScenes,
    // ...H4entryScenes,
    // ...H4centerScenes,
    // ...H4canteenScenes,
    // ...H1gateScenes,
    // ...H1canteenScenes,
    // ...H1centerScenes,
    // ...nescafeScenes,
    // ...saazScenes,
    // ...ttScenes,
    ...H1centerScenes,
    ...H1canteenScenes,
    ...H1gateScenes,
    ...nescafeScenes,
    ...DSAcenterScenes,
    ...conferenceScenes,
    ...DSAgateScenes,
    ...afcScenes,
    ...ersScenes,
    ...H3canteenScenes,
    ...H3centerScenes,
    ...H3entryScenes,
    ...H3gateScenes,
    ...H4canteenScenes,
    ...H4centerScenes,
    ...H4entryScenes,
    ...H4gateScenes,
    ...HexagongateScenes,
    ...HexagonScenes,
    ...CrossroadsScenes,
    ...H3H4junctionScenes,
    ...trisectionScenes,
    ...electronicslabScenes,
    ...labgateScenes,
    ...manufacturinglabScenes,
    ...mechanicallabScenes,
    ...mechatronicslabScenes,
    ...LHTC102Scenes,
    ...LHTC103Scenes,
    ...LHTC104Scenes,
    ...LHTCBACKGATEScenes,
    ...LHTCCRScenes,
    ...LHTCDESIGN1Scenes,
    ...LHTCDESIGN2Scenes,
    ...LHTCDESIGN3Scenes,
    ...LHTCFRONTGATEScenes,
    ...RacingScenes,
    ...lab1Scenes,
    ...lab2Scenes,
    ...lab3Scenes,
    ...librarycenterScenes,
    ...librarygateScenes,
    ...libraryScenes,
    ...readingroomScenes,
    ...messgateScenes,
    ...messScenes,
    ...msgateScenes,
    ...nescafeScenes,
    ...OatScenes,
    ...paninicanteenScenes,
    ...paninigateScenes,
    ...paninicenterScenes,
    ...PHCScenes,
    ...narmadaScenes,
    ...rewaScenes,
    ...badmintonScenes,
    ...groundScenes,
    ...gymScenes,
    ...saazScenes,
    ...sacgateScenes,
    ...ttScenes,
    ...visitorhostelScenes,
    ...Racing2Scenes,
    ...courtScenes,
    ...vcourtScenes,
    ...physicslabScenes,
    ...vlsilabScenes,
    ...powerandcontrollabScenes,
    ...kabaddiScenes
    
};

window.tourViewer = pannellum.viewer('campus-map', {
    "default": {
        "firstScene": "DSA_gate_day", 
        "sceneFadeDuration": 1500, 
        "showZoomCtrl": false,
        "showFullscreenCtrl": false,
        "autoLoad": true , 
        "autoRotate" : -2,
        "autoRotateInactivityDelay": 7000,
        "touchPanSpeedCoeffFactor": 0.7, 
        "friction": 0.1,
         "hotSpotDebug": false
    },
    "scenes": allCampusScenes 
});

window.startTour = function() {
    const overlay = document.getElementById('hero-layer');
    const nightBtn = document.getElementById('toggle-time');
    
    overlay.classList.add('hidden');
    nightBtn.style.display = 'block';
    document.querySelector('.floating-nav').classList.add('tour-started');
    document.querySelector('#minimap-wrapper').classList.add('tour-started');
    document.querySelector('.time-btn').classList.add('tour-started');
    document.querySelector('.map-icon-btn').classList.add('tour-started');
    document.querySelector('.college-name').classList.add('tour-started');
    document.getElementById('info-btn').classList.add('tour-started');

    if (window.syncMapWithScene) {
        let currentScene = window.tourViewer.getScene() || 'DSA_gate_day';
        window.syncMapWithScene(currentScene);
    }
};

window.isNight = false;
const toggleBtn = document.getElementById('toggle-time');

toggleBtn.addEventListener('click', () => {
    const currentScene = window.tourViewer.getScene();
    const currentPitch = window.tourViewer.getPitch();
    const currentYaw   = window.tourViewer.getYaw();

    let nextScene;

    if(window.isNight) {
        nextScene = currentScene.replace("_night", "_day");
        toggleBtn.innerHTML = "🌙";
        toggleBtn.classList.remove("day-mode");
        window.isNight = false;
    } else {
        nextScene = currentScene.replace("_day", "_night");
        toggleBtn.innerHTML = "☀️";
        toggleBtn.classList.add("day-mode");
        window.isNight = true;
    }

    window.tourViewer.loadScene(nextScene, currentPitch, currentYaw);
});

window.tourViewer.on('scenechange', function(newSceneId) {
    
    var timeButton = document.querySelector('.time-btn');
    
    if (timeButton) {
        if (indoorScenes.includes(newSceneId)) {
            timeButton.style.display = 'none'; 
        } 
        else {
            timeButton.style.display = 'block';  
        }
    }

    if (window.syncMapWithScene) {
        window.syncMapWithScene(newSceneId);
    }
}); 

window.onload = function() {
    var initialScene = window.tourViewer.getScene();
    var timeButton = document.querySelector('.time-btn');
    
    if (timeButton) {
        if (indoorScenes.includes(initialScene)) {
            timeButton.style.display = 'none';
        } else {
            timeButton.style.display = 'block';
        }
    }

    // if (window.syncMapWithScene && initialScene) {
    //     window.syncMapWithScene(initialScene);
    // }
}; 

document.addEventListener("DOMContentLoaded", function() {
    const contextMenu = document.getElementById("custom-right-click-menu");

    // Info button - open contributors modal 
    const infoBtn = document.getElementById("info-btn");
    if (infoBtn) {
        infoBtn.addEventListener("click", function() {
            window.openTeamModal();
        });
    }

    const teleportBtn = document.getElementById("btn-teleport");
    if (teleportBtn) {
        teleportBtn.addEventListener("click", function() {
            let config = window.tourViewer.getConfig();
            
            if (config && config.scenes) {
                let allScenes = Object.keys(config.scenes);
                let randomIndex = Math.floor(Math.random() * allScenes.length);
                let randomScene = allScenes[randomIndex];
                
                window.tourViewer.loadScene(randomScene);
            }
            else {
                console.error("Could not find Pannellum scenes.");
            }
            if (contextMenu){
                contextMenu.classList.remove("show");
            }
        });
    }

    const restartBtn = document.getElementById("btn-restart-tour");
    if (restartBtn) {
        restartBtn.addEventListener("click", function() {
            window.tourViewer.loadScene('DSA_gate_day', 0, 0, 100);
            
            const contextMenu = document.getElementById("custom-right-click-menu");
            if (contextMenu) contextMenu.classList.remove("show");
        });
    }

    window.addEventListener("contextmenu", function(event) {
        if (!contextMenu) return;
        event.preventDefault(); 
        
        let mouseX = event.clientX;
        let mouseY = event.clientY;

        let menuWidth = contextMenu.offsetWidth || 180;
        let menuHeight = contextMenu.offsetHeight || 150;

        if (mouseX + menuWidth > window.innerWidth) {
            mouseX = window.innerWidth - menuWidth - 10;
        }
        if (mouseY + menuHeight > window.innerHeight) {
            mouseY = window.innerHeight - menuHeight - 10;
        }

        contextMenu.style.left = mouseX + "px";
        contextMenu.style.top = mouseY + "px";
        contextMenu.classList.add("show");
        
    }, { capture: true });

    window.addEventListener("click", function(event) {
        if (contextMenu && contextMenu.classList.contains("show")) {
            contextMenu.classList.remove("show");
        }
    }, { capture: true });
});

window.addEventListener("mousedown", function(event) {
    if (event.button === 2) {
        event.stopPropagation(); 
    }
}, { capture: true });

window.addEventListener("mouseup", function(event) {
    if (event.button === 2) {
        event.stopPropagation();
    }
}, { capture: true });

window.showToast = function(message) {
    const toast = document.getElementById("toast-notification");
    if (!toast) return;
    
    toast.innerText = message;
    toast.classList.add("show");
    
    setTimeout(() => {
        toast.classList.remove("show");
    }, 2500);
};  

window.openTeamModal = function() {
    const modal = document.getElementById("contributors-modal");
    if (modal) modal.classList.add("show");
};

window.closeTeamModal = function() {
    const modal = document.getElementById("contributors-modal");
    if (modal) modal.classList.remove("show");
};

window.addEventListener("click", function(event) {
    const modal = document.getElementById("contributors-modal");
    if (event.target === modal) {
        modal.classList.remove("show");
    }
}, { capture: true });


// for dynamically scaling hotspot icons

window.updateHotspotScale = function(currentFov) {
    const baseFov = 100; 
    
    let scale = baseFov / currentFov;
    
    scale = Math.max(0.6, Math.min(scale, 2.5));
    
    document.documentElement.style.setProperty('--zoom-scale', scale);
};


window.onload = function() {
    var initialScene = window.tourViewer.getScene();
    var timeButton = document.querySelector('.time-btn');
    
    if (timeButton) {
        if (typeof indoorScenes !== 'undefined' && indoorScenes.includes(initialScene)) {
            timeButton.style.display = 'none';
        } else {
            timeButton.style.display = 'block';
        }
    }

    let initialFov = window.tourViewer.getHfov();
    window.updateHotspotScale(initialFov);
};

window.tourViewer.on('zoomchange', function(newFov) {
    window.updateHotspotScale(newFov);
});

window.tourViewer.on('scenechange', function() {
    setTimeout(() => {
        let currentFov = window.tourViewer.getHfov();
        window.updateHotspotScale(currentFov);
    }, 100); 
});

// Joystick Control

document.addEventListener("DOMContentLoaded", function() {
    const joystickBtn = document.getElementById('btn-joystick-mode');
    const viewerContainer = document.getElementById('campus-map');
    const contextMenu = document.getElementById("custom-right-click-menu");

    let isJoystickMode = false;
    let isDragging = false;
    let startX = 0, startY = 0;
    let currentX = 0, currentY = 0;
    let animationFrameId = null;

    // 1. Create an invisible glass layer to catch our custom drags
    const joystickOverlay = document.createElement('div');
    joystickOverlay.style.position = 'absolute';
    joystickOverlay.style.top = '0';
    joystickOverlay.style.left = '0';
    joystickOverlay.style.width = '100%';
    joystickOverlay.style.height = '100%';
    joystickOverlay.style.zIndex = '99999'; // Sits above Pannellum, below UI
    joystickOverlay.style.display = 'none'; // Hidden by default
    joystickOverlay.style.cursor = 'all-scroll';
    viewerContainer.appendChild(joystickOverlay);

    // 2. Toggle Mode On/Off from the Right-Click Menu
    if (joystickBtn) {
        joystickBtn.addEventListener('click', function() {
            isJoystickMode = !isJoystickMode;
            
            if (isJoystickMode) {
                joystickBtn.innerHTML = 'Disable Joystick Pan'; // Update menu text
                joystickOverlay.style.display = 'block'; 
                window.tourViewer.stopAutoRotate(); 
            } else {
                joystickBtn.innerHTML = 'Enable Joystick Pan'; // Revert menu text
                joystickOverlay.style.display = 'none'; 
                isDragging = false;
                cancelAnimationFrame(animationFrameId);
            }

            // Close the right-click menu immediately after clicking
            if (contextMenu) {
                contextMenu.classList.remove("show");
            }
        });
    }

    // 3. The Math: Calculate speed based on mouse drag distance
    function joystickLoop() {
        if (!isDragging) return;

        let deltaX = currentX - startX;
        let deltaY = currentY - startY;

        // SPEED MULTIPLIER: Lower = smoother/slower. 
        let sensitivity = 0.005;

        let currentYaw = window.tourViewer.getYaw();
        let currentPitch = window.tourViewer.getPitch();

        // Apply continuous rotation. 
        window.tourViewer.setYaw(currentYaw + (deltaX * sensitivity), false);
        window.tourViewer.setPitch(currentPitch - (deltaY * sensitivity), false);

        animationFrameId = requestAnimationFrame(joystickLoop);
    }

    // 4. Mouse Controls
    joystickOverlay.addEventListener('mousedown', function(e) {
        // Only trigger joystick on Left Click (button 0)
        if (e.button !== 0) return; 
        
        isDragging = true;
        startX = e.clientX;
        startY = e.clientY;
        currentX = e.clientX;
        currentY = e.clientY;
        joystickLoop(); // Start the engine
    });

    joystickOverlay.addEventListener('mousemove', function(e) {
        if (isDragging) {
            currentX = e.clientX;
            currentY = e.clientY;
        }
    });

    window.addEventListener('mouseup', function(e) {
        if (!isDragging) return;
        isDragging = false;
        cancelAnimationFrame(animationFrameId); // Stop the engine

        // SMART CLICK: Let users click hotspots even if Joystick mode is ON
        let dist = Math.hypot(currentX - startX, currentY - startY);
        if (dist < 5) { // If they just clicked without dragging
            joystickOverlay.style.display = 'none'; 
            let elementBelow = document.elementFromPoint(e.clientX, e.clientY);
            if (elementBelow) elementBelow.click(); // Pass the click through
            joystickOverlay.style.display = 'block'; 
        }
    });

    // 5. Touch Controls (for mobile)
    joystickOverlay.addEventListener('touchstart', function(e) {
        isDragging = true;
        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;
        currentX = e.touches[0].clientX;
        currentY = e.touches[0].clientY;
        joystickLoop();
    });

    joystickOverlay.addEventListener('touchmove', function(e) {
        if (isDragging) {
            currentX = e.touches[0].clientX;
            currentY = e.touches[0].clientY;
        }
    });

    window.addEventListener('touchend', function() {
        isDragging = false;
        cancelAnimationFrame(animationFrameId);
    });
});

// scene according to the current time 

document.addEventListener('DOMContentLoaded', () => {
    const now = new Date();
    const istTime = new Date(now.toLocaleString("en-US", { timeZone: "Asia/Kolkata" }));
    const currentHour = istTime.getHours();
    if (currentHour >= 19) {
        const timeToggleBtn = document.getElementById('toggle-time');
        if (timeToggleBtn) {
            timeToggleBtn.click(); 
        }
    }
});




