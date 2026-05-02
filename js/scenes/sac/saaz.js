export const saazScenes = {
    "saaz_day" : {
        // "title" : "cafeteria_day",
        "type": "multires",
        "multiRes" :{
            "basePath": "https://iiitdmj-assets.xyz/photos/SAC/saaz_tiles", 
            "path": "/%l/%s%y_%x",
            "fallbackPath": "/fallback/%s",
            "extension": "jpg",
            "tileResolution": 512,
            "maxLevel": 4,  
            "cubeResolution": 2768 
        },
        "hotSpots": [
            {
                "pitch": -3.3344745393216093,
                "yaw": 141.64467260596058 ,
                "type": "scene",
                "sceneId": "sac_gate_day",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "Exit",
                "cssClass": "custom-nav-door"
            }
          
        ]
    },
    "saaz_night" : {
        // "title" : "cafeteria_day",
        "type": "multires",
        "multiRes" :{
            "basePath": "https://iiitdmj-assets.xyz/photos/SAC/saaz_tiles", 
            "path": "/%l/%s%y_%x",
            "fallbackPath": "/fallback/%s",
            "extension": "jpg",
            "tileResolution": 512,
            "maxLevel": 4,  
            "cubeResolution": 2768 
        },
        "hotSpots": [
            {
                "pitch": -3.3344745393216093,
                "yaw": 141.64467260596058 ,
                "type": "scene",
                "sceneId": "sac_gate_night",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "Exit",
                "cssClass": "custom-nav-door"
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