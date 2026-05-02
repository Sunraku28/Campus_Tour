export const LHTC104Scenes = {
    "LHTC_104_day" : {
        "type": "multires",
        "multiRes" :{
            "basePath": "https://iiitdmj-assets.xyz/photos/LHTC/L104_tiles", 
            "path": "/%l/%s%y_%x",
            "fallbackPath": "/fallback/%s",
            "extension": "jpg",
            "tileResolution": 512,
            "maxLevel": 4,  
            "cubeResolution": 2768 
        },
        "hotSpots": [
            {
                "pitch": -6.287483017277589, 
                "yaw": 78.1005417526785,
                "type": "scene",
                "sceneId": "LHTC_back_day",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "Exit",
                "cssClass": "custom-nav-door"
            },
        ]
    },
    "LHTC_104_night" : {
        "type": "multires",
        "multiRes" :{
            "basePath": "https://iiitdmj-assets.xyz/photos/LHTC/L104_tiles", 
            "path": "/%l/%s%y_%x",
            "fallbackPath": "/fallback/%s",
            "extension": "jpg",
            "tileResolution": 512,
            "maxLevel": 4,  
            "cubeResolution": 2768 
        },
        "hotSpots": [
            {
                "pitch": -6.287483017277589, 
                "yaw": 78.1005417526785,
                "type": "scene",
                "sceneId": "LHTC_back_night",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "Exit",
                "cssClass": "custom-nav-door"
            },
                      
          
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