function updateClock() {
    const today = new Date();
    today.setHours(today.getHours()+7);

    return today;
}
setInterval(updateClock, 1000);

function updateDate() {
    const tomorrow = new Date(updateClock());
    tomorrow.setDate(tomorrow.getDate());
    
    return tomorrow;
}
setInterval(updateDate, 1000);

module.exports= {updateClock, updateDate}

