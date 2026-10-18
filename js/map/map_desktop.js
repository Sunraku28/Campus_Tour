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
    const aiMapTransitionBlur = document.getElementById('ai-map-transition-blur');
    let currentPin = null;
    let isAiMapNavigating = false;

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

                // Leaflet updating its size calculation
                map.invalidateSize({ pan: false, animate: false });
                
                // Added a tiny 50ms delay here so Leaflet can find the new size for the map acc to the new view 
                setTimeout(() => {
                    if (currentPin) {
                        map.setView(currentPin.getLatLng(), 18, { animate: false });
                    }
                }, 50);

                minimapWrapper.style.opacity = '1';
            }, 500);
        }
    }

    function setAiMapTransitionBlur(isActive) {
        if (aiMapTransitionBlur) aiMapTransitionBlur.classList.toggle('is-active', isActive);
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

        // Loading the panorama during an AI flight emits scenechange. Keep its
        // marker update, but do not cancel the in-progress fly-to animation.
        if (isAiMapNavigating) return;

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


    // Fix for Leaflet off-center bug on window resize 
    window.addEventListener('resize', function() {
        if (map) {
            map.invalidateSize();
            if (currentPin && minimapWrapper && !minimapWrapper.classList.contains('map-expanded')) {
                map.setView(currentPin.getLatLng(), 18, { animate: false });
            }
        }
    });

    // ---- AI-triggered animated navigation ----
    // Called by the AI assistant to show a fly-to animation before teleporting
    window.aiNavigateToScene = function(sceneId) {
        return new Promise((resolve) => {
            const coords = campusCoordinates[sceneId];
            if (!coords) {
                // No coordinates for this scene, just load directly
                if (window.tourViewer) {
                    window.tourViewer.loadScene(sceneId);
                    window.tourViewer.setPitch(0);
                    window.tourViewer.setYaw(0, false);
                }
                resolve();
                return;
            }

            const targetLatLng = [coords[0], coords[1]];

            // Step 1: Expand the map
            setAiMapTransitionBlur(true);
            minimapWrapper.style.opacity = '0';
            minimapWrapper.classList.add('map-expanded');
            const toggleBtn = document.getElementById('toggle-map-btn');
            if (toggleBtn) toggleBtn.innerHTML = '❌';
            map.dragging.enable();
            map.scrollWheelZoom.enable();
            map.doubleClickZoom.enable();

            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    map.invalidateSize({ pan: false, animate: false });
                    map.fitBounds(imageBounds, { animate: false });
                    minimapWrapper.style.opacity = '1';

                    // Step 2: After map is visible, fly to target (with a small delay for visual effect)
                    setTimeout(() => {
                        // Start rendering the target scene behind the full-screen map while
                        // Leaflet performs its flight. Suppress scene sync from cancelling it.
                        isAiMapNavigating = true;
                        if (window.tourViewer) {
                            window.tourViewer.loadScene(sceneId);
                            window.tourViewer.setPitch(0);
                            window.tourViewer.setYaw(0, false);
                        }

                        // Collapse as soon as the map animation reaches its destination.
                        map.once('moveend', () => {
                            isAiMapNavigating = false;
                            transitionMapState(false);

                            // Keep the panorama blurred until the map has fully collapsed.
                            setTimeout(() => {
                                setAiMapTransitionBlur(false);
                                resolve();
                            }, 600);
                        });

                        map.flyTo(targetLatLng, 18, {
                            duration: 2,    // 2 second fly animation
                            easeLinearity: 0.25
                        });
                    }, 500); // 0.5s delay before starting fly animation
                });
            });
        });
    };

}
