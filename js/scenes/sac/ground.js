export const groundScenes = {
    "ground_day" : {
        "type": "multires",
        "multiRes" :{
            "basePath": "https://pub-1908b9e1f7974e65bc14d41162f52c63.r2.dev/photos/SAC/ground_day_tiles", 
            "path": "/%l/%s%y_%x",
            "fallbackPath": "/fallback/%s",
            "extension": "jpg",
            "tileResolution": 512,
            "maxLevel": 4,  
            "cubeResolution": 2768 
        },
        "hotSpots": [
            {
                "pitch": 5.229908178891234,
                "yaw": 161.10201321953912,
                "type": "scene",
                "sceneId": "sac_gate_day",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "SAC",
                "cssClass": "custom-logo-pin"
            },
             {
                "pitch": 12.01483715814964,
                "yaw": -75.46547164859534,
                "type": "scene",
                "sceneId": "panini_gate_day",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "Panini ",
                "cssClass": "custom-logo-pin"
            },
             {
                "pitch": 8.486044947724995,
                "yaw": -32.23930019167123,
                "type": "scene",
                "sceneId": "H4_gate_day",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "Vivekananda",
                "cssClass": "custom-logo-pin"
            },
             {
                "pitch": 10.590528728094377,
                "yaw": -3.110202914292625,
                "type": "scene",
                "sceneId": "H3_gate_day",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "Aryabhatta",
                "cssClass": "custom-logo-pin"
            },
             {
                "pitch": 10.501336566783653,
                "yaw": 113.58824941115287,
                "type": "scene",
                "sceneId": "H1_gate_day",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "Vasishtha",
                "cssClass": "custom-logo-pin"
            },
             {
                "pitch": 10.476268770623765,
                "yaw": 24.060593363149394,
                "type": "scene",
                "sceneId": "mess_gate_day",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "Mess",
                "cssClass": "custom-logo-pin"
            },
            {
                "pitch": 8.36964343820973,
                "yaw": -132.4592288411671,
                "type": "scene",
                "sceneId": "ms_gate_day",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "Maa Saraswati",
                "cssClass": "custom-logo-pin"
            }
        ]
    },
    "ground_night" : {
        "type": "multires",
        "multiRes" :{
            "basePath": "https://pub-1908b9e1f7974e65bc14d41162f52c63.r2.dev/photos/SAC/ground_night_tiles", 
            "path": "/%l/%s%y_%x",
            "fallbackPath": "/fallback/%s",
            "extension": "jpg",
            "tileResolution": 512,
            "maxLevel": 4,  
            "cubeResolution": 2768 
        },
        "hotSpots": [
           {
                "pitch": 8.66857871108675,
                "yaw": 177.35620764712763,
                "type": "scene",
                "sceneId": "sac_gate_night",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "SAC",
                "cssClass": "custom-logo-pin"
            },
             {
                "pitch": 13.515407297220346,
                "yaw": -61.443547559716365,
                "type": "scene",
                "sceneId": "panini_gate_night",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "Panini ",
                "cssClass": "custom-logo-pin"
            },
             {
                "pitch": 10.622129450509403,
                "yaw": -25.363203365171675,
                "type": "scene",
                "sceneId": "H4_gate_night",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "Vivekananda",
                "cssClass": "custom-logo-pin"
            },
             {
                "pitch": 12.872543918840444,
                "yaw": 9.500441972133844,
                "type": "scene",
                "sceneId": "H3_gate_night",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "Aryabhatta",
                "cssClass": "custom-logo-pin"
            },
             {
                "pitch": 13.07865038552279,
                "yaw": 133.14171546099973,
                "type": "scene",
                "sceneId": "H1_gate_night",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "Vasishtha",
                "cssClass": "custom-logo-pin"
            },
             {
                "pitch": 14.899900226341137,
                "yaw": 35.14287757060213,
                "type": "scene",
                "sceneId": "mess_gate_night",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "Mess",
                "cssClass": "custom-logo-pin"
            },
            {
                "pitch": 8.915507733304992,
                "yaw": -115.96272226954522,
                "type": "scene",
                "sceneId": "ms_gate_night",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "Maa Saraswati",
                "cssClass": "custom-logo-pin"
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