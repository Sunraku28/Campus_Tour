export const DSAgateScenes = {
    "DSA_gate_day" : {
        "type": "multires",
        "multiRes" :{
            "basePath": "https://pub-1908b9e1f7974e65bc14d41162f52c63.r2.dev/photos/DSA/DSA_gate_day_tiles", 
            "path": "/%l/%s%y_%x",
            "fallbackPath": "/fallback/%s",
            "extension": "jpg",
            "tileResolution": 512,
            "maxLevel": 4,  
            "cubeResolution": 2768 
        },
        "hotSpots": [
            {
                "pitch": -4.866262620208245,
                "yaw": -0.05742218458752146,
                "type": "scene",
                "sceneId": "DSA_center_day",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "Enter",
                "cssClass": "custom-nav-arrow point-up"

            },
            {
                "pitch": -2.437414953416843,
                "yaw": -170.9921764783016,
                "type": "scene",
                "sceneId": "lab_complex_gate_day",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "Lab Complex",
                "cssClass": "custom-nav-arrow point-up-right"
            },
            {
                "pitch": -2.4503724842108646,
                "yaw": 92.94391760723097,
                "type": "scene",
                "sceneId": "PHC_day",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "Primary Healthcare Center",
                "cssClass": "custom-nav-arrow point-up-left"
            }
            
        ]
        
    },
    "DSA_gate_night" : {
        "type": "multires",
        "multiRes" :{
            "basePath": "https://pub-1908b9e1f7974e65bc14d41162f52c63.r2.dev/photos/DSA/DSA_gate_night_tiles", 
            "path": "/%l/%s%y_%x",
            "fallbackPath": "/fallback/%s",
            "extension": "jpg",
            "tileResolution": 512,
            "maxLevel": 4,  
            "cubeResolution": 2768 
        },
        "hotSpots": [
           
            {
                "pitch": -8.218549168325294,
                "yaw": -2.7101164331515157,
                "type": "scene",
                "sceneId": "DSA_center_night",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "Enter",
                "cssClass": "custom-nav-arrow point-up"
            },
            {
                "pitch": 1.3740666768442416,
                "yaw": -172.95047126345517,
                "type": "scene",
                "sceneId": "lab_complex-gate_night",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "Lab Complex",
                "cssClass": "custom-nav-arrow point-up-right"
            },
            {
                "pitch": -0.38296433339148434,
                "yaw": 93.17632553917109,
                "type": "scene",
                "sceneId": "PHC_night",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "Primary Healthcare Center",
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