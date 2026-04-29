export const paninicenterScenes = {
    "panini_center_day" :{
        "type": 'multires',
        "multiRes" :{
            "basePath": "https://pub-1908b9e1f7974e65bc14d41162f52c63.r2.dev/photos/panini/panini_center_day_tiles", 
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
                "sceneId": "panini_canteen_day",
                 "cssClass": "custom-nav-door",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "Way to canteen"
            },
            {
                "pitch": -7,      
                "yaw": -85                                                                                                                                                                      ,
                "type":"scene",
                "sceneId": "panini_gate_day",
                "cssClass": "custom-nav-arrow point-up",
                "createTooltipFunc": permanentText,
                "createTooltipArgs":  "Back to Main Gate"
            }
        ]
    },
    "panini_center_night" :{ 
        "type": 'multires',
        "multiRes" :{
            "basePath": "https://pub-1908b9e1f7974e65bc14d41162f52c63.r2.dev/photos/panini/panini_center_night_tiles", 
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
                "sceneId": "panini_canteen_night",
                 "cssClass": "custom-nav-door",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "Way to Canteen"
            },
            {
                "pitch": -7,      
                "yaw": -85,
                "type":"scene",
                "sceneId": "panini_gate_night",
                "cssClass": "custom-nav-arrow point-up",
                 "createTooltipFunc": permanentText,
                "createTooltipArgs": "Back to Main Gate"
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