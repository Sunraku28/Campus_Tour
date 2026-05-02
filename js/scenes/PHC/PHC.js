export const PHCScenes = {
    "PHC_day" : {
        "type": "multires",
        "multiRes" :{
            "basePath": "https://iiitdmj-assets.xyz/photos/residencies/amul_day_tiles", 
            "path": "/%l/%s%y_%x",
            "fallbackPath": "/fallback/%s",
            "extension": "jpg",
            "tileResolution": 512,
            "maxLevel": 4,  
            "cubeResolution": 2768 
        },
        "hotSpots": [
            {
                "pitch": -4.469403063948325,
                "yaw": 142.76101634865412,
                "type": "scene",
                "sceneId": "library_gate_day",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "Library",
                "cssClass": "custom-nav-arrow point-up-right"
            },
            {
                "pitch": -1.9448544944718414,
                "yaw": 87.90479881352012,
                "type": "scene",
                "sceneId": "visitor_hostel_day",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "Visitor's Hostel",
                "cssClass": "custom-nav-arrow point-up-left"
            },
            {
                "pitch": -1.4036137192803513,
                "yaw": -88.30369399044059,
                "type": "scene",
                "sceneId": "DSA_gate_day",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "DSA Office",
                "cssClass": "custom-nav-arrow point-up-left"
            },
            {
                "pitch": 5.61015502462867,
                "yaw": -63.04303605655433,
                "type": "scene",
                //"sceneId": "DSA_gate_day",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "Primary Healthcare Center",
                //"cssClass": "custom-nav-arrow point-up-left"
            }
        ]
    },
    "PHC_night" : {
        "type": "multires",
        "multiRes" :{
            "basePath": "https://iiitdmj-assets.xyz/photos/residencies/amul_night_tiles", 
            "path": "/%l/%s%y_%x",
            "fallbackPath": "/fallback/%s",
            "extension": "jpg",
            "tileResolution": 512,
            "maxLevel": 4,  
            "cubeResolution": 2768 
        },
        "hotSpots": [
            {
                "pitch": -3.7847044333480127,
                "yaw": 151.28246758635166,
                "type": "scene",
                "sceneId": "library_gate_night",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "Library",
                "cssClass": "custom-nav-arrow point-up-right"
            },
            {
                "pitch": -1.9448544944718414,
                "yaw": 87.90479881352012,
                "type": "scene",
                "sceneId": "visitor_hostel_night",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "Visitor's Hostel",
                "cssClass": "custom-nav-arrow point-up-left"
            },
            {
                "pitch": -1.4036137192803513,
                "yaw": -88.30369399044059,
                "type": "scene",
                "sceneId": "DSA_gate_night",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "DSA Office",
                "cssClass": "custom-nav-arrow point-up-left"
            },
            {
                "pitch":  4.235469363796585,
                "yaw": -61.43093401585403,
                "type": "scene",
                //"sceneId": "DSA_gate_day",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "Primary Healthcare Center",
                //"cssClass": "custom-nav-arrow point-up-left"
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