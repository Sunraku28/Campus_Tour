export const Racing2Scenes = {
    "racing2_day" : {
        "type": "multires",
        "multiRes" :{
            "basePath": "https://pub-1908b9e1f7974e65bc14d41162f52c63.r2.dev/photos/LHTC/racing2_tiles", 
            "path": "/%l/%s%y_%x",
            "fallbackPath": "/fallback/%s",
            "extension": "jpg",
            "tileResolution": 512,
            "maxLevel": 4,  
            "cubeResolution": 2768 
        },
        "hotSpots": [
            {
                "pitch": -6.834926596745561,
                "yaw": 115.46047575867863,
                "type": "scene",
                "sceneId": "racing_day",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "Exit",
                "cssClass": "custom-nav-door"
            },
        ]
    },
    "racing2_night" : {
        "type": "multires",
        "multiRes" :{
            "basePath": "https://pub-1908b9e1f7974e65bc14d41162f52c63.r2.dev/photos/LHTC/racing_tiles", 
            "path": "/%l/%s%y_%x",
            "fallbackPath": "/fallback/%s",
            "extension": "jpg",
            "tileResolution": 512,
            "maxLevel": 4,  
            "cubeResolution": 2768 
        },
        "hotSpots": [
            {
                "pitch": -6.834926596745561,
                "yaw": 115.46047575867863,
                "type": "scene",
                "sceneId": "racing_night",
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