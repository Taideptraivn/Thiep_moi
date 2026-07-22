const targetDate =
new Date('July 30, 2026 09:00:00').getTime();

setInterval(()=>{

    const now = new Date().getTime();
    const diff = targetDate - now;

    document.getElementById('days').innerText =
        Math.floor(diff/(1000*60*60*24));

    document.getElementById('hours').innerText =
        Math.floor(
            (diff%(1000*60*60*24))
            /(1000*60*60)
        );

    document.getElementById('mins').innerText =
        Math.floor(
            (diff%(1000*60*60))
            /(1000*60)
        );

},1000);