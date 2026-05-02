export const sacgateScenes = {
    "sac_gate_day" : {
        "type": "multires",
        "multiRes" :{
            "basePath": "https://iiitdmj-assets.xyz/photos/SAC/sac_gate_day_tiles", 
            "path": "/%l/%s%y_%x",
            "fallbackPath": "/fallback/%s",
            "extension": "jpg",
            "tileResolution": 512,
            "maxLevel": 4,  
            "cubeResolution": 2768 
        },
        "hotSpots": [
            {
                "pitch": 4.3070625726545155,
                "yaw": -36.93739368561325,
                "type": "scene",
                "sceneId": "badminton_day",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "Badminton",
                //"cssClass": "custom-nav-door"
            },
            {
                "pitch": 4.466102544204291,
                "yaw": -29.10319076984364,
                "type": "scene",
                "sceneId": "tt_day",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "Table Tennis",
                //"cssClass": "custom-nav-door"
            },
            {
                "pitch": 4.496693148424977,
                "yaw": -21.011791668779598,
                "type": "scene",
                "sceneId": "kabaddi_day",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "Kabbadi",
                //"cssClass": "custom-nav-door"
            },
            {
                "pitch":  4.534688673982435,
                "yaw": -44.59136379505944,
                "type": "scene",
               // "sceneId": "gym_day",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "Gym",
                //"cssClass": "custom-nav-door"
            },
            {
                "pitch":  4.640524524606379,
                "yaw": -50.97287012268587,
                "type": "scene",
                "sceneId": "saaz_day",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "Saaz",
                //"cssClass": "custom-nav-door"
            },
            {
                "pitch": -5.49111578339722,
                "yaw": 86.97080177809721,
                "type": "scene",
                "sceneId": "ms_gate_day",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "Maa Saraswati",
                "cssClass": "custom-nav-arrow point-up-right"
            },
            {
                "pitch": -4.8586905942810876,
                "yaw": -95.04971478216206,
                "type": "scene",
                "sceneId": "crossroads_day",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "Crossroads",
                "cssClass": "custom-nav-arrow point-up"
            },
            {
                "pitch": 4.603149968211627,
                "yaw": -161.43649337683624,
                "type": "scene",
                "sceneId": "ground_day",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "Ground",
                //"cssClass": "custom-nav-arrow point-left"
            },
             {
                "pitch": -2.421302574603199,
                "yaw": 74.3649167752787,
                "type": "scene",
                "sceneId": "LHTC_frontgate_day",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "LHTC",
                "cssClass": "custom-nav-arrow point-left"
            }


          
        ]
    },
    "sac_gate_night" : {
        "type": "multires",
        "multiRes" :{
            "basePath": "https://iiitdmj-assets.xyz/photos/SAC/sac_gate_night_tiles", 
            "path": "/%l/%s%y_%x",
            "fallbackPath": "/fallback/%s",
            "extension": "jpg",
            "tileResolution": 512,
            "maxLevel": 4,  
            "cubeResolution": 2768 
        },
        "hotSpots": [
            {
                "pitch": 5.5885614793162485,
                "yaw":  58.609204024460716 ,
                "type": "scene",
                "sceneId": "badminton_night",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "Badminton",
               // "cssClass": "custom-nav-arrow point-left"
            },
            {
                "pitch":  6.160758410143725,
                "yaw": 48.43581910045573,
                "type": "scene",
               // "sceneId": "gym_night",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "Gym",
                //"cssClass": "custom-nav-door"
            },
            {
                "pitch":  5.7633545553767735,
                "yaw": 74.98597295954296,
                "type": "scene",
                "sceneId": "kabaddi_night",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "Kabbadi",
                //"cssClass": "custom-nav-door"
            },
            {
                "pitch": -3.5513486727441106,
                "yaw": -178.38508822538262 ,
                "type": "scene",
                "sceneId": "ms_gate_night",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "Way to Maa Saraswati",
                "cssClass": "custom-nav-arrow point-up-right"
            },
            {
                "pitch": -0.7084358458469312,
                "yaw": -2.9965971587470563 ,
                "type": "scene",
                "sceneId": "crossroads_night",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "Crossroads",
                "cssClass": "custom-nav-arrow point-up"
            },
            {
                "pitch":  1.653280699072476,
                "yaw": -73.13668516437816 ,
                "type": "scene",
                "sceneId": "ground_night",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": " ground",
                // "cssClass": "custom-nav-arrow point-up"
            },
            {
                "pitch": -3.6467188634626195,
                "yaw":163.05811253815799 ,
                "type": "scene",
                "sceneId": "LHTC_frontgate_night",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "LHTC",
                "cssClass": "custom-nav-arrow point-left"
            },
            {
                "pitch": 5.608390621254272,
                "yaw":  66.89945808576604,
                "type": "scene",
                "sceneId": "tt_night",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "Table Tennis",
                //"cssClass": "custom-nav-door"
            },
            {
                "pitch": 5.920813146483933,
                "yaw": 43.06322997628052,
                "type": "scene",
                "sceneId": "saaz_night",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "Saaz",
                //"cssClass": "custom-nav-door"
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