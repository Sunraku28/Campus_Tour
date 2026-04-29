// --- map_desktop.js ---

if (window.innerWidth > 768) {
    const map = L.map('minimap', {
        zoomControl: false,       
        attributionControl: false,
        zoomSnap: 0.5,
        zoomDelta: 0.25,
        wheelPxPerZoomLevel: 200,
        maxZoom: 18,
        minZoom: 15,
        dragging: false,
        scrollWheelZoom: false,
        doubleClickZoom: false
    });

    const imageUrl = './photos/minimap.png'; 
    const imageBounds = [[23.1850, 79.0150], [23.1650, 79.0500]]; 

    L.imageOverlay(imageUrl, imageBounds).addTo(map);
    map.setMaxBounds(imageBounds); 
    map.fitBounds(imageBounds);

    const minimapWrapper = document.getElementById('minimap-wrapper');
    const innerMap = document.getElementById('minimap'); 
    let currentPin = null;

    function transitionMapState(isExpanding) {
        const toggleBtn = document.getElementById('toggle-map-btn');

        if (isExpanding) {
            minimapWrapper.style.opacity = '0';
            minimapWrapper.classList.add('map-expanded');
            if (toggleBtn) toggleBtn.innerHTML = '❌';
            map.dragging.enable();
            map.scrollWheelZoom.enable();
            map.doubleClickZoom.enable();

            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    map.invalidateSize({ pan: false, animate: false });
                    map.fitBounds(imageBounds, { animate: false });
                    minimapWrapper.style.opacity = '1';
                });
            });

        } else {
            minimapWrapper.style.opacity = '0';

            setTimeout(() => {
                minimapWrapper.classList.remove('map-expanded');
                if (toggleBtn) toggleBtn.innerHTML = '⛶';
                map.dragging.disable();
                map.scrollWheelZoom.disable();
                map.doubleClickZoom.disable();
                map.invalidateSize({ pan: false, animate: false });
                if (currentPin) {
                    map.setView(currentPin.getLatLng(), 18, { animate: false });
                }
                minimapWrapper.style.opacity = '1';
            }, 500);
        }
    }


    document.getElementById('toggle-map-btn').addEventListener('click', function() {
        const isExpanding = !minimapWrapper.classList.contains('map-expanded');
        transitionMapState(isExpanding);
    });

    let fastTravelIcon = L.divIcon({
        className: 'fast-travel-pin',
        html: '<div style="font-size: 28px; text-shadow: 0 2px 5px rgba(0,0,0,0.8); cursor: pointer; transform: translate(-8px, -24px);">📍</div>', 
        iconSize: [18, 18],
        iconAnchor: [12, 22] 
    });

    fastTravelLocations.forEach(loc => {
        let marker = L.marker(loc.coords, {icon: fastTravelIcon}).addTo(map);
        marker.bindTooltip(loc.name, { permanent: true, direction: 'top', offset: [0, -30], className: 'custom-pin-label'});

        marker.on('click', function() {
            let isNightMode = document.getElementById('toggle-time').classList.contains('day-mode');
            let targetScene = isNightMode ? loc.baseId + "_night" : loc.baseId + "_day";
            
            if (window.tourViewer) {
                window.tourViewer.loadScene(targetScene);
            }
            
            if (minimapWrapper.classList.contains('map-expanded')) {
                transitionMapState(false);
            }
        });
    });

    window.syncMapWithScene = function(sceneId) {
        let coords = campusCoordinates[sceneId];
        if (!coords) return; 

        let lat = coords[0];
        let lng = coords[1];

        if (currentPin) {
            map.removeLayer(currentPin);
        }

        let userIcon = L.divIcon({
            className: 'user-location-pin',
            html: '<div class="user-dot"></div>', 
            iconSize: [24, 24],
            iconAnchor: [12, 12]
        });

        currentPin = L.marker([lat, lng], {icon: userIcon}).addTo(map);

        const isExpanded = minimapWrapper.classList.contains('map-expanded');
        if (isExpanded) {
            map.panTo([lat, lng], { animate: false }); 
        } else {
            map.setView([lat, lng], 18, { animate: false }); 
        }
    };

    document.addEventListener('click', function(event) {
        const toggleBtn = document.getElementById('toggle-map-btn');

        if (minimapWrapper && minimapWrapper.classList.contains('map-expanded')) {
            if (!innerMap.contains(event.target) && !toggleBtn.contains(event.target)) {
                transitionMapState(false);
            }
        }
    });

    // map.on('click', function(e) {
    //     const lat = e.latlng.lat.toFixed(5);
    //     const lng = e.latlng.lng.toFixed(5);
    //     console.log(`📍 New Pin Coordinates: [${lat}, ${lng}]`);
        
    //     alert(`[${lat}, ${lng}]`);
    // });

}