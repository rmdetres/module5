// save reference to important DOM elements
var timeDisplayEl = $('#time-display');
var firstNameEl = $('input[name="first-name"]');
var alertButton9am = document.getElementById("#9amBtn");
var nineAmTxt = document.getElementById("#9amTxt");


// handle displaying the time


function displayTime() {
  var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
  timeDisplayEl.text(rightNow);
}
setInterval(displayTime, 1000);



// handle saving from alert buttons
  var nineAM = localStorage.getItem("nineAm");
  nineAmTxt.textContent = nineAM;

  alertButton9am.on("click",function(){

        nineAmTxt.textContent = nineAM;
        localStorage.setItem("nineAm", nineAM);


    });




