export const H3gateScenes = {
    "H3_gate_day" : {
        // "title" : "cafeteria_day",
        "type": "multires",
        "multiRes" :{
            "basePath": "https://pub-1908b9e1f7974e65bc14d41162f52c63.r2.dev/photos/H3/H3_gate_day_tiles", 
            "path": "/%l/%s%y_%x",
            "fallbackPath": "/fallback/%s",
            "extension": "jpg",
            "tileResolution": 512,
            "maxLevel": 4,  
            "cubeResolution": 2768 
        },
        "hotSpots": [
            {
                "pitch": 1.3904165775409754,
                "yaw": -1.0479242879711281,
                "type": "scene",
                "sceneId": "H3_entry_day",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "Enter ",
                "cssClass": "custom-nav-door"
    
            },
             {
                "pitch": -4.1617643786001235,
                "yaw": -88.18971245231128,
                "type": "scene",
                "sceneId": "H3H4junc_day",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "Way to H3H4 junction",
                "cssClass": "custom-nav-arrow point-up"
            },
            {
                "pitch": -4.7145886532307192,
                "yaw": 83.40261139291161,
                "type": "scene",
                "sceneId": "mess_gate_day",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "Way to Mess",
                "cssClass": "custom-nav-arrow point-up"
            },
            {
                "pitch": -5.435274977643106,
                "yaw": -179.10602931137507,
                "type": "scene",
                "sceneId": "court_day",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "Tennis and Basketball Courts",
                "cssClass": "custom-nav-arrow point-up-left"
            },
            {
                "pitch": -5.34579835529218,
                "yaw": -168.23400312506988,
                "type": "scene",
                "sceneId": "vcourt_day",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "Volleyball Court",
                "cssClass": "custom-nav-arrow point-up-right"
            }
          
        ]
    },
    "H3_gate_night" : {
        // "title" : "cafeteria_day",
        "type": "multires",
        "multiRes" :{
            "basePath": "https://pub-1908b9e1f7974e65bc14d41162f52c63.r2.dev/photos/H3/H3_gate_night_tiles", 
            "path": "/%l/%s%y_%x",
            "fallbackPath": "/fallback/%s",
            "extension": "jpg",
            "tileResolution": 512,
            "maxLevel": 4,  
            "cubeResolution": 2768 
        },
        "hotSpots": [
            {
                "pitch": 1.3904165775409754,
                "yaw": -1.0479242879711281,
                "type": "scene",
                "sceneId": "H3_entry_night",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "Enter ",
                "cssClass": "custom-nav-door"
    
            },
             {
                "pitch": -4.1617643786001235,
                "yaw": -91.18971245231128,
                "type": "scene",
                "sceneId": "H3H4junc_night",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "Way to H3H4 junction",
                "cssClass": "custom-nav-arrow point-up"
            },
            {
                "pitch": -2.7145886532307192,
                "yaw": 83.40261139291161,
                "type": "scene",
                "sceneId": "mess_gate_night",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "Way to Mess",
                "cssClass": "custom-nav-arrow point-up"
            },
            {
                "pitch": -5.435274977643106,
                "yaw": -179.10602931137507,
                "type": "scene",
                "sceneId": "court_night",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "Tennis and Basketball Courts",
                "cssClass": "custom-nav-arrow point-up-left"
            },
            {
                "pitch": -5.34579835529218,
                "yaw": -168.23400312506988,
                "type": "scene",
                "sceneId": "vcourt_night",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "Volleyball Court",
                "cssClass": "custom-nav-arrow point-up-right"
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