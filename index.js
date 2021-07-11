window.onload = function showTime(){
    var date = new Date();
    var hours = date.getHours();
    var mins = date.getMinutes();
    var seconds = date.getSeconds();
    var session = "AM";
    if(hours == 0){
        hours = 12;
    }
    if(hours > 12){
        hours = hours - 12;
        session = "PM";
    }
    

    var times = hours + ":" + mins + ":" + seconds + " " + session;
    
    document.getElementById("oclock").innerText = times;
    document.getElementById("oclock").innerContent = times;
    setTimeout(showTime,1000);
}
