export const LHTCDESIGN3Scenes = {
    "LHTC_design3_day" : {

        "type": "multires",
        "multiRes" :{
            "basePath": "/tiles/LHTC/design_up_left_tiles", 
            "path": "/%l/%s%y_%x",
            "fallbackPath": "/fallback/%s",
            "extension": "jpg",
            "tileResolution": 512,
            "maxLevel": 4,  
            "cubeResolution": 2768 
        },
        "hotSpots": [
            {
                "pitch":  -13.54709947974096,
                "yaw": -177.46717271991332,
                "type": "scene",
                "sceneId": "LHTC_design1_day",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "Go downstairs",
                //"cssClass": "custom-nav-arrow point-left"
            },
        ]
    },
    "LHTC_design3_night" : {

        "type": "multires",
        "multiRes" :{
            "basePath": "https://pub-1908b9e1f7974e65bc14d41162f52c63.r2.dev/photos/LHTC/design_up_left_tiles", 
            "path": "/%l/%s%y_%x",
            "fallbackPath": "/fallback/%s",
            "extension": "jpg",
            "tileResolution": 512,
            "maxLevel": 4,  
            "cubeResolution": 2768 
        },
        "hotSpots": [
             {
               "pitch":  -13.54709947974096,
                "yaw": -177.46717271991332,
                "type": "scene",
                "sceneId": "LHTC_design1_day",
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