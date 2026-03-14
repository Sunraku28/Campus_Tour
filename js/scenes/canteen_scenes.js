export const cafeScenes = {
    "cafeteria_day" : {
        // "title" : "cafeteria_day",
        "type": "multires",
        "multiRes" :{
            "basePath": "./tiles/canteen/canteen_day_tiles", 
            "path": "/%l/%s%y_%x",
            "fallbackPath": "/fallback/%s",
            "extension": "jpg",
            "tileResolution": 512,
            "maxLevel": 4,  
            "cubeResolution": 2768 
        },
        "hotSpots": [
            {
                "pitch": -12.0,
                "yaw": 179.5 ,
                "type": "scene",
                "sceneId": "center_day",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "Go to center",
                "cssClass": "custom-nav-arrow point-up"
            },
            {   
                "pitch": -10.0,
                "yaw": 156.0,
                "type":"scene",
                "sceneId": "tree_day",
                "cssClass": "custom-nav-arrow point-up-left",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "Back to tree"
            }        
        ]
    },
    "cafeteria_night" : { 
        // "title" : "cafeteria_night",
        "type": "multires",
        "multiRes" :{
            "basePath": "./tiles/canteen/canteen_night_tiles", 
            "path": "/%l/%s%y_%x",
            "fallbackPath": "/fallback/%s",
            "extension": "jpg",
            "tileResolution": 512,
            "maxLevel": 4,  
            "cubeResolution": 2768 
        },
        "hotSpots": [
            {
                "pitch": -12.0,
                "yaw": 179.5 ,
                "type": "scene",
                "sceneId": "center_night",
                // "cssClass": "custom-arrow point-up",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "Go to center"
            },
            {   
                "pitch": -10.0,
                "yaw": 156.0,
                "type":"scene",
                "sceneId": "tree_night",
                // "cssClass": "custom-arrow point-left",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "Back to tree"
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