export const LHTCFRONTGATEScenes = {
    "LHTC_frontgate_day" : {
        "type": "multires",
        "multiRes" :{
            "basePath": "https://pub-1908b9e1f7974e65bc14d41162f52c63.r2.dev/photos/LHTC/LHTC_frontgate_day_tiles", 
            "path": "/%l/%s%y_%x",
            "fallbackPath": "/fallback/%s",
            "extension": "jpg",
            "tileResolution": 512,
            "maxLevel": 4,  
            "cubeResolution": 2768 
        },
        "hotSpots": [
            {
                "pitch": 4.236182105203926,
                "yaw":-0.02888296427282585 ,
                "type": "scene",
                "sceneId": "LHTC_back_day",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "Enter",
                "cssClass": "custom-nav-door"
            },
             {
                "pitch": -0.42973112824358584,
                "yaw":-175.14425510583007,
                "type": "scene",
                "sceneId": "Oat_day",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "OAT",
                "cssClass": "custom-nav-arrow point-up"
            },
            {
                "pitch": 0.5592653524117457,
                "yaw": -91.4328488216663,
                "type": "scene",
                "sceneId": "trisection_day",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "Trisection",
                "cssClass": "custom-nav-arrow point-up-right"
            },
        ]
    },
    "LHTC_frontgate_night" : {
        "type": "multires",
        "multiRes" :{
            "basePath": "https://pub-1908b9e1f7974e65bc14d41162f52c63.r2.dev/photos/LHTC/LHTC_frontgate_night_tiles", 
            "path": "/%l/%s%y_%x",
            "fallbackPath": "/fallback/%s",
            "extension": "jpg",
            "tileResolution": 512,
            "maxLevel": 4,  
            "cubeResolution": 2768 
        },
        "hotSpots": [
            {
                "pitch": 2.4198036618725047,
                "yaw": 0.7779826245632926,
                "type": "scene",
                "sceneId": "LHTC_back_night",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "Enter",
                "cssClass": "custom-nav-door"
            },
            {
                "pitch": -7.732917969388926,
                "yaw": -174.23334234977094,
                "type": "scene",
                "sceneId": "Oat_night",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "OAT",
                "cssClass": "custom-nav-arrow point-up"
            },
             {
                "pitch": 0.9154246185780474,
                "yaw": -91.52782243245625,
                "type": "scene",
                "sceneId": "trisection_night",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "Trisection",
                "cssClass": "custom-nav-arrow point-up"
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