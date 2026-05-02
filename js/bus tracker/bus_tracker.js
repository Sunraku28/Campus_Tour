// 1. Define Schedules
const busSchedules = {
    weekday: ["15:00" , "15:40" , "17:15" ,"18:00" , "19:00" , "20:20" , "20:50"], 
    weekend: ["15:00" , "15:30", "17:30", "18:00" , "19:00" , "20:50"]                    
};

// 2. The Math Function (Now it just RETURNS the text and color, it doesn't touch the screen)
function getNextBusInfo() {
    const now = new Date();
    const currentMins = (now.getHours() * 60) + now.getMinutes();
    const currentDay = now.getDay(); 

    let activeSchedule = (currentDay === 0 || currentDay === 6) ? busSchedules.weekend : busSchedules.weekday; 
    
    let nextBusString = ""; 
    for (let time of activeSchedule) {
        let parts = time.split(':');
        let totalScheduleMinutes = (parseInt(parts[0]) * 60) + parseInt(parts[1]);
        
        if (totalScheduleMinutes > currentMins) {
            nextBusString = time; 
            break; 
        }
    }

    if (nextBusString === "") {
        return { text: "No buses left today", color: "#ff4444" };
    } else {
        let parts = nextBusString.split(':');
        let hours = parseInt(parts[0]);
        let minutes = parts[1];
        let ampm = hours >= 12 ? 'PM' : 'AM';
        
        hours = hours % 12;
        hours = hours ? hours : 12; 
        
        return { text: `${hours}:${minutes} ${ampm}`, color: "#4CAF50" };
    }
}

// 3. The Hotspot Creator (Injects the exact time instantly)
function busHotspotCreator(hotSpotDiv, args) {
    // RUN THE MATH FIRST!
    let busData = getNextBusInfo();
    
    // Inject the HTML with the calculated text already inside it
    hotSpotDiv.innerHTML = `
        <div style="font-size: 24px;">🚌</div>
        <div>
            <div style="font-size: 11px; text-transform: uppercase; color: #aaa; letter-spacing: 1px;">Next Bus to City</div>
            <div class="bus-countdown-display" style="font-size: 16px; font-weight: bold; color: ${busData.color};">
                ${busData.text}
            </div>
        </div>
    `;
}

// 4. Update the tracker every 60 seconds (in case they leave the tab open for a long time)
setInterval(function() {
    let busData = getNextBusInfo();
    document.querySelectorAll('.bus-countdown-display').forEach(display => {
        display.innerText = busData.text;
        display.style.color = busData.color;
    });
}, 60000);