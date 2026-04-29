export const OatScenes= {
    "Oat_day" : {
        // "title" : "cafeteria_day",
        "type": "multires",
        "multiRes" :{
            "basePath": "https://pub-1908b9e1f7974e65bc14d41162f52c63.r2.dev/photos/oat/oat_day_tiles", 
            "path": "/%l/%s%y_%x",
            "fallbackPath": "/fallback/%s",
            "extension": "jpg",
            "tileResolution": 512,
            "maxLevel": 4,  
            "cubeResolution": 2768 
        },
        "hotSpots": [
            {
                "pitch": -1.5874363638933877,
                "yaw": -155.85466173003684,
                "type": "scene",
                "sceneId": "LHTC_frontgate_day",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "Front Gate",
                "cssClass": "custom-nav-arrow point-right",
            }
    
        ]
    },
    "Oat_night" : { 
        "type": "multires",
        "multiRes" :{
            "basePath": "https://pub-1908b9e1f7974e65bc14d41162f52c63.r2.dev/photos/oat/oat_day_tiles", 
            "path": "/%l/%s%y_%x",
            "fallbackPath": "/fallback/%s",
            "extension": "jpg",
            "tileResolution": 512,
            "maxLevel": 4,  
            "cubeResolution": 2768 
        },
        "hotSpots": [
            {   
                "pitch": -1.5874363638933877,
                "yaw": -155.85466173003684,
                "type":"scene",
                "sceneId": "LHTC_frontgate_night",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "Front Gate",
                "cssClass": "custom-nav-arrow point-right",
            }        
        ]
    }
};

function permanentText(hotSpotDiv, args) {

    var textLabel = document.createElement('span');
    textLabel.innerHTML = args;
    
    // custom text 
    textLabel.classList.add('custom-permanent-label');
    
    hotSpotDiv.appendChild(textLabel);
}