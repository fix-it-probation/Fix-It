function today() {
    const today = new Date();
    today.setHours(today.getHours()+7);

    return today;
}
setInterval(today, 1000);

function tomorrow() {
    const tomorrow = new Date(today());
    tomorrow.setDate(tomorrow.getDate());
    
    return tomorrow;
}
setInterval(tomorrow, 1000);

module.exports= {today, tomorrow}

