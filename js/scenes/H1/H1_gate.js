export const H1gateScenes = {
    "H1_gate_day" : {
        "type": "multires",
        "multiRes" :{
            "basePath": "https://pub-1908b9e1f7974e65bc14d41162f52c63.r2.dev/photos/H1/H1_gate_day_tiles", 
            "path": "/%l/%s%y_%x",
            "fallbackPath": "/fallback/%s",
            "extension": "jpg",
            "tileResolution": 512,
            "maxLevel": 4,  
            "cubeResolution": 2768 
        },
        "hotSpots": [
            {
                "pitch": -9.105972608544011,
                "yaw": -5.81221788383391,
                "type": "scene",
                "sceneId": "H1_center_day",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "Enter",
                "cssClass": "custom-nav-door"
            },
            {
                "pitch": -7.4808924072959258,
                "yaw": 86.52790669348687, 
                "type": "scene",
                "sceneId": "crossroads_day",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "Way to Crossroads",
                "cssClass": "custom-nav-arrow point-up"
            },
             {
                "pitch": -5.2837343611623013, 
                "yaw": -80.0267467565447, 
                "type": "scene",
                "sceneId": "nescafe_day",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "Way to Nescafe",
                "cssClass": "custom-nav-arrow point-up"
            },
        ]
    },      
    "H1_gate_night" : {
        "type": "multires",
        "multiRes" :{
            "basePath": "https://pub-1908b9e1f7974e65bc14d41162f52c63.r2.dev/photos/H1/H1_gate_night_tiles", 
            "path": "/%l/%s%y_%x",
            "fallbackPath": "/fallback/%s",
            "extension": "jpg",
            "tileResolution": 512,
            "maxLevel": 4,  
            "cubeResolution": 2768 
        },
        "hotSpots": [
            {
                "pitch": -9.848704330339288,
                "yaw": 0.30294281272774803,
                "type": "scene",
                "sceneId": "H1_center_night",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "Enter",
                "cssClass": "custom-nav-door"
            },
             {
                "pitch": -4.815037055471052,
                "yaw": -80.59636640830257,
                "type": "scene",
                "sceneId": "nescafe_night",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "Way to Nescafe",
                "cssClass": "custom-nav-arrow point-up"
            },
            {
                "pitch": -8.770948704071245,
                "yaw": 84.71088230353613,
                "type": "scene",
                "sceneId": "crossroads_night",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "Way to Crossroads",
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
