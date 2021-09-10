var offset_hour = 0;
var offset_minute = 0;

function validateForm() {
    var radioButtons = document.getElementsByName("timezone");
    var selectedValue = radioButtons[0].value;
    for (var i = 0; i < radioButtons.length; i++) {
        if (radioButtons[i].checked == true) {
            selectedValue = radioButtons[i].value;
        }
    }
    switch (selectedValue) {
        case "est":
            offset_hour = -9;
            offset_minute = -30;
            break;
        case "cst":
            offset_hour = -10;
            offset_minute = -30;
            break;
        case "mst":
            offset_hour = -11;
            offset_minute = -30;
            break;
        case "pst":
            offset_hour = -12;
            offset_minute = -30;
            break;
        case "ist":
            offset_hour = 0;
            offset_minute = 0;
            break;
        case "jst":
            offset_hour = 3;
            offset_minute = 30;
            break;
        default: offset_hour = 0; offset_minute = 0;
            break;
    }
    document.getElementById("unique").innerHTML = selectedValue;
}

function localMachineTime() {
    var day = new Date();
    var hour = day.getHours() + offset_hour;
    var minute = day.getMinutes() + offset_minute;
    var second = day.getSeconds();
    var session = "AM";
    setTimeout(() => {
        localMachineTime();
    }, 1000);

}
function showtime() {
    if (minute > 60) {
        hour += 1;
        minute -= 60;
    }
    if (minute < 0) {
        hour -= 1;
        minute += 60;
    }
    if (hour > 12) {
        hour -= 12;
        session = "PM";
        if (hour > 12) {
            hour -= 12;
            session = "AM";
        }
    }
    if (hour == 0) {
        hour = 12;
        session = "AM"
    }
    hour = hour < 10 ? "0" + hour : hour;
    minute = minute < 10 ? "0" + minute : minute;
    second = second < 10 ? "0" + second : second;
    var time = hour + ":" + minute + ":" + second + " " + session;
    document.getElementById("printclock").innerHTML = time;
}
localMachineTime();

