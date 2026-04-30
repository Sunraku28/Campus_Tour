export const messgateScenes = {
    "mess_gate_day" : {
        "type": "multires",
        "multiRes" :{
            "basePath": "https://iiitdmj-assets.xyz/photos/mess/mess_gate_day_tiles", 
            "path": "/%l/%s%y_%x",
            "fallbackPath": "/fallback/%s",
            "extension": "jpg",
            "tileResolution": 512,
            "maxLevel": 4,  
            "cubeResolution": 2768 
        },
        "hotSpots": [
            {
                "pitch": 2.539215219992766,
                "yaw": 0.6660806584482838,
                "type": "scene",
                "sceneId": "mess_day",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "Enter Mess",
                "cssClass": "custom-nav-door"
            },
             {
                "pitch":  -5.263137588966458,
                "yaw": 162.18114073801738,
                "type": "scene",
                "sceneId": "H3_gate_day",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "Aryabhatta Hostel",
                "cssClass": "custom-nav-arrow point-up-right"
            },
             {
                "pitch": -6.276973661934642,
                "yaw": 136.9235619117781,
                "type": "scene",
                "sceneId": "crossroads_day",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "Crossroads",
                "cssClass": "custom-nav-arrow point-up-left"
            },
        ]
    },
    "mess_gate_night" : {
        "type": "multires",
        "multiRes" :{
            "basePath": "https://iiitdmj-assets.xyz/photos/mess/mess_gate_night_tiles", 
            "path": "/%l/%s%y_%x",
            "fallbackPath": "/fallback/%s",
            "extension": "jpg",
            "tileResolution": 512,
            "maxLevel": 4,  
            "cubeResolution": 2768 
        },
        "hotSpots": [
            {
                "pitch": 1.9932814681424056,
                "yaw": 2.3703604936858254,
                "type": "scene",
                "sceneId": "mess_night",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "Enter Mess",
                "cssClass": "custom-nav-door"
            },
             {
                "pitch": -5.895550168939276,
                "yaw": 164.93625558293343,
                "type": "scene",
                "sceneId": "H3_gate_night",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "Aryabhatta Hostel",
                "cssClass": "custom-nav-arrow point-up-right"
            },
             {
                "pitch": -8.391715839606176,
                "yaw": 138.2608324539695,
                "type": "scene",
                "sceneId": "crossroads_night",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "Crossroads",
                "cssClass": "custom-nav-arrow point-up-left"
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