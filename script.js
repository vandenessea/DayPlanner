let timeDisplayEl = $("#time-display");

//var now = moment().hour()
function displayTime() {
    var rightNow = moment().format("MMM DD, YYYY [:] hh:mm:ss a");
    timeDisplayEl.text(rightNow);
}
setInterval(displayTime, 1000);


var now = parseInt(moment().format("H"))



$('.hourly').each(function() {
//This means the current item we are looping though(like the i in a for loop)
    var hour = parseInt($(this).attr('id'));
    console.log(now, hour)
    if (hour < now) {
//We are traversing the DOM(document object model-structure of webpage) to shade the entire row grey
        $(this).parent().css({"backgroundColor": "gray"});
    } else if (hour == now) {
        $(this).parent().css({"backgroundColor": "red"});
    } else if (hour > now) {
        $(this).parent().css({"backgroundColor": "green"});
    }

})



function renderMessage() {
    renderMessage;
}
document.getElementById("9-ta").value 
// console.log(document.getElementById("9-ta").value, "value of element" )
// console.log(document.getElementById("9-ta"), "element" )
document.getElementById("9-btn").addEventListener("click", function(){
    console.log(document.getElementById("9-ta").value, "value of element" )
    console.log(document.getElementById("9-ta"), "element" )
    localStorage.setItem(9, document.getElementById("9-ta").value)
})

document.getElementById("10-ta").value 
// console.log(document.getElementById("9-ta").value, "value of element" )
// console.log(document.getElementById("9-ta"), "element" )
document.getElementById("10-btn").addEventListener("click", function(){
    localStorage.setItem(10, document.getElementById("10-ta").value)
})

document.getElementById("11-ta").value 

document.getElementById("11-btn").addEventListener("click", function(){
    localStorage.setItem(11, document.getElementById("11-ta").value)
})

document.getElementById("12-ta").value 

document.getElementById("12-btn").addEventListener("click", function(){
    localStorage.setItem(12, document.getElementById("12-ta").value)
})

document.getElementById("13-ta").value 

document.getElementById("13-btn").addEventListener("click", function(){
    localStorage.setItem(13, document.getElementById("13-ta").value)
})

document.getElementById("14-ta").value 

document.getElementById("14-btn").addEventListener("click", function(){
    localStorage.setItem(14, document.getElementById("14-ta").value)
})

document.getElementById("15-ta").value 

document.getElementById("15-btn").addEventListener("click", function(){
    localStorage.setItem(15, document.getElementById("15-ta").value)
})

document.getElementById("16-ta").value 

document.getElementById("16-btn").addEventListener("click", function(){
    localStorage.setItem(16, document.getElementById("16-ta").value)
})

document.getElementById("17-ta").value 

document.getElementById("17-btn").addEventListener("click", function(){
    localStorage.setItem(17, document.getElementById("17-ta").value)
})















