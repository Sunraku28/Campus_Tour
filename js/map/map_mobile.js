// map_mobile.js

if (window.innerWidth <= 768) {
    // for debugging
    // console.log("Mobile Map Script is ACTIVE");

    const map = L.map('minimap', {
        zoomControl: false,       
        attributionControl: false,
        zoomSnap: 0.5,
        zoomDelta: 0.25,
        wheelPxPerZoomLevel: 200,
        minZoom: 13.1,
        maxZoom: 15,
        dragging: false,           
        touchZoom: false,           
        scrollWheelZoom: false,    
        doubleClickZoom: false
        // maxBoundsViscosity: 1.0
    });

    const imageUrl = './photos/minimap.png'; 
    const imageBounds = [[23.1850, 79.0150], [23.1650, 79.0500]]; 

    L.imageOverlay(imageUrl, imageBounds).addTo(map);
    map.setMaxBounds(imageBounds); 
    map.fitBounds(imageBounds);

    const minimapWrapper = document.getElementById('minimap-wrapper');
    const mobileMapBtn = document.getElementById('mobile-map-btn');
    const innerCloseBtn = document.getElementById('toggle-map-btn');

    function transitionMobileMap(isExpanding) {
        if (isExpanding) {
            minimapWrapper.style.opacity = '0';

            minimapWrapper.classList.add('map-expanded');
            if (innerCloseBtn) innerCloseBtn.innerHTML = '❌';
            map.dragging.enable();
            map.touchZoom.enable();
            map.scrollWheelZoom.enable();
            map.doubleClickZoom.enable();

            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    map.invalidateSize({ animate: false });
                    map.fitBounds(imageBounds, { padding: [20, 20], animate: false });
                    minimapWrapper.style.opacity = '1';
                });
            });

        } else {
            minimapWrapper.style.opacity = '0';

            setTimeout(() => {
                minimapWrapper.classList.remove('map-expanded');
                if (innerCloseBtn) innerCloseBtn.innerHTML = '⛶';
                map.dragging.disable();
                map.touchZoom.disable();
                map.scrollWheelZoom.disable();
                map.doubleClickZoom.disable();
                map.invalidateSize({ animate: false });
                minimapWrapper.style.opacity = '1';
            }, 500);
        }
    }

    function toggleMobileMap() {
        const isExpanding = !minimapWrapper.classList.contains('map-expanded');
        transitionMobileMap(isExpanding);
    }

    if (mobileMapBtn) mobileMapBtn.addEventListener('click', toggleMobileMap);
    if (innerCloseBtn) innerCloseBtn.addEventListener('click', toggleMobileMap);


    let fastTravelIcon = L.divIcon({
        className: 'fast-travel-pin',
        html: '<div style="font-size: 28px; text-shadow: 0 2px 5px rgba(0,0,0,0.8); cursor: pointer; transform: translate(-8px, -24px);">📍</div>', 
        iconSize: [24, 24],
        iconAnchor: [12, 24] 
    }); 

    let invisibleIcon = L.divIcon({
        className: 'invisible-pin',
        html: '',
        iconSize: [0, 0],
        iconAnchor: [0, 0]
    });

    fastTravelLocations.forEach(loc => {
        let marker = L.marker(loc.coords, {icon: fastTravelIcon}).addTo(map);
        marker.bindTooltip(loc.name, { 
            permanent: true, 
            direction: 'top', 
            offset: [0, -30], 
            className: 'custom-pin-label-mobile'
        });

        marker.on('click', function() {
            let isNightMode = document.getElementById('toggle-time').classList.contains('day-mode');
            let targetScene = isNightMode ? loc.baseId + "_night" : loc.baseId + "_day";
            
            if (window.tourViewer) {
                window.tourViewer.loadScene(targetScene);
            }
            
            if (minimapWrapper.classList.contains('map-expanded')) {
                transitionMobileMap(false);
            }
        });
    });

    window.syncMapWithScene = function(sceneId) {
        console.log("Mobile scene synced", sceneId);
    };
}