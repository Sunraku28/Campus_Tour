export const LHTCDESIGN1Scenes = {
    "LHTC_design1_day" : {

        "type": "multires",
        "multiRes" :{
            "basePath": "https://pub-1908b9e1f7974e65bc14d41162f52c63.r2.dev/photos/LHTC/design_down_tiles", 
            "path": "/%l/%s%y_%x",
            "fallbackPath": "/fallback/%s",
            "extension": "jpg",
            "tileResolution": 512,
            "maxLevel": 4,  
            "cubeResolution": 2768 
        },
        "hotSpots": [
            {
                "pitch": -12.188747224266516,
                "yaw": -177.5479165844457,
                "type": "scene",
                "sceneId": "LHTC_back_day",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "Exit",
                "cssClass": "custom-nav-door"
            },
            {
                "pitch": 7.468535771242949,
                "yaw": -38.44850602439312,
                "type": "scene",
                "sceneId": "LHTC_design3_day",
                "createTooltipArgs" : "",
                "createTooltipFunc": permanentText,
                //"cssClass": "custom-nav-arrow point-left"
            },
            {
                "pitch": 7.558872113327279,
                "yaw": 38.457113623636886,
                "type": "scene",
                "sceneId": "LHTC_design2_day",
                "createTooltipArgs" : "",
                "createTooltipFunc": permanentText,
                //"cssClass": "custom-nav-arrow point-left"
            }
        ]
    },
    "LHTC_design1_night" : {

        "type": "multires",
        "multiRes" :{
            "basePath": "https://pub-1908b9e1f7974e65bc14d41162f52c63.r2.dev/photos/LHTC/design_down_tiles", 
            "path": "/%l/%s%y_%x",
            "fallbackPath": "/fallback/%s",
            "extension": "jpg",
            "tileResolution": 512,
            "maxLevel": 4,  
            "cubeResolution": 2768 
        },
        "hotSpots": [
            {
                "pitch": -12.188747224266516,
                "yaw": -177.5479165844457,
                "type": "scene",
                "sceneId": "LHTC_back_night",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "Exit",
                "cssClass": "custom-nav-door"
            },
            {
                "pitch": 7.468535771242949,
                "yaw": -38.44850602439312,
                "type": "scene",
                "sceneId": "LHTC_design3_night",
                "createTooltipArgs" : "",
                "createTooltipFunc": permanentText,
                //"cssClass": "custom-nav-arrow point-left"
            },
            {
                "pitch": 7.558872113327279,
                "yaw": 38.457113623636886,
                "type": "scene",
                "sceneId": "LHTC_design2_night",
                "createTooltipArgs" : "",
                "createTooltipFunc": permanentText,
                //"cssClass": "custom-nav-arrow point-left"
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