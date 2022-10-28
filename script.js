// save reference to important DOM elements
var timeDisplayEl = $('#time-display');

//alert button variables
var save9am =  document.getElementById("save9am");
var save10am = document.getElementById("save10am");
var save11am = document.getElementById("save11am");
var save12pm = document.getElementById("save12pm");
var save1pm =  document.getElementById("save1pm");
var save2pm =  document.getElementById("save2pm");
var save3pm =  document.getElementById("save3pm");
var save4pm =  document.getElementById("save4pm");
var save5pm =  document.getElementById("save5pm");


//text variables 
var nineAmTxt = document.getElementById("9amTxt");
var tenAmTxt = document.getElementById("10amTxt");
var elevenAmTxt = document.getElementById("11amTxt");
var twelvePmTxt = document.getElementById("12pmTxt");
var onePmTxt = document.getElementById("1pmTxt");
var twoPmTxt = document.getElementById("2pmTxt");
var threePmTxt = document.getElementById("3pmTxt");
var fourPmTxt = document.getElementById("4pmTxt");
var fivePmTxt = document.getElementById("5pmTxt");

var nineAm;
var tenAm;
var elevenAm;
var twelvePm;
var onePm;
var twoPm;
var threePm;
var fourPm;
var fivePm;


// handle displaying the time
function displayTime() {
  var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
  timeDisplayEl.text(rightNow);
}
setInterval(displayTime, 1000);

// We will piece each block into three parts and list them under each other, 1-save function, 2-render previous data function, click listen


// 9am handle saving 
 
  function save9amTxt(){
   nineAm = nineAmTxt.value; 
  localStorage.setItem("nineAm", nineAm);}

  function save10amTxt(){
    tenAm = tenAmTxt.value; 
   localStorage.setItem("tenAm", tenAm);}

   function save11amTxt(){
    elevenAm = elevenAmTxt.value; 
   localStorage.setItem("elevenAm", elevenAm);}

   function save12pmTxt(){
    twelvePm = twelvePmTxt.value; 
   localStorage.setItem("twelvePm", twelvePm);}

   function save1pmTxt(){
   onePm = onePmTxt.value; 
  localStorage.setItem("onePm", onePm);}

  function save2pmTxt(){
    twoPm = twoPmTxt.value; 
   localStorage.setItem("twoPm", twoPm);}

   function save3pmTxt(){
    threePm = threePmTxt.value; 
   localStorage.setItem("threePm", threePm);}

   function save4pmTxt(){
    fourPm = fourPmTxt.value; 
   localStorage.setItem("fourPm", fourPm);}

   function save5pmTxt(){
    fivePm = fivePmTxt.value; 
   localStorage.setItem("fivePm", fivePm);}





// The init() function fires when the page is loaded to render the previous data

function renderLastCalendar9am() {
  var renderLast9am = localStorage.getItem("nineAm");
  document.getElementById("9amTxt").value = renderLast9am;
}


function renderLastCalendar10am() {
  var renderLast10am = localStorage.getItem("tenAm");
  document.getElementById("10amTxt").value = renderLast10am;
}

function renderLastCalendar11am() {
  var renderLast11am = localStorage.getItem("elevenAm");
  document.getElementById("11amTxt").value = renderLast11am;
}


function renderLastCalendar12pm() {
  var renderLast12pm = localStorage.getItem("twelvePm");
  document.getElementById("12pmTxt").value = renderLast12pm;
}


function renderLastCalendar1pm() {
  var renderLast1pm = localStorage.getItem("onePm");
  document.getElementById("1pmTxt").value = renderLast1pm;
}

function renderLastCalendar2pm() {
  var renderLast2pm = localStorage.getItem("twoPm");
  document.getElementById("2pmTxt").value = renderLast2pm;
}

function renderLastCalendar3pm() {
  var renderLast3pm = localStorage.getItem("threePm");
  document.getElementById("3pmTxt").value = renderLast3pm;
}

function renderLastCalendar4pm() {
  var renderLast4pm = localStorage.getItem("fourPm");
  document.getElementById("4pmTxt").value = renderLast4pm;
}

function renderLastCalendar5pm() {
  var renderLast5pm = localStorage.getItem("fivePm");
  document.getElementById("5pmTxt").value = renderLast5pm;
}




//button event listeners 


save9am.addEventListener("click", function(event){
  event.preventDefault();
  save9amTxt();
  renderLastCalendar9am();
});

save10am.addEventListener("click", function(event){
  event.preventDefault();
  save10amTxt();
  renderLastCalendar10am();
});


save11am.addEventListener("click", function(event){
  event.preventDefault();
  save11amTxt();
  renderLastCalendar11am();
});


save12pm.addEventListener("click", function(event){
  event.preventDefault();
  save12pmTxt();
  renderLastCalendar12pm();
});


save1pm.addEventListener("click", function(event){
  event.preventDefault();
  save1pmTxt();
  renderLastCalendar1pm();
});


save2pm.addEventListener("click", function(event){
  event.preventDefault();
  save2pmTxt();
  renderLastCalendar2pm();
});

save3pm.addEventListener("click", function(event){
  event.preventDefault();
  save3pmTxt();
  renderLastCalendar3pm();
});


save4pm.addEventListener("click", function(event){
  event.preventDefault();
  save4pmTxt();
  renderLastCalendar4pm();
});

save5pm.addEventListener("click", function(event){
  event.preventDefault();
  save5pmTxt();
  renderLastCalendar5pm();
});











renderLastCalendar9am();
renderLastCalendar10am();
renderLastCalendar11am();
renderLastCalendar12pm();
renderLastCalendar1pm();
renderLastCalendar2pm();
renderLastCalendar3pm();
renderLastCalendar3pm();
renderLastCalendar4pm();
renderLastCalendar5pm();



