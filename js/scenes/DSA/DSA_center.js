export const DSAcenterScenes = {
    "DSA_center_day" : {
        "type": "multires",
        "multiRes" :{
            "basePath": "https://iiitdmj-assets.xyz/photos/DSA/DSA_center_tiles", // <- needs to be changed 
            "path": "/%l/%s%y_%x",
            "fallbackPath": "/fallback/%s",
            "extension": "jpg",
            "tileResolution": 512,
            "maxLevel": 4,  
            "cubeResolution": 2768 
        },
        "hotSpots": [
            {
                "pitch": -1.0771337277284263,
                "yaw": 1.3314673365001763,
                "type": "scene",
                "sceneId": "DSA_gate_day",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "Exit",
                "cssClass": "custom-nav-door"
            },
            {
                "pitch": 0.6982043588728817,
                "yaw": 116.98367462735489,
                "type": "scene",
                "sceneId": "conference_room_day",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "Conference Room",
                "cssClass": "custom-nav-door"
            },
            {
                "pitch": 0.21507718723934813,
                "yaw": 39.013376105302164,
                "type": "scene",
                //"sceneId": "",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "Academic office",
                // "cssClass": "custom-nav-door"
            },
            {
                "pitch": 0.2837096043940475,
                "yaw": 14.50430533921486,
                "type": "scene",
                // "sceneId": "",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "APS Telescope Room",
                // "cssClass": "custom-nav-door"
            },
        ]
    },
    "DSA_center_night" : {
        "type": "multires",
        "multiRes" :{
            "basePath": "https://iiitdmj-assets.xyz/photos/DSA/DSA_center_tiles", // <- needs to be changed 
            "path": "/%l/%s%y_%x",
            "fallbackPath": "/fallback/%s",
            "extension": "jpg",
            "tileResolution": 512,
            "maxLevel": 4,  
            "cubeResolution": 2768 
        },
        "hotSpots": [
            {
                "pitch": -1.0771337277284263,
                "yaw": 1.3314673365001763,
                "type": "scene",
                "sceneId": "DSA_gate_night",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "Exit",
                "cssClass": "custom-nav-door"
            },
            {
                "pitch": 0.6982043588728817,
                "yaw": 116.98367462735489,
                "type": "scene",
                "sceneId": "conference_room_night",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "Conference Room",
                "cssClass": "custom-nav-door"
            },
            {
                "pitch": 0.21507718723934813,
                "yaw": 39.013376105302164,
                "type": "scene",
                //"sceneId": "",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "Academic office",
                // "cssClass": "custom-nav-door"
            },
            {
                "pitch": 0.2837096043940475,
                "yaw": 14.50430533921486,
                "type": "scene",
                // "sceneId": "",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "APS Telescope Room",
                // "cssClass": "custom-nav-door"
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