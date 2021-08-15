const today = new Date();
today.setHours(today.getHours()+7);

const tomorrow = new Date(today);
tomorrow.setDate(tomorrow.getDate()+1);

module.exports= {today, tomorrow}

