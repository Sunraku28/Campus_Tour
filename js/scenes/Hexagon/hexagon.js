
export const HexagonScenes = {
    "hexagon_day" : {
        "type": "multires",
        "multiRes" :{
            "basePath": "https://iiitdmj-assets.xyz/photos/hexagon/hexagon_tiles", 
            "path": "/%l/%s%y_%x",
            "fallbackPath": "/fallback/%s",
            "extension": "jpg",
            "tileResolution": 512,
            "maxLevel": 4,  
            "cubeResolution": 2768 
        },
        "hotSpots": [
            {
                "pitch": -12.0,
                "yaw": 179.5 ,
                "type": "scene",
                "sceneId": "hexagon_gate_day",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "Exit",
                "cssClass": "custom-nav-door"
            }
          
        ]
    },
    "hexagon_night" : {
        "type": "multires",
        "multiRes" :{
            "basePath": "https://iiitdmj-assets.xyz/photos/hexagon/hexagon_tiles", 
            "path": "/%l/%s%y_%x",
            "fallbackPath": "/fallback/%s",
            "extension": "jpg",
            "tileResolution": 512,
            "maxLevel": 4,  
            "cubeResolution": 2768 
        },
        "hotSpots": [
            {
                "pitch": -12.0,
                "yaw": 179.5 ,
                "type": "scene",
                "sceneId": "hexagon_gate_night",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "Exit",
                "cssClass": "custom-nav-door"
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