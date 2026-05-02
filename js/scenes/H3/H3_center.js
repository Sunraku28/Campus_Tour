export const H3centerScenes = {
    "H3_center_day" : {
        "type": "multires",
        "multiRes" :{
            "basePath": "https://iiitdmj-assets.xyz/photos/H3/H3_center_day_tiles", 
            "path": "/%l/%s%y_%x",
            "fallbackPath": "/fallback/%s",
            "extension": "jpg",
            "tileResolution": 512,
            "maxLevel": 4,  
            "cubeResolution": 2768 
        },
        "hotSpots": [
            {
                "pitch":  -7.241216842335534,
                "yaw": 47.01191878588985,
                "type": "scene",
                "sceneId": "H3_entry_day",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "Corridor",
                "cssClass": "custom-nav-arrow point-up-left"
            }
          
        ]
    },
    "H3_center_night" : {
        "type": "multires",
        "multiRes" :{
            "basePath": "https://iiitdmj-assets.xyz/photos/H3/H3_center_night_tiles", 
            "path": "/%l/%s%y_%x",
            "fallbackPath": "/fallback/%s",
            "extension": "jpg",
            "tileResolution": 512,
            "maxLevel": 4,  
            "cubeResolution": 2768 
        },
        "hotSpots": [
            {
                "pitch": -6.657577082096749,
                "yaw": 77.2771968249566,
                "type": "scene",
                "sceneId": "H3_entry_night",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "Corridor",
                "cssClass": "custom-nav-arrow point-up-left"
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