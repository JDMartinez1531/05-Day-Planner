// moment
nowMoment = moment().format("dddd, MMMM Do YYYY, h:mm a");
var currentDay = document.getElementById("currentDay");
currentDay.innerHTML = nowMoment;

// change color of timeblocks based on current time

// global variables
var saveBtn = document.querySelector(".saveBtn");
var notes = [];

$(document).ready(function () {
  getNotes();
  // function to retrieve and display stored notes
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
