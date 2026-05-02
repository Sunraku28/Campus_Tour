export const HexagongateScenes = {
    "hexagon_gate_day" : {
        "type": "multires",
        "multiRes" :{
            "basePath": "https://iiitdmj-assets.xyz/photos/hexagon/hexagon_gate_day_tiles", 
            "path": "/%l/%s%y_%x",
            "fallbackPath": "/fallback/%s",
            "extension": "jpg",
            "tileResolution": 512,
            "maxLevel": 4,  
            "cubeResolution": 2768 
        },
        "hotSpots": [
            {
                "pitch": 3.1342413529238016,
                "yaw": 1.2910969303431485,
                "type": "scene",
                "sceneId": "hexagon_day",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "Enter",
                "cssClass": "custom-nav-door"
            },
            {
                "pitch": -5.153625321171836,
                "yaw": -107.61793635625412,
                "type": "scene",
                "sceneId": "lab_complex_gate_day",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "Lab Complex",
                "cssClass": "custom-nav-arrow point-up-left"
            },
            {
                "pitch": -4.7109957608120805,
                "yaw": -96.71353577106811,
                "type": "scene",
                "sceneId": "LHTC_frontgate_day",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "LHTC",
                "cssClass": "custom-nav-arrow point-up-right"
            },
            {
                "pitch":  -3.1173227654686593,
                "yaw": 81.5481627380389,
                "type": "scene",
                "sceneId": "trisection_day",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "Trisection",
                "cssClass": "custom-nav-arrow point-up-right"
            },
        ]
    },
    "hexagon_gate_night" : {
        "type": "multires",
        "multiRes" :{
            "basePath": "https://iiitdmj-assets.xyz/photos/hexagon/hexagon_gate_night_tiles", 
            "path": "/%l/%s%y_%x",
            "fallbackPath": "/fallback/%s",
            "extension": "jpg",
            "tileResolution": 512,
            "maxLevel": 4,  
            "cubeResolution": 2768 
        },
        "hotSpots": [
             {
                "pitch": 3.5722178169601997,
                "yaw": -0.29583199647816183,
                "type": "scene",
                "sceneId": "hexagon_night",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "Enter",
                "cssClass": "custom-nav-door"
            },
            {
                "pitch": -2.538161772033782,
                "yaw": -111.0485946124272,
                "type": "scene",
                "sceneId": "lab_complex_gate_night",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "Lab Complex",
                "cssClass": "custom-nav-arrow point-up-left"
            },
            {
                "pitch": -2.7348531486514673,
                "yaw": -98.08763223528581,
                "type": "scene",
                "sceneId": "LHTC_frontgate_night",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "LHTC",
                "cssClass": "custom-nav-arrow point-up-right"
            },
            {
                "pitch": -4.4751969380372,
                "yaw": 78.0871290017149,
                "type": "scene",
                "sceneId": "trisection_night",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "Trisection",
                "cssClass": "custom-nav-arrow point-up-right"
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