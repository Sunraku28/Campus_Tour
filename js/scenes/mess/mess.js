export const messScenes = {
    "mess_day" : {
        "type": "multires",
        "multiRes" :{
            "basePath": "https://pub-1908b9e1f7974e65bc14d41162f52c63.r2.dev/photos/mess/mess_tiles", 
            "path": "/%l/%s%y_%x",
            "fallbackPath": "/fallback/%s",
            "extension": "jpg",
            "tileResolution": 512,
            "maxLevel": 4,  
            "cubeResolution": 2768 
        },
        "hotSpots": [
            {
                "pitch": -5.0409091436375113,
                "yaw": -178.6814125243155,
                "type": "scene",
                "sceneId": "mess_gate_day",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "Exit",
                "cssClass": "custom-nav-door"
            }
            
        ]
    },
    "mess_night" : {
        "type": "multires",
        "multiRes" :{
            "basePath": "https://pub-1908b9e1f7974e65bc14d41162f52c63.r2.dev/photos/mess/mess_tiles", 
            "path": "/%l/%s%y_%x",
            "fallbackPath": "/fallback/%s",
            "extension": "jpg",
            "tileResolution": 512,
            "maxLevel": 4,  
            "cubeResolution": 2768 
        },
        "hotSpots": [
            {
                "pitch": -5.0409091436375113,
                "yaw": -178.6814125243155,
                "type": "scene",
                "sceneId": "mess_gate_day",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "Exit",
                "cssClass": "custom-nav-door"
            },
             
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