export const nescafeScenes = {
    "nescafe_day" : {
        // "title" : "cafeteria_day",
        "type": "multires",
        "multiRes" :{
            "basePath": "https://pub-1908b9e1f7974e65bc14d41162f52c63.r2.dev/photos/nescafe/nescafe_day_tiles", 
            "path": "/%l/%s%y_%x",
            "fallbackPath": "/fallback/%s",
            "extension": "jpg",
            "tileResolution": 512,
            "maxLevel": 4,  
            "cubeResolution": 2768,
        },
        "hotSpots": [
            {
                "pitch": -6.598637045588629, 
                "yaw": -92.14867974396051,
                "type": "scene",
                "sceneId": "H1_gate_day",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "Way to Vasishtha",
                "cssClass": "custom-nav-arrow point-left"
            }
        ]
    },
    "nescafe_night" : { 
        "type": "multires",
        "multiRes" :{
            "basePath": "https://pub-1908b9e1f7974e65bc14d41162f52c63.r2.dev/photos/nescafe/nescafe_night_tiles", 
            "path": "/%l/%s%y_%x",
            "fallbackPath": "/fallback/%s",
            "extension": "jpg",
            "tileResolution": 512,
            "maxLevel": 4,  
            "cubeResolution": 2768 
        },
        "hotSpots": [
            {   
                "pitch":  -5.734979169781267,
                "yaw": -3.690042383381821,
                "type":"scene",
                "sceneId": "H1_gate_night",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "Way to Vasishtha",
                "cssClass": "custom-nav-arrow point-left"
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