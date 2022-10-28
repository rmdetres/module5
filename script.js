// save reference to important DOM elements
var timeDisplayEl = $('#time-display');
var alertButtonNineAm =  document.getElementById("9amBtn");
var nineAmTxt = document.getElementById("9amTxt");
var nineAm;


// handle displaying the time
function displayTime() {
  var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
  timeDisplayEl.text(rightNow);
}
setInterval(displayTime, 1000);



// handle saving 
 
function saveCalendar(){
  console.log('help me');
   nineAm = nineAmTxt.value; 
  localStorage.setItem("nineAm", nineAm);

}

// The init() function fires when the page is loaded 

function renderLastCalendar(){
 var renderLast9am = localStorage.getItem("nineAm"); 
 console.log(renderLast9am);
 document.getElementById("9amTxt").innerHTML = renderLast9am;

  
}


alertButtonNineAm.addEventListener("click", function(event){
  event.preventDefault();
  saveCalendar();
  renderLastCalendar();
});

renderLastCalendar();



