"use strict";

function generateCalendar() {
  var calendarElement = document.getElementById("calendar");
  var date = new Date();
  var year = date.getFullYear();
  var month = date.getMonth();

  var monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  var monthDays = new Date(year, month + 1, 0).getDate();
  var firstDayOfWeek = new Date(year, month, 1).getDay();

  var html = '<div class="month">' + monthNames[month] + ' ' + year + '</div>';
  html += '<div class="weekdays">';
  html += '<div>Sun</div><div>Mon</div><div>Tue</div><div>Wed</div><div>Thu</div><div>Fri</div><div>Sat</div>';
  html += '</div><div class="days">';

  for (var i = 1; i <= monthDays + firstDayOfWeek; i++) {
    if (i > firstDayOfWeek) {
      html += '<div>' + (i - firstDayOfWeek) + '</div>';
    } else {
      html += '<div></div>';
    }
  }

  html += '</div>';
  calendarElement.innerHTML = html;
}

// Call the function to generate the calendar when the page loads
window.onload = generateCalendar;
