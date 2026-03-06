export const treeScenes = {
    "tree_day" :{
        // "title": 'tree_day',
        "type": 'multires',
        "multiRes" :{
            "basePath": "./tiles/tree/tree_day_tiles", 
            "path": "/%l/%s%y_%x",
            "fallbackPath": "/fallback/%s",
            "extension": "jpg",
            "tileResolution": 512,
            "maxLevel": 4,  
            "cubeResolution": 2768 
        },
        "hotSpots":[
            {
                "pitch": 5.0,
                "yaw": 20.0,
                "type":"scene",
                "text":"GO to cafeteria",
                "sceneId": "cafeteria_day",
                "cssClass": "custom-door",
            },
            {
                "pitch": -7,      
                "yaw": -92,
                "type":"scene",
                "text":"back to main gate",
                "sceneId": "main_gate_day",
                "cssClass": "custom-arrow point-up"
            }
        ]
    },
    "tree_night" :{ 
        // "title": 'tree_night',
        "type": 'multires',
        "multiRes" :{
            "basePath": "./tiles/tree/tree_night_tiles", 
            "path": "/%l/%s%y_%x",
            "fallbackPath": "/fallback/%s",
            "extension": "jpg",
            "tileResolution": 512,
            "maxLevel": 4,  
            "cubeResolution": 2768 
        },
        "hotSpots":[
            {
                "pitch": 5.0,
                "yaw": 20.0,
                "type":"scene",
                "text":"GO to cafeteria",
                "sceneId": "cafeteria_night",
                "cssClass": "custom-door"
            },
            {
                "pitch": -7,      
                "yaw": -92,
                "type":"scene",
                "text":"back to main gate",
                "sceneId": "main_gate_night",
                "cssClass": "custom-arrow point-up"
            }
        ]
    }
};