export const H3H4junctionScenes = {
    "H3H4junc_day" : {
        "type": "multires",
        "multiRes" :{
            "basePath": "https://pub-1908b9e1f7974e65bc14d41162f52c63.r2.dev/photos/junction/H3H4_junction_day_tiles", 
            "path": "/%l/%s%y_%x",
            "fallbackPath": "/fallback/%s",
            "extension": "jpg",
            "tileResolution": 512,
            "maxLevel": 4,  
            "cubeResolution": 2768 
        },
        "hotSpots": [
            {
                "pitch":  -4.645769665309106,
                "yaw": 3.1176845006257645,
                "type": "scene",
                "sceneId": "panini_gate_day",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "Panini Hostel",
                "cssClass": "custom-nav-arrow point-up"
            },
            {   
                "pitch": -3.1911220175184307,
                "yaw": -92.55528286370253,
                "type":"scene",
                "sceneId": "H3_gate_day",
                "cssClass": "custom-nav-arrow point-up",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "Aryabhatta Hostel"
            } ,     
            {   
                "pitch": -4.1032399515064606,
                "yaw": 73.16987788198081,
                "type":"scene",
                "sceneId": "H4_gate_day",
                "cssClass": "custom-nav-arrow point-up-right",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "Vivekananda Hostel"
            }          
        ]
    },
    "H3H4junc_night" : {
        "type": "multires",
        "multiRes" :{
            "basePath": "https://pub-1908b9e1f7974e65bc14d41162f52c63.r2.dev/photos/junction/H3H4_junction_night_tiles", 
            "path": "/%l/%s%y_%x",
            "fallbackPath": "/fallback/%s",
            "extension": "jpg",
            "tileResolution": 512,
            "maxLevel": 4,  
            "cubeResolution": 2768 
        },
        "hotSpots": [
            {
                "pitch": -2.689291837970089,
                "yaw": -176.26515006598672,
                "type": "scene",
                "sceneId": "panini_gate_night",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "Panini Hostel",
                "cssClass": "custom-nav-arrow point-up"
            },
            {   
                "pitch": -3.8010451976734125,
                "yaw": 88.12433243835466,
                "type":"scene",
                "sceneId": "H3_gate_night",
                "cssClass": "custom-nav-arrow point-up",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "Aryabhatta Hostel"
            } ,     
            {   
                "pitch":  -5.164515802049632,
                "yaw": -102.23744099208258,
                "type":"scene",
                "sceneId": "H4_gate_night",
                "cssClass": "custom-nav-arrow point-up-right",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "Vivekananda Hostel"
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