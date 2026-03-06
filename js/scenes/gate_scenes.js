export const gateScenes = {
    "main_gate_day": {
        // "title": "Main Gate Day",
        "type": "multires",
        "multiRes" :{
            "basePath": "./tiles/main_gate/main_gate_day_tiles", 
            "path": "/%l/%s%y_%x",
            "fallbackPath": "/fallback/%s",
            "extension": "jpg",
            "tileResolution": 512,
            "maxLevel": 4,  
            "cubeResolution": 2768 
        },
        "hotSpots": [
            {
                "pitch": -1.0, 
                "yaw": 2.0, 
                "type": "scene",
                "text": "Go to tree",
                
                "sceneId": "tree_day",
                "cssClass": "custom-arrow point-up"
            }
        ]
    },
    "main_gate_night": {
        // "title": "Main Gate Night",
        "type": "multires",
        "multiRes": {
            "basePath": "./tiles/main_gate/main_gate_night_tiles", 
            "path": "/%l/%s%y_%x",
            "fallbackPath": "/fallback/%s",
            "extension": "jpg",
            "tileResolution": 512,
            "maxLevel": 4,
            "cubeResolution": 2768
        },
        "hotSpots": [
            {
                "pitch": -1.0, 
                "yaw": 2.0, 
                "type": "scene",
                "text": "Go to tree",
                "sceneId": "tree_night",
                "cssClass": "custom-arrow point-up"
            }
        ]
    }
};