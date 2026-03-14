export const treeScenes = {
    "tree_day" :{
        // "title": 'tree_day',
        "type": 'multires',
        "multiRes" :{
            "basePath": "./tiles/tree/tree_day_tiles", 
            "path": "/%l/%s%y_%x",
            "fallbackPath": "/fallback/%s",
            "extension": "jpg",
            "tileResolution": 512,
            "maxLevel": 4,  
            "cubeResolution": 2768 
        },
        "hotSpots":[
            {
                "pitch": 5.0,
                "yaw": 20.0,
                "type":"scene",
                "sceneId": "cafeteria_day",
                 "cssClass": "custom-nav-door",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "GO to cafeteria"
            },
            {
                "pitch": -7,      
                "yaw": -85                                                                                                                                                                      ,
                "type":"scene",
                "sceneId": "main_gate_day",
                // "cssClass": "custom-arrow point-up",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "GO to main gate"
            }
        ]
    },
    "tree_night" :{ 
        // "title": 'tree_night',
        "type": 'multires',
        "multiRes" :{
            "basePath": "./tiles/tree/tree_night_tiles", 
            "path": "/%l/%s%y_%x",
            "fallbackPath": "/fallback/%s",
            "extension": "jpg",
            "tileResolution": 512,
            "maxLevel": 4,  
            "cubeResolution": 2768 
        },
        "hotSpots":[
            {
                "pitch": 5.0,
                "yaw": 20.0,
                "type":"scene",
                "sceneId": "cafeteria_night",
                 "cssClass": "custom-nav-door",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "GO to cafeteria"
            },
            {
                "pitch": -7,      
                "yaw": -92,
                "type":"scene",
                "sceneId": "main_gate_night",
                // "cssClass": "custom-arrow point-up",
                 "createTooltipFunc": permanentText,
                "createTooltipArgs": "GO to main gate"
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