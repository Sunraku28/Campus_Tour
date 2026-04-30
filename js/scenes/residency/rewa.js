export const rewaScenes = {
    "rewa_day" : {
        "type": "multires",
        "multiRes" :{
            "basePath": "https://iiitdmj-assets.xyz/photos/residencies/rewa_tiles", 
            "path": "/%l/%s%y_%x",
            "fallbackPath": "/fallback/%s",
            "extension": "jpg",
            "tileResolution": 512,
            "maxLevel": 4,  
            "cubeResolution": 2768 
        },
        "hotSpots": [
            {
                "pitch": -4.3533432751661088,
                "yaw": -90.67186031951765,
                "type": "scene",
                "sceneId": "visitor_hostel_day",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "Visitor's Hostel",
                "cssClass": "custom-nav-arrow point-up-left"
            },
            {
                "pitch": -1.5213168520730211,
                "yaw": 89.53990340081707,
                "type": "scene",
                "sceneId": "narmada_day",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "Narmada Residency",
                "cssClass": "custom-nav-arrow point-up"
            },
            {
                "pitch":  3.4525634775448735,
                "yaw": 160.33823943769255,
                "type": "scene",
                //"sceneId": "narmada_day",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "Mandir",
                //"cssClass": "custom-nav-arrow point-up"
            }
        ]
    },
    "rewa_night" : {
        "type": "multires",
        "multiRes" :{
            "basePath": "https://iiitdmj-assets.xyz/photos/residencies/rewa_tiles", 
            "path": "/%l/%s%y_%x",
            "fallbackPath": "/fallback/%s",
            "extension": "jpg",
            "tileResolution": 512,
            "maxLevel": 4,  
            "cubeResolution": 2768 
        },
        "hotSpots": [
            {
                "pitch": -4.3533432751661088,
                "yaw": -90.67186031951765,
                "type": "scene",
                "sceneId": "visitor_hostel_night",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "Visitor's Hostel",
                "cssClass": "custom-nav-arrow point-up-left"
            },
            {
                "pitch": -1.5213168520730211,
                "yaw": 89.53990340081707,
                "type": "scene",
                "sceneId": "narmada_night",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "Narmada Residency",
                "cssClass": "custom-nav-arrow point-up"
            },
            {
                "pitch":  3.4525634775448735,
                "yaw": 160.33823943769255,
                "type": "scene",
                //"sceneId": "narmada_day",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "Mandir",
                //"cssClass": "custom-nav-arrow point-up"
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