// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var timeDisplayEl = $('#current-day');
var colors = $('.time-block');

function displayTime(){
    var rightNow = dayjs().format('dddd MMM DD, YYYY [at] hh:mm:ss a');
    timeDisplayEl.text(rightNow);
}

$(function () {

function setColors() {
    var hour = dayjs().format('H');
    console.log(colors[0]);
        for (let index = 0; index < colors.length; index++) {
            if ($(colors[index]).attr('id').replace('hour-', '') > hour) {
            $(colors[index]).addClass('future');
            } if ($(colors[index]).attr('id').replace('hour-','') === hour) {
            $(colors[index]).addClass('present');
            } if ($(colors[index]).attr('id').replace('hour-', '') < hour) {
                $(colors[index]).addClass('past');
            }
        }
    }
    setColors();

});    


 $(".saveBtn").on("click", function () {
    var textArea = $(this).siblings(".description").val(); 
    var timeBlock = $(this).parent().attr("id");

    localStorage.setItem(timeBlock, textArea);
    });
    
    $("#hour-09 .description").val(localStorage.getItem("hour-09"));
    $("#hour-10 .description").val(localStorage.getItem("hour-10"));
    $("#hour-11 .description").val(localStorage.getItem("hour-11"));
    $("#hour-12 .description").val(localStorage.getItem("hour-12"));
    $("#hour-13 .description").val(localStorage.getItem("hour-13"));
    $("#hour-14 .description").val(localStorage.getItem("hour-14"));
    $("#hour-15 .description").val(localStorage.getItem("hour-15"));
    $("#hour-16 .description").val(localStorage.getItem("hour-16"));
    $("#hour-17 .description").val(localStorage.getItem("hour-17"));

                
    displayTime();
    setInterval(displayTime, 1000);            
                
                
                
            
        
// PSEUDOCODE
// GIVEN I am using a daily planner to create a schedule

// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
// We want to use a dayjs to display the current date
// make sure the datjs link exisits in the html file
// set the format:
// creat a variable. get dayjs data
// go to the docs


// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours
// Complete the rest of the timeblocks from the three that were given to us in the html file
// remove past present and future classes from html using java
// find a way to add or remove the appropriate class
// NOTE: colors need to shift at the start of a new hour
// function declares the color comparing to time 
// if your less than be gray if your current i want to be red and and if more than be green 
// maybe use a while loop



// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
// compare the time block (the hour that it is) agasint the current time from dayjs().then apply the coreect class based on the comparison between past present future.


// WHEN I click into a timeblock
// THEN I can enter an event
// grab text input (text areas)

// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
// EventListener on the save button
// creat variable (can be global), get the value
// set it to local storage(what will the data in local stroage look like)
// times: [{}, {}, {}, ]
// creat globale variable (empty)
// 

// WHEN I refresh the page
// THEN the saved events persist (confrims that data was entered into localstorage)
// getting from localstorage
// parse the data from localStorage to turn it back into an object (If the data was stored as a JSON)
// to have it display as the string it was entered as
