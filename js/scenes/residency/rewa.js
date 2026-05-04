import { getNextBusInfo } from '../../bus_tracker/bus_tracker.js';
export const rewaScenes = {
    "rewa_day" : {
        "title" : "Rewa Residency",
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
            },
            {
                "pitch": 6.484895161431426,
                "yaw": -122.40284454344287,
                "type": "custom",
                "cssClass": "bus-tracker-hotspot", 
                "createTooltipFunc": busHotspotCreator
            }
        ]
    },
    "rewa_night" : {
        "title" : "Rewa Residency",
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
            },
               {
                "pitch": 6.484895161431426,
                "yaw": -122.40284454344287,
                "type": "custom",
                "cssClass": "bus-tracker-hotspot", 
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