export const labgateScenes = {
    "lab_complex_gate_day" : {
        "type": "multires",
        "multiRes" :{
            "basePath": "https://pub-1908b9e1f7974e65bc14d41162f52c63.r2.dev/photos/corelab/core_lab_gate_day_tiles", 
            "path": "/%l/%s%y_%x",
            "fallbackPath": "/fallback/%s",
            "extension": "jpg",
            "tileResolution": 512,
            "maxLevel": 4,  
            "cubeResolution": 2768 
        },
        "hotSpots": [
            {
                "pitch": 15.512563957039164,
                "yaw":-31.322274251201065 ,
                "type": "scene",
                "sceneId": "electronics_lab_day",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "Electronics Lab",
            },
             {
                "pitch":  5.53421094525801,
                "yaw": -31.533250761076214 ,
                "type": "scene",
                "sceneId": "physics_lab_day",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "Physics Lab",
            },
             {
                "pitch": 23.850941343325555,
                "yaw": -12.09409628491326,
                "type": "scene",
                "sceneId": "vlsi_lab_day",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "VLSI Lab",
            },
            {
                "pitch":2.721449882581435,
                "yaw":  20.624612057710728 ,
                "type": "scene",
                "sceneId": "mechanical_lab_day",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "Mechanical Lab",
            },
            {
                "pitch": -1.5225690985783027,
                "yaw": -84.96426700735948,
                "type": "scene",
                "sceneId": "hexagon_gate_day",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "Hexagon Canteen",
                 "cssClass": "custom-nav-arrow point-up-right"
            },
            {
                "pitch": 6.924343754690065,
                "yaw": 53.36119821432276 ,
                "type": "scene",
                "sceneId": "manufacturing_lab_day",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "Manufacturing Lab",
            },
            {
                "pitch": 23.945596911046454,
                "yaw": 12.077404770521804 ,
                "type": "scene",
                "sceneId": "mechatronics_lab_day",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "Mechatronics Lab",
            },
           
             {
                "pitch": 39.30765568219336,
                "yaw": 73.8985990334541 ,
                "type": "scene",
                "sceneId": "pandc_lab_day",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "Power and Control Lab",
            },
            {
                "pitch":  -4.235079322168174,
                "yaw": -98.38122778964942,
                "type": "scene",
                "sceneId": "LHTC_back_night",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "LHTC",
                "cssClass": "custom-nav-arrow point-up-left"
            },
        ]
    },
    "lab_complex_gate_night" : {
        "type": "multires",
        "multiRes" :{
            "basePath": "https://pub-1908b9e1f7974e65bc14d41162f52c63.r2.dev/photos/corelab/corelab_gate_night_tiles", 
            "path": "/%l/%s%y_%x",
            "fallbackPath": "/fallback/%s",
            "extension": "jpg",
            "tileResolution": 512,
            "maxLevel": 4,  
            "cubeResolution": 2768 
        },
        "hotSpots": [
            {
                "pitch": 12.512563957039164,
                "yaw":-31.322274251201065 ,
                "type": "scene",
                "sceneId": "electronics_lab_night",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "Electronics Lab",
            },
             {
                "pitch":  2.53421094525801,
                "yaw": -31.533250761076214 ,
                "type": "scene",
                "sceneId": "physics_lab_night",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "Physics Lab",
            },
             {
                "pitch": 23.850941343325555,
                "yaw": -12.09409628491326,
                "type": "scene",
                "sceneId": "vlsi_lab_night",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "VLSI Lab",
            },
            {
                "pitch":2.721449882581435,
                "yaw":  20.624612057710728 ,
                "type": "scene",
                "sceneId": "mechanical_lab_night",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "Mechanical Lab",
            },
            {
                "pitch": -3.159049937113721,
                "yaw": -81.65810991737246,
                "type": "scene",
                "sceneId": "hexagon_gate_night",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "Hexagon Canteen",
                 "cssClass": "custom-nav-arrow point-up-right"
            },
            {
                "pitch": 6.924343754690065,
                "yaw": 53.36119821432276 ,
                "type": "scene",
                "sceneId": "manufacturing_lab_night",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "Manufacturing Lab",
            },
            {
                "pitch": 23.945596911046454,
                "yaw": 12.077404770521804 ,
                "type": "scene",
                "sceneId": "mechatronics_lab_night",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "Mechatronics Lab",
            },
           
             {
                "pitch": 39.30765568219336,
                "yaw": 73.8985990334541 ,
                "type": "scene",
                "sceneId": "pandc_lab_night",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "Power and Control Lab",
            },
            {
                "pitch":  -5.285096309476544,
                "yaw": -97.63561662798254,
                "type": "scene",
                "sceneId": "LHTC_back_night",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "LHTC",
                "cssClass": "custom-nav-arrow point-up-left"
            },

        ]
    },
}
function permanentText(hotSpotDiv, args) {

    var textLabel = document.createElement('span');
    textLabel.innerHTML = args;
    
    // custom text 
    textLabel.classList.add('custom-permanent-label');
    
    hotSpotDiv.appendChild(textLabel);
}
