export const librarygateScenes = {
    "library_gate_day" : {
        "type": "multires",
        "multiRes" :{
            "basePath": "https://pub-1908b9e1f7974e65bc14d41162f52c63.r2.dev/photos/library/library_gate_day_tiles", 
            "path": "/%l/%s%y_%x",
            "fallbackPath": "/fallback/%s",
            "extension": "jpg",
            "tileResolution": 512,
            "maxLevel": 4,  
            "cubeResolution": 2768 
        },
        "hotSpots": [
            {
                "pitch": 1.2554791139004995,
                "yaw": 5.124404051003216 ,
                "type": "scene",
                "sceneId": "library_center_day",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "Enter",
                "cssClass": "custom-nav-door"
            },
            {
                "pitch": -1.7656082905314763,
                "yaw": -89.25575097927562,
                "type": "scene",
                "sceneId": "PHC_day",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "Primary Healthcare Center",
                "cssClass": "custom-nav-arrow point-up-right"
            },
            {
                "pitch": -5.5049193271519785,
                "yaw": 91.97744151293352,
                "type": "scene",
                "sceneId": "LHTC_back_day",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "LHTC",
                "cssClass": "custom-nav-arrow point-up"
            }
        ]
    },
    "library_gate_night" : {
        "type": "multires",
        "multiRes" :{
            "basePath": "https://pub-1908b9e1f7974e65bc14d41162f52c63.r2.dev/photos/library/library_gate_night_tiles", 
            "path": "/%l/%s%y_%x",
            "fallbackPath": "/fallback/%s",
            "extension": "jpg",
            "tileResolution": 512,
            "maxLevel": 4,  
            "cubeResolution": 2768 
        },
        "hotSpots": [
            {
                "pitch": 1.2554791139004995, 
                "yaw": 5.124404051003216,
                "type": "scene",
                "sceneId": "library_center_night",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "Enter",
                "cssClass": "custom-nav-door"
            },
            {
                "pitch": -1.0890303008718911,
                "yaw":  -88.252097058072, 
                "type": "scene",
                "sceneId": "PHC_night",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "Primary Healthcare Center",
                "cssClass": "custom-nav-arrow point-up"
            },
            {
                "pitch":   -3.5049193271519785,  
                "yaw":91.97744151293352, 
                "type": "scene",
                "sceneId": "LHTC_back_night",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "LHTC",
                "cssClass": "custom-nav-arrow point-up"
            }
          
        ]
    }
}
function permanentText(hotSpotDiv, args) {

    var textLabel = document.createElement('span');
    textLabel.innerHTML = args;
    
    // custom text 
    textLabel.classList.add('custom-permanent-label');
    
    hotSpotDiv.appendChild(textLabel);
}