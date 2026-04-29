export const librarycenterScenes = {
    "library_center_day" : {
        "type": "multires",
        "multiRes" :{
            "basePath": "https://pub-1908b9e1f7974e65bc14d41162f52c63.r2.dev/photos/library/library_center_tiles", 
            "path": "/%l/%s%y_%x",
            "fallbackPath": "/fallback/%s",
            "extension": "jpg",
            "tileResolution": 512,
            "maxLevel": 4,  
            "cubeResolution": 2768 
        },
        "hotSpots": [
            {
                "pitch": -2.220925236779909,
                "yaw": -172.71655039955482,
                "type": "scene",
                "sceneId": "library_gate_day",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "Exit",
                "cssClass": "custom-nav-door"
            
            },
            {
                "pitch": 2.8983009993886263,
                "yaw": 10.03904673818371,
                "type": "scene",
                "sceneId": "library_day",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "Library",
                
            },
            {
                "pitch": 1.9838928229246526,
                "yaw":  21.038148244162432,
                "type": "scene",
                "sceneId": "reading_room_day",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": " Reading Room",
             
            },
            {
                "pitch":  54.08966624666309,
                "yaw": -17.638573394472427,
                "type": "scene",
                "sceneId": "seminarhall_day",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "Seminar hall",
                
            },
            {
                "pitch": 67.59981778710072,
                "yaw":-4.053355435961385 ,
                "type": "scene",
                "sceneId": "tinkering_lab_day",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": " Tinkering Lab",
               
            },
            {
                "pitch":  2.7776174271394507,
                "yaw": -4.954798145086743,
                "type": "scene",
                "sceneId": "computer_lab_day",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "Computer Lab",
               
            }
        ]
    },
    "library_center_night" : {
        "type": "multires",
        "multiRes" :{
            "basePath": "https://pub-1908b9e1f7974e65bc14d41162f52c63.r2.dev/photos/library/library_center_tiles", 
            "path": "/%l/%s%y_%x",
            "fallbackPath": "/fallback/%s",
            "extension": "jpg",
            "tileResolution": 512,
            "maxLevel": 4,  
            "cubeResolution": 2768 
        },
        "hotSpots": [
            {
                "pitch": -2.220925236779909,
                "yaw": -172.71655039955482 ,
                "type": "scene",
                "sceneId": "library_gate_night",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "Exit",
                "cssClass": "custom-nav-door"
            
            },
            {
                "pitch": 2.2983009993886263,
                "yaw": 16.83904673818371,
                "type": "scene",
                "sceneId": "library_night",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "Library",
                
            },
            {
                "pitch":1.9838928229246526,
                "yaw":21.038148244162432,
                "type": "scene",
                "sceneId": "reading_room_night",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": " Reading Room",
                
            },
            {
                "pitch": 54.08966624666309,
                "yaw": -17.638573394472427,
                "type": "scene",
                "sceneId": "seminarhall_night",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": " Seminar hall",
                
            },
            {
                "pitch":  67.59981778710072,
                "yaw": -4.053355435961385,
                "type": "scene",
                "sceneId": "tinkering_lab_night",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "Tinkering Lab",
                
            },
            {
                "pitch":  2.7776174271394507,
                "yaw":  -4.954798145086743,
                "type": "scene",
                "sceneId": "computer_lab_night",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "Computer Lab",
                
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