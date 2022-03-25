//moment.js
var currentDate = moment().format("dddd, MMMM Do YYYY");
$("#currentDay").html(currentDate)

$(document).ready(function() {
    $(".saveBtn").on ("click", function() {
        console.log ("click")
    })
})