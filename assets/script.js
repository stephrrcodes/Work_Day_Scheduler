var currentDate = moment().format("dddd, MMMM Do YYYY");
$("#currentDay").html(currentDate)

$(document).ready(function() {
    $(".saveBtn").on("click", function() {
        console.log ("click")
        var text = $(this).siblings(".description").val;
        var time = $(this).parent().attr("id");
        localStorage.setItem(time,text)
    })
})
function timeTracker() {
    var currentTime = moment().hour();
    
    $(".time-block").each(function() {
        var blockTime = parseInt($(this).attr("id").split("hour")[1]);
        if (blockTime < currentTime) {
            $(this).removeClass("future");
            $(this).removeClass("present");
            $(this).addClass("past");
        }
        else if (blockTime === currentTime) {
            $(this).removeClass("past");
            $(this).removeClass("future");
            $(this).addClass("present");
        }
        else {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
        }
    })

}

$("#H8 .description").val(localStorage.getItem("hr8"));
$("#H9 .description").val(localStorage.getItem("hr9"));
$("#H10 .description").val(localStorage.getItem("hr10"));
$("#H11 .description").val(localStorage.getItem("hr11"));
$("#H12 .description").val(localStorage.getItem("hr12"));
$("#H13 .description").val(localStorage.getItem("hr13"));
$("#H14 .description").val(localStorage.getItem("hr14"));
$("#H15 .description").val(localStorage.getItem("hr15"));
$("#H16 .description").val(localStorage.getItem("hr16"));
$("#H17 .description").val(localStorage.getItem("hr17"));

timeTracker();
