/* nav.js */
document.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('.floating-nav');
    const navToggle = document.getElementById('nav-toggle');
    const dropdownLinks = document.querySelectorAll('.dropdown > a');
    const allSubMenus = document.querySelectorAll('.dropdown-menu, .dropdown-menu-last');
    const sceneTriggers = document.querySelectorAll('[data-scene]');

    document.addEventListener('click', (e) => {
        if (!nav.contains(e.target)) {
            navToggle.checked = false; 
            allSubMenus.forEach(menu => menu.classList.remove('show')); 
        }
    });

    dropdownLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); 

            const subMenu = this.nextElementSibling;
            const isAlreadyOpen = subMenu.classList.contains('show');

            allSubMenus.forEach(menu => menu.classList.remove('show'));

            if (!isAlreadyOpen) {
                subMenu.classList.add('show');
            }
        });
    });
    
    sceneTriggers.forEach(trigger => {
        trigger.addEventListener('click', function(e) {
            e.preventDefault(); 

            let targetSceneId = this.getAttribute('data-scene');
            
            if (!targetSceneId) return; 

            if (window.isNight) {
                targetSceneId = targetSceneId.replace("_day", "_night");
            } else {
                targetSceneId = targetSceneId.replace("_night", "_day");
            }

            if (window.tourViewer) {
                window.tourViewer.loadScene(targetSceneId);
                

                // window.tourViewer.setPitch(0);
                // window.tourViewer.setYaw(0);
            } else {
                console.error("Pannellum viewer is not initialized yet.");
            }

            if (window.innerWidth <= 1020) {
                navToggle.checked = false; 
                allSubMenus.forEach(menu => menu.classList.remove('show')); 
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const sceneTriggers = document.querySelectorAll('[data-scene]');
    const navToggle = document.getElementById('nav-toggle');
    const allSubMenus = document.querySelectorAll('.dropdown-menu, .dropdown-menu-last');

    sceneTriggers.forEach(trigger => {
        trigger.addEventListener('click', function(e) {
            e.preventDefault(); 

            const targetSceneId = this.getAttribute('data-scene');

            if (window.tourViewer) {
                window.tourViewer.loadScene(targetSceneId);
                
                // window.tourViewer.setPitch(0);
                // window.tourViewer.setYaw(0);
            } else {
                console.error("Pannellum viewer is not initialized yet.");
            }

            if (window.innerWidth <= 1020) {
                navToggle.checked = false; 
                allSubMenus.forEach(menu => menu.classList.remove('show')); 
            }
        });
    });
}); 