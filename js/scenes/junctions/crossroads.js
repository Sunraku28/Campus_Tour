export const CrossroadsScenes = {
    "crossroads_day" : {
        "type": "multires",
        "multiRes" :{
            "basePath": "https://pub-1908b9e1f7974e65bc14d41162f52c63.r2.dev/photos/junction/crossroads_day_tiles", 
            "path": "/%l/%s%y_%x",
            "fallbackPath": "/fallback/%s",
            "extension": "jpg",
            "tileResolution": 512,
            "maxLevel": 4,  
            "cubeResolution": 2768 
        },
        "hotSpots": [
            {
                "pitch": -4.4927948191424845,
                "yaw": 176.41046213732454,
                "type": "scene",
                "sceneId": "mess_gate_day",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "Mess",
                "cssClass": "custom-nav-arrow point-up"
            },
            {   
                "pitch": -5.717114330968989,
                "yaw": -72.07469954490097,
                "type":"scene",
                "sceneId": "H1_gate_day",
                "cssClass": "custom-nav-arrow point-up-left",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "Vasishtha Hostel"
            } ,     
            {   
                "pitch": -3.312551281775746,
                "yaw": 116.987536517629,
                "type":"scene",
                "sceneId": "sac_gate_day",
                "cssClass": "custom-nav-arrow point-up-left",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "SAC"
            },        
            {   
                "pitch": -1.7325691394414662,
                "yaw": -4.535663120324079,
                "type":"scene",
                "sceneId": "trisection_day",
                "cssClass": "custom-nav-arrow point-up-right",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "Trisection"
            }           
        ]
    },
     "crossroads_night" : {
        "type": "multires",
        "multiRes" :{
            "basePath": "https://pub-1908b9e1f7974e65bc14d41162f52c63.r2.dev/photos/junction/crossroads_night_tiles", 
            "path": "/%l/%s%y_%x",
            "fallbackPath": "/fallback/%s",
            "extension": "jpg",
            "tileResolution": 512,
            "maxLevel": 4,  
            "cubeResolution": 2768 
        },
        "hotSpots": [
            {
                "pitch": -2.2349,
                "yaw": 166.36674413549753,
                "type": "scene",
                "sceneId": "mess_gate_night",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "Mess",
                "cssClass": "custom-nav-arrow point-up"
            },
            {   
                "pitch": -6.86836806088368,
                "yaw": -79.77295912301031,
                "type":"scene",
                "sceneId": "H1_gate_night",
                "cssClass": "custom-nav-arrow point-up-left",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "Vasishtha Hostel"
            } ,     
            {   
                "pitch": 0.12512684875552488,
                "yaw": 109.17991390938558,
                "type":"scene",
                "sceneId": "sac_gate_night",
                "cssClass": "custom-nav-arrow point-up-left",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "SAC"
            },        
            {   
                "pitch": -3.3471043960036693,
                "yaw": -10.04249453123437,
                "type":"scene",
                "sceneId": "trisection_night",
                "cssClass": "custom-nav-arrow point-up-right",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "Trisection"
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