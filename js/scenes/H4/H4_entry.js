export const H4entryScenes = {
    "H4_entry_day" : {
        // "title" : "cafeteria_day",
        "type": "multires",
        "multiRes" :{
            "basePath": "https://pub-1908b9e1f7974e65bc14d41162f52c63.r2.dev/photos/H4/H4_entry_tiles", 
            "path": "/%l/%s%y_%x",
            "fallbackPath": "/fallback/%s",
            "extension": "jpg",
            "tileResolution": 512,
            "maxLevel": 4,  
            "cubeResolution": 2768 
        },
        "hotSpots": [
            {
                "pitch":  -13.381430153028012,
                "yaw": 172.62491002267996,
                "type": "scene",
                "sceneId": "H4_center_day",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "Way to Center",
                "cssClass": "custom-nav-arrow point-up-left"
            },
            {   
                "pitch":  -8.207241835848096,
                "yaw": 1.2738003857662406,
                "type":"scene",
                "sceneId": "H4_gate_day",
                "cssClass": "custom-nav-door",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "Exit"
            }  ,       
             {   
                "pitch":  -13.274541989800217,
                "yaw": -170.24144537639094,
                "type":"scene",
                "sceneId": "H4_canteen_day",
                "cssClass": "custom-nav-arrow point-up-right",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "Way to Canteen"
            }          
        ]
    },
     "H4_entry_night" : {
        // "title" : "cafeteria_day",
        "type": "multires",
        "multiRes" :{
            "basePath": "https://pub-1908b9e1f7974e65bc14d41162f52c63.r2.dev/photos/H4/H4_entry_tiles", 
            "path": "/%l/%s%y_%x",
            "fallbackPath": "/fallback/%s",
            "extension": "jpg",
            "tileResolution": 512,
            "maxLevel": 4,  
            "cubeResolution": 2768 
        },
        "hotSpots": [
            {
                "pitch":  -13.381430153028012,
                "yaw": 172.62491002267996,
                "type": "scene",
                "sceneId": "H4_center_night",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "Way to Center",
                "cssClass": "custom-nav-arrow point-up-left"
            },
            {   
                "pitch":  -8.207241835848096,
                "yaw": 1.2738003857662406,
                "type":"scene",
                "sceneId": "H4_gate_night",
                "cssClass": "custom-nav-door",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "Exit"
            }  ,       
             {   
                "pitch":  -13.274541989800217,
                "yaw": -170.24144537639094,
                "type":"scene",
                "sceneId": "H4_canteen_night",
                "cssClass": "custom-nav-arrow point-up-right",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "Way to Canteen"
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