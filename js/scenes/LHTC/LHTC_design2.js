export const LHTCDESIGN2Scenes = {
    "LHTC_design2_day" : {

        "type": "multires",
        "multiRes" :{
            "basePath": "https://iiitdmj-assets.xyz/photos/LHTC/design_up_right_tiles", 
            "path": "/%l/%s%y_%x",
            "fallbackPath": "/fallback/%s",
            "extension": "jpg",
            "tileResolution": 512,
            "maxLevel": 4,  
            "cubeResolution": 2768 
        },
        "hotSpots": [
            {
                "pitch":  -10.539225370293435,
                "yaw": 145.68429232699037,
                "type": "scene",
                "sceneId": "LHTC_design1_day",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "Go downstairs",
                //"cssClass": "custom-nav-arrow point-left"
            },
        ]
    },
    "LHTC_design2_night" : {

        "type": "multires",
        "multiRes" :{
            "basePath": "https://iiitdmj-assets.xyz/photos/LHTC/design_up_right_tiles", 
            "path": "/%l/%s%y_%x",
            "fallbackPath": "/fallback/%s",
            "extension": "jpg",
            "tileResolution": 512,
            "maxLevel": 4,  
            "cubeResolution": 2768 
        },
        "hotSpots": [
             {
                "pitch":  -10.539225370293435,
                "yaw": 145.68429232699037,
                "type": "scene",
                "sceneId": "LHTC_design1_night",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "Go downstairs",
                //"cssClass": "custom-nav-arrow point-left" 
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