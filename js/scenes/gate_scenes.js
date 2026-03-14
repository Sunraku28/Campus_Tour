export const gateScenes = {
    "main_gate_day": {
        // "title": "Main Gate Day",
        "type": "multires",
        "multiRes" :{
            "basePath": "./tiles/main_gate/main_gate_day_tiles", 
            "path": "/%l/%s%y_%x",
            "fallbackPath": "/fallback/%s",
            "extension": "jpg",
            "tileResolution": 512,
            "maxLevel": 4,  
            "cubeResolution": 2768 
        },
        "hotSpots": [
            {
                "pitch": -1.0, 
                "yaw": 2.0, 
                "type": "scene",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "Go to tree",
                "sceneId": "tree_day",
                 "cssClass": "custom-logo-pin"
            }
        ]
    },
    "main_gate_night": {
        // "title": "Main Gate Night",
        "type": "multires",
        "multiRes": {
            "basePath": "./tiles/main_gate/main_gate_night_tiles", 
            "path": "/%l/%s%y_%x",
            "fallbackPath": "/fallback/%s",
            "extension": "jpg",
            "tileResolution": 512,
            "maxLevel": 4,
            "cubeResolution": 2768
        },
        "hotSpots": [
            {
                "pitch": -5.0, 
                "yaw": 8.0, 
                "type": "scene",
                "sceneId": "tree_night",
                // "cssClass": "custom-arrow point-up",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "GO to Tree"
            }
        ]
    }
};
// This function creates a permanent text label for our hotspots
function permanentText(hotSpotDiv, args) {
    // Create a new span element to hold your text
    var textLabel = document.createElement('span');
    textLabel.innerHTML = args;
    
    // Give it a custom CSS class so we can style it easily
    textLabel.classList.add('custom-permanent-label');
    
    // Attach it permanently to the hotspot button
    hotSpotDiv.appendChild(textLabel);
}