export const trisectionScenes = {
    "trisection_day" : {
        "type": "multires",
        "multiRes" :{
            "basePath": "https://iiitdmj-assets.xyz/photos/junction/trisection_day_tiles", 
            "path": "/%l/%s%y_%x",
            "fallbackPath": "/fallback/%s",
            "extension": "jpg",
            "tileResolution": 512,
            "maxLevel": 4,  
            "cubeResolution": 2768 
        },
        "hotSpots": [
            {
                "pitch": -8.666567157322474,
                "yaw": 99.12346472614888,
                "type": "scene",
                "sceneId": "LHTC_frontgate_day",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "LHTC",
                "cssClass": "custom-nav-arrow point-up-right"
            },
            {
                "pitch": -0.3559545721553783,
                "yaw": -132.2160743827019,
                "type": "scene",
                "sceneId": "crossroads_day",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "Crossroads",
                "cssClass": "custom-nav-arrow point-up"
            },
             {
                "pitch":  -5.425375858067523,
                "yaw": 1.803511834013839,
                "type": "scene",
                "sceneId": "hexagon_gate_day",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "Hexagon",
                "cssClass": "custom-nav-arrow point-up"
            },
        ]
    },
    "trisection_night" : {
        "type": "multires",
        "multiRes" :{
            "basePath": "https://iiitdmj-assets.xyz/photos/junction/trisection_night_tiles", 
            "path": "/%l/%s%y_%x",
            "fallbackPath": "/fallback/%s",
            "extension": "jpg",
            "tileResolution": 512,
            "maxLevel": 4,  
            "cubeResolution": 2768 
        },
        "hotSpots": [
            {
                "pitch":  -8.915999652694076,
                "yaw": 40.972901613961994,
                "type": "scene",
                "sceneId": "LHTC_frontgate_night",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "LHTC",
                "cssClass": "custom-nav-arrow point-up-right"
            },
              {
                "pitch":  0.029038522469398288,
                "yaw": 170.86715391048827,
                "type": "scene",
                "sceneId": "crossroads_night",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "Crossroads",
                "cssClass": "custom-nav-arrow point-up"
            },
            {
                "pitch": -6.267691282535032,
                "yaw": -54.06413532942606,
                "type": "scene",
                "sceneId": "hexagon_gate_night",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "Hexagon",
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