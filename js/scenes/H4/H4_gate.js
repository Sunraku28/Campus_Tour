export const H4gateScenes = {
    "H4_gate_day" : {
        // "title" : "cafeteria_day",
        "type": "multires",
        "multiRes" :{
            "basePath": "https://pub-1908b9e1f7974e65bc14d41162f52c63.r2.dev/photos/H4/H4_gate_day_tiles", 
            "path": "/%l/%s%y_%x",
            "fallbackPath": "/fallback/%s",
            "extension": "jpg",
            "tileResolution": 512,
            "maxLevel": 4,  
            "cubeResolution": 2768 
        },
        "hotSpots": [
            {
                "pitch": 2.93874023995414,
                "yaw": -1.7956492566084776,
                "type": "scene",
                "sceneId": "H4_entry_day",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "Enter",
                "cssClass": "custom-nav-door"
            },
            {   
                "pitch":  -1.8452463131235812,
                "yaw": 96.88124988786373,
                "type":"scene",
                "sceneId": "H3H4junc_day",
                "cssClass": "custom-nav-arrow point-up-left",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "H3-H4 Junction"
            }          
        ]
    },
    "H4_gate_night" : {
        "type": "multires",
        "multiRes" :{
            "basePath": "https://pub-1908b9e1f7974e65bc14d41162f52c63.r2.dev/photos/H4/H4_gate_night_tiles", 
            "path": "/%l/%s%y_%x",
            "fallbackPath": "/fallback/%s",
            "extension": "jpg",
            "tileResolution": 512,
            "maxLevel": 4,  
            "cubeResolution": 2768 
        },
        "hotSpots": [
            {
                "pitch": 4.106181295025155,
                "yaw": 1.0833238881272118,
                "type": "scene",
                "sceneId": "H4_entry_night",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "Enter ",
                "cssClass": "custom-nav-door"
            },
            {   
                "pitch": -3.7795790348963387,
                "yaw": 95.30608437328198,
                "type":"scene",
                "sceneId": "H3H4junc_night",
                "cssClass": "custom-nav-arrow point-up-left",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "H3-H4 Junction"
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