export const centerScenes = {
    "center_day": {
        // "title": "Center Day",
        "type": "multires",
        "multiRes" :{
            "basePath": "./tiles/center/center_day_tiles", 
            "path": "/%l/%s%y_%x",
            "fallbackPath": "/fallback/%s",
            "extension": "jpg",
            "tileResolution": 512,
            "maxLevel": 4,  
            "cubeResolution": 2768
        },
        "hotSpots": [
            {
                "pitch": 3.02,
                "yaw": 175.0,
                "type":"scene",
                "sceneId": "cafeteria_day",
                // "cssClass": "custom-door",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "GO to cafeteria"
            }    
        ]
    },
    "center_night": {
        // "title": "Center night",
        "type": "multires",
        "multiRes" :{
            "basePath": "./tiles/center/center_night_tiles", 
            "path": "/%l/%s%y_%x",
            "fallbackPath": "/fallback/%s",
            "extension": "jpg",
            "tileResolution": 512,
            "maxLevel": 4,  
            "cubeResolution": 2768
        },
        "hotSpots": [
            {
                "pitch": -3.1, 
                "yaw": 95.9, 
                "type":"scene",
                "sceneId": "cafeteria_night",
                // "cssClass": "custom-door",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "GO to center",
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