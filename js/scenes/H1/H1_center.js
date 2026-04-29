export const H1centerScenes = {
    "H1_center_day" : {
        // "title" : "cafeteria_day",
        "type": "multires",
        "multiRes" :{
            "basePath": "https://pub-1908b9e1f7974e65bc14d41162f52c63.r2.dev/photos/H1/H1_center_day_tiles", 
            "path": "/%l/%s%y_%x",
            "fallbackPath": "/fallback/%s",
            "extension": "jpg",
            "tileResolution": 512,
            "maxLevel": 4,  
            "cubeResolution": 2768 
        },
        "hotSpots": [
            {
                "pitch": 2.2645138168645498,
                "yaw": -48.038479738554166 ,
                "type": "scene",
                "sceneId": "H1_canteen_day",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "Canteen",
                "cssClass": "custom-nav-door"
            },
             {
                "pitch": 12.029252748229482,
                "yaw": -58.51253574439149,
                "type": "scene",
                "sceneId": "afc_day",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "AFC Workshop",
                "cssClass": "custom-nav-door"
            },
             {
                "pitch":13.129250117687484,
                "yaw": -45.541303129485655 ,
                "type": "scene",
                "sceneId": "ers_day",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "ERS Workshop",
                "cssClass": "custom-nav-door"
            },
           
             {
                "pitch": 1.3648904329225306,
                "yaw":-59.899704376271444,
                "type": "scene",
                "sceneId": "H1_gate_day",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "back to Gate",
                "cssClass": "custom-nav-arrow point-left"
            }
          
        ]
    },
    "H1_center_night" : {
        // "title" : "cafeteria_day",
        "type": "multires",
        "multiRes" :{
            "basePath": "https://pub-1908b9e1f7974e65bc14d41162f52c63.r2.dev/photos/H1/H1_center_night_tiles", 
            "path": "/%l/%s%y_%x",
            "fallbackPath": "/fallback/%s",
            "extension": "jpg",
            "tileResolution": 512,
            "maxLevel": 4,  
            "cubeResolution": 2768 
        },
        "hotSpots": [
            {
                "pitch": 2.2645138168645498,
                "yaw": -57.038479738554166 ,
                "type": "scene",
                "sceneId": "H1_canteen_night",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "Canteen",
                "cssClass": "custom-nav-door"
            },
             {
                "pitch": 12.029252748229482,
                "yaw": -68.51253574439149,
                "type": "scene",
                "sceneId": "afc_night",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "AFC Workshop",
                "cssClass": "custom-nav-door"
            },
             {
                "pitch":13.129250117687484,
                "yaw": -55.541303129485655 ,
                "type": "scene",
                "sceneId": "ers_night",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "ERS Workshop",
                "cssClass": "custom-nav-door"
            },
           
             {
                "pitch": 1.3648904329225306,
                "yaw": -68.899704376271444,
                "type": "scene",
                "sceneId": "H1_gate_night",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "back to Gate",
                "cssClass": "custom-nav-arrow point-left"
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