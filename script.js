//this function "updateTime" will update the time in every 1 second inerval
function updateTime() {
  var dateTime = new Date(); //creating a object dateTime from Date class
  var hours = dateTime.getHours(); //geting hours from dateTime object
  var minutes = dateTime.getMinutes(); //geting minutes from dateTime object
  var seconds = dateTime.getSeconds(); //geting seconds from dateTime object
  var am_or_pm = document.getElementById("am-or-pm"); //geting the AM span by id am-or-pm with DOM in index.html

  //set the condition for am/pm
  if (hours >= 12) {
    am_or_pm.innerHTML = "PM";
  } else {
    am_or_pm.innerHTML = "AM";
  }

  //Date class provide 24 hours clock so for 12 hours clock we need condition
  if (hours > 12) {
    hours = hours - 12;
  }

  //geting the html tags by dom manupulation to apply the function "updateTime"
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;
}

setInterval(updateTime, 1000); // calling the function "updateTime" in "setInterval" method which update the time in every 1 second interval
