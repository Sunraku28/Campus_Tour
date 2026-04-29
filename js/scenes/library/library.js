export const libraryScenes = {
    "library_day" : {
        "type": "multires",
        "multiRes" :{
            "basePath": "https://pub-1908b9e1f7974e65bc14d41162f52c63.r2.dev/photos/library/library_tiles", 
            "path": "/%l/%s%y_%x",
            "fallbackPath": "/fallback/%s",
            "extension": "jpg",
            "tileResolution": 512,
            "maxLevel": 4,  
            "cubeResolution": 2768 
        },
        "hotSpots": [
            {
                "pitch": -8.071519233709996,
                "yaw": 100.03995979407244 ,
                "type": "scene",
                "sceneId": "library_center_day",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "Exit",
                "cssClass": "custom-nav-door"
            }
        ]
    },
    "library_night" : {
        "type": "multires",
        "multiRes" :{
            "basePath": "https://pub-1908b9e1f7974e65bc14d41162f52c63.r2.dev/photos/library/library_tiles", 
            "path": "/%l/%s%y_%x",
            "fallbackPath": "/fallback/%s",
            "extension": "jpg",
            "tileResolution": 512,
            "maxLevel": 4,  
            "cubeResolution": 2768 
        },
        "hotSpots": [
            {
                "pitch": -8.071519233709996,
                "yaw": 100.03995979407244,
                "type": "scene",
                "sceneId": "library_center_night",
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