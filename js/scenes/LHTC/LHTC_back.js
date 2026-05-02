export const LHTCBACKGATEScenes = {
    "LHTC_back_day" : {
        "type": "multires",
        "multiRes" :{
            "basePath": "https://iiitdmj-assets.xyz/photos/LHTC/lhtc_back_day_tiles", 
            "path": "/%l/%s%y_%x",
            "fallbackPath": "/fallback/%s",
            "extension": "jpg",
            "tileResolution": 512,
            "maxLevel": 4,  
            "cubeResolution": 2768 
        },
        "hotSpots": [
            {
                "pitch":  2.6150247294518607,
                "yaw": 97.18481862216592,
                "type": "scene",
                "sceneId": "LHTC_102_day",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "L-102",
                
            },
            {
                "pitch": 3.453618741940521,
                "yaw": -96.06668026737331 ,
                "type": "scene",
                "sceneId": "racing_day",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "Racing Workshop",
                
            },
            {
                "pitch":  4.534944155328001,
                "yaw": -29.712088585191385 ,
                "type": "scene",
                "sceneId": "LHTC_103_day",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": " L-103",
                
            },
            {
                "pitch": 4.138229270513161,
                "yaw": -53.0243602569 ,
                "type": "scene",
                "sceneId": "LHTC_104_day",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "L-104",
            
            },
            {
                "pitch": 3.3034257972141288,
                "yaw": -81.07503397110777 ,
                "type": "scene",
                "sceneId": "LHTC_cr_day",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": " CR",
               
            },
            {
                "pitch": 4.344241210723066,
                "yaw":69.56018351526286 ,
                "type": "scene",
                "sceneId": "LHTC_design1_day",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "DESIGN LAB",
               
            },
            {
                "pitch": 5.081353047310221,
                "yaw": 1.9878965391311225 ,
                "type": "scene",
                "sceneId": "LHTC_frontgate_day",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "Front Gate",
                
            },
            {
                "pitch": -4.242079437249042,
                "yaw": 167.97235460925774,
                "type": "scene",
                "sceneId": "lab_complex_gate_day",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "Core Lab",
                "cssClass": "custom-nav-arrow point-up-left"
            },
            {
                "pitch": -3.7183993123584425,
                "yaw": -173.48999913932775,
                "type": "scene",
                "sceneId": "library_gate_day",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "Library",
                "cssClass": "custom-nav-arrow point-up-right"
            },  
        ]
    },
    "LHTC_back_night" : {
        "type": "multires",
        "multiRes" :{
            "basePath": "https://iiitdmj-assets.xyz/photos/LHTC/LHTC_back_night_tiles", 
            "path": "/%l/%s%y_%x",
            "fallbackPath": "/fallback/%s",
            "extension": "jpg",
            "tileResolution": 512,
            "maxLevel": 4,  
            "cubeResolution": 2768 
        },
        "hotSpots": [
            {
                "pitch": 2.6150247294518607,
                "yaw": 97.18481862216592,
                "type": "scene",
                "sceneId": "LHTC_102_night",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "L-102",
                
            },
            {
                "pitch": 3.453618741940521,
                "yaw": -96.06668026737331,
                "type": "scene",
                "sceneId": "racing_night",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": " Racing Workshop",
                
            },
            {
                "pitch":  4.534944155328001,
                "yaw": -29.712088585191385 ,
                "type": "scene",
                "sceneId": "LHTC_103_night",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": " L-103",
                
            },
            {
                "pitch": 4.138229270513161,
                "yaw": -53.0243602569 ,
                "type": "scene",
                "sceneId": "LHTC_104_night",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": " L-104",
                
            },
            {
                "pitch": 4.344241210723066,
                "yaw": 69.56018351526286,
                "type": "scene",
                "sceneId": "LHTC_design1_night",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "DESIGN Studio",
                
            },
            {
                "pitch": 3.3034257972141288,
                "yaw": -81.07503397110777,
                "type": "scene",
                "sceneId": "LHTC_cr_night",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "CR",
               
            },
            {
                "pitch": 5.081353047310221,
                "yaw": 1.9878965391311225,
                "type": "scene",
                "sceneId": "LHTC_frontgate_night",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": " Front Gate",
                
            },
             {
                "pitch":  -5.780698313243123,
                "yaw": 176.2401657384555,
                "type": "scene",
                "sceneId": "lab_complex_gate_night",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": " Core Lab",
                "cssClass": "custom-nav-arrow point-up-left"
            },  
            {
                "pitch": -6.1377792349049125,
                "yaw": -168.22764228740832 ,
                "type": "scene",
                "sceneId": "library_gate_night",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "Library",
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