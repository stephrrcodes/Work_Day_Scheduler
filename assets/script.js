//display current date
var currentDate = moment().format("dddd, MMMM Do YYYY");
$("#currentDay").html(currentDate)

$(document).ready(function() {
    // listen for save button clicks
    $(".saveBtn").on("click", function() {
        //get nearby values
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        //save to localStorage
        localStorage.setItem(time,text);
    })
})
function timeTracker() {
    //get current number of hours
    var currentTime = moment().hours();
    
    // loop over time blocks
    $(".time-block").each(function() {
        var blockTime = parseInt($(this).attr("id").split("-")[1]);

        // check if we've moved time
        if (blockTime < currentTime) {
            $(this).addClass("past");
        }
        else if (blockTime === currentTime) {
            $(this).removeClass("past");
            $(this).addClass("present");
        }
        else {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
        }
    });

}
timeTracker();

var interval = setInterval(timeTracker, 15000);

// load any saved data from localStorage
$("#H8 .description").val(localStorage.getItem("H8"));
$("#H9 .description").val(localStorage.getItem("H9"));
$("#H10 .description").val(localStorage.getItem("H10"));
$("#H11 .description").val(localStorage.getItem("H11"));
$("#H12 .description").val(localStorage.getItem("H12"));
$("#H13 .description").val(localStorage.getItem("H13"));
$("#H14 .description").val(localStorage.getItem("H14"));
$("#H15 .description").val(localStorage.getItem("H15"));
$("#H16 .description").val(localStorage.getItem("H16"));
$("#H17 .description").val(localStorage.getItem("H17"));
