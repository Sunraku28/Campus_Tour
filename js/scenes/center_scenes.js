export const centerScenes = {
    "center_day": {
        // "title": "Center Day",
        "type": "multires",
        "multiRes" :{
            "basePath": "./tiles/center/center_day_tiles", 
            "path": "/%l/%s%y_%x",
            "fallbackPath": "/fallback/%s",
            "extension": "jpg",
            "tileResolution": 512,
            "maxLevel": 4,  
            "cubeResolution": 2768
        },
        "hotSpots": [
            {
                "pitch": -4.0,
                "yaw": 175.0,
                "type":"scene",
                "text":"back to cafeteria",
                "sceneId": "cafeteria_day",
                "cssClass": "custom-door"
            }    
        ]
    },
    "center_night": {
        // "title": "Center night",
        "type": "multires",
        "multiRes" :{
            "basePath": "./tiles/center/center_night_tiles", 
            "path": "/%l/%s%y_%x",
            "fallbackPath": "/fallback/%s",
            "extension": "jpg",
            "tileResolution": 512,
            "maxLevel": 4,  
            "cubeResolution": 2768
        },
        "hotSpots": [
            {
                "pitch": -3.1, 
                "yaw": 95.9, 
                "type":"scene",
                "text":"back to cafeteria",
                "sceneId": "cafeteria_night",
                "cssClass": "custom-door"
            }    
        ]
    }
};