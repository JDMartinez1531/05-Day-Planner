// moment
nowMoment = moment().format("dddd, MMMM Do YYYY, h:mm a");
var currentDay = document.getElementById("currentDay");
currentDay.innerHTML = nowMoment;

// global variables
var saveBtn = document.querySelector(".saveBtn");
var notes = [];

var t9 = new Date();
t9.setHours(9);
var t10 = new Date();
t10.setHours(10);
var t11 = new Date();
t11.setHours(11);
var t12 = new Date();
t12.setHours(12);
var t13 = new Date();
t13.setHours(13);
var t14 = new Date();
t14.setHours(14);
var t15 = new Date();
t15.setHours(15);
var t16 = new Date();
t16.setHours(16);
var t17 = new Date();
t17.setHours(17);

$(document).ready(function () {
  getNotes();
  var currentDate = new Date();
  // change color of timeblocks based on current time
  // if (t9.getHours() < currentDate.getHours()) {
  //   $("#t9").addClass("past");
  // }

  if (t9.getHours() === currentDate.getHours()) {
    $("#t9").addClass("present");
  } else if (t9.getHours() < currentDate.getHours()) {
    $("#t9").addClass("past");
  } else {
    $("#t9").addClass("future");
  }
  if (t10.getHours() === currentDate.getHours()) {
    $("#t10").addClass("present");
  } else if (t10.getHours() < currentDate.getHours()) {
    $("#t10").addClass("past");
  } else {
    $("#t10").addClass("future");
  }
  if (t11.getHours() === currentDate.getHours()) {
    $("#t11").addClass("present");
  } else if (t11.getHours() < currentDate.getHours()) {
    $("#t11").addClass("past");
  } else {
    $("#t11").addClass("future");
  }
  if (t12.getHours() === currentDate.getHours()) {
    $("#t12").addClass("present");
  } else if (t12.getHours() < currentDate.getHours()) {
    $("#t12").addClass("past");
  } else {
    $("#t12").addClass("future");
  }
  if (t13.getHours() === currentDate.getHours()) {
    $("#t13").addClass("present");
  } else if (t13.getHours() < currentDate.getHours()) {
    $("#t13").addClass("past");
  } else {
    $("#t13").addClass("future");
  }
  if (t14.getHours() === currentDate.getHours()) {
    $("#t14").addClass("present");
  } else if (t14.getHours() < currentDate.getHours()) {
    $("#t14").addClass("past");
  } else {
    $("#t14").addClass("future");
  }
  if (t15.getHours() === currentDate.getHours()) {
    $("#t15").addClass("present");
  } else if (t15.getHours() < currentDate.getHours()) {
    $("#t15").addClass("past");
  } else {
    $("#t15").addClass("future");
  }
  if (t16.getHours() === currentDate.getHours()) {
    $("#t16").addClass("present");
  } else if (t16.getHours() < currentDate.getHours()) {
    $("#t16").addClass("past");
  } else {
    $("#t16").addClass("future");
  }
  if (t17.getHours() === currentDate.getHours()) {
    $("#t17").addClass("present");
  } else if (t17.getHours() < currentDate.getHours()) {
    $("#t17").addClass("past");
  } else {
    $("#t17").addClass("future");
  }
  function getNotes() {
    var storedNotes = JSON.parse(localStorage.getItem("notes"));
    if (storedNotes !== null) {
      notes = storedNotes;
      renderNotes();
    }
  }
  function renderNotes() {
    notes.forEach(function (hour) {
      $(hour.hour).val(hour.text);
    });
  }
  // store new notes on save
  // saveBtn.addEventListener("click", function (event) {
  // clear and push notes to object
  $(".container").on("click", ".saveBtn", function (event) {
    var textIds = [
      "#hour9",
      "#hour10",
      "#hour11",
      "#hour12",
      "#hour1",
      "#hour2",
      "#hour3",
      "#hour4",
      "#hour5",
    ];
    notes = [];
    textIds.forEach(function (timeblock) {
      var userText = $(timeblock).val();
      var hour = timeblock;
      notes.push({ hour: hour, text: userText });
    });
    // save in local storage
    localStorage.setItem("notes", JSON.stringify(notes));
  });
});

// for (i = 0; i < businessHours.length; i++) {
// if (i.getHours() < currentDate.getHours()) {
//   (`$("# ${i}")`).addClass("past");
// }
// businessHours []
// for (i = 0; i< timblocks.length; i++)
// if timeblocks[i].isBefore(moment().hour()) {

// if timeblock is before current time
// add .past to block
// if (t9.getHours() < currentDate.getHours()) {
//   $("#t9").addClass("past")};

// if timeblock is after current time
// add .future to block

// if timeblock is the same hour as current time
// add .present to block

// function to retrieve and display stored notes
