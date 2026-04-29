export const narmadaScenes = {
    "narmada_day" : {
        "type": "multires",
        "multiRes" :{
            "basePath": "https://pub-1908b9e1f7974e65bc14d41162f52c63.r2.dev/photos/residencies/narmada_tiles", 
            "path": "/%l/%s%y_%x",
            "fallbackPath": "/fallback/%s",
            "extension": "jpg",
            "tileResolution": 512,
            "maxLevel": 4,  
            "cubeResolution": 2768 
        },
        "hotSpots": [
            {
                "pitch":  -1.21777252635313765,
                "yaw": -87.37799838703786,
                "type": "scene",
                "sceneId": "rewa_day",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "Way to Rewa Residency",
                "cssClass": "custom-nav-arrow point-up-left"
            }
        ]
    },
    "narmada_night" : {
        "type": "multires",
        "multiRes" :{
            "basePath": "https://pub-1908b9e1f7974e65bc14d41162f52c63.r2.dev/photos/residencies/narmada_tiles", 
            "path": "/%l/%s%y_%x",
            "fallbackPath": "/fallback/%s",
            "extension": "jpg",
            "tileResolution": 512,
            "maxLevel": 4,  
            "cubeResolution": 2768 
        },
        "hotSpots": [
            {
                "pitch":  -1.21777252635313765,
                "yaw": -87.37799838703786,
                "type": "scene",
                "sceneId": "rewa_day",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "Way to Rewa Residency",
                "cssClass": "custom-nav-arrow point-up-left"
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