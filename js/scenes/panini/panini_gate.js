export const paninigateScenes = {
    "panini_gate_day": {
        // "title": "Main Gate Day",
        "type": "multires",
        "multiRes" :{
            "basePath": "https://iiitdmj-assets.xyz/photos/panini/panini_gate_day_tiles", 
            "path": "/%l/%s%y_%x",
            "fallbackPath": "/fallback/%s",
            "extension": "jpg",
            "tileResolution": 512,
            "maxLevel": 4,  
            "cubeResolution": 2768 
        },
        "hotSpots": [
            {
                "pitch": -2.0697236858823542, 
                "yaw": -1.4934150431415651, 
                "type": "scene",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "Enter",
                "sceneId": "panini_center_day",
                "cssClass": "custom-nav-door"
            },
        
            {
                "pitch":  -4.3774973371105075,
                "yaw": -94.63788297914037,
                "type": "scene",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "H3-H4Junction",
                "sceneId": "H3H4junc_day",
                "cssClass": "custom-nav-arrow point-up"
            },
            {
                "pitch": -4.605294960942267,
                "yaw": 87.25861370743176, 
                "type": "scene",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "Maa Saraswati Hostel",
                "sceneId": "ms_gate_day",
                "cssClass": "custom-nav-arrow point-up"
            }
        ]
         
    },
    "panini_gate_night": {
        // "title": "Main Gate Night",
        "type": "multires",
        "multiRes": {
            "basePath": "https://iiitdmj-assets.xyz/photos/panini/panini_gate_night_tiles", 
            "path": "/%l/%s%y_%x",
            "fallbackPath": "/fallback/%s",
            "extension": "jpg",
            "tileResolution": 512,
            "maxLevel": 4,
            "cubeResolution": 2768
        },
        "hotSpots": [
            {
                "pitch": -2.0697236858823542, 
                "yaw": -0.4934150431415651, 
                "type": "scene",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "Enter",
                "sceneId": "panini_center_night",
                "cssClass": "custom-nav-door"
            },
            {
                "pitch": -1.670527072918156, 
                "yaw": -89.70332733500649, 
                "type": "scene",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "H3-H4Junction",
                "sceneId": "H3H4junc_night",
                "cssClass": "custom-nav-arrow point-up"
            }  ,
            {
                "pitch": -3.605294960942267, 
                "yaw": 90.25861370743176, 
                "type": "scene",
                "createTooltipFunc": permanentText,
                "createTooltipArgs": "Maa Saraswati Hostel",
                "sceneId": "ms_gate_night",
                "cssClass": "custom-nav-arrow point-up"
            }
        ]
    }
};
// This function creates a permanent text label for our hotspots
function permanentText(hotSpotDiv, args) {
    // Create a new span element to hold your text
    var textLabel = document.createElement('span');
    textLabel.innerHTML = args;
    
    // Give it a custom CSS class so we can style it easily
    textLabel.classList.add('custom-permanent-label');
    
    // Attach it permanently to the hotspot button
    hotSpotDiv.appendChild(textLabel);
}