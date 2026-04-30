export const H3entryScenes = {
   "H3_entry_day" : {
        "type": "multires",
        "multiRes" :{
            "basePath": "https://iiitdmj-assets.xyz/photos/H3/H3_entry_tiles", 
            "path": "/%l/%s%y_%x",
            "fallbackPath": "/fallback/%s",
            "extension": "jpg",
            "tileResolution": 512,
            "maxLevel": 4,  
            "cubeResolution": 2768 
        },
        "hotSpots": [
            {
                "pitch": -8.35245763618684,
                "yaw": -2.0703331492571238,
                "type": "scene",
                "sceneId": "H3_gate_day",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "Exit",
                "cssClass": "custom-nav-door"
            },
             {
                "pitch": -13.797045745385272,
                "yaw": 169.4847463881998,
                "type": "scene",
                "sceneId": "H3_canteen_day",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "Canteen",
                "cssClass": "custom-nav-arrow point-up-left"
            },
             {
                "pitch": -13.548649661465127,
                "yaw": -168.55444827073464,
                "type": "scene",
                "sceneId": "H3_center_day",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "Center",
                "cssClass": "custom-nav-arrow point-up-right"
            }
          
        ]
    },
    "H3_entry_night" : {
        "type": "multires",
        "multiRes" :{
            "basePath": "https://iiitdmj-assets.xyz/photos/H3/H3_entry_tiles", 
            "path": "/%l/%s%y_%x",
            "fallbackPath": "/fallback/%s",
            "extension": "jpg",
            "tileResolution": 512,
            "maxLevel": 4,  
            "cubeResolution": 2768 
        },
        "hotSpots": [
            {
                "pitch": -8.35245763618684,
                "yaw": -2.0703331492571238,
                "type": "scene",
                "sceneId": "H3_gate_night",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "Exit",
                "cssClass": "custom-nav-door"
            },
             {
                "pitch": -13.797045745385272,
                "yaw": 169.4847463881998,
                "type": "scene",
                "sceneId": "H3_canteen_night",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "Canteen",
                "cssClass": "custom-nav-arrow point-up-left"
            },
             {
                "pitch": -13.548649661465127,
                "yaw": -168.55444827073464,
                "type": "scene",
                "sceneId": "H3_center_night",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "Center",
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