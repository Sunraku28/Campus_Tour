import { getNextBusInfo } from '../../bus_tracker/bus_tracker.js';
export const msgateScenes = {
    "ms_gate_day" : {
        "type": "multires",
        "multiRes" :{
            "basePath": "https://iiitdmj-assets.xyz/photos/ms/ms_gate_day_tiles", 
            "path": "/%l/%s%y_%x",
            "fallbackPath": "/fallback/%s",
            "extension": "jpg",
            "tileResolution": 512,
            "maxLevel": 4,  
            "cubeResolution": 2768 
        },
        "hotSpots": [
            {
                "pitch":  -1.708038260636751,
                "yaw": 165.21756631859793,
                "type": "scene",
                "sceneId": "sac_gate_day",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "SAC",
                "cssClass": "custom-nav-arrow point-up"
            },
            {
                "pitch":  0.9934151173320577,
                "yaw": -30.69265078379692,
                "type": "scene",
                "sceneId": "panini_gate_day",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "Panini Hostel",
                "cssClass": "custom-nav-arrow point-up"
            },
        {
               "pitch": 7.88881338221912, 
               "yaw": -42.96124096262982,
                "type": "custom",
                "cssClass": "bus-tracker-hotspot", // <-- I ADDED THIS FIX HERE!
                "createTooltipFunc": busHotspotCreator
    }
]
            
        
    },
    "ms_gate_night" : {
        "type": "multires",
        "multiRes" :{
            "basePath": "https://iiitdmj-assets.xyz/photos/ms/ms_gate_night_tiles", 
            "path": "/%l/%s%y_%x",
            "fallbackPath": "/fallback/%s",
            "extension": "jpg",
            "tileResolution": 512,
            "maxLevel": 4,  
            "cubeResolution": 2768 
        },
        "hotSpots": [
          {
                "pitch": -1.9409883342632535,
                "yaw": 170.23386368830106,

                "type": "scene",
                "sceneId": "sac_gate_night",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "SAC",
                "cssClass": "custom-nav-arrow point-up"
            },
             {
                "pitch":  0.942129822509562,
                "yaw": -27.416270598865857,
                "type": "scene",
                "sceneId": "panini_gate_night",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "Panini Hostel",
                "cssClass": "custom-nav-arrow point-up"

            },
            {
                "pitch": 7.958455883911304, 
                "yaw": -41.75387622377619 ,
                "type": "custom",
                "cssClass": "bus-tracker-hotspot", // <-- I ADDED THIS FIX HERE!
                "createTooltipFunc": busHotspotCreator
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
function busHotspotCreator(hotSpotDiv, args) {
    let busData = getNextBusInfo();
  hotSpotDiv.innerHTML = `
    <div class="bus-label">Next Bus</div>
    <div class="bus-countdown-display" style="color: ${busData.color};">
        ${busData.text}
    </div>
`;
}