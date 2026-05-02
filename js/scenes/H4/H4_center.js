export const H4centerScenes = {
    "H4_center_day" : {
        // "title" : "cafeteria_day",
        "type": "multires",
        "multiRes" :{
            "basePath": "https://iiitdmj-assets.xyz/photos/H4/H4_center_day_tiles", 
            "path": "/%l/%s%y_%x",
            "fallbackPath": "/fallback/%s",
            "extension": "jpg",
            "tileResolution": 512,
            "maxLevel": 4,  
            "cubeResolution": 2768 
        },
        "hotSpots": [
            {
                "pitch": 2.4841515806497725,
                "yaw": 117.96640900318084,
                "type": "scene",
                "sceneId": "H4_entry_day",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "Corridor",
                "cssClass": "custom-nav-arrow point-right"
            }
          
        ]
    },
    "H4_center_night" : {
        // "title" : "cafeteria_day",
        "type": "multires",
        "multiRes" :{
            "basePath": "https://iiitdmj-assets.xyz/photos/H4/H4_center_night_tiles", 
            "path": "/%l/%s%y_%x",
            "fallbackPath": "/fallback/%s",
            "extension": "jpg",
            "tileResolution": 512,
            "maxLevel": 4,  
            "cubeResolution": 2768 
        },
        "hotSpots": [
            {
                "pitch": 4.4841515806497725,
                "yaw": 117.96640900318084,
                "type": "scene",
                "sceneId": "H4_entry_night",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "Corridor",
                "cssClass": "custom-nav-arrow point-right"
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