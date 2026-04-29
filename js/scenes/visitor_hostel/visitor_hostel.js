export const visitorhostelScenes = {
    "visitor_hostel_day" : {
        "type": "multires",
        "multiRes" :{
            "basePath": "https://pub-1908b9e1f7974e65bc14d41162f52c63.r2.dev/photos/residencies/visitor_hostel_day_tiles", 
            "path": "/%l/%s%y_%x",
            "fallbackPath": "/fallback/%s",
            "extension": "jpg",
            "tileResolution": 512,
            "maxLevel": 4,  
            "cubeResolution": 2768 
        },
        "hotSpots": [
            {
                "pitch": -3.3480139432603244,
                "yaw": -83.24407741686905 ,
                "type": "scene",
                "sceneId": "PHC_day",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "Way to PHC",
                "cssClass": "custom-nav-arrow point-up-right"
            },
            {
                "pitch": -4.7484754814910248,
                "yaw": 93.36147120809628 ,
                "type": "scene",
                "sceneId": "rewa_day",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "Way to Rewa Residency",
                "cssClass": "custom-nav-arrow point-up"
            }
        ]
    },
    "visitor_hostel_night" : {
        "type": "multires",
        "multiRes" :{
            "basePath": "https://pub-1908b9e1f7974e65bc14d41162f52c63.r2.dev/photos/residencies/visitor_hostel_night_tiles", 
            "path": "/%l/%s%y_%x",
            "fallbackPath": "/fallback/%s",
            "extension": "jpg",
            "tileResolution": 512,
            "maxLevel": 4,  
            "cubeResolution": 2768 
        },
        "hotSpots": [
            {
                "pitch": -3.3480139432603244,
                "yaw": -83.24407741686905,
                "type": "scene",
                "sceneId": "PHC_night",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "Way to PHC",
                "cssClass": "custom-nav-arrow point-up-right"
            },
            {
                "pitch":  -4.771280958604546,
                "yaw": 98.16625076436092,
                "type": "scene",
                "sceneId": "rewa_night",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "Way to Rewa Residency",
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