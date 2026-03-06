export const cafeScenes = {
    "cafeteria_day" : {
        // "title" : "cafeteria_day",
        "type": "multires",
        "multiRes" :{
            "basePath": "./tiles/canteen/canteen_day_tiles", 
            "path": "/%l/%s%y_%x",
            "fallbackPath": "/fallback/%s",
            "extension": "jpg",
            "tileResolution": 512,
            "maxLevel": 4,  
            "cubeResolution": 2768 
        },
        "hotSpots": [
            {
                "pitch": -12.0,
                "yaw": 179.5 ,
                "type": "scene",
                "text": "GO to center ",
                "sceneId": "center_day",
                "cssClass": "custom-arrow point-up"
            },
            {   
                "pitch": -10.0,
                "yaw": 156.0,
                "type":"scene",
                "text":"back to tree",
                "sceneId": "tree_day",
                "cssClass": "custom-arrow point-left"
            }        
        ]
    },
    "cafeteria_night" : { 
        // "title" : "cafeteria_night",
        "type": "multires",
        "multiRes" :{
            "basePath": "./tiles/canteen/canteen_night_tiles", 
            "path": "/%l/%s%y_%x",
            "fallbackPath": "/fallback/%s",
            "extension": "jpg",
            "tileResolution": 512,
            "maxLevel": 4,  
            "cubeResolution": 2768 
        },
        "hotSpots": [
            {
                "pitch": -12.0,
                "yaw": 179.5 ,
                "type": "scene",
                "text": "GO to center ",
                "sceneId": "center_night",
                "cssClass": "custom-arrow point-up"
            },
            {   
                "pitch": -10.0,
                "yaw": 156.0,
                "type":"scene",
                "text":"back to tree",
                "sceneId": "tree_night",
                "cssClass": "custom-arrow point-left"
            }        
        ]
    }
};